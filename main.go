package main

import (
	"encoding/json"
	"fmt"
	// "github.com/boombuler/barcode"
	// "github.com/boombuler/barcode/ean"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	goimage "image"
	"log"
	"math/rand"
	"net/http"
	"os"
	"strconv"

	// unicommon "github.com/unidoc/unidoc/common"
	"database/sql"
	"github.com/boombuler/barcode"
	"github.com/boombuler/barcode/ean"
	"github.com/scorredoira/email"
	unilicense "github.com/unidoc/unidoc/common/license"
	creator "github.com/unidoc/unidoc/pdf/creator"
	pdf "github.com/unidoc/unidoc/pdf/model"
	"math"
	"net/smtp"
	"net/mail"
)

type ticket_req struct {
	Name         string
	TicketClass  string
	EmailAddress string
}

var db *sql.DB

var priceMap = map[string]int{"0": 3, "1": 5, "2": 10}
var boardMap = map[string]string{"0": "C", "1": "B", "2": "A"}

func main() {
	// Setup Unidoc
	unidocLicenseKey := os.Getenv("UNIDOC_LICENSE")
	err := unilicense.SetLicenseKey(unidocLicenseKey)

	if err != nil {
		fmt.Printf("Error loading license: %v\n", err)
		os.Exit(1)
	}

	// Connect to db
	ConnectToDb()

	r := mux.NewRouter()
	r.HandleFunc("/ticket", TicketHandler)
	r.Handle("/", http.FileServer(http.Dir("./frontend/public")))
	r.Handle("/{jsFile:[a-z]+.js}", http.FileServer(http.Dir("./frontend/public")))
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe("localhost:8080", r))

	defer db.Close()
}

func TicketHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusPermanentRedirect)
	decoder := json.NewDecoder(r.Body)
	var ticket ticket_req
	err := decoder.Decode(&ticket)

	fmt.Printf("Name: %s   Email: %s   Type: %s \n", ticket.Name, ticket.EmailAddress, ticket.TicketClass)

	if err != nil {
		panic(err)
	}

	insertTicket(&ticket)
	ticketPath, err := CreatePdf(&ticket)
	if err != nil {
		panic(err)
	}


	sendTicket(ticketPath, &ticket)
}

func CreatePdf(ticket *ticket_req) (string, error) {
	codeStr := genEanNumber()
	outFile := fmt.Sprintf("./tickets/boarding_pass_%s.pdf", codeStr)

	width := 100.00
	bCodexPos := 460.0
	bCodeyPos := 150.0

	namexPos := 40.0
	nameyPos := 135.0

	classxPos := 360.0
	classyPos := 140.0

	emailxPos := 40.0
	emailyPos := 145.0

	groupxPos := 340.0
	groupyPos := 195.0

	bcodeImg, err := makeBarcode(codeStr, width, 5)
	if err != nil {
		fmt.Print("Error creating barcode")
	}

	// Read template PDF file
	f, err := os.Open("./assets/boarding_template.pdf")
	if err != nil {
		return "", err
	}
	defer f.Close()

	pdfReader, err := pdf.NewPdfReader(f)
	if err != nil {
		return "", err
	}

	// Make new PDF creator
	c := creator.New()

	page, err := pdfReader.GetPage(1)
	if err != nil {
		return "", err
	}

	err = c.AddPage(page)
	if err != nil {
		return "", err
	}

	// Add barcode
	img, err := creator.NewImageFromGoImage(bcodeImg)
	if err != nil {
		return "", err
	}

	img.ScaleToWidth(width)
	img.SetPos(bCodexPos, bCodeyPos)

	_ = c.Draw(img)

	// Text below barcode
	p := creator.NewParagraph(codeStr)
	p.SetWidth(width)
	p.SetTextAlignment(creator.TextAlignmentCenter)
	p.SetPos(bCodexPos, bCodeyPos+img.Height())
	_ = c.Draw(p)

	// Email
	p = creator.NewParagraph(ticket.EmailAddress)
	p.SetPos(emailxPos, emailyPos)
	_ = c.Draw(p)

	// Name
	p = creator.NewParagraph(ticket.Name)
	p.SetPos(namexPos, nameyPos)
	_ = c.Draw(p)

	// Ticket Price
	ticketPrice := priceMap[ticket.TicketClass]
	p = creator.NewParagraph(fmt.Sprintf("$%d.00 USD", ticketPrice))
	p.SetPos(classxPos, classyPos)
	_ = c.Draw(p)

	// Boarding group
	boardGroup := boardMap[ticket.TicketClass]
	p = creator.NewParagraph(boardGroup)
	p.SetFontSize(70)
	p.SetPos(groupxPos, groupyPos)
	_ = c.Draw(p)

	err = c.WriteToFile(outFile)
	if err != nil {
		return "", err
	}

	return outFile, nil
}

func insertTicket(ticket *ticket_req) {
	stmtIns, err := db.Prepare("INSERT INTO Tickets (email, name, ticket_type) VALUES( ?, ?, ?)")
	if err != nil {
		fmt.Println(err)
	}

	ticketClass ,err := strconv.Atoi(ticket.TicketClass)

	_, err = stmtIns.Exec(ticket.EmailAddress, ticket.Name, ticketClass)

	if err != nil {
		panic(err)
	}
}

func makeBarcode(codeStr string, width float64, oversampling int) (goimage.Image, error) {
	bcode, err := ean.Encode(codeStr)
	if err != nil {
		return nil, err
	}

	// Prepare the code image.
	pixelWidth := oversampling * int(math.Ceil(width))
	bcodeImg, err := barcode.Scale(bcode, pixelWidth, pixelWidth)
	if err != nil {
		return nil, err
	}

	return bcodeImg, err
}

func sendTicket(ticketPath string, ticket *ticket_req) {
	msgBody := `Thank you for choosing Backsuite Airlines!

Your boarding pass is attached. Please print your boarding pass and bring it to the gate for entry.

Guests without a valid boarding pass will not fly.

Please pay via Venmo (@BrettAtkinson) or with cash at the gate.

At Backsuite Air, we pride ourselves in the highest quality customer service.

Please contact keenan.zucker@students.olin.edu with any complaints, comments, or suggestions.

Thank you for flying Backsuite Airlines, and have a safe trip!

The Backsuite Crew`
	m := email.NewMessage("Your upcoming flight on Backsuite Airlines", msgBody)
	m.From = mail.Address{Name: "Backsuite Airlines Ticketing", Address: os.Getenv("GMAIL_ADDRESS")}
	m.To = []string{ticket.EmailAddress}

	// add attachments
	if err := m.Attach(ticketPath); err != nil {
		log.Fatal(err)
	}

	// send it
	auth := smtp.PlainAuth("", os.Getenv("GMAIL_ADDRESS"), os.Getenv("GMAIL_PASSWORD"), "smtp.gmail.com")
	if err := email.Send("smtp.gmail.com:587", auth, m); err != nil {
		log.Fatal(err)
	}
}

func genEanNumber() string {
	return strconv.Itoa(978020000000 + rand.Intn(9999999))
}

func ConnectToDb() {
	dsn := fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s",
		os.Getenv("DB_USERNAME"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_DATABASE"),
	)
	localDb, err := sql.Open("mysql", dsn)
	if err != nil {
		panic(err)
	}

	db = localDb
}

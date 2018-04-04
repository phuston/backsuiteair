package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

type ticket_req struct {
	Name         string
	TicketClass  int
	EmailAddress string
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/ticket", TicketHandler)
	r.Handle("/", http.FileServer(http.Dir("./frontend/public")))
	r.Handle("/{jsFile:[a-z]+.js}", http.FileServer(http.Dir("./frontend/public")))
	http.Handle("/", r)
	log.Fatal(http.ListenAndServe("localhost:8080", r))
}

func TicketHandler(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	decoder := json.NewDecoder(r.Body)
	var ticket ticket_req
	err := decoder.Decode(&ticket)

	if err != nil {
		panic(err)
	}

	fmt.Printf("Name: %s | Class: %d | Email: %s \n", ticket.Name, ticket.TicketClass, ticket.EmailAddress)
}

func CreatePdf() {
	fmt.Println("Creating that pdf")
}

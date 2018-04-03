package main

import (
	"fmt"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"encoding/json"
)

type ticket_req struct {
	Name string
	TicketClass int
	EmailAddress string
}

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/ticket", TicketHandler)
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

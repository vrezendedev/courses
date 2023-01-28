package main

import "fmt"

type contactInfo struct {
	email string
	zip   int
}

type person struct {
	firstName string
	lastName  string
	contactInfo
}

func (p person) print() {
	fmt.Printf("%+v", p)
}

func (p *person) updateName(newFirstName string) {
	(*p).firstName = newFirstName
}

func main() {
	// var bob person
	// bob.firstName = "Bob"
	// bob.lastName = "Ross"
	// bob.contact.email = "bobross@beatthedeviloutofit.com"
	// bob.contact.zip = 32114

	bob := person{
		firstName: "Bob",
		lastName:  "Ross",
		contactInfo: contactInfo{
			email: "bobross@beatthedeviloutofit.com",
			zip:   32114,
		},
	}

	bob.updateName("Bobby")
	bob.print()
}

/*
	Value types (use pointers to change these things in a function):
		int float string bool structs

	Reference types (don't worry about pointers with these):
		slices maps channels pointers functions
*/

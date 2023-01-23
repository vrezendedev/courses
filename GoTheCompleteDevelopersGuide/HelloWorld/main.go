/* A package is a collection of common source code files.
There are:
	executable packages: generates a file that we can run
	reusable packages: code used as helpers (resuable logic)
*/

//PACKAGE DECLARATION --> IMPORTS --> ALL THE REST :)

package main

/*
	The import statement is used to give the current package access to code that is on another package.
	The fmt library is used to print out a lot of different information specifically to the terminal.
*/

import "fmt"

//Func -> keyword for function
func main() {
	fmt.Println("Hello World!")
}

/*
	go build -> compiles a bunch of go source code files
	go run -> compiles and executes
	go fmt -> format all the code in each file in the current directory
	go install -> compiles and "installs" a package
	go get -> downloads the raw source code of someone else's package
	go test -> runs any tests associated with the current project
*/

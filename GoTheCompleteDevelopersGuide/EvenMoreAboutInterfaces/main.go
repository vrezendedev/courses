package main

import (
	"fmt"
	"io"
	"os"
)

func main() {
	filename := os.Args[1]
	//File implements Reader interface
	file, err := os.Open(filename)

	if err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}

	io.Copy(os.Stdout, file)
}

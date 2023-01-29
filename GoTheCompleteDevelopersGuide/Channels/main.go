package main

import (
	"fmt"
	"net/http"
	"time"
)

func main() {
	urls := []string{
		"http://google.com",
		"http://facebook.com",
		"http://stackoverflow.com",
		"http://go.dev",
		"http://amazon.com",
	}

	c := make(chan string)

	for _, url := range urls {
		go checkUrl(url, c)
	}

	for l := range c {
		go func(url string) {
			time.Sleep(3 * time.Second)
			checkUrl(url, c)
		}(l)
	}
}

func checkUrl(url string, c chan string) {
	_, err := http.Get(url)
	if err != nil {
		fmt.Println(url, " might  be down!")
		c <- url
		return
	}
	fmt.Println(url, " is up!")
	c <- url
}

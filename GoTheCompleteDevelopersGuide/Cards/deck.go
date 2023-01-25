package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
) 

type deck []string

func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}

func (d deck) toString() string {
	return strings.Join([]string(d), ",")
}

func (d deck) saveToFile(filename string) error {
	//0666 means anyone can read/write this file
	return ioutil.WriteFile(filename, []byte(d.toString()), 0666)
}

func newDeck() deck {
	cards := deck{}

	cardSuits := []string {"Spades", "Diamonds", "Hearts", "Clubs"}
	cardValues := []string {"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"}

	for _, suit := range cardSuits {
		for _, value := range cardValues {
			cards = append(cards, value + " of " + suit )
		}
	}

	return cards
}

func deal(d deck, handSize int) (deck, deck) {
	return d[:handSize], d[handSize:]
}

func newDeckFromFile(filename string) deck {
	bs, err := ioutil.ReadFile(filename)
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
	s := strings.Split(string(bs), ",");
	return deck(s);
}

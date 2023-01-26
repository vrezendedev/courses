package main

import (
	"os"
	"testing"
)

func TestNewDeck(t *testing.T) {
	d := newDeck()
	
	if(len(d) != 52){
		t.Errorf("Expected deck length of 52, but got: %v", len(d))
	}

	if d[0] != "Ace of Spades" {
		t.Errorf("Expected first card of Ace of Spades, but got: %v", d[0])
	}

	if d[len(d)-1] != "King of Clubs" {
		t.Errorf("Expected first card of King of Clubs, but got: %v", d[len(d)-1])
	}
}

func TestSaveToDeckAndNewDeckFromFile(t *testing.T) {
	os.Remove("_deck_testing")

	deck := newDeck()
	deck.saveToFile("_deck_testing")

	loadedDeck := newDeckFromFile("_deck_testing")

	if(len(loadedDeck) != 52) {
		t.Errorf("Expected deck length of 52, but got: %v", len(loadedDeck))
	}

	os.Remove("_deck_testing")
}

func TestDealDeck(t *testing.T) {
	d := newDeck()
	cards, deck := deal(d, 5)

	if len(cards) != 5 {
		t.Errorf("Expected hand length of 5, but got: %v", len(cards))
	}

	if len(deck) != 47 {
		t.Errorf("Expected hand length of 47, but got: %v", len(deck))
	}
		
}
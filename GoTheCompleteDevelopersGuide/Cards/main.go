package main

func main() {
	//var card string = "Ace of Spades"
	cards := newDeckFromFile("my_cards")
	cards.shuffle()
	hand, deck := deal(cards, 5)
	hand.toString()
	deck.print()
}
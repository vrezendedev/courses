package main

import "fmt"

func main() {
	// colors := map[string]string{
	// 	"red":   "#FF0000",
	// 	"green": "#00FF00",
	// 	"blue":  "#0000FF",
	// }

	// var colors map[string]string
	// colors["red"] = "#FF0000"
	// colors["green"] = "#00FF00"

	colors := make(map[string]string)
	colors["red"] = "#FF0000"
	colors["green"] = "#00FF00"
	colors["blue"] = "#00FF00"
	colors["white"] = "#FFFFFF"

	// delete(colors, "red")

	fmt.Println(colors)
	printColors(colors)
}

func printColors(c map[string]string) {
	for color, hex := range c {
		fmt.Println("Hex code for", color, "is", hex)
	}
}

package main

import (
	"fmt"
	"os"
	"sync"
	"time"
)

func main() {

	start := time.Now()
	fmt.Println(start.String())

	const START_AT int = 0

	const END_AT int = 1000000
	const NUMBER_OF_GOROUTINES int = 100

	var wg sync.WaitGroup
	var numbers []int

	for i := START_AT; i <= END_AT; i++ {
		numbers = append(numbers, i)
	}

	parts := (len(numbers) / NUMBER_OF_GOROUTINES)

	for i := 0; i < parts*NUMBER_OF_GOROUTINES; i += parts {
		wg.Add(1)
		if i+parts > END_AT-parts {
			go EvenOrOdd(numbers[i:END_AT+1], &wg)
		} else {
			go EvenOrOdd(numbers[i:i+parts], &wg)
		}
	}

	wg.Wait()

	end := time.Now()
	fmt.Println(end.String())

}

func EvenOrOdd(nums []int, wg *sync.WaitGroup) {
	var s string
	for _, number := range nums {
		if number%2 == 0 {
			s += fmt.Sprint(number) + " is even \n"
		} else {
			s += fmt.Sprint(number) + " is odd \n"
		}
	}
	os.WriteFile("EvensOrOdds "+fmt.Sprint(nums[0])+".txt", []byte(s), 0664)

	defer wg.Done()
}

package main

import "fmt"

var Data [100]bool

func Init() [100]bool {
	for i := 0; i < 100; i++ {
		Data[i] = false
	}
	return Data
}

func Run(number int) [100]bool {
	fmt.Println(number)
	for j := number; j > 0; j-- {
		for i := 1; i <= 100; i++ {
			if i%j == 0 {
				Data[i] = !Data[i]
			}
		}
	}
	return Data
}

package main

import "fmt"

var door100 [100]int

func main() {
	Init()
	var result [100]bool
	for i := 1; i <= 100; i++ {
		result = Run(i)
	}
	for _, v := range result {
		if v {
			fmt.Print("@")
		} else {
			fmt.Print("#")
		}
	}
}

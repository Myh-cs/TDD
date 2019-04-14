package main

import (
	"math"
)

func triangle(a, b int) int {
	return calcTriangle(a, b)
}
func calcTriangle(a, b int) int {
	var c int
	c = int(math.Sqrt(float64(a*a + b*b)))
	return c
}

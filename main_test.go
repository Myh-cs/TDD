package main

import (
	"fmt"
	"testing"
)

func testTriangle(t *testing.T) {
	tests := []struct{ a, b, c int }{
		{3, 4, 5},
		{5, 12, 13},
		{8, 15, 17},
		// normal case

		// edge case

		// language case
	}
	for _, tt := range tests {
		fmt.Println("开始测试了")
		if actual := calcTriangle(tt.a, tt.b); actual != tt.c {
			t.Errorf("calcTriangle(%d, %d); "+"got %d; expected %d", tt.a, tt.b, actual, tt.c)
		}
	}

}

package main

// TODO:
// (1, []) => -1
// (1， [2,3])=> -1
// (1, [1,2,3]) => 0
// (2, [1,2,3]) => 1
import (
	"testing"
)

type InputType struct {
	Search int
	Arr    []int
}

func testChop(t *testing.T) {
	tests := []struct {
		Input InputType
		Out   int
	}{
		{InputType{1, []int{}}, -1},
		{InputType{1, []int{2, 3}}, -1},
		{InputType{1, []int{1, 2, 3}}, 0},
		{InputType{2, []int{1, 2, 3}}, 1},
	}
	for _, test := range tests {
		actual := Chop(test.Input.Search, test.Input.Arr)
		if actual != test.Out {
			t.Errorf("expect %d, but got %d", test.Out, actual)
		}
	}
}

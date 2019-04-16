package main

import "testing"

func TestLife(t *testing.T) {
	expect := 42
	if Life() != expect {
		t.Errorf("Life is not normal , expect %d, but got %d", expect, Life())
	}
}

func TestInit100Doors(t *testing.T) {
	var expect [100]int
	if door100 != expect {
		t.Errorf("Life is not normal , expect %d, but got %d", expect, door100)
	}
}

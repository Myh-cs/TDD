package main

import (
	"testing"
)

func TestStruct(t *testing.T) {
	door100 := Door100{}
	_, ok := interface{}(door100).(Door100)
	if !ok {
		t.Errorf("Life is not normal , expect %v, but got %v", door100, Door100{})
	}
}

func TestStructData(t *testing.T) {
	door100 := Door100{}
	got := len(door100.Data)
	if got != 100 {
		t.Errorf("Life is not normal , expect %d, but got %d", 100, got)
	}
}

func TestRun1(t *testing.T) {
	door100 := Door100{}
	got := door100.Run(1)
	var expect [100]bool
	for key, _ := range expect {
		expect[key] = false
	}
	if got != expect {
		t.Errorf("Run 1 , expect %v, but got %v", expect, got)
	}
}

func TestRun2(t *testing.T) {
	door100 := Door100{}
	got := door100.Run(2)
	var expect [100]bool
	for key, _ := range expect {
		expect[key] = false
	}
	for index, _ := range expect {
		if index%2 == 0 {
			expect[index] = !expect[index]
		}
	}
	if got != expect {
		t.Errorf("Run 1 , expect %v, but got %v", expect, got)
	}
}
func TestRun3(t *testing.T) {
	door100 := Door100{}
	got := door100.Run(3)
	var expect = [true, true, true]
	
	if got != expect {
		t.Errorf("Run 1 , expect %v, but got %v", expect, got)
	}
}

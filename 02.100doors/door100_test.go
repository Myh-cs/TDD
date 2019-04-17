package main

import (
	"testing"
)

func TestStructData(t *testing.T) {
	getInitData := Init()
	got := len(getInitData)
	if got != 100 {
		t.Errorf("Life is not normal , expect %d, but got %d", 100, got)
	}
	expect := [3]bool{false, false, false}
	result := [3]bool{getInitData[0], getInitData[1], getInitData[2]}
	if expect != result {
		t.Errorf("exec Init(), expect %v, but got %v", expect, got)
	}
}

func TestRun1(t *testing.T) {
	Init()
	got := Run(1)
	actual := [3]bool{got[0], got[1], got[2]}
	expect := [3]bool{true, true, true}
	if expect != actual {
		t.Errorf("exec Run(1), expect %v, but got %v", expect, actual)
	}
}

func TestRun2(t *testing.T) {
	Init()
	got := Run(2)
	actual := [...]bool{got[0], got[1], got[2]}
	expect := [...]bool{true, false, true}
	if expect != actual {
		t.Errorf("exec Run(2), expect %v, but got %v", expect, actual)
	}
}

func TestRun3(t *testing.T) {
	Init()
	got := Run(3)
	actual := [...]bool{got[0], got[1], got[2]}
	expect := [...]bool{true, false, true}
	if expect != actual {
		t.Errorf("exec Run(2), expect %v, but got %v", expect, actual)
	}
}

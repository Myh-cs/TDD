package main

type Door100 struct {
	Data [100]bool
}

func (door100 Door100) Run(num int) [100]bool {
	for key, _ := range door100.Data {
		if key%num == 0 {
			door100.Data[key] = !door100.Data[key]
		}

	}
	return door100.Data
}

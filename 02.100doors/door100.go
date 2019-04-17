package main

var data [100]bool

func Init() [100]bool {
	for i := 0; i < 100; i++ {
		data[i] = false
	}
	return data
}

func Run(number int) [100]bool {
	for k, v := range data {
		if number == 1 {
			data[k] = !v
		} else {
			if k != 0 && (k+1)%number == 0 {
				data[k] = !v
			}
		}
	}
	return data
}

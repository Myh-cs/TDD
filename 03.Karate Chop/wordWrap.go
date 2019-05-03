package main

// 在数组中查找数字
func Chop(search int, arr []int) int {
	for key, value := range arr {
		if value == search {
			return key
		}
	}
	return -1
}

package main

import (
    "fmt"
    "math"
)


func main() {
    sum_of_squre := 0
    sum := 0
    for i := 1; i < 101; i++ {
        sum += i
        sum_of_squre += i*i
    }

    rslt := int(math.Pow(float64(sum), 2)) - sum_of_squre
    fmt.Println(rslt)
}

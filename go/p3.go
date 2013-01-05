package main

import (
    "fmt"
    "math"
)

func gen(n int64, c chan int64) {
    c <- 2
    c <- 3
    m := math.Sqrt(float64(n))
    for i := int64(1); i < ((n + 1) / 6); i++ {
        for _, rslt := range []int64{6*i - 1, 6*i + 1} {
            if rslt > int64(m) {
                close(c)
                return
            }
            c <- rslt
        }
    }
}

func find_largest_prime_factor(num int64) int64 {
    rslt := num
    n := num

    c := make(chan int64)
    go gen(num, c)
    for i := range(c) {
        if (n <= 1) {
            break
        }
        for n % i == 0 {
            n /= i
            rslt = i
        }
    }

    return rslt
}

func main() {
    rslt := find_largest_prime_factor(600851475143)
    fmt.Println(rslt)
}

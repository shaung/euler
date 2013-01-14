package main

import (
    "fmt"
)

type IntMap map[int]int

func makerange(start, end int) []int {
    r := []int{}
    for i := start; i <= end; i++ {
        r = append(r, i)
    }
    return r
}

func get_factors(n int) IntMap {
    rslt := make(IntMap)
    for i := range makerange(2, 20) {
        rslt[i] = 0
    }
    
    for i := 2; n > 1 && i <= 20; i++ {
        for ; n % i == 0; {
            n /= i
            v, ok := rslt[i]
            if !ok {
                v = 0
            }
            rslt[i] = v + 1
        }
    }
    return rslt
}

func main() {
    factors := []IntMap{}
    weights := make(IntMap)
    for _, i := range makerange(2, 20) {
        factors = append(factors, get_factors(i))
        weights[i] = 0
    }
    for _, d := range factors {
        for _, i := range makerange(2, 20) {
            if weights[i] < d[i] {
                weights[i] = d[i]
            }
        }
    }

    rslt := 1
    for i, times := range weights {
        if i > 0 {
            for ; times > 0; times-- {
                rslt *= i
            }
        }
    }

    fmt.Println(rslt)
}

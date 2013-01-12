package main

import (
    "fmt"
    "strconv"
)

func reverse_string(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

func calc() int {
    for n := 999*999; n >= 100*100; n-- {
        s := strconv.Itoa(n)
        if s != reverse_string(s) { continue }
        for i := 999; i >= 99; i-- {
            if n % i != 0 { continue }
            d := n / i;
            if d <= 999 && d >= 100 {
                return n;
            }
        }
    }
    return 0
}

func main() {
    rslt := calc()
    fmt.Println(rslt)
}

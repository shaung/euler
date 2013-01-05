package main

import "fmt"

func main() {
    sum := 0
    prev := 1; curr := 2
    for ;sum <= 4000000; {
        if curr % 2 == 0 {
            sum += curr
        }
        prev, curr = curr, curr + prev
    }
    fmt.Println(sum)
}

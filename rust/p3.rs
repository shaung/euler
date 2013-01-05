fn calc(num: int) -> int {
    let mut n:      int = num,
            rslt:   int = num,
            i:      int = 2;
    while n > 1 {
        while n % i == 0 {
            rslt = i;
            n /= i;
        }
        i += 1;
    }
    return rslt;
}

fn main() {
    let rslt = calc(600851475143);
    io::println(fmt!("%?", rslt))
}

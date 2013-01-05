fn main() {
    let mut i: int = 1, sum: int = 0;
    while i < 1000 {
        if i % 3 == 0 || i % 5 == 0 {
            sum += i;
        }
        i += 1;
    }
    io::println(fmt!("%?", sum))
}


fn main() {
    let mut prev = 1, curr = 2, rslt = 0;
    while curr <= 4000000 {
        if curr % 2 == 0 {
            rslt += curr
        }
        prev <-> curr;
        curr += prev;
    }

    io::println(fmt!("%?", rslt))
}

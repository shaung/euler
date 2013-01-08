fn reverse_str(s: &str) -> ~str {
    let mut rslt: ~str = ~"";
    str::each_char(s, |c| {
        rslt = str::from_char(c) + rslt;
        true
    });
    return rslt;
}

fn is_palindrome(n: int) -> bool {
    let s: ~str = int::str(n);
    s == reverse_str(s)
}

fn main() {
    let mut n: int = 999*999;
    while n > 100*100 {
        if is_palindrome(n) {
            let mut i: int = 999;
            while i >= 100 {
                if n % i == 0 {
                    let x: int = n / i;
                    if x >= 100 && x <= 999 {
                        io::println(fmt!("%d", n));
                        return
                    }
                }
                i -= 1;
            }
        }
        n -= 1
    }
}

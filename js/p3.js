function check(n, cb) {
    if (cb(2)) return;
    if (cb(3)) return;
    var max = Math.ceil(Math.sqrt(n));
    for (var i = 1; i < Math.ceil((n + 1) / 6); i++) {
        var li = [6*i - 1, 6*i + 1];
        for (var k in li) {
            if (li[k] > max) {
                return;
            }
            if(cb(li[k])) return;
        }
    }
}

function find_largest_prime_factor(num) {
    var rslt = num, n = num;

    while (n > 1) {
        check(num, function(i) {
            while (n % i == 0) {
                n /= i;
                rslt = i;
            }
        });
    }

    return rslt;
}

console.log(find_largest_prime_factor(600851475143));

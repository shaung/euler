
function is_prime(n) {
    for (var i = 2; i <= n / 2; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

function find_prime(nth) {
    if (nth == 1) return 2;
    if (nth == 2) return 3;

    var cnt = 2;
    for (var i = 1;;i++) {
        var li = [6*i-1, 6*i+1];
        for (var index in li) {
            var n = li[index];
            if (is_prime(n)) {
                cnt++;
                if (cnt == nth) {
                    return n;
                }
            }
        }
    }
}

console.log(find_prime(10001));

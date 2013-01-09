var calc = function() {
    for (var n = 999*999; n >= 100*100; n--) {
        var s = n.toString();
        if (s != s.split('').reverse().join('')) continue;

        for (var i = 999; i >= 99; i--) {
            var d = n / i;
            if (n % i == 0 && d >= 100 && d <= 999) {
                return n;
            }
        }
    }
};

console.log(calc());

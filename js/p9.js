var rslt = (function(){
    for (var a = 1; ; a++) {
        var c = 0;
        for (var b = a + 1; (c = 1000 - a - b) > 0; b++) {
            if (a < b && b < c && a*a + b*b == c*c)
                return a * b * c;
        }
    }
})();

console.log(rslt);

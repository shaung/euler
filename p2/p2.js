var prev = 1, curr = 2, rslt = 0;
while (curr <= 4000000) {
    if (curr % 2 == 0)
        rslt += curr;
    var _ = [curr, curr + prev];
    prev = _[0];
    curr = _[1];
}

console.log(rslt);

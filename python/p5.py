import operator as op

r = range(2, 21)

def get_factors(num):
    rslt = dict((x, 0) for x in r)
    n = num
    i = 2
    while n > 1 and i <= 20:
        while n % i == 0:
            n /= i
            rslt[i] += 1
        i += 1
    return rslt

all_factors = [get_factors(x) for x in r]
factors = dict((i, max(d[i] for d in all_factors)) for i in r)
rslt = reduce(op.mul, [k**v for k, v in factors.items() if v > 0])
print rslt

import math

def gen(n):
    yield 2
    yield 3
    max = int(math.sqrt(n))
    for i in xrange(1, int((n + 1) / 6)):
        for rslt in (6*i - 1, 6*i + 1):
            if rslt > max:
                return
            yield rslt

def find_largest_prime_factor(num):
    rslt = n = num

    g = iter(gen(num))

    i = next(g)
    while n > 1:
        while n % i == 0:
            n /= i
            rslt = i
        i = next(g)

    return rslt

print find_largest_prime_factor(600851475143)

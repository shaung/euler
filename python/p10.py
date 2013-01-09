from itertools import count
from math import sqrt

def is_prime(n):
    if n % 2 == 0:
        return n == 2
    if n == 3:
        return True
    for i in range(3, int(sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True

def gen_prime(max):
    yield 2
    yield 3
    for i in count(1):
        for n in (6*i - 1, 6*i + 1):
            if n > max:
                return
            if is_prime(n):
                yield n

def sum_of_primes_below(n):
    return sum(gen_prime(n))

print sum_of_primes_below(2000000)

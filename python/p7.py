from itertools import count

def is_prime(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def gen_prime():
    yield 2
    yield 3
    for i in count(1):
        for n in (6*i - 1, 6*i + 1):
            if is_prime(n):
                yield n

for i, n in enumerate(gen_prime(), start=1):
    if i == 10001:
        print n
        break

from itertools import count

def calc():
    for a in count(1):
        for b in count(a+1):
            c = 1000 - a - b
            if c <= 0:
                break
            if a < b < c and a**2 + b**2 == c**2:
                return a * b * c

print calc()

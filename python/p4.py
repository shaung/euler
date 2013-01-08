def calc():
    for n in (x for x in xrange(999*999, 100*100, -1) if str(x) == str(x)[::-1]):
        for i in xrange(999, 99, -1):
            if n % i == 0 and 999 >= n / i >= 100:
                return n

print calc()

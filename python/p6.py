r = range(1, 101)

sum_of_square = sum(x**2 for x in r)
square_of_sum = sum(r) ** 2
rslt = square_of_sum - sum_of_square

print rslt

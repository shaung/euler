#!/usr/bin/env python

prev, curr = 1, 2
rslt = 0
while curr <= 4000000:
    if curr % 2 == 0:
        rslt += curr 
    prev, curr = curr, curr + prev

print(rslt)

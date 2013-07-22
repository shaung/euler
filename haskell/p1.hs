main = print (sum (calc [1..999]))
calc li = [x | x <- li, (limit x)]
limit n = n `mod` 3 == 0 || n `mod` 5 == 0

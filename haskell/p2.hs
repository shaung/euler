main = print (calc 4000000)
calc n = (_calc 1 2 n 0)
_calc prev curr n result = 
    if curr <= n
    then (_calc curr (prev + curr) n (add curr result))
    else result 
add x n =
    if x `mod` 2 == 0
    then (n + x)
    else n 

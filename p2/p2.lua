prev, curr = 1, 2
rslt = 0
while curr <= 4000000 do
    if (curr % 2 == 0) then
        rslt = rslt + curr
    end
    prev, curr = curr, curr + prev
end

print(rslt)

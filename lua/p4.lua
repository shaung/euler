function calc()
    for n = 999*999, 100*100, -1 do
        s = tostring(n)
        if s == string.reverse(s) then
            for i = 999, 99, -1 do
                d = n / i
                if n % i == 0 and d >= 100 and d <= 999 then
                    return n
                end
            end
        end
    end
end

print(calc())

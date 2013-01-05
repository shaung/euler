function gen(n)
    return coroutine.create(function ()
        coroutine.yield(2)
        coroutine.yield(3)
        local max = math.sqrt(n)
        for i = 1, (n + 1) / 6 do
            for x, rslt in ipairs({6*i - 1, 6*i + 1}) do
                if rslt > max then
                    return 0
                end
                coroutine.yield(rslt)
            end
        end
    end)
end

function find_largest_prime_factor(num)
    local rslt = num
    local n = num
    local co = gen(num)
    local stat, i
    stat, i = coroutine.resume(co)

    while n > 1 do
        while n % i == 0 do
            n = n / i
            rslt = i
        end
        stat, i = coroutine.resume(co)
        if not stat or i == 0 then
            break
        end
    end

    return rslt
end

print(find_largest_prime_factor(600851475143))

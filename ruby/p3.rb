def gen(n)
    yield 2
    yield 3
    max = Math.sqrt(n).to_int
    for i in 1..((n+1)/6).to_int
        [6*i-1, 6*i+1].each do |rslt|
            if rslt > max
                return
            end
            yield rslt
        end
    end
end

def find_largest_prime_factor(num)
    rslt = n = num
    gen(num) do |i|
        if n <= 1
            return rslt
        end
        while n % i == 0 do
            n /= i
            rslt = i
        end
    end

    return rslt
end

puts find_largest_prime_factor(600851475143)

Sample = {}

function Sample.add(n1, n2)
    return n1 + n2
end

function Sample.hi(name)
    return "hi " .. name
end

function Sample.gettingATable(v1, v2, v3)
    return { v1, v2, v3, (v1 + v2) * v3 }
end

function Sample.Sort(tab)
    table.sort(tab)
    return tab
end

function Sample.myAddition(...)
    local sum = 0
    for index, value in ipairs{...} do
        sum = sum + value
    end
    return sum
end


return Sample
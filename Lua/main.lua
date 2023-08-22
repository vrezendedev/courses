print("Hello World!")

MyVariable = nil
MyVariable = 1

print(MyVariable)
print(type(MyVariable))

MyVariable = "Test"

print(MyVariable)
print(type(MyVariable))

--[[
    There are eight basic types in Lua: nil, Boolean, Number, String, Function, Userdata, Thread and Table
]]

--If a variable contains value (different than nil) and it is not false, so it is a true value.
MyBoo = true
MyBoo2 = false
MyBoo3 = nil

print(MyBoo)
print(MyBoo2)
print(MyBoo3)

print(MyBoo)
print(type(MyBoo))

print(MyBoo3)
print(type(MyBoo3))

MyArray = {"a string", 12, 42, "14"}

for i, v in pairs(MyArray) do
    print(MyArray[i] .. " " .. v) -- .. Concatenation
end

print(#MyArray[1]) -- # Get the length of the variable

MyNumber = 32
print(tostring(MyNumber))

MyMultiLineString = [[Multi-line 
string
that containes
newline
]]

print(MyMultiLineString)

MyA, MyB = "hi", "hello"

MyPi = math.pi -- Lua's built in math lib

print(MyPi)

math.randomseed(os.time())
MyRandom = math.random()

print(MyRandom)

function MyFunc(val)
    print(val) 
end

MyFunc(1)

--Scopes in Lua: Global (available anywhere) or Local (available only in a localize portion) 

_G.temp ="It is not a local..."

local function GetALocal()
    local temp = "It is local!"
    print(temp)
end

GetALocal()
print(temp)

--String Lib

local aString = "Hello World!"

print(string.len(aString))

local bString = string.rep("hey ", 5)

print(bString)

local cString = "HELLO world"

print(string.lower(cString))
print(string.upper(cString))
print(string.sub(aString, 1, 5))

print(string.format("pi: %.4f", math.pi))

local day, month, year = 28, 2, 1980
print(string.format("%02d/%02d/%04d", month, day, year))

local sBegin, sEnd = string.find(aString, "World")
print(sBegin, sEnd)

local found = string.match(aString, "World")
print(found)

local date = "Today is 5/14/2016"
local d = string.match(date, "%d+/%d+/%d+")
print(d)

local subs = "I have 2 children"
local subs2 = string.gsub(subs, "2", "two")
print(subs2)

--If/then
-- and or not
-- > <
-- >= <= ~= ==

local count = 1
local answer = "yes"
local lives = 0

if count == 1 then
    print("Equal if-then structure")
end

if not(count == 0) then
    print("If-then using not")
end

if count == 1 and (answer == "no" or lives == 0) then
    print("If-then complex comparison")
end

if count == 0 then
    print("Count is 0")
else 
    print("Count is not equal to 0")
end

if count > 0 then
    print("It is, indeed, greater than 0")
    if count == 5 then
        print("Count is equal to 5")
    end
end

--Loops

--For
--Start, End, Step
for i = 1, 10, 1 do
    print(i)
end

local aBln = true
local j = 1

--While
while aBln == true do
    print("loopA: ", j)
    j = j + 1

    if j == 10 then
        aBln = false
    end
end

--Repeat (do... while?)
repeat
    j = j - 1;

    if j == 0 then
        aBln = true
    end    

    print("loopB: ", j)
until aBln == true

-- I/O Library

--[[
    io.write("How old are you?")
    local answer = io.read()

    if tonumber(answer) > 37 then 
        io.write("You're old!")
    elseif tonumber(answer) < 37 then
        io.write("You're young!")
    else 
        io.write("You're not old, you are only 37!")
    end 
]] 

io.output("tempfile.txt")
io.write("42")
io.close()
io.input("tempfile.txt")
local info = io.read("a")
--[[
    *all => reads whole file
    *line => read the next line
    *number => reads a number
]]
print("\n", info);

local file = io.open("tempfile.txt", "w")

if file ~= nil then   
    file:write("Hello World!")
    file:close()
end

local fileO = io.open("tempfile.txt", "r")
if fileO then    
    local fTemp = fileO:read("l")
    fileO:close()
    print(fTemp) 
end


--Tables
--Tables have a key (or index). Each key has a value

local numbers = {}

for i= 1 , 10 do
    numbers[i] = i
    print(numbers[i])
end

local matrix = { }

for i = 1, 10 do
    matrix[i] = {}
    for j = 1, 10 do
        matrix[i][j] = i * j
        print(matrix[i][j])
    end
end

local list = {5, 6, 7, 8, 9, 10, 1, 2, 3, 4}

print(#list)

table.insert(list, 1, 1)

for i = 1, #list do
    print(list[i])
end

print(#list)

table.remove(list, 1)

print(#list)

table.sort(list)

for i = 1, #list do
    print(list[i])
end

--Pairs (unordered or multidmensional) and iPairs (ordered/flat tables)

local myNewTable = {"Hi", "Hello", "World", 42, "hard!"}

for index, value in ipairs(myNewTable) do
    print(value)
    print(index, value)
end

local myTableWithProps = {Inside = "Yes", "Age", "Seat", "Grade", "Date"}
myTableWithProps.Name = "Rez"
myTableWithProps.Age = 24
myTableWithProps.Seat = "B12"
myTableWithProps.Grade= "10"
myTableWithProps.Date = "Aug 22, 2023"

for key, value in pairs(myTableWithProps) do
    print (key .. ": ", value)
end

--Closure (An anonymous function within another function)

local function currentCount()
    I = 0
    return function ()
        I = I + 1
        return I
    end 
end

local first = currentCount()

print(first())
print(first())

--Operating System Library

print(os.clock())
print(os.time(
---@diagnostic disable-next-line: missing-fields
    {
        year = 1999,
        month = 3,
        day = 19,
        hour = 19,
        min = 30,
        sec = 00
    }
))
print(os.date("*t", os.time()).day)
print(os.getenv("GOPATH"))

--Modules

-- local myMod = require("myModule")
-- print(myMod.add(1, 2))
-- print(myMod.hi("Rezende"))

require("myModule")

print(Sample.add(1, 2))
print(Sample.hi("Rezende"))

local tab = Sample.gettingATable(1, 2, 3)

local oneTable = {3, 4, 2, 1}

for index, value in pairs(oneTable) do
    print(index, value)
end

local copy = table.pack(table.unpack(oneTable))

Sample.Sort(oneTable)

for index, value in pairs(oneTable) do
    print(index, value)
end

for index, value in pairs(copy) do
    print(index, value)
end

copy = oneTable;

oneTable[1] = 2;

print(copy[1])

print(Sample.myAddition(1, 2, 3, 4, 5))

--Recursion

local function recursive(counter)
    counter = counter + 1
    print("In recursive loop: " .. counter)
    if counter < 4 then
        recursive(counter)
    end
    print("Exiting recursive loop. Step: " .. counter)
end

recursive(0)

local function fibonacci(numA, numB, l)
    print(numA)
    if numB < l then fibonacci(numB, numA + numB, l) end
end

fibonacci(0, 1, 10000)

-- Metatables / Metamethods

local MyMetaMethod_add = function (x, y)
    return {value = x.value + y.value}
end

local myTable1 = {value = 100}
local myTable2 = {value = 200}

local metaTable = {__add = MyMetaMethod_add}

--[[
    Metamethods: 
        __add (a, b)
        __sub (a, b)
        __mul (a, b)
        __div (a , b)
        ...
]]

setmetatable(myTable1, metaTable)

local newTable = myTable1 + myTable2;

print(newTable.value)

local tOne = {}
local tTwo = {}

for i=1, 5 do
    tOne[i] = {}
    tTwo[i] = {}
    for j = 1, 5 do
        tOne[i][j] = math.random(10)
        tTwo[i][j] = math.random(10)
    end
end


local function matrix_add(t1, t2)
    local newTable = {}
    for i = 1, #t1 do
        newTable[i] = {}
        for j = 1, #t1[i] do
            newTable[i][j] = t1[i][j] + t2[i][j]
        end
    end
    return newTable
end

local metaTableMatrix = {__add = matrix_add}

setmetatable(tOne, metaTableMatrix)

local newTable = tOne + tTwo

for i = 1, 5 do
    for j = 1, 5 do
        print(tOne[i][j] .. " + " .. tTwo[i][j] .. " = " .. newTable[i][j] )
    end
end

--Select in Lua

function add() 
    local sum = 0
    for i = 1, select("#", 1, 2, 3, 4, 5), 1 do
        sum = sum + select(i, 1, 2, 3, 4, 5)
        print(sum)
    end
    return sum
end

print (add())

--Coroutines

RoutineOne = coroutine.create(
    function ()
        for i = 1, 10, 1 do
            print(i)
            if i == 5 then
                coroutine.yield(RoutineOne)
            end
        end
    end
)

local routineTwo = function () 
    for i =11, 20 do
        print("Routine 2: ".. i)
    end
end

local routineTwoCoroutine = coroutine.create(routineTwo)

coroutine.resume(RoutineOne)
coroutine.resume(routineTwoCoroutine)

print(coroutine.status(RoutineOne))
print(coroutine.status(routineTwoCoroutine))


--"Objects" 

local pet = {}
    pet.type = ""
    pet.message = ""
    pet.emit = function (self)
        print(self.message)
    end
    pet.points = 0

local cat = pet
cat.type = "Cat"
cat.message = "Meow"
cat:emit()
print(cat.points)

local person ={
    name = "Jack",
    age = 18,
    friends = {"Fred"}
}

print(person.age)

local function Person(name)
    name = name or "Default Name"
    return {
        name = name,
        status = "",
        greetings = function (self)
            print("Hello, my name is " .. self.name)
        end
    }
end

local newPerson = Person("Joe")
local anotherPerson = Person("Juliet")
local defaultPerson = Person()

print(newPerson.name)
print(anotherPerson.name)
print(defaultPerson.name)
defaultPerson:greetings()

local function Warrior(name, weapon)
    local warrior = Person(name)
    warrior.weapon = weapon;
    return warrior;
end

local w = Warrior("Aquiles", "Spear")
w.status = "Injured"

for key, value in pairs(w) do
    if(type(value) ~= "function") then   
        print(string.upper(string.sub(key, 1, 1)) .. string.sub(key, 2, #key) .. " : " .. value) 
    else
        print(w[key](w))
    end
end

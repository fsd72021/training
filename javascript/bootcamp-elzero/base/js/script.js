/*
  - javascript is a scripting language or programming language
  --------------------------------------------
  - websites you need to solve problems: leetcode | edabit
  --------------------------------------------
  - javascript implement code line by line, if we call javascript code before the element that will get an error if we not wait the window load
  --------------------------------------------
  - javascript is loosely typed not strongly typed (not necessary to tell type of var)
  --------------------------------------------
  var
  - declare                       (no errors)
  - access before declare         (undefined not error)
  - variable scope drama          (added to window)
  - block or function scope       (global)
  let
  - declare                       (error => has already been declared)
  - access before declare         ()
  - variable scope drama          (added to window)
  - block or function scope       ()
  const
  - declare                       (error => has already been declared)
  - access before declare         ()
  - variable scope drama          (added to window)    
  - block or function scope       ()
  --------------------------------------------
  arithmetic operators
  - addition (+)
  - substraction (-)
  - multiplication (*)
  - division (/)
  - exponentation (**)
  - modulus (%)
  - increment (++) (post => plus sign after the variable [print then plus], pre => plus sign before the variable [plus then print])
  - decrement (--) (post, pre)
  --------------------------------------------
  Unary Plus (+) And Negation (-)
  - Unary Plus (+) [return number if its not number]
  - Unary Negation (-) [return number if its not number and negates it]
  --------------------------------------------
  --------------------------------------------
  --------------------------------------------
  --------------------------------------------
  --------------------------------------------
  --------------------------------------------
  --------------------------------------------
  --------------------------------------------
*/

//document
document.write('<h1>hello from document</h1>')

//window
// window.alert('test alert')

//console [console belongs to web api(application programming interface) not javascript language]
console.log('%cThis is a test log', 'color: red; font-size: 20px;font-weight: 800') //log
console.table(['Taha', 'another name', 'third name']) //table
console.error('this is custom error') //error

//data types
console.log(typeof 1) //number
console.log(typeof 1.5) //number
console.log(typeof ['taha', 'test']) //name of it is array but type is object
console.log(typeof {
  name: 'taha',
  age: 25
}) //object
console.log(typeof true) //bolean 
console.log(typeof undefined) //undefined
console.log(typeof null) //null
console.log('---------------------------------------------')

//character escape sequences
console.log("this is escape \"test\"")

console.log('---------------------------------------------')

console.log('this \
is \
line \
escape')

console.log('---------------------------------------------')

console.log('this\nis\nnew\nline')

console.log('---------------------------------------------')

//concatination
let a = 'this is a'
let b = 'this is b'
console.log(a + ' and ' + b)

console.log('---------------------------------------------')

//template literals
console.log(`${a} and ${b}`)

console.log('---------------------------------------------')

//arithmetic operators
let num = 1
console.log(num + num, 'addition') //addition
console.log(num - num, 'substraction') //substraction
console.log(num * num, 'multiplication') //multiplication
console.log(num / num, 'division') //division
console.log(num ** num, 'exponentation') //exponentation
console.log(num % num, 'modulus') //modulus

console.log(num++, 'post increment') //post increment (اطبع الرقم وبعدين زود)
console.log(++num, 'pre increment') //pre increment (زود الرقم وبعدين اطبع)

num = 2
console.log(num--, 'post decrement') //post decrement (اطبع الرقم وبعدين نقص)
console.log(--num, 'pre decrement') //pre decrement (نقص الرقم وبعدين اطبع)

console.log('---------------------------------------------')

//Unary Plus (+) And Negation (-) Operators
console.log(+100, '100') // 100
console.log(+'100', '100') // 100
console.log(+'-100', '-100') // -100
console.log(+'+100', '-100') // -100
console.log(+'text', 'NaN') // NaN
console.log(+'15.5', '15.5') // 15.5
console.log(+0xff, '255') // 255
console.log(+null, '0') // 0
console.log(+false, '0') // 0
console.log(+true, '1') // 1

console.log('---------------------------------------------')

console.log(-100, '100') // 100
console.log(-'100', '-100') // -100
console.log(-'-100', '100') // 100
console.log(-'text', 'NaN') // NaN
console.log(-'15.5', '-15.5') // -15.5
console.log(-0xff, '-255') // -255 
console.log(-null, '-0') // -0
console.log(-false, ' -0') // -0
console.log(-true, '-1') // -1

console.log('---------------------------------------------')

//type coercion (type casting) -- (تحويل أنواع البيانات بالإكراه)
let aVar = '10';
let bVar = 20;
let cVar = true;
let dVar = 'string';

console.log(aVar + bVar + cVar, '1020true') // 1020true
console.log(aVar - dVar, 'NaN') // NaN 
console.log(+aVar + bVar + cVar, '31') // 31
console.log(aVar - bVar, '-10') // -10
console.log(true + false, '1 + 0 = 1') // 1 + 0 = 1
console.log('' + aVar, '10') // 10

console.log('---------------------------------------------')

//assignment operators
let aNum = 10;
aNum += 10 // => aNum = aNum + 10 (10 + 10 = 20)
aNum -= 10 // => aNum = aNum - 10 (20 - 10 = 10)
console.log(aNum)

console.log('---------------------------------------------')

//numbers
console.log(100, 00) // 1000000
console.log(10 ** 4) // 10000
console.log(1000000.0000) // 10000
console.log(Number('100')) // 100 as a number
console.log(Number.MAX_SAFE_INTEGER) // max safe number you can use in javascript
console.log(Number.MAX_VALUE) // max number value you can use in javascript

console.log('---------------------------------------------')

//number methods
console.log((100).toString) //convert to string
console.log(100..toString) //convert to string
console.log(100.5555.toFixed) //convert to fixed number and return string

console.log(Number('100 text')) //return NaN
console.log(+'100 text') //return NaN
console.log(parseInt('100 text')) //return 100 (it analyse data and return number) 
console.log(parseInt('text 100 text')) //return NaN
console.log(parseFloat('100.55 text')) //return NaN

console.log(Number.isInteger('100')) //false
console.log(Number.isInteger(100.5)) //false
console.log(Number.isInteger(100)) //true

console.log(Number.isNaN(100 / 'text')) //true

console.log('---------------------------------------------')

//math object functions
console.log(Math.round(100.2)) //100
console.log(Math.round(100.5)) //101

console.log(Math.ceil(100.2)) // 101
console.log(Math.floor(100.9)) // 100

console.log(Math.max(100, 200, -10)) // 200
console.log(Math.min(100, 200, -10)) // -10

console.log(Math.pow(100, 2)) // 200
console.log(Math.random()) // Returns a pseudorandom number between 0 and 1.
console.log(Math.trunc(100.858)) // 100

console.log('---------------------------------------------')

//string methods part 1
let text = 'this is text'
let textDots = 'this.is.text'
let textWithSpace = '  this is text  '

console.log(text[2])
console.log(text.charAt(2)) //Returns the character at the specified index.
console.log(textWithSpace.trim()) //removes the leading and trailing white space
console.log(text.toLowerCase()) //converts all the alphabetic characters in a string to lowercase.
console.log(text.toUpperCase()) //converts all the alphabetic characters in a string to uppercase.

console.log('---------------------------------------------')

//string methods part 2
console.log(text.indexOf('is'), 'indexOf') //Returns the position of the first occurrence of a substring.
console.log(text.indexOf('is', 3), 'indexOf') // 5 
console.log(text.lastIndexOf('is'), 'lastIndexOf') // Returns the last occurrence of a substring in the string.

console.log(text.slice(0), '\'slice\'') //Returns a section of a string (from 0 index to last index)
console.log(text.slice(0, 4), '\'slice\'') //Returns a section of a string (from 0 index to 4 index - not including end index)
console.log(text.slice(-7), '\'slice\'') //negative values

console.log(text.repeat(5), '\'repeat\'') //Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.

console.log(textDots.split('.')) //Split a string into substrings using the specified separator and return them as an array.
console.log(text.split('', 4)) //add limit index

console.log('---------------------------------------------')

//string methods part 3
console.log(text.substring(0, 7) + '...') //Returns the substring at the specified location within a String object. 
console.log(text.substring(7, 0) + '...') //swaping the indexes if the start index larger than the end
console.log(text.substring(-7, 7) + '...') //negative index converted to 0

console.log(text.substr(0, 7) + '...') //Gets a substring beginning at the specified location and having the specified length.

console.log(text.includes('is')) //Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
console.log(text.includes('is', 5)) //with start position

console.log(text.startsWith('is')) //Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
console.log(text.startsWith('is', 5)) //with start position

console.log(text.endsWith('text')) //Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
console.log(text.endsWith('text', 5)) //with chrachters length

console.log('---------------------------------------------')

//comparison operators
console.log(10 == '10') //equal (true)
console.log(10 != '10') //not equal (false)

console.log(10 === '10') //identical (false)
console.log(10 !== 10) //not identical (true)

console.log(10 > 10) //larger than (false)
console.log(10 >= 10) //larger than or equal (true)

console.log(10 < 10) //smaller than (false)
console.log(10 <= 10) //smaller than or equal (true)

console.log(typeof 'text' === typeof 'else text') //true

console.log('---------------------------------------------')

//logical operators (not ! - and && - or ||)
console.log(!true) // false
console.log(10 === 10 && 10 !== '10' && 10 > 1) // true
console.log(10 === 10 || 10 !== '10' || 10 > 1) // true

console.log('---------------------------------------------')

//controle flow (if else condition)
let price = 500
let discount = false
let country = 'egypt'
let student = true

if (discount === true) {
  price -= 100
} else if (country == 'egypt') {
  price -= 200
}

console.log(price, 'price')

console.log('---------------------------------------------')

//nested if condition
price = 500
if (discount === true) {
  price -= 100
} else if (country == 'egypt') {
  if (student === true) {
    price -= 200
  } else {
    price -= 100
  }
}

console.log(price, 'price')

console.log('---------------------------------------------')

//conditional ternary operator (36)
let theName = 'Ahmed'
let age = 25
let gender = 'female'

console.log(gender == 'male' ? 'hello Mr/' + theName : gender == 'female' ? 'hello Mrs/' + theName : '')

console.log('---------------------------------------------')

price = 0

console.log(`the price is: ${price || 200}`) //logical or (return second value if initial value is false of undefined or null or zero)
console.log(`the price is: ${price ?? 200}`) //nullish coalescing operator (second value if initial value is null or undefined only)

console.log('---------------------------------------------')

//switch statement
let day = 2

switch (day) {
  case 0:
    console.log('saturday')
    break
  case 1:
    console.log('sunday')
    break
  case 2:
  case 3:
    console.log('monday')
    break
  default:
    console.log('unknown day')
}

console.log('---------------------------------------------')

//arrays
let newArray = ['taha', 'ahmed', ['name', 'stranger']]

console.log(newArray[0]) //taha
console.log(newArray[0][0]) //t
console.log(newArray[2][0][0]) //n

newArray[2] = 'third name'
console.log(newArray)

console.log('---------------------------------------------')

//update last index of array with length
newArray[newArray.length - 1] = 'last element'
console.log(newArray)

newArray.length = 2
console.log(newArray)

console.log('---------------------------------------------')

//add and remove from array
newArray.unshift('first name') //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(newArray)

newArray.push('last name by push') //Appends new elements to the end of an array, and returns the new length of the array.
console.log(newArray)

let shiftedName = newArray.shift() //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log('shifted name is: ' + shiftedName)

let pupedName = newArray.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log('poped name is: ' + pupedName)

console.log('---------------------------------------------')

//searching inside array
console.log(newArray.indexOf('ahmed')) //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(newArray.indexOf('ahmed', 2))

console.log(newArray.lastIndexOf('ahmed')) //Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
console.log(newArray.lastIndexOf('ahmed', -2))

console.log(newArray.includes('ahmed')) //Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(newArray.includes('ahmed', 2))

console.log('---------------------------------------------')

//sorting and reversing arrays
let mixedArray = ['first', 10, 50, 2, '10', 'name', 'ahmed']
console.log(mixedArray.sort())
console.log(mixedArray.reverse())

console.log('---------------------------------------------')

//slice and splice in arrays
console.log(newArray.slice()) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(newArray.slice(2))
console.log(newArray.slice(4))
console.log(newArray.slice(-4, 6))

newArray.splice(0, 1, 'new name by splice', 'khaled') //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(newArray)

console.log('---------------------------------------------')

//joining arrays (concat and join)
console.log(newArray.concat(mixedArray, 'new name by concat')) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(newArray.join()) //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArray.join(''))
console.log(newArray.join(' | '))

console.log('---------------------------------------------')

//loop for (L 48)
for (let i = 0; i < 5; i++) {
  console.log(i)
}

console.log('---------------------------------------------')

//looping on sequences
let loopingArray = [1, 55, 'Taha', 'Ahmed', 'Name', 'Stranger', 547] //array

for (let i = 0; i < loopingArray.length; i++) {
  console.log(loopingArray[i]) //get array elements
}

console.log('---------------------------------------------')

//get string only of [loopingArray] array
let onlyString = []

for (let i = 0; i < loopingArray.length; i++) {
  if (typeof loopingArray[i] === 'string') {
    onlyString.push(loopingArray[i])
  }
}

console.log(onlyString)

console.log('---------------------------------------------')

//nested loops
let products = ['book', 'phone']
let colors = ['red', 'green']
let models = ['Zara', 'H&M']

for (let p = 0; p < products.length; p++) {
  console.log(products[p])
  for (let c = 0; c < colors.length; c++) {
    console.log(colors[c])
  }
  for (let m = 0; m < colors.length; m++) {
    console.log(models[m])
  }
}

console.log('---------------------------------------------')

//loop controle break, contenue and label
for (let i = 0; i < loopingArray.length; i++) {
  console.log(loopingArray[i])

  if (loopingArray[i] === 'Ahmed') {
    break
  }
}

console.log('---------------------------------------------')

for (let i = 0; i < loopingArray.length; i++) {
  if (typeof loopingArray[i] === 'number') {
    continue
  }
  console.log(loopingArray[i])
}

console.log('---------------------------------------------')

mainloop: for (let p = 0; p < products.length; p++) {
  console.log(products[p])

  nestedloop: for (let c = 0; c < colors.length; c++) {
    console.log(colors[c])

    if (colors[c] === 'red') {
      break mainloop
    }
  }
}

console.log('---------------------------------------------')

//advanced example for loop
let i = 0;

for (;;) {
  console.log(loopingArray[i])
  i++
  if (i === loopingArray.length) break
}

console.log('---------------------------------------------')

//loop, while
let index = 0
while (index < loopingArray.length) {
  console.log(loopingArray[index])
  index++
}

console.log('---------------------------------------------')

//loop, do while
do {
  console.log(index)
  index++
} while (false)

console.log(index)

console.log('---------------------------------------------')

//Functions
function sayName(name) {
  console.log(`Hello and welcome ${name}`);
}
sayName("Taha")

console.log('---------------------------------------------')

//Function Advanced Examples
function sayHello(name, age) {
  if (age <= 18) {
    console.log('Sorry, you are underage :)');
  } else {
    console.log(`Hello ${name}, you are welcome`);
  }
}
sayHello('Ahmed', 25)
sayHello('Khaled', 18)

console.log('---------------------------------------------')

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue
    }
    console.log(i);
  }
}
generateYears(2018, 2022, 2020)

console.log('---------------------------------------------')

//Function Return
function calcNumbers(num1, num2) {
  return num1 * num2
}
console.log(calcNumbers(20, 50));

console.log('---------------------------------------------')

//Function Default Parameteres
function sayHi(name, age = 'unknown') { //ecma script way
  // if (age === undefined) { //way 1
  //   age = 'unknown'
  // }

  // age = age || 'unknown' //way 2
  return `Hello ${name} your age is ${age}`
}
console.log(sayHi());

console.log('---------------------------------------------')

//Function Rest Parameters
function calcNumbers(...numbers) {
  let result = 0

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]
  }

  return `The calc of numbers is: ${result}`
}
console.log(calcNumbers(20, 50, 40, 30));

console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')



console.log('---------------------------------------------')
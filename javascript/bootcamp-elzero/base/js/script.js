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
console.log('%cThis is a test log', 'color: red; font-size: 20px;font-weight: 800'); //log
console.table(['Taha', 'another name', 'third name']) //table
console.error('this is custom error') //error

//data types
console.log(typeof 1); //number
console.log(typeof 1.5); //number
console.log(typeof ['taha', 'test']); //name of it is array but type is object
console.log(typeof {
  name: 'taha',
  age: 25
}); //object
console.log(typeof true); //bolean 
console.log(typeof undefined); //undefined
console.log(typeof null); //null
console.log('--------------------');

//character escape sequences
console.log("this is escape \"test\"");
console.log('--------------------');
console.log('this \
is \
line \
escape');
console.log('--------------------');
console.log('this\nis\nnew\nline');
console.log('--------------------');

//concatination
let a = 'this is a'
let b = 'this is b'
console.log(a + ' and ' + b);
console.log('--------------------');

//template literals
console.log(`${a} and ${b}`);

console.log('--------------------');

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

console.log('--------------------');

//Unary Plus (+) And Negation (-) Operators
console.log(+100, '100'); // 100
console.log(+'100', '100'); // 100
console.log(+'-100', '-100'); // -100
console.log(+'+100', '-100'); // -100
console.log(+'text', 'NaN'); // NaN
console.log(+'15.5', '15.5'); // 15.5
console.log(+0xff, '255'); // 255
console.log(+null, '0'); // 0
console.log(+false, '0'); // 0
console.log(+true, '1'); // 1

console.log('--------------------');

console.log(-100, '100'); // 100
console.log(-'100', '-100'); // -100
console.log(-'-100', '100'); // 100
console.log(-'text', 'NaN'); // NaN
console.log(-'15.5', '-15.5'); // -15.5
console.log(-0xff, '-255'); // -255 
console.log(-null, '-0'); // -0
console.log(-false, ' -0'); // -0
console.log(-true, '-1'); // -1

console.log('--------------------');

//type coercion (type casting) -- (تحويل أنواع البيانات بالإكراه)
let aVar = '10';
let bVar = 20;
let cVar = true;
let dVar = 'string';

console.log(aVar + bVar + cVar, '1020true'); // 1020true
console.log(aVar - dVar, 'NaN'); // NaN 
console.log(+aVar + bVar + cVar, '31'); // 31
console.log(aVar - bVar, '-10'); // -10
console.log(true + false, '1 + 0 = 1'); // 1 + 0 = 1
console.log('' + aVar, '10'); // 10

console.log('--------------------');

//assignment operators
let aNum = 10;
aNum += 10 // => aNum = aNum + 10 (10 + 10 = 20)
aNum -= 10 // => aNum = aNum - 10 (20 - 10 = 10)
console.log(aNum);


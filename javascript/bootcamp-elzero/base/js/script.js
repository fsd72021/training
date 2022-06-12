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
  - declare                                   (no errors)
  - access before declare                     (undefined not error)
  - variable scope drama                      (added to window)
  - block or function scope                   (global)
  let
  - declare                                   (error => has already been declared)
  - access before declare                     ()
  - variable scope drama                      (added to window)
  - block or function scope                   ()
  const
  - declare                                   (error => has already been declared)
  - access before declare                     ()
  - variable scope drama                      (added to window)    
  - block or function scope                   ()
  --------------------------------------------
  --------------------------------------------
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
console.log('%cThis is a test log', 'color: red; font-size: 20px;font-weight: 800');  //log
console.table(['Taha', 'another name', 'third name'])                                 //table
console.error('this is custom error')                                                 //error

//data types
console.log(typeof 1);                                //number
console.log(typeof 1.5);                              //number
console.log(typeof ['taha', 'test']);                 //name of it is array but type is object
console.log(typeof {
  name: 'taha',
  age: 25
});                                                   //object
console.log(typeof true);                             //bolean 
console.log(typeof undefined);                        //undefined
console.log(typeof null);                             //null
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
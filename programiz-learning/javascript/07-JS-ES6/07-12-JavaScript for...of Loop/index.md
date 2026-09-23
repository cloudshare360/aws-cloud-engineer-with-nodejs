Online Python













Online JavaScript













Online SQL













Online Java













Online HTML













Online C













Online C++













Online C#













Online PHP













Online Swift













Online Kotlin













Online TypeScript













Online Go













Online Rust













Online Scala













Online Dart













Online R













Online Ruby


























Popular Tutorials




Operators in JavaScript






JavaScript for Loop






Functions in JavaScript






JavaScript Objects






Arrays in JavaScript







Start Learning JavaScript









Reference Materials




String Methods








Array Methods








Math Object








View all






























Python







JavaScript







TypeScript







SQL







HTML







CSS







C







C++







Java














More languages















Popular Tutorials




Operators in JavaScript






JavaScript for Loop






Functions in JavaScript






JavaScript Objects






Arrays in JavaScript







Start Learning JavaScript





All JavaScript Tutorials












Reference Materials





String Methods








Array Methods








Math Object









View all














































Python







JavaScript







SQL







Java







HTML







C







C++







C#







PHP







Swift







Kotlin







TypeScript







Go







Rust







Scala







Dart







R







Ruby









































JS Introduction
Getting Started
JS Variables & Constants
JS console.log
JavaScript Data types
JavaScript Operators
JavaScript Comments
JS Type Conversions

JS Control Flow
JS Comparison Operators
JavaScript if else Statement
JavaScript for loop
JavaScript while loop
JavaScript break Statement
JavaScript continue Statement
JavaScript switch Statement

JS Functions
JavaScript Function
Variable Scope
JavaScript Hoisting
JavaScript Recursion

JS Objects
JavaScript Objects
JavaScript Methods & this
JavaScript Constructor
JavaScript Getter and Setter
JavaScript Prototype

JS Types
JavaScript Array
JS Multidimensional Array
JavaScript String
JavaScript for...in loop
JavaScript Number
JavaScript Symbol

Exceptions and Modules
JavaScript try...catch...finally
JavaScript throw Statement
JavaScript Modules

JS ES6
JavaScript ES6
JavaScript Arrow Function
JavaScript Default Parameters
JavaScript Template Literals
JavaScript Spread Operator
JavaScript Map
JavaScript Set
Destructuring Assignment
JavaScript Classes
JavaScript Inheritance
JavaScript for...of
JavaScript Proxies

JavaScript Asynchronous
JavaScript setTimeout()
JavaScript CallBack Function
JavaScript Promise
Javascript async/await
JavaScript setInterval()

Miscellaneous
JavaScript JSON
JavaScript Date and Time
JavaScript Closure
JavaScript this
JavaScript use strict
Iterators and Iterables
JavaScript Generators
JavaScript Regular Expressions
JavaScript Browser Debugging
Uses of JavaScript






.ad1 {display:none; }
@media(min-width: 992px) { .ad1 {display: block; width: 300px; min-height: 250px; margin: 32px 0; text-align: center; } }












.ad2 {display:none; }
@media(min-width: 992px) { .ad2 {display: block; max-width: 300px; height: 600px; margin: 32px auto 16px; text-align: center;} }




















JavaScript Tutorials

JavaScript Iterators and Iterables


JavaScript Generators


JavaScript for...in loop


JavaScript forEach()


JavaScript Map


JavaScript for loop



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript for... of Loop

















In JavaScript, there are three ways we can use a `for` loop.

JavaScript for loop

JavaScript for...in loop

JavaScript for...of loop

The `for...of` loop was introduced in the later versions of JavaScript ES6.

The `for..of` loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).

JavaScript for...of loop

The syntax of the `for...of` loop is:

`for (element of iterable) {
// body of for...of
}`

Here,

**iterable** - an iterable object (array, set, strings, etc).

**element** - items in the iterable

In plain English, you can read the above code as: for every element in the iterable, run the body of the loop.

for...of with Arrays

The `for..of` loop can be used to iterate over an array. For example,

`// array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

// display the values
console.log(element);
}`

**Output**

John
Sara
Jack





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











In the above program, the `for...of` loop is used to iterate over the students array object and display all its values.

for...of with Strings

You can use `for...of` loop to iterate over string values. For example,

`// string
const string = 'code';

// using for...of loop
for (let i of string) {
console.log(i);
}`

**Output**

c
o
d
e

for...of with Sets

You can iterate through Set elements using the `for...of` loop. For example,

`// define Set
const set = new Set([1, 2, 3]);

// looping through Set
for (let i of set) {
console.log(i);
}`

**Output**

1
2
3

for...of with Maps

You can iterate through Map elements using the `for...of` loop. For example,

`// define Map
let map = new Map();

// inserting elements
map.set('name', 'Jack');
map.set('age', '27');

// looping through Map
for (let [key, value] of map) {
console.log(key + '- ' + value);
}`

**Output**

name- Jack
age- 27

User Defined Iterators

You can create an iterator manually and use the `for...of` loop to iterate through the iterators. For example,

`// creating iterable object
const iterableObj = {

// iterator method
[Symbol.iterator]() {
let step = 0;
return {
next() {
step++;
if (step === 1) {
return { value: '1', done: false};
}
else if (step === 2) {
return { value: '2', done: false};
}
else if (step === 3) {
return { value: '3', done: false};
}
return { value: '', done: true };
}
}
}
}

// iterating using for...of
for (const i of iterableObj) {
console.log(i);
}`

**Output**

1
2
3

for...of with Generators

Since generators are iterables, you can implement an iterator in an easier way. Then you can iterate through the generators using the `for...of` loop. For example,

`// generator function
function* generatorFunc() {

yield 10;
yield 20;
yield 30;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
console.log(value);
}`

**Output**

10
20
30

for...of Vs for...in




for...of
for...in



The `for...of` loop is used to iterate through the values of an iterable.
The `for...in` loop is used to iterate through the keys of an object.



The `for...of` loop cannot be used to iterate over an object.
You can use `for...in` to iterate over an iterable such arrays and strings but you should avoid using `for...in` for iterables.





The `for...of` loop was introduced in **ES6**. Some browsers may not support its use. To learn more, visit JavaScript for...of Support.







Table of Contents






Introduction

JavaScript for...of loop

for...of with Arrays

for...of with Strings

for...of with Sets

for...of with Maps

User Defined Iterators

for...of with Generators

for...of Vs for...in











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Inheritance











Next Tutorial:

JS Proxies

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Iterators and Iterables

JavaScript Tutorial

JavaScript Generators

JavaScript Tutorial

JavaScript forEach()

JavaScript Tutorial

JavaScript for...in loop
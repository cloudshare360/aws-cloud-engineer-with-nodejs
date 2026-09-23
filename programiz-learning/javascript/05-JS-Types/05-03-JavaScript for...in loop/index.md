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

JavaScript for... of Loop


JavaScript Object.entries()


JavaScript Object.keys()


JavaScript for loop


JavaScript Getter and Setter


JavaScript Iterators and Iterables



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript for...in loop

















Before reading this tutorial, make sure you first learn about JavaScript objects.

The JavaScript `for...in` loop iterates over the keys of an object.

Here's a simple example of the `for...in` loop in JavaScript. Read the rest of the tutorial to learn more.

Example

`const student = {
name: "Monica",
class: 7
};

// loop through the keys of student object
for (let key in student) {

// display the key-value pairs
console.log(`${key} => ${student[key]}`);
};

// Output:
// name => Monica
// class => 7`

Here, the `for...in` loop iterates over the keys of the student object. In each iteration of the loop, the key variable stores a single key belonging to student.

Syntax of JavaScript for...in Loop

`for (key in object) {
// body of for...in
};`

Here,

object - The object whose keys we want to iterate over.

key - A variable that stores a single key belonging to object.

**Working of for...in Loop**

In the first iteration, the key variable is assigned the first key of object. The body of the loop is then executed.

In the second iteration, the key variable is assigned the next key of object. The body of the loop is then executed.

This process continues until there are no more keys over which to iterate.

**Note**: Once you get the keys of an object, you can easily find their corresponding values.

Example: JavaScript for...in Loop

`const salaries = {
Jack: 24000,
Paul: 34000,
Monica: 55000
};

// use for...in to loop through
// properties of salaries
for (let i in salaries) {

// access object key using [ ]
// add a $ symbol before the key
let salary = "$" + salaries[i];

// display the values
console.log(`${i}: ${salary}`);
};
`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











**Output**

Jack: $24000,
Paul: $34000,
Monica: $55000

In the above example, we used the `for...in` loop to iterate over the properties of the salaries object. Then, we added the string `$` to each value of the object.

**Note:** We have used the variable i instead of key because we can use any valid variable name.

More on JavaScript for...in Loop

JavaScript for...in With Strings

You can also use the `for...in` loop to iterate over string values. For example,

`const string = 'code';

// using for...in loop
for (let i in string) {
console.log(string[i]);
};`

**Output**

c
o
d
e

JavaScript for...in With Arrays

You can also use `for...in` with arrays. For example,

`// define array
const arr = ["hello", 1, "JavaScript"];

// using for...in loop
for (let x in arr) {
console.log(arr[x]);
};`

**Output**

hello
1
JavaScript

**Note**: You should not use `for...in` to iterate over an array where the index order is important. Instead, it's better to use the for...of loop.

**Also Read:**

JavaScript while and do...while loop

JavaScript for loop

JavaScript forEach()







Table of Contents






Introduction

Syntax of JavaScript for...in loop

Example: JavaScript for...in Loop










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Strings











Next Tutorial:

JS Numbers

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript for... of Loop

JavaScript Tutorial

JavaScript for loop

JavaScript Tutorial

JavaScript Getter and Setter

JavaScript Tutorial

JavaScript Iterators and Iterables
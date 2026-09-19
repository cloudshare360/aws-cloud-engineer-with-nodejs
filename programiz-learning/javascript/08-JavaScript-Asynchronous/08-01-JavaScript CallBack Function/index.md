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

Javascript setTimeout()


JavaScript Function and Function Expressions


Javascript setInterval()


Javascript Function call()


Javascript Function apply()


JavaScript Closures



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript CallBack Function

















A function is a block of code that performs a certain task when called. For example,

`// function
function greet(name) {
console.log('Hi' + ' ' + name);
}

greet('Peter'); // Hi Peter`

In the above program, a string value is passed as an argument to the `greet()` function.

In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function. For example,

`// function
function greet(name, callback) {
console.log('Hi' + ' ' + name);
callback();
}

// callback function
function callMe() {
console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);`

**Output**

Hi Peter
I am callback function

In the above program, there are two functions. While calling the `greet()` function, two arguments (a string value and a function) are passed.

The `callMe()` function is a callback function.

Benefit of Callback Function





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.

In this example, we are going to use the `setTimeout()` method to mimic the program that takes time to execute, such as data coming from the server.

Example: Program with setTimeout()

`//  program that shows the delay in execution

function greet() {
console.log('Hello world');
}

function sayName(name) {
console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');`

**Output**

Hello John
Hello world

As you know, the setTimeout() method executes a block of code after the specified time.

Here, the `greet()` function is called after **2000** milliseconds (**2** seconds). During this wait, the `sayName('John');` is executed. That is why Hello John is printed before Hello world.

The above code is executed asynchronously (the second function; `sayName()` does not wait for the first function; `greet()` to complete).

Example: Using a Callback Function

In the above example, the second function does not wait for the first function to be complete. However, if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function. For example,

`// Callback Function Example
function greet(name, myFunction) {
console.log('Hello world');

// callback function
// executed only after the greet() is executed
myFunction(name);
}

// callback function
function sayName(name) {
console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);`

**Output**

Hello world
Hello John

In the above program, the code is executed synchronously. The `sayName()` function is passed as an argument to the `greet()` function.

The `setTimeout()` method executes the `greet()` function only after **2** seconds. However, the `sayName()` function waits for the execution of the `greet()` function.

**Note**: The callback function is helpful when you have to wait for a result that takes time. For example, the data coming from a server because it takes time for data to arrive.

**Also Read:**

Javascript setInterval()








Table of Contents






Introduction

Benefits of Callback Function

Example: Using a Callback Function











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS setTimeout()











Next Tutorial:

JS Promise

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

Javascript setTimeout()

JavaScript Tutorial

Javascript setInterval()

JavaScript Tutorial

JavaScript Function and Function Expressions

JavaScript Tutorial

JavaScript Closures
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


JavaScript CallBack Function


JavaScript Date and Time


JavaScript Function and Function Expressions


JavaScript Closures


JavaScript try...catch...finally Statement



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



Javascript setInterval()

















In JavaScript, a block of code can be executed in specified time intervals. These time intervals are called timing events.

There are two methods for executing code at specific intervals. They are:

setInterval()

setTimeout()

In this tutorial, you will learn about the `setInterval()` method.

JavaScript setInterval()

The `setInterval()` method repeats a block of code at every given timing event.

The commonly used syntax of JavaScript setInterval is:

`setInterval(function, milliseconds);`

Its parameters are:

**function** - a function containing a block of code

**milliseconds** - the time interval between the execution of the function

The `setInterval()` method returns an **intervalID** which is a positive integer.

Example 1: Display a Text Once Every 1 Second

`// program to display a text using setInterval method
function greet() {
console.log('Hello world');
}

setInterval(greet, 1000);`

**Output**

Hello world
Hello world
Hello world
Hello world
Hello world
....

In the above program, the `setInterval()` method calls the `greet()` function every **1000** milliseconds(**1** second).





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Hence the program displays the text Hello world once every **1** second.

**Note**: The `setInterval()` method is useful when you want to repeat a block of code multiple times. For example, showing a message at a fixed interval.

Example 2: Display Time Every 5 Seconds

`// program to display time every 5 seconds
function showTime() {

// return new date and time
let dateTime= new Date();

// return the time
let time = dateTime.toLocaleTimeString();

console.log(time)
}

let display = setInterval(showTime, 5000);`

**Output**

"5:15:28 PM"
"5:15:33 PM"
"5:15:38 PM"
....

The above program displays the current time once every **5** seconds.

`new Date()` gives the current date and time. And `toLocaleTimeString()` returns the current time. To learn more about date and time, visit JavaScript Date and Time.

JavaScript clearInterval()

As you have seen in the above example, the program executes a block of code at every specified time interval. If you want to stop this function call, then you can use the `clearInterval()` method.

The syntax of `clearInterval()` method is:

`clearInterval(intervalID);`

Here, the `intervalID` is the return value of the `setInterval()` method.

Example 3: Use clearInterval() Method

`// program to stop the setInterval() method after five times

let count = 0;

// function creation
let interval = setInterval(function(){

// increasing the count by 1
count += 1;

// when count equals to 5, stop the function
if(count === 5){
clearInterval(interval);
}

// display the current time
let dateTime= new Date();
let time = dateTime.toLocaleTimeString();
console.log(time);

}, 2000);`

**Output**

4:47:41 PM
4:47:43 PM
4:47:45 PM
4:47:47 PM
4:47:49 PM

In the above program, the `setInterval()` method is used to display the current time every **2** seconds. The `clearInterval()` method stops the function call after **5** times.

You can also pass additional arguments to the `setInterval()` method. The syntax is:

`setInterval(function, milliseconds, parameter1, ....paramenterN);`

When you pass additional parameters to the `setInterval()` method, these parameters (`parameter1`, `parameter2`, etc.) will be passed to the specified **function**.

For example,

`// program to display a name
function greet(name, lastName) {
console.log('Hello' + ' ' + name + ' ' + lastName);
}

// passing argument to setInterval
setInterval(greet, 1000, 'John', 'Doe');`

**Output**

Hello John Doe
Hello John Doe
Hello John Doe
....

In the above program, two parameters `John` and `Doe` are passed to the `setInterval()` method. These two parameters are the arguments that will be passed to the function (here, ` greet()` function) that is defined inside the `setInterval()` method.

**Note:** If you only need to execute a function one time, it's better to use the setTimeout() method.







Table of Contents






Introduction

JavaScript setInterval()

JavaScript clearInterval()











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS async/await











Next Tutorial:

JS JSON

















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

JavaScript CallBack Function

JavaScript Tutorial

JavaScript Date and Time

JavaScript Tutorial

JavaScript Function and Function Expressions
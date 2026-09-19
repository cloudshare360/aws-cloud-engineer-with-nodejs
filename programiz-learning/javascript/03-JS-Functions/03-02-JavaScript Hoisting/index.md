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

JavaScript let Vs var


JavaScript Variable Scope


JavaScript console.log()


Javascript Function.name


JavaScript Variables and Constants


JavaScript Function and Function Expressions



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Hoisting

















In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.

Here is a simple example of variable hoisting in JavaScript. Read the rest of the tutorial to learn more.

Example

`// use test variable before declaring
console.log(test);

// declare and initialize test variable
var test = 5;

// Output: undefined`

Here, we can use the test variable before declaration because of variable hoisting. However, we get `undefined` as output because the variable hasn't been initialized at the time it's printed.

Hoisting in JavaScript

There are generally two types of hoistings in JavaScript:

Variable Hoisting

Function Hoisting

Let's understand each of them in detail.

Variable Hoisting

In JavaScript, the behavior of hoisting varies depending on whether a variable is declared using `var`, `let`, or `const`.

Hoisting With 'var'

When we declare a variable using `var`, it is hoisted to the top of its current scope. For example,

`// use the message variable before declaration
console.log(message);

// variable declaration using var keyword
var message;

// Output: undefined`

In the above example, we can use the message variable before it is declared. This is because the variable is hoisted with the default value of `undefined`.

Thus, the above program is equivalent to:

`var message;
console.log(message);

// Output: undefined`

Hoisting With 'let' and 'const'

When we declare a variable using `let` or `const`, it is hoisted to the top of its current scope. However, the variable does not have a default value when it is hoisted (unlike when declared using `var`).

Let's take a look at the example below.

`// use the message variable before declaration
console.log(message);

// variable declaration using let keyword
let message;`

**Output**

ReferenceError: Cannot access 'message' before initialization





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Here, the error occurs because a variable declared with `let` is not assigned any default value when hoisted.

**Note:** We know the message variable was hoisted because the error message `"Cannot access 'message' before initialization"` indicates that JavaScript is aware that message exists.

Had the variable not been hoisted, we'd get a different error, i.e., `ReferenceError: message is not defined`.

Function Hoisting

In JavaScript, function hoisting allows us to call the function before its declaration.

`// function call
greeting();

// function declaration
function greeting() {
console.log("Welcome to Programiz.");
}`

**Output**

Welcome to Programiz.

In the above example, we can call `greeting()` before it is declared because of hoisting.

Variable hoisting inside a function.

In JavaScript, a variable is hoisted only to the top of its current scope. Let's look at how this works inside functions:

`function greet() {
message = "hello";
// use the variable message before declaration
console.log(message);
var message;
}

greet();

// attempt to access message outside the function
console.log(message);`

**Output**

hello
ERROR!
... ... ...
ReferenceError: message is not defined

In the above example, the message variable is hoisted to the top of the `greet()` function and becomes a local variable.

But when we try to access message outside the function, we get an error because the variable is hoisted only to the top of the function and not to the global scope.

**Note:** To learn more about local and global variables, visit JavaScript Variable Scope.

Function Expressions are not hoisted.

When we use a function expression, we cannot call it before its declaration. For example,

`// call greet() function before declaration
greet();

// function expression
var greet = function() {
console.log("Programiz");
}`

**Output**

TypeError: greet is not a function

Initializations Are Not Hoisted

JavaScript moves the declaration of variables to the top of its scope before the code runs.

However, the initialization part stays in the original place in the code. For example,

`// display number
console.log(number);
var number = 5;

// Output: undefined`

The above program is equivalent to:

`var number;
console.log(number);
number = 5;`

As you can see, only the declaration is moved to the top.

Hence, the value of the number variable is `undefined` because it is printed without initializing it.

**Notes**:

Generally, hoisting is not performed in other programming languages like Python, C, C++, and Java.

Hoisting can cause undesirable outcomes in your program. So, it's best to avoid this practice.

**Also Read:**

JavaScript Variables and Constants

JavaScript let Vs var







Table of Contents






Introduction

Variable Hoisting

Function Hoisting











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Variable Scope











Next Tutorial:

JS Recursion

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript let Vs var

JavaScript Tutorial

JavaScript Variable Scope

JavaScript Tutorial

JavaScript console.log()

JavaScript Tutorial

JavaScript Variables and Constants
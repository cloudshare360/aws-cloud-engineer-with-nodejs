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

JavaScript CallBack Function


JavaScript Function and Function Expressions


Javascript Function call()


Javascript Function apply()


Javascript Function.name


JavaScript Constructor Function



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Closures

















Before you learn about closures, you need to understand two concepts:

Nested Function

Returning a function

JavaScript Nested Function

In JavaScript, a function can also contain another function. This is called a nested function. For example,

`// nested function example

// outer function
function greet(name) {

// inner function
function displayName() {
console.log('Hi' + ' ' + name);
}

// calling inner function
displayName();
}

// calling outer function
greet('John'); // Hi John`

In the above program, the `greet()` function contains the `displayName()` function inside of it.

Returning a Function

In JavaScript, you can also return a function within a function. For example,

`function greet(name) {
function displayName() {
console.log('Hi' + ' ' + name);
}

// returning a function
return displayName;
}

const g1 = greet('John');
console.log(g1); // returns the function definition
g1(); // calling the function`

**Output**

function displayName() {
console.log('Hi' + ' ' + name);
}
Hi John

In the above program, the `greet()` function is returning the `displayName` function definition.

Here, the returned function definition is assigned to the g1 variable. When you print g1 using `console.log(g1)`, you will get the function definition.

To call the function stored in the g1 variable, we use `g1()` with parentheses.

JavaScript Closures

In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. For example,

`// javascript closure example

// outer function
function greet() {

// variable defined outside the inner function
let name = 'John';

// inner function
function displayName() {

// accessing name variable
return 'Hi' + ' ' + name;

}

return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value`

**Output**

function displayName() {
// accessing name variable
return 'Hi' + ' ' + name;
}
Hi John

In the above example, when `greet()` function is called, it returns the function definition of `displayName`.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Here, `g1` is a reference to the `displayName()` function.

When `g1()` is called, it still has access to the `greet()` function.

When we run `console.log(g1)`, it returns the function definition.

The concept of closure exists for other programming languages like Python, Swift, etc.

Let's have a look at another example.

`// closure example

function calculate(x) {
function multiply(y) {
return x * y;
}
return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8`

In the above program, the `calculate()` function takes a single argument `x` and returns the function definition of the `multiply()` function. The `multiply()` function takes a single argument `y` and returns `x * y`.

Both `multiply3` and `multiply4` are closures.

The `calculate()` function is called passing a parameter `x`. When `multiply3(6)` and `multiply4(2)` are called, the `multipy()` function has access to the passed x argument of the outer `calculate()` function.

Data Privacy

JavaScript closure helps in the data privacy of the program. For example,

`let a = 0;
function sum() {
function increaseSum() {

// the value of a is increased by 1
return a = a + 1;
}
return increaseSum;
}

const x = sum();
console.log(x()); // 1
console.log(x()); // 2
console.log(x()); // 3
a = a + 1;
console.log(a); // 4`

In the above example, the `sum()` function returns the function definition of the `increaseSum()` function.

The a variable is increased inside the `increaseSum()` function. However, the value of the a variable can also be changed outside of the function. In this case, `a = a + 1;` changes the value of the variable outside the function.

Now, if you want the a variable to be increased only inside the function, you can use a closure. For example,

`function sum() {
let a = 0;
function increaseSum() {

// the value of a is increased by 1
return a = a + 1;
}
return increaseSum;
}

let x = sum();
let a = 5;
console.log(x()); // 1
console.log(x()); // 2
console.log(a); // 5`

In the above example, the `sum()` function sets the value of a to **0** and returns the `increaseSum()` function.

Because of the closure, even though `sum()` is already executed, `increaseSum()` still has access to a and can add **1** to a every time `x()` is called.

And the a variable is private to the `sum()` function. It means that the a variable can only be accessed inside of the `sum()` function.

Even if you declare `a` and use it, it does not affect the `a` variable inside of the `sum()` function.

**Note**: Generally, closures are used for data privacy.







Table of Contents






JavaScript Nested Function

Returning a Function

JavaScript Closures

Data Privacy











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Date and Time











Next Tutorial:

JS this

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript CallBack Function

JavaScript Tutorial

JavaScript Function and Function Expressions

JavaScript Tutorial

JavaScript Modules

JavaScript Tutorial

JavaScript Variable Scope
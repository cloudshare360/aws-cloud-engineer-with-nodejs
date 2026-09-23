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

JavaScript null and undefined


JavaScript Function and Function Expressions


Javascript Function call()


Javascript Function.length


JavaScript ES6


JavaScript CallBack Function



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Default Parameters

















Starting from **JavaScript ES6**, we can provide default values for function parameters.

These default values are used when the function is called without passing the corresponding arguments.

Here's a quick example of JavaScript default parameters. You can read the rest of the tutorial for more details.

Example

`function greet(name = "Guest") {
console.log(`Hello, ${name}!`);
}

greet();

// Output: Hello, Guest!`

In this example, the `greet()` function has a default parameter name with the string value `Guest`. Since we have not passed any argument to the function, it uses the default value.

Example: JavaScript Default Parameters

`function sum(x = 3, y = 5) {
// return sum
return x + y;
}

// pass arguments to x and y
var result = sum(5, 15);
console.log(`Sum of 5 and 15: ${result}`);

// pass argument to x but not to y
result = sum(7);
console.log(`Sum of 7 and default value (5): ${result}`);

// pass no arguments
// use default values for x and y
result = sum();
console.log(`Sum of default values (3 and 5): ${result}`);`

**Output**

Sum of 5 and 15: 20
Sum of 7 and default value (5): 12
Sum of default values (3 and 5): 8

In the above example, the default value of x is **3** and the default value of y is **5**.

`sum(5, 15)` - When both arguments are passed, x takes **5** and y takes **15**.

`sum(7)` - When **7** is passed, x takes **7** and y takes the default value **5**.

`sum()` - When no argument is passed, x and y take the default values **3** and **5**, respectively.

How default arguments work in JavaScript

More on Default Parameters

Pass One Parameter as the Default Value of Another

In JavaScript, you can pass one parameter as the default value for another. For example,

`function sum(x = 1, y = x,  z = x + y) {
console.log( x + y + z );
}

sum();

// Output: 4`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











In the above example,

The default value of x is **1**.

The default value of y is set to the x parameter.

The default value of z is the sum of x and y.

So when `sum()` is called without any arguments, it uses these default values, leading to the calculation `1 + 1 + 2 = 4`. Hence, the output is **4.**

Pass Function Value as Default Value

We can also pass a function as a default value in JavaScript. For example,

`// use a function in default value expression

const sum = () => 15;

const calculate = function( x, y = x * sum() ) {
return x + y;
}

const result = calculate(10);
console.log(result);

// Output: 160`

Here,

**10** is passed to the `calculate()` function.

x becomes **10**, and y becomes **150** (the `sum()` function returns **15**).

The result will be **160**.

Pass undefined Value

In JavaScript, when you pass undefined to a default parameter function, the function takes the default value. For example,

`function test(x = 1) {
console.log(x);
}

// pass undefined
// takes default value 1
test(undefined);

// Output: 1`

**Also Read:**

JavaScript Function and Function Expressions

JavaScript ES6







Table of Contents






Introduction

Example: JavaScript Default Parameters










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Arrow Function











Next Tutorial:

JS Template Literals

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript null and undefined

JavaScript Tutorial

JavaScript Function and Function Expressions

JavaScript Tutorial

JavaScript ES6

JavaScript Tutorial

JavaScript Modules
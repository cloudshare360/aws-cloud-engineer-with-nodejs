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

JavaScript Number toString()


JavaScript Number toFixed()


JavaScript Data Types


JavaScript Number toPrecision()


JavaScript Number.NaN


JavaScript Math.fround()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Number

















In JavaScript, numbers are used to represent numerical values. They can be whole numbers (like **5**, **10**, **100**) or decimal numbers (like **3.13**, **0.5**, **10.75**). For example,

`let num1 = 5;
let num2 = 3.13;

console.log(num1); // 5
console.log(num2); // 3.13`

JavaScript NaN

`NaN` (Not a Number) is a special value that is returned when a mathematical operation cannot produce a meaningful numeric result.

Performing arithmetic operations (except addition) on numeric values and strings results in `NaN`. For example,

`let num = 4 - "hello";
console.log(num); // NaN`

NaN is a Number

When the typeof operator is used for NaN value, it gives `number` as an output. For example,

`let num = 4 - "hello";

console.log(num); // NaN
console.log(typeof num); // number`

JavaScript isNaN() Method

The built-in `isNaN()` function can be used to find if a value is a number. For example,

`let num1 = isNaN(9);
console.log(num1); // false

let num2 = isNaN(4 - "hello");
console.log(num2); // true`

JavaScript Infinity

`Infinity` is a special value that signifies an amount larger than any finite number. For example,

`let num1 = 2 / 0;
console.log(num1); // Infinity

let num2 = -2 / 0;
console.log(num2); // -Infinity`

Here, dividing a positive number by **0** yields `Infinity`, while dividing a negative number by **0** results in `-Infinity`.

Exponential Numbers

You can use the exponential notation `e` to represent numbers that are very large or very small. For example,

`let num1 = 5e9;
console.log(num1);  // 5000000000

let num2 = 5e-5;
console.log(num2);  // 0.00005`

Hexadecimal Numbers

Numbers can also be denoted in hexadecimal notation. For example,

`let num1 = 0xff;
console.log(num1);  // 255

let num2 = 0x00;
console.log(num2);  // 0`

JavaScript Number Methods

Here is a list of built-in number methods in JavaScript.

Method
Description

isNaN()
Determines whether the passed value is `NaN`.

isFinite()
Determines whether the passed value is a finite number.

isInteger()
Determines whether the passed value is an integer.

isSafeInteger()
Determines whether the passed value is a safe integer.

parseFloat()
Converts the numeric floating string to a floating-point number.

parseInt()
Converts the numeric string to an integer.

toExponential()
Returns a string value for a number in exponential notation.

toFixed()
Returns a string value for a number in fixed-point notation.

toPrecision()
Returns a string value for a number to a specified precision.

toString()
Returns a string value in a specified radix (base).

valueOf()
Returns the number's value.

toLocaleString()
Returns a string with a language-sensitive representation of a number.

Example: JavaScript Number Methods

`// check if num1 is integer
let num1 = 12;
console.log(Number.isInteger(num1)); // true

// check if num2 is NaN
let num2 = NaN;
console.log(Number.isNaN(num2)); // true

// display up to two decimal points
let num3 = 5.1234;
console.log(num3.toFixed(2)); // 5.12`

More on JavaScript Numbers

+ Operator With Numbers

When `+` is only used with numbers, it adds those numbers. For example,

`let num = 4 + 9;
console.log(num);  // 13
console.log(typeof num);  // number`

When `+` is used with numbers and strings, it concatenates them by converting the number to a string. For example,

`let string_num = "4" + 9;
console.log(string_num);  // 49
console.log(typeof string_num);  // string`

Numeric Operations on Numeric Strings





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











When a numeric string is used with other numeric operators, the numeric string is converted to a number. For example,

`let num = "5" - 2;
console.log(num);  // 3

num = "5" / 2;
console.log(num);  // 2.5

num = "5" * 2;
console.log(num);  // 10`

JavaScript Precision Problems

In JavaScript, numbers (especially decimals) aren't always stored accurately, leading to precision problems. For example,

`let num = 0.1 + 0.2;
console.log(num); // 0.30000000000000004`

The result should be **0.3** instead of **0.3000000000004**.

This error occurs because JavaScript stores numbers in binary form to represent decimal digits. And decimal numbers can't be represented in binary form exactly.

We can mitigate the precision problem in the following ways:

**1. Converting Floating-Point Numbers to Integers**

`let num = (0.1 * 10 + 0.2 * 10) / 10;
console.log(num); // 0.3`

**2. Using the toFixed() Method**

`let num = 0.1 + 0.2;
console.log(num.toFixed(2)); // 0.30`

Here, `toFixed(2)` rounds up the decimal number to two decimal values.

JavaScript BigInt

The `number` type can only represent values less than **(2^53 - 1)** and more than **-(2^53 - 1)**.

However, if you need to use a larger or smaller number than that, you can use the `BigInt` data type. `BigInt` allows you to do calculations with any size or precision.

A `BigInt` number is created by appending `n` to the end of an integer. For example,

`// BigInt value
let value = 900719925124740998n;

// add two big integers
let value1 = value + 1n;
console.log(value1);

// Output: 900719925124740999n`

**Note:** BigInt was introduced in a newer version of JavaScript and is not supported by many browsers. To learn more, visit JavaScript BigInt support.

JavaScript Number() Function

The `Number()` function converts data of various types to numbers. For example,

`let variable1 = "23"; // string
let variable2 = true; // boolean

//convert to number
let result1 = Number(variable1);
let result2 = Number(variable2);

console.log(result1); // 23
console.log(result2); // 1`

To learn more about number conversion, visit JavaScript Type Conversion.

Number Objects

In JavaScript, numbers can be represented either as primitive values or as instances of the `Number` object.

`Number` objects can be created using the `new` keyword. For example,

`// create a number object
let num = new Number(45);

console.log(num);
console.log(typeof num);`

**Output**

[Number: 45]
object

**Note**: Avoid using `Number` objects since they slow down the program.

**Also Read:**

JavaScript String

JavaScript Symbol







Table of Contents






Introduction

JavaScript NaN

JavaScript Infinity

JavaScript Number Methods










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS for...in











Next Tutorial:

JS Symbols

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Data Types

JavaScript Tutorial

JavaScript Type Conversion

JavaScript Tutorial

JavaScript typeof Operator

JavaScript Tutorial

JavaScript null and undefined
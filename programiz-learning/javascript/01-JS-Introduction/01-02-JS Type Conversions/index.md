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

JavaScript Booleans


JavaScript null and undefined


JavaScript typeof Operator


JavaScript Number


JavaScript Data Types


Javascript isNaN()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Type Conversion

















In programming, type conversion is the process of converting data of one type to another. For example, converting string data to number.

There are two types of type conversion in JavaScript:

**Implicit Conversion** - Automatic type conversion.

**Explicit Conversion** - Manual type conversion.

JavaScript Implicit Conversion

In certain situations, JavaScript automatically converts data of one type to another (to the right type). This is known as implicit conversion. For example,

`// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2;
console.log(result, "-", typeof(result));

result = "3" + true;
console.log(result, "-", typeof(result));

result = "3" + null;
console.log(result, "-", typeof(result));`

**Output**

32 - string
3true - string
3null - string

In this example, we performed implicit type conversion using the `+` operator with a string and another data type.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Here,

`"3" + 2` - Converts the number **2** to string and joins it to `"3"`, resulting in the string `"32"`.

`"3" + true` - Converts the boolean `true` to string and joins it to `"3"`, resulting in the string `"3true"`.

`"3" + null` - Converts null to string and joins it to `"3"`, resulting in the string `"3null"`.

**Note**: The typeof operator gives the data type of the variable.

JavaScript Explicit Conversion

In explicit type conversion, you manually convert one type of data into another using built-in functions. For example,

`let result;

// convert string to number
result = Number("5");
console.log(result, "-", typeof(result));

// convert boolean to string
result = String(true);
console.log(result, "-", typeof(result));

// convert number to boolean
result = Boolean(0);
console.log(result, "-", typeof(result));`

**Output**

5 - number
true - string
false - boolean

Here,

Number("5") changes the string `"5"` into the number **5**.

String(true) turns the boolean `true` into the string `"true"`.

Boolean(0) converts the number **0** to the boolean `false` because **0** is considered a **falsy** value in JavaScript.

More on JavaScript Type Conversion

Implicit Conversion to Number

When you use arithmetic operators like `-`, `*`, or `/` with numeric strings, JavaScript automatically changes those strings into numbers.

Let's look at an example.

`// numeric string used with - , / , *
// results in number type

let result;

result = "4" - "2";
console.log(result, "-", typeof(result));

result = "4" - 2;
console.log(result, "-", typeof(result));

result = "4" * 2;
console.log(result, "-", typeof(result));

result = "4" / 2;
console.log(result, "-", typeof(result));`

**Output**

2 - number
2 - number
8 - number
2 - number

JavaScript Type Conversion Table

The table shows the conversion of different values to `String`, `Number`, and `Boolean` in JavaScript.

Value
String Conversion
Number Conversion
Boolean Conversion

`1`
`"1"`
`1`
`true`

`0`
`"0"`
`0`
`false`

`"1"`
`"1"`
`1`
`true`

`"0"`
`"0"`
`0`
`true`

`"ten"`
`"ten"`
`NaN`
`true`

`true`
`"true"`
`1`
`true`

`false`
`"false"`
`0`
`false`

`null`
`"null"`
`0`
`false`

`undefined`
`"undefined"`
`NaN`
`false`

`''`
`""`
`0`
`false`

`' '`
`" "`
`0`
`true`

You will learn about the conversion of objects and arrays to other data types in later tutorials.

Rules for Type Conversion

Understanding the rules for type conversion is crucial for avoiding unexpected results in your JavaScript code.

Here are some key points:

Operations involving binary `+` will convert numbers to strings in the case of string and number concatenation.

Logical operations convert operands to boolean values.

When subtracting a string from another string, JavaScript attempts to convert both strings to numbers.

When you change an object's type, some data might get lost.

**Also Read:**

JavaScript Dates to Numbers

JavaScript Dates to Strings







Table of Contents






Introduction

JavaScript Implicit Conversion

JavaScript Explicit Conversion










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Comments











Next Tutorial:

JS Comparison Operator

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Booleans

JavaScript Tutorial

JavaScript null and undefined

JavaScript Tutorial

JavaScript typeof Operator

JavaScript Tutorial

JavaScript Number
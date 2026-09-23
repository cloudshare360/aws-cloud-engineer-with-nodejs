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

JavaScript try...catch...finally Statement


JavaScript Generators


JavaScript async/await


JavaScript "use strict"


JavaScript Keywords and Identifiers


JavaScript Promise and Promise Chaining



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript throw Statement

















In the previous tutorial, you learned to handle exceptions using JavaScript try..catch statement. The try and catch statements handle exceptions in a standard way which is provided by JavaScript. However, you can use the `throw` statement to pass user-defined exceptions.

In JavaScript, the `throw` statement handles user-defined exceptions. For example, if a certain number is divided by **0**, and if you need to consider `Infinity` as an exception, you can use the `throw` statement to handle that exception.

JavaScript throw statement

The syntax of throw statement is:

`throw expression;`

Here, `expression` specifies the value of the exception.

For example,

`const number = 5;
throw number/0; // generate an exception when divided by 0`

**Note**: The expression can be string, boolean, number, or object value.

JavaScript throw with try...catch





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











The syntax of `try...catch...throw` is:

`try {
// body of try
throw exception;
}
catch(error) {
// body of catch
}`

**Note**: When the throw statement is executed, it exits out of the block and goes to the `catch` block. And the code below the `throw` statement is not executed.

Example 1: try...catch...throw Example

`const number = 40;
try {
if(number > 50) {
console.log('Success');
}
else {

// user-defined throw statement
throw new Error('The number is low');
}

// if throw executes, the below code does not execute
console.log('hello');
}
catch(error) {
console.log('An error caught');
console.log('Error message: ' + error);
}`

**Output**

An error caught
Error message: Error: The number is low

In the above program, a condition is checked. If the number is less than **51**, an error is thrown. And that error is thrown using the `throw` statement.

The `throw` statement specifies the string `The number is low` as an expression.

**Note**: You can also use other built-in error constructors for standard errors: `TypeError`, `SyntaxError`, `ReferenceError`, `EvalError`, `InternalError`, and `RangeError`.

For example,

`throw new ReferenceError('this is reference error');`

Rethrow an Exception

You can also use `throw` statement inside the `catch` block to rethrow an exception. For example,

`const number = 5;
try {
// user-defined throw statement
throw new Error('This is the throw');

}
catch(error) {
console.log('An error caught');
if( number + 8 > 10) {

// statements to handle exceptions
console.log('Error message: ' + error);
console.log('Error resolved');
}
else {
// cannot handle the exception
// rethrow the exception
throw new Error('The value is low');
}
}`

**Output**

An error caught
Error message: Error: This is the throw
Error resolved

In the above program, the `throw` statement is used within the `try` block to catch an exception. And the `throw` statement is rethrown in the `catch` block which gets executed if the `catch` block cannot handle the exception.

Here, the `catch` block handles the exception and no error occurs. Hence, the `throw` statement is not rethrown.

If the error was not handled by the catch block, the throw statement would be rethrown with error message Uncaught Error: The value is low







Table of Contents






Introduction

JavaScript throw statement

JavaScript throw with try...catch

Rethrow an Exception











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS try...catch...finally











Next Tutorial:

JS Modules

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript try...catch...finally Statement

JavaScript Tutorial

JavaScript Generators

JavaScript Tutorial

JavaScript async/await

JavaScript Tutorial

JavaScript "use strict"
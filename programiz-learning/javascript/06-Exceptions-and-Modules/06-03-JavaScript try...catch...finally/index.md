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

JavaScript throw Statement


JavaScript async/await


JavaScript Promise and Promise Chaining


JavaScript "use strict"


JavaScript let Vs var


JavaScript Keywords and Identifiers



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript try...catch...finally Statement

















The `try`, `catch` and `finally` blocks are used to handle exceptions (a type of an error). Before you learn about them, you need to know about the types of errors in programming.

Types of Errors

In programming, there can be two types of errors in the code:

**Syntax Error**: Error in the syntax. For example, if you write `consol.log('your result');`, the above program throws a syntax error. The spelling of `console` is a mistake in the above code.

**Runtime Error**: This type of error occurs during the execution of the program. For example,

calling an invalid function or a variable.

These errors that occur during runtime are called **exceptions**. Now, let's see how you can handle these exceptions.

JavaScript try...catch Statement

The `try...catch` statement is used to handle the exceptions. Its syntax is:

`try {
// body of try
}
catch(error) {
// body of catch
}`

The main code is inside the `try` block. While executing the `try` block, if any error occurs, it goes to the `catch` block. The `catch` block handles the errors as per the catch statements.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











If no error occurs, the code inside the `try` block is executed and the `catch` block is skipped.

Example 1: Display Undeclared Variable

`// program to show try...catch in a program

const numerator= 100, denominator = 'a';

try {
console.log(numerator/denominator);

// forgot to define variable a
console.log(a);
}
catch(error) {
console.log('An error caught');
console.log('Error message: ' + error);
}`

**Output**

NaN
An error caught
Error message: ReferenceError: a is not defined

In the above program, a variable is not defined. When you try to print the a variable, the program throws an error. That error is caught in the `catch` block.

JavaScript try...catch...finally Statement

You can also use the `try...catch...finally` statement to handle exceptions. The `finally` block executes both when the code runs successfully or if an error occurs.

The syntax of `try...catch...finally` block is:

`try {
// try_statements
}
catch(error) {
// catch_statements
}
finally() {
// codes that gets executed anyway
}`

Example 2: try...catch...finally Example

`const numerator= 100, denominator = 'a';

try {
console.log(numerator/denominator);
console.log(a);
}
catch(error) {
console.log('An error caught');
console.log('Error message: ' + error);
}
finally {
console.log('Finally will execute every time');
}`

**Output**

NaN
An error caught
Error message: ReferenceError: a is not defined
Finally will execute every time

In the above program, an error occurs and that error is caught by the `catch` block. The `finally` block will execute in any situation ( if the program runs successfully or if an error occurs).

**Note**: You need to use `catch` or `finally` statement after `try` statement. Otherwise, the program will throw an error Uncaught SyntaxError: Missing catch or finally after try.

JavaScript try...catch in setTimeout

The `try...catch` won't catch the exception if it happened in "**timed**" code, like in setTimeout(). For example,

`try {
setTimeout(function() {
// error in the code
}, 3000);
} catch (e) {
console.log( "won't work" );
}`

The above `try...catch` won't work because the engine has already left the `try..catch` construct and the function is executed later.

The `try..catch` block must be inside that function to catch an exception inside a timed function. For example,

`setTimeout(function() {
try {
// error in the code
} catch {
console.log( "error is caught" );
}
}, 3000);`

You can also use the `throw` statement with the `try...catch` statement to use user-defined exceptions. For example, a certain number is divided by **0**. If you want to consider `Infinity` as an error in the program, then you can throw a user-defined exception using the `throw` statement to handle that condition.

**Also Read:**

JavaScript throw Statement








Table of Contents






Introduction

Types of Errors

JavaScript try...catch Statement

try...catch...finally Statement

try...catch in setTimeout











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Symbols











Next Tutorial:

JS throw

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript throw Statement

JavaScript Tutorial

JavaScript async/await

JavaScript Tutorial

JavaScript Promise and Promise Chaining

JavaScript Tutorial

JavaScript "use strict"
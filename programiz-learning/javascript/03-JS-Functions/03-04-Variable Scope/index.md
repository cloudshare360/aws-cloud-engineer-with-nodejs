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


JavaScript Hoisting


JavaScript this


JavaScript "use strict"


JavaScript Variables and Constants


JavaScript console.log()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Variable Scope

















In JavaScript, the scope of a variable determines where it can be accessed within the code.

Variables can be declared in different scopes:

Global Scope

Local (Function) Scope

Block-Level Scope

For example,

`function addNumbers() {
var sum = 5 + 4;
}`

Here, the sum variable is created inside the `addNumbers()` function.

So, it's accessible only within that function (local or function scope). This kind of variable is known as a **local variable**.

**Note:** Based on the scope they're declared in, variables can be classified as:

Global Variables

Local Variables

Block-Level Variables

JavaScript Local Variables

When variables are declared inside a function, they have a local scope and are accessible only within that function.

These types of variables are called local variables. For example,

`function greet() {

// local variable
var message = "Hello";


console.log(`Local: ${message}`);
}

greet();

// try to access message variable
// outside the greet() function
console.log(`Global: ${message}`);`

**Output**

Local: Hello
ERROR!
... ... ...
ReferenceError: message is not defined

Here, the message variable is local to the `greet()` function. So, it can only be accessed within that function.

That's why we get an error when we try to access it outside the `greet()` function.

To fix this issue, we can make the message variable global.

JavaScript Global Variables

In JavaScript, a variable declared outside any function or in the global scope is known as a global variable.

A global variable can be accessed both inside and outside of functions. For example,

`// declare global variable
var message = "Hello";

function greet() {
console.log(`Local: ${message}`);
}

greet();

console.log(`Global: ${message}`);`

**Output**

Local: Hello
Global: Hello





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Here, we can access the message variable from outside of the `greet()` function.

This is possible because we have created the message variable in the global scope (outside the function).

Thus, message will be accessible from any scope (region) of the program.

Change the Value of a Global Variable Inside a Function

The value of a global variable can be changed inside a function. For example,

`// Program to show the change in global variable

let a = "hello";

function greet() {
// change value of global variable a
a = 3;
}

// before the function call
console.log(a);
// Output: hello

greet();

//after the function call
console.log(a);
// Output: 3`

Here, we initialized the global variable a with the string value `hello`. Then, we changed its value to **3** inside the `greet()` function.

**Note**: It is a good practice to avoid using global variables because the value of a global variable can change in different areas of the program. This can lead to unknown results.

Use Variables Without Declaration

In JavaScript, a variable can also be used without declaring it.

If a variable is used without declaring it, that variable automatically becomes a global variable. For example,

`function greet() {
a = "hello"
}

greet();

console.log(a); // hello`

In the above program, variable a is a global variable.

Had the variable been declared using `let a = "hello"`, the program would have thrown an error.

**Note**: JavaScript has a strict mode in which a variable cannot be used without declaring it.

JavaScript Block-Level Variables

JavaScript ES6 introduced block-level scoping with the `let` and `const` keywords.

Block-level variables are accessible only within the block `{}` they are defined in, which can be smaller than a function's scope. For example,

`function display_scopes() {
// declare variable in local scope
let message = "local";

if (true) {

// declare block-level variable
let message = "block-level";

console.log(`inner scope: ${message}`);
}

console.log(`outer scope: ${message}`);
}

display_scopes();`

**Output**

inner: block-level
outer: local

In this example, we have created two separate message variables:

**Block-Level:** The variable inside the if block (visible only there).

**Local-Level:** The variable inside the `display_scopes()` function.

let is Block-Scoped

The `let` keyword is block-scoped (the variable can be accessed only in the immediate block).

Let's look at an example.

`// Program showing block-scoped concept

// global variable
let a = "Hello";

function greet() {

// local variable
let b = "World";

console.log(a + " " + b);

if (b == "World") {

// block-scoped variable
let c = "hello";

console.log(a + " " + b + " " + c);
}

// variable c cannot be accessed here
console.log(a + " " + b + " " + c);
}

greet();`

**Output**

Hello World
Hello World hello
ERROR!
... ... ...
ReferenceError: c is not defined

Here,

a is a global variable. It can be accessed anywhere in the program.

b is a local variable. It can be accessed only inside the `greet()` function.

c is a block-scoped variable. It can be accessed only inside the `if` block.

Hence, in the above program, the first two console.log() statements work without any issues.

However, we get an error when trying to access the block-scoped variable c outside of the `if` statement.

**Also Read:**

JavaScript Variables and Constants

JavaScript Function and Function Expressions







Table of Contents






Introduction

JavaScript Local Variables

JavaScript Global Variables

JavaScript Block-Level Variables










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Functions











Next Tutorial:

JS Hoisting

















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

JavaScript Hoisting

JavaScript Tutorial

JavaScript this

JavaScript Tutorial

JavaScript "use strict"
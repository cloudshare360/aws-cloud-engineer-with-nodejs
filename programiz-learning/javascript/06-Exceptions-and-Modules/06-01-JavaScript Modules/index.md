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

JavaScript ES6


JavaScript this


JavaScript CallBack Function


JavaScript Classes


JavaScript Function and Function Expressions


JavaScript Keywords and Identifiers



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Modules

















As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, you can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.

Module is a file that contains code to perform a specific task. A module may contain variables, function, classes etc. Let's see an example,

Suppose, a file named **greet.js** contains the following code:

`// exporting a function
export function greetPerson(name) {
return `Hello ${name}`;
}`

Now, to use the code of **greet.js** in another file, you can use the following code:

`// importing greetPerson from greet.js file
import { greetPerson } from './greet.js';

// using greetPerson() defined in greet.js
let displayName = greetPerson('Jack');

console.log(displayName); // Hello Jack`

Here,

The `greetPerson()` function in the **greet.js** is exported using the `export` keyword


`export function greetPerson(name) {
...
}`


Then, we imported `greetPerson()` in another file using the `import` keyword. To import functions, objects, etc., you need to wrap them around `{ }`.

`import { greet } from '/.greet.js';`


**Note**: You can only access exported functions, objects, etc. from the module. You need to use the `export` keyword for the particular function, objects, etc. to import them and use them in other files.

Export Multiple Objects

It is also possible to export multiple objects from a module. For example,

In the file **module.js**

`// exporting the variable
export const name = 'JavaScript Program';

// exporting the function
export function sum(x, y) {
return x + y;
}`

In main file,

`import { name, sum } from './module.js';

console.log(name);
let add = sum(4, 9);
console.log(add); // 13`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Here,

`import { name, sum } from './module.js';`

This imports both the name variable and the `sum()` function from the **module.js** file.

Renaming imports and exports

If the objects (variables, functions etc.) that you want to import are already present in your main file, the program may not behave as you want. In this case, the program takes value from the main file instead of the imported file.

To avoid naming conflicts, you can rename these functions, objects, etc. during the export or during the import .

1. Rename in the module (export file)

`// renaming import inside module.js
export {
function1 as newName1,
function2 as newName2
};

// when you want to use the module
// import in the main file
import { newName1, newName2 } from './module.js';`

Here, while exporting the function from **module.js** file, new names (here, newName1 & newName2 ) are given to the function. Hence, when importing that function, the new name is used to reference that function.

2. Rename in the import file

`// inside module.js
export {
function1,
function2
};

// when you want to use the module
// import in the required file with different name

import { function1 as newName1, function2 as newName2 } from './module.js';`

Here, while importing the function, the new names (here, newName1 & newName2 ) are used for the function name. Now you use the new names to reference these functions.

Default Export

You can also perform default export of the module. For example,

In the file **greet.js**:

`// default export
export default function greet(name) {
return `Hello ${name}`;
}

export const age = 23;`

Then when importing, you can use:

`import random_name from './greet.js';`

While performing default export,

random_name is imported from `greet.js`. Since, `random_name` is not in `greet.js`, the default export (`greet()` in this case) is exported as `random_name`.

You can directly use the default export without enclosing curly brackets `{}`.

**Note**: A file can contain multiple exports. However, you can only have one default export in a file.

Modules Always use Strict Mode

By default, modules are in strict mode. For example,

`// in greet.js
function greet() {
// strict by default
}

export greet();`

Benefit of Using Module

The code base is easier to maintain because different code having different functionalities are in different files.

Makes code reusable. You can define a module and use it numerous times as per your needs.

The use of import/export may not be supported in some browsers. To learn more, visit JavaScript import/export Support.







Table of Contents






Introduction

Export Multiple Objects

Renaming imports & exports

Default Export

Modules & Strict Mode

Benefit of Modules











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS throw











Next Tutorial:

JS ES6

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript ES6

JavaScript Tutorial

JavaScript this

JavaScript Tutorial

JavaScript Classes

JavaScript Tutorial

JavaScript CallBack Function
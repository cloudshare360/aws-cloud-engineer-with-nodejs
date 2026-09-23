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

JavaScript Destructuring Assignment


JavaScript Promise and Promise Chaining


JavaScript async/await


JavaScript Constructor Function


JavaScript Spread Operator


JavaScript this



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript ES6

















**JavaScript ES6** (also known as **ECMAScript2015** or **ECMAScript6**) is the sixth edition of JavaScript introduced in June 2015.

ECMAScript (European Computer Manufacturers Association Script) is the standard specification of JavaScript to ensure compatibility in all browsers and environments.

This tutorial provides a summary of commonly used features and syntax improvements of ES6.

JavaScript Declarations

Previously, JavaScript only allowed variable declarations using the `var` keyword.

ES6 now allows you to declare variables using two more keywords: `let` and `const`.

Declaration With let Keyword

The `let` keyword creates block-scoped variables, which means they are only accessible within a particular block of code. For example,

`{
// block of code

// declare variable with let
let name = "Peter";

// can be accessed here
console.log(name); // Peter
}

// can't be accessed here
console.log(name);`

**Output**

Peter
ERROR!
...
ReferenceError: name is not defined

However, the above program works without any error if we swap `let` with `var`. For example,

`{
// block of code

// declare variable with var
var name = "Peter";

// can be accessed here
console.log(name);
}

// can be accessed here
console.log(name);`

**Output**

Peter
Peter

This simply means that we have more control over variables declared with `let`.

To learn more about the difference between `let` and `var`, visit JavaScript let vs var.

Declaration With const Keyword

The `const` keyword creates constant variables that cannot be changed after declaration. For example,

`// declare variable with const
const fruit = "Apple";

console.log(fruit);

// reassign fruit
// this code causes an error
fruit = "Banana";

console.log(fruit);`

**Output**

Apple
Error: Assignment to constant variable

Here, we used `const` to declare the variable fruit with the value of `Apple`.

Thus, changing its value to `Banana` causes an error.

JavaScript Template Literals

The template literal makes it easier to include variables inside a string.

For example, this was how we concatenated strings and variables before:

`const firstName = "Jack";
const lastName = "Sparrow";

console.log("Hello " + firstName + " " + lastName);

// Output: Hello Jack Sparrow`

Now, you can simply do this:

`const firstName = "Jack";
const lastName = "Sparrow";

console.log(`Hello ${firstName} ${lastName}`);

// Output: Hello Jack Sparrow`

To learn more about template literals, visit JavaScript Template Literal.

Default Parameter Values

In ES6, you can pass default values for function parameters. For example,

`// function to find sum of two numbers
function sum(numA, numB = 5) {

// default value of numB is 5
console.log(numA + numB);
};

// pass 10 to numA but
// don't pass value to numB
// numB takes default value 5
sum(10);  // 15

// pass 5 to numA and 15 to numB
sum(5, 15);  // 20`

In the above example, we included the default parameter value `numB = 5` in the function declaration.

This means, even if you don't pass the parameter for numB, it will take **5** by default.

To learn more about default parameters, visit JavaScript Default Parameters.

JavaScript Arrow Function





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











ES6 introduces a new way to write function and function expressions using `=>` called the arrow function.

Previously, the only way to write a function expression was:

`// function expression
let product = function(x, y) {
return x * y;
};

result = product(5, 10);

console.log(result);  // 50`

Now, you can simply write it as:

`// function expression using arrow function
let product = (x, y) => x * y;

result = product(5, 10);

console.log(result);  // 50`

To learn more about arrow functions, visit JavaScript Arrow Function.

JavaScript Classes

ES6 also introduces the concept of classes, a fundamental aspect of object-oriented programming (OOP).

We can use the `class` keyword to create classes and objects. Previously, we used constructor functions to create objects. For example,

`// constructor function
function Person(name) {
this.name = name;
};

// create objects
var p1 = new Person("John");
var p2 = new Person("Rachel");

// print object properties
console.log(p1.name);  // John
console.log(p2.name);  // Rachel`

Now, we can do the same thing using the `class` keyword. And, we can initialize the class using the `constructor()` function. For example,

`// declare a class
class Person {

// constructor function
constructor(name) {
this.name = name;
};
};

// create objects
let p1 = new Person("John");
let p2 = new Person("Rachel");

// print object properties
console.log(p1.name);  // John
console.log(p2.name);  // Rachel`

To learn more about classes, visit JavaScript Classes.

JavaScript Destructuring

The destructuring syntax makes it easier to extract values from arrays or objects into individual variables.

For example, previously we extracted object values into variables in the following way:

`// object of hospital
const hospital = {
doctors: 23,
patients: 44,
};

// assign individual values
let doctors = hospital.doctors;
let patients = hospital.patients;

console.log(doctors);  // 23
console.log(patients);  // 44`

Now, we can simply use the ES6 destructuring syntax:

`const hospital = {
doctors: 23,
patients: 44,
};

// use ES6 destructuring syntax
let { doctors, patients } = hospital;

console.log(doctors);  // 23
console.log(patients);  // 44`

To learn more about destructuring, visit JavaScript Destructuring.

JavaScript import and export

Before ES6, there was no standard way for developers to manage their code in separate files as modules.

With ES6, we can finally manage modules with the `import` and `export` syntax.

For example, suppose you have two JavaScript files named **person.js** and **action.js**.

In **action.js**, you can export anything. For this tutorial, let's just export a function named `greet()`:

`// export
export default function greet(name) {
console.log(`Hi ${name}!`);
};`

Then in **person.js**, you can import the `greet()` function and use it:

`import greet from './action.js';

greet("Sara");

// Output: Hi Sara!`

JavaScript Promise

The ES6 `Promise` provides a clean way to handle asynchronous tasks. For example,

`// define a promise
let countValue = new Promise(function (resolve, reject) {
setTimeout(function () {
resolve("Promise resolved!");
}, 5000);

});

// executes when promise resolves
countValue.then(function successValue(result) {

console.log(result);
});

// Output: Promise resolved!`

Here, we first created a promise on the variable countValue.

We then used the `setTimeout()` function to resolve the promise after a delay of **5** seconds.

Likewise, the `.then()` method executes when the promise resolves and displays the output `Promise resolved!`.

To learn more about promises, visit JavaScript Promises.

JavaScript Rest Parameter

You can use the **rest** **parameter** `...`  to represent an infinite number of arguments as an array. For example,

`// function with ...args rest parameter
function show(a, b, ...args) {

console.log("a:", a);
console.log("b:", b);
console.log("args:", args);
}

// call function with extra parameters
show(1, 2, 3, 4, 5);
`

**Output**

a: 1
b: 2
args: [ 3, 4, 5 ]

You can use any name for the rest parameter. However, args is a common convention.

Spread Operator

You can use the **spread operator** `...` to unpack an array or object. For example,

`let numArr = [1, 2, 3];

// without spread operator
console.log([numArr, 4, 5]);  // [[1, 2, 3], 4, 5]

// with spread operator
console.log([...numArr, 4, 5]);  // [1, 2, 3, 4, 5]
`

To learn more about the spread operator, visit JavaScript Spread Operator.

**Note:** Both the rest parameter and the spread operator use the same syntax. However, we only use the rest operator in the function definition as arguments.







Table of Contents






Introduction

JavaScript Declarations

Declaration With const Keyword

JavaScript Template Literals

Default Parameter Values

JavaScript Arrow Function

JavaScript Classes

JavaScript Destructuring

JavaScript import and export

JavaScript Promise

JavaScript Rest Parameter

Spread Operator










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Modules











Next Tutorial:

JS Arrow Function

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Destructuring Assignment

JavaScript Tutorial

JavaScript Promise and Promise Chaining

JavaScript Tutorial

JavaScript async/await

JavaScript Tutorial

JavaScript Constructor Function
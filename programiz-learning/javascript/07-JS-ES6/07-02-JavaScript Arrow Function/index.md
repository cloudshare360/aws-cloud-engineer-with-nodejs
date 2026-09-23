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

JavaScript this


JavaScript Function toString()


JavaScript Function and Function Expressions


JavaScript ES6


JavaScript forEach()


JavaScript Constructor Function



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Arrow Function

















JavaScript arrow functions are a concise syntax for writing function expressions.

Here's a quick example of the arrow function. You can read the rest of the tutorial for more.

Example

`// an arrow function to add two numbers
const addNumbers = (a, b) => a + b;

// call the function with two numbers
const result = addNumbers(5, 3);
console.log(result);

// Output: 8`

In this example, `addNumbers()` is an arrow function that takes two parameters, a and b, and returns their sum.

Arrow Function Syntax

The syntax of the arrow function is:

`let myFunction = (arg1, arg2, ...argN) => {
statement(s)
}`

Here,

`myFunction` is the name of the function.

`arg1, arg2, ...argN` are the function arguments.

`statement(s)` is the function body.

If the body has single statement or expression, you can write the arrow function as:

`let myFunction = (arg1, arg2, ...argN) => expression`

**Note:** Arrow functions were introduced in ES6. Some browsers may not support the use of arrow functions. Visit JavaScript Arrow Function support to learn more.

Regular Function vs. Arrow Function

To see the difference between a regular function expression and an arrow function, let's consider a function that multiplies two numbers.

**Using a regular function:**

`// regular function
let multiply = function(x, y) {
return x * y;
};`

**Using an arrow function:**

`// arrow function
let multiply = (x, y) => x * y;`

Here, both the regular function expression and the arrow function perform the multiplication of two numbers.

As you can see, the syntax of the arrow function is more clear and concise.

Example 1: Arrow Function With No Argument

If a function doesn't take any argument, then you should use empty parentheses. For example,

`const sayHello = () => "Hello, World!";

// call the arrow function and print its return value
console.log(sayHello());

// Output: Hello, World!`

In this example, when `sayHello()` is called, it executes the arrow function which returns the string `Hello, World!`.

Example 2: Arrow Function With One Argument

If a function has only one argument, you can omit the parentheses. For example,

`const square = x => x * x;

// use the arrow function to square a number
console.log(square(5));

// Output: 25`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











The arrow function `square()` takes one argument x and returns its square.

Hence, calling `square()` with the value **5** returns **25**.

this Keyword With Arrow Function

Inside a regular function, this keyword refers to the function where it is called.

However, `this` is not associated with arrow functions. So, whenever you call `this`, it refers to its parent scope. For example,

`// constructor function
function Person() {

this.name = 'Jack',
this.age = 25,
this.sayAge = function () {

console.log(this.age);

let innerFunc = () => {
console.log(this.age);
}

innerFunc();
}
}

const x = new Person();
x.sayAge();`

**Output**

25
25

Here, the `innerFunc()` function is an arrow function.

And inside the arrow function, `this` refers to the parent's scope, i.e., the scope of the `Person()` function. Hence, `this.age` gives **25**.

this Keyword Inside a Regular Function

As stated above, this keyword refers to the function where it is called. For example,

`// constructor function
function Person() {

this.name = "Jack",
this.age = 25,

this.sayAge = function () {

// this is accessible
console.log(this.age);

function innerFunc() {

// this refers to the global object
console.log(this.age);
console.log(this);

}

innerFunc();

}
}

let x = new Person();
x.sayAge();`

**Output**

25
undefined
<ref *1> Object [global] {...}

Here, `this.age` inside `this.sayAge()` is accessible because `this.sayAge()` is a method of an object.

However, `innerFunc()` is a normal function and `this.age` is not accessible because `this` refers to the global object.

Hence, `this.age` inside the `innerFunc()` function is `undefined`.

More on Arrow Function

Arrow Function as an Expression

You can also dynamically create an arrow function and use it as an expression. For example,

`let age = 5;

// use arrow functions as expressions in ternary operator
// to dynamically assign functionality
let welcome = (age < 18) ?
() => console.log("Child") :
() => console.log("Adult");

welcome();

// Output: Child`

In this example, an arrow function is created based on the condition of whether age is less than **18** or not.

If age is less than **18**, the function will print `Child`. Otherwise, it will print `Adult`.

Hence, when the function is called, we get `Child` as output since age is **5**.

Multiline Arrow Functions

If a function body has multiple statements, you need to put them inside curly brackets `{}`. For example,

`let sum = (a, b) => {
let result = a + b;
return result;
};

let result1 = sum(5,7);
console.log(result1);

// Output: 12`

Things You Should Avoid With Arrow Functions

**1. You should not use arrow functions to create methods inside objects.**

`let person = {
name: "Jack",
age: 25,

sayAge: () => {
console.log(this.age);
}

}

person.sayAge(); // undefined`

**2. You cannot use an arrow function as a constructor.**

`let Foo = () => {};
let foo = new Foo();

// Output: TypeError: Foo is not a constructor`

**Also Read:**

JavaScript ES6

JavaScript Objects

JavaScript Constructor Function







Table of Contents






Introduction

Arrow Function Syntax

Example 1: Arrow Function With No Argument

Example 2: Arrow Function With One Argument

this Keyword With Arrow Function










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS ES6











Next Tutorial:

JS Default Parameters

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript this

JavaScript Tutorial

JavaScript Function and Function Expressions

JavaScript Tutorial

JavaScript ES6

JavaScript Tutorial

JavaScript forEach()
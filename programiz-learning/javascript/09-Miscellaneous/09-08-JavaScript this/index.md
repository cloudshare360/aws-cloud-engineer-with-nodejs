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

JavaScript Arrow Function


JavaScript Classes


JavaScript Class Inheritance


Javascript Function call()


JavaScript Constructor Function


JavaScript Object.getPrototypeOf()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript this

















In JavaScript, `this` keyword refers to the object where it is called.

1. this Inside Global Scope

When `this` is used alone, `this` refers to the global object (`window` object in browsers). For example,

`let a = this;
console.log(a);  // Window {}

this.name = 'Sarah';
console.log(window.name); // Sarah`

Here, `this.name` is the same as `window.name`.

2. this Inside Function

When `this` is used in a function, `this` refers to the global object (`window` object in browsers). For example,

`function greet() {

// this inside function
// this refers to the global object
console.log(this);
}

greet(); // Window {}`

3. this Inside Constructor Function

In JavaScript, constructor functions are used to create objects. When a function is used as a constructor function, `this` refers to the object inside which it is used. For example,

`function Person() {

this.name = 'Jack';
console.log(this);

}

let person1 = new Person();
console.log(person1.name);`

**Output**

Person {name: "Jack"}
Jack

Here, `this` refers to the person1 object. That's why, `person1.name` gives us Jack.

**Note**: When `this` is used with ES6 classes, it refers to the object inside which it is used (similar to constructor functions).

4. this Inside Object Method

When `this` is used inside an object's method, `this` refers to the object it lies within. For example,

`const person = {
name : 'Jack',
age: 25,

// this inside method
// this refers to the object itself
greet() {
console.log(this);
console.log(this.name);
}
}

person.greet();`

**Output**

{name: "Jack", age: 25, greet: ƒ}
Jack





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











In the above example, `this` refers to the `person` object.

5. this Inside Inner Function

When you access `this` inside an inner function (inside a method), `this` refers to the global object. For example,

`const person = {
name : 'Jack',
age: 25,

// this inside method
// this refers to the object itself
greet() {
console.log(this);        // {name: "Jack", age ...}
console.log(this.age);  // 25

// inner function
function innerFunc() {

// this refers to the global object
console.log(this);       // Window { ... }
console.log(this.age);    // undefined

}

innerFunc();

}
}

person.greet();`

**Output**

{name: "Jack", age: 25, greet: ƒ}
25
Window { …}
undefined

Here, `this` inside `innerFunc()` refers to the **global object** because `innerFunc()` is inside a method.

However, `this.age` outside `innerFunc()` refers to the `person` object.

6. this Inside Arrow Function

Inside the arrow function, `this` refers to the parent scope. For example,

`const greet = () => {
console.log(this);
}
greet(); // Window {...}`

Arrow functions do not have their own `this`. When you use `this` inside an arrow function, `this` refers to its parent scope object. For example,

`const greet = {
name: 'Jack',

// method
sayHi () {
let hi = () => console.log(this.name);
hi();
}
}

greet.sayHi(); // Jack`

Here, `this.name` inside the `hi()` function refers to the `greet` object.

You can also use the arrow function to solve the issue of having `undefined` when using a function inside a method (as seen in Example 5). For example,

`const person = {
name : 'Jack',
age: 25,

// this inside method
// this refers to the object itself
greet() {
console.log(this);
console.log(this.age);

// inner function
let innerFunc = () => {

// this refers to the global object
console.log(this);
console.log(this.age);

}

innerFunc();

}
}

person.greet();`

**Output**

{name: "Jack", age: 25, greet: ƒ}
25
{name: "Jack", age: 25, greet: ƒ}
25

Here, `innerFunc()` is defined using the arrow function. It takes `this` from its parent scope. Hence, `this.age` gives **25**.

When the arrow function is used with `this`, it refers to the outer scope.

7. this Inside Function with Strict Mode

When `this` is used in a function with strict mode, `this` is undefined. For example,

`'use strict';
this.name = 'Jack';
function greet() {

// this refers to undefined
console.log(this);
}
greet(); // undefined`

**Note**: When using `this` inside a function with strict mode, you can use JavaScript Function call().

For example,

`'use strict';
this.name = 'Jack';

function greet() {
console.log(this.name);
}

greet.call(this); // Jack`

When you pass `this` with the `call()` function, `greet()` is treated as the method of the `this` object (global object in this case).







Table of Contents






Global Scope

Function

Constructor Function

Object Method

inner Function

Arrow Function

Function with Strict Mode











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Closure











Next Tutorial:

JS use-strict

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Arrow Function

JavaScript Tutorial

JavaScript Classes

JavaScript Tutorial

JavaScript Class Inheritance

JavaScript Tutorial

JavaScript Constructor Function
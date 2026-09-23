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

JavaScript Classes


JavaScript this


JavaScript Object.getPrototypeOf()


JavaScript Objects


JavaScript Class Inheritance


JavaScript Proxies



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Constructor Function

















In JavaScript, a constructor function is used to create and initialize objects.

Here is a simple example of a constructor function. Read the rest of the tutorial for more.

Example

`// constructor function
function Person () {
this.name = "John",
this.age = 23
}

// create an object
const person = new Person();

// print object attributes
console.log(person.name);
console.log(person.age);

// Output:
// John
// 23`

Here, `Person()` is an object constructor function. And, we use the `new` keyword to create an object from a constructor function.

Create Multiple Objects With Constructor Function

In JavaScript, you can create multiple objects from a constructor function. For example,

`// constructor function
function Person () {
this.name = "John",
this.age = 23,

this.greet = function () {
console.log("hello");
}
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John`

In the above program, we created two objects (person1 and person2) using the same constructor function.

JavaScript this Keyword

In JavaScript, when this keyword is used in a constructor function, `this` refers to the specific object in which it is created. For example,

`// constructor function
function Person () {
this.name = "John"

}

// create object
const person1 = new Person();

// access properties
console.log(person1.name);  // John`

Hence, when an object accesses the name property of the constructor function, it can directly access it as `person1.name`.

JavaScript Constructor Function Parameters

You can also create a constructor function with parameters. For example,

`// constructor function with parameters
function Person (person_name, person_age, person_gender) {

// assign parameter values to the calling object
this.name = person_name,
this.age = person_age,
this.gender = person_gender,

this.greet = function () {
return (`Hi ${this.name}`);
}
}

// create objects and pass arguments
const person1 = new Person("John", 23, "male");
const person2 = new Person("Sam", 25, "female");

// access properties
console.log(person1.name); // John
console.log(person2.name); // Sam`

In the above example, we have passed arguments to the constructor function during the creation of the object.

`const person1 = new Person("John", 23, "male");
const person2 = new Person("Sam", 25, "female");`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











This allows each object to have different properties:

person1
person2

name holds the value `John`.
name holds the value `Sam`.

age holds the value **23**.
age holds the value **25**.

gender holds the value `male`.
gender holds the value `female`.

Constructor Function vs. Object Literal

Constructor functions can create multiple objects.

Object literals are used to create a single object.

On the other hand, constructor functions are useful if you want to create multiple objects. For example,

`// use object literal to create
// a single object person
let person = {
name: "Sam"
}

// use constructor function
function Person () {
this.name = "Sam"
}

// create multiple objects
// from constructor function
let person1 = new Person();
let person2 = new Person();`

Each object created from a constructor function is unique.

Objects created from constructor functions are unique. Thus, you can add a new property to a particular object that isn't accessible to other objects. For example,

`// use constructor function
function Person () {
this.name = "Sam"
}

let person1 = new Person();
let person2 = new Person();

// add new property to person1
person1.age = 20;

// add a method to person1 object
person1.greet = function () {
return "hello";
}

console.log(person1.age);  // 20
console.log(person1.greet());  // hello

console.log(person2.age);  // undefined
console.log(person2.greet());  // ERROR!`

Here, the age property and the `greet()` method are unique to person1 and are thus unavailable to person2.

On the other hand, when an object is created with an object literal, any object variable derived from that object will act as a clone of the original object.

Hence, changes you make in one object will be reflected in the other. For example,

`// use object lateral
let person = {
name: "Sam"
}

console.log(person.name);  // Sam

// assign person object to student variable
let student = person;

// change the property of student object
student.name = "John";

// add method to student object
student.greet = function () {
return "hello";
}

// original object property is also changed
console.log(person.name);  // John

// original object now has the greet() method
console.log(person.greet());  // hello`

JavaScript Built-In Constructors

JavaScript also has built-in constructors to create objects of various types. Some of them are:

Constructor
Description

`Object()`
Creates a new object with properties and methods.

`String()`
Constructs a string object for manipulating and representing textual data.

`Number()`
Constructs a number object for handling data and operations.

`Boolean()`
Constructs a boolean object representing `true` or `false` values for logical operations.

Example: JavaScript Built-In Constructors

`// use Object() constructor to create object
const person = new Object({ name: "John", age: 30 });

// use String() constructor to create string object
const name = new String ("John");

// use Number() constructor to create number object
const number = new Number (57);

// use Boolean() constructor to create boolean object
const count = new Boolean(true);

console.log(person);
console.log(name);
console.log(number);
console.log(count);`

**Output**

{ name: 'John', age: 30 }
[String: 'John']
[Number: 57]
[Boolean: true]

**Note**: You should not declare strings, numbers, and boolean values as objects because they slow down the program. Instead, declare them as primitive types using code such as `let name = "John"`, `let number = 57`, etc.

More on Constructor Functions

JavaScript Object Prototype

You can also add properties and methods to a constructor function using a **prototype**. For example,

`// constructor function
function Person () {
this.name = "John",
this.age = 23
}

// create objects
let person1 = new Person();
let person2 = new Person();

// add a new property to the constructor function
Person.prototype.gender = "Male";

console.log(person1.gender);  // Male
console.log(person2.gender);  // Male`

To learn more about prototypes, visit JavaScript Prototype.

JavaScript Classes

In JavaScript, the `class` keyword was introduced in ES6 (ES2015) to provide a more convenient syntax for defining objects and their behavior.

Classes serve as blueprints for creating objects with similar properties and methods. They resemble the functionality of constructor functions in JavaScript.

To learn more, visit JavaScript Classes.

**Also Read:**

JavaScript Function and Function Expressions







Table of Contents






Introduction

Create Multiple Objects With Constructor Function

JavaScript Constructor Function Parameters

JavaScript Built-In Constructors










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Methods











Next Tutorial:

Getter and Setter

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Classes

JavaScript Tutorial

JavaScript this

JavaScript Tutorial

JavaScript Objects

JavaScript Tutorial

JavaScript Class Inheritance
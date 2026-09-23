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

JavaScript Class Inheritance


JavaScript Constructor Function


JavaScript this


JavaScript Object.getPrototypeOf()


JavaScript Objects


JavaScript ES6



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Classes

















In JavaScript ES6, classes provide a way to create blueprints for objects, similar to traditional object-oriented programming languages like C++ or Java.

Let's explore a simple example by creating a `Person` class:

`// define a class named 'Person'
class Person {
// class constructor to initialize the 'name' and 'age' properties
constructor(name, age) {
this.name = name;
this.age = age;
}

// method to display a message
greet() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}

// create two instances of the Person class
let person1 = new Person("Jack", 30);
let person2 = new Person("Tina", 33);

// call greet() method on two instances
person1.greet();
person2.greet();`

**Output**

Hello, my name is Jack and I am 30 years old.
Hello, my name is Tina and I am 33 years old.

In the above example, we have defined a `Person` class using the `class` keyword.

Inside `Person`, we have defined:

a class constructor that initializes the `name` and `age` properties

a `greet()` method that displays a greeting message using the `name` and `age` properties.

Using the `new` keyword, we have created two objects of the `Person` class- `person1` and `person2`.

We have then called the `greet()` method on `person1` and `person2` using the `.` operator:

`person1.greet()` - calls `greet()` on `person1`

`person2.greet()` - calls `greet()` on `person2`

Create Objects Without Classes

In JavaScript, you have the flexibility to create objects directly without the use of formal class definitions. This can be achieved by using object literals.

Let's look at the example below,

`// create an object 'person' without a formal class definition
let person = {
name: "Jack",
age: 30,
greet: function() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
}
};

// call the greet() method on the person object
person.greet(); `

**Output**

Hello, my name is Jack and I am 30 years old.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











In the above example, we have created an object named `person` directly using an object literal.

The `person` object has:

properties - `name` and `age` with values `"Jack"` and **30** respectively.

method - `greet()` that displays a greeting message.

We have called the `greet()` method on `person` using the `.` operator as `person.greet()`.

To learn more about object literals, visit JavaScript Objects.

Features of a JavaScript Class

Let's revisit the code from the beginning of the tutorial and explore each part in detail to gain a deeper understanding of how classes work in JavaScript.

`// define a class named 'Person'
class Person {
// class constructor to initialize the 'name' and 'age' properties
constructor(name, age) {
this.name = name;
this.age = age;
}

// method to display a message
greet() {
console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
}

// create two objects of the Person class
let person1 = new Person("Jack", 30);
let person2 = new Person("Tina", 33);

// call greet() method on two instances
person1.greet();
person2.greet();`

**Output**

Hello, my name is Jack and I am 30 years old.
Hello, my name is Tina and I am 33 years old.

**Create a class**

In JavaScript, we create a class using the `class` keyword. For example,

`// create a class
class Person {
// body of class
};`

**Class Constructor**

A class constructor is a special method within a class that is automatically executed when a new object of that class is created.

Constructor of the Person Class
The `Person` class constructor initializes the `name` and `age` properties when a new object is created.

Here,

the `person1` object is initialized with `"Jack"` and **30**

the `person2` object is initialized with `"Tina"` and **33**

**Class Method**

A class method is a function inside a class that defines behaviors for the class's objects.

Method of the Person Class
Here, `greet()` is a method of the `Person` class that displays a greeting message when called on objects of the class.







Table of Contents






Introduction

Create Objects Without Classes

Features of a JavaScript Class










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

Destructuring Assignment











Next Tutorial:

JS Inheritance

















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

JavaScript Class Inheritance

JavaScript Tutorial

JavaScript Constructor Function

JavaScript Tutorial

JavaScript Objects
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

Javascript Object.defineProperty()


JavaScript Proxies


Javascript Object.defineProperties()


JavaScript Methods and this Keyword


JavaScript Objects


Javascript Object.preventExtensions()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Getter and Setter

















In JavaScript, there are two kinds of object properties:

Data properties

Accessor properties

Data Property

Here's an example of data property that we have been using in the previous tutorials.

`const student = {

// data property
firstName: 'Monica';
};`

Accessor Property

In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

`get` - to define a getter method to get the property value

`set` - to define a setter method to set the property value

JavaScript Getter

In JavaScript, getter methods are used to access the properties of an object. For example,

`const student = {

// data property
firstName: 'Monica',

// accessor property(getter)
get getName() {
return this.firstName;
}
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
console.log(student.getName()); // error`

In the above program, a getter method `getName()` is created to access the property of an object.

`get getName() {
return this.firstName;
}`

**Note:** To create a getter method, the `get` keyword is used.

And also when accessing the value, we access the value as a property.

`student.getName;`

When you try to access the value as a method, an error occurs.

`console.log(student.getName()); // error`

JavaScript Setter

In JavaScript, setter methods are used to change the values of an object. For example,

`const student = {
firstName: 'Monica',

//accessor property(setter)
set changeName(newName) {
this.firstName = newName;
}
};

console.log(student.firstName); // Monica

// change(set) object property using a setter
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











In the above example, the setter method is used to change the value of an object.

`set changeName(newName) {
this.firstName = newName;
}`

**Note:** To create a setter method, the `set` keyword is used.

As shown in the above program, the value of `firstName` is `Monica`.

Then the value is changed to `Sarah`.

`student.changeName = 'Sarah';`

**Note**: Setter must have exactly one formal parameter.

JavaScript Object.defineProperty()

In JavaScript, you can also use Object.defineProperty() method to add getters and setters. For example,

`const student = {
firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
get : function () {
return this.firstName;
}
});

// setting property
Object.defineProperty(student, "changeName", {
set : function (value) {
this.firstName = value;
}
});

console.log(student.firstName); // Monica

// changing the property value
student.changeName = 'Sarah';

console.log(student.firstName); // Sarah`

In the above example, `Object.defineProperty()` is used to access and change the property of an object.

The syntax for using `Object.defineProperty()` is:

`Object.defineProperty(obj, prop, descriptor)`

The `Object.defineProperty()` method takes three arguments.

The first argument is the objectName.

The second argument is the name of the property.

The third argument is an object that describes the property.







Table of Contents






Introduction

JavaScript Getter

JavaScript Setter

JavaScript Object.defineProperty()











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Constructor Function











Next Tutorial:

JS Prototype

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Proxies

JavaScript Tutorial

JavaScript Methods and this Keyword

JavaScript Tutorial

JavaScript Objects

JavaScript Tutorial

JavaScript Class Inheritance
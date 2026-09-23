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

JavaScript Objects


JavaScript Getter and Setter


JavaScript Number toFixed()


JavaScript Constructor Function


JavaScript Object.fromEntries()


JavaScript Object.keys()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Methods and this Keyword

















Before continuing this tutorial, make sure you are familiar with:

JavaScript Objects

JavaScript Function

JavaScript Method

A JavaScript method is a function defined within an object. For example,

`// dog object
const dog = {
name: "Rocky",

// bark method
bark: function () {
console.log("Woof!");
}

};

// access method
dog.bark();

// Output: Woof!`

In the above example, the dog object has two keys: name and bark.

Since the bark key holds a function, we refer to it as a **method**.

Notice that we accessed the `bark()` method using `dog.bark()`. Thus, the syntax to access an object method is:

`objectName.methodKey()`

JavaScript this Keyword

We use `this` keyword in an object method to access a property of the same object. For example,

`// person object
const person = {
name: "John",
age: 30,

// method
introduce: function () {
console.log(`My name is ${this.name} and I'm ${this.age} years old.`);

}
};

// access the introduce() method
person.introduce();

// Output: My name is John and I'm 30 years old.`

In the above example, we created the person object with two properties (name and age) and a method `introduce()`.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Inside the `introduce()` method, we used `this.name` and `this.age` to refer to the name and age keys of the person object.

To learn more, visit JavaScript this.

Add Methods to an Object

You can add more methods to a JavaScript object even after we've defined it. For example,

`// student object
let student = {
name: "John"
};

// add new method
student.greet = function () {
console.log("Hello");
};

// access greet() method
student.greet();

// Output: Hello`

In the above example, we created the student object with the property `name: "John"`.

Initially, student did not have any method. So, we used the dot notation to add a new method to the object:

`student.greet = function() {
console.log("Hello");
};`

JavaScript Built-In Methods

JavaScript provides a wide array of useful methods known as built-in methods. Some commonly used built-in methods (and the respective objects they belong to) are given in the table below:

Method
Object
Description

console.log()
Console
Displays messages or variables in the browser's console.

`prompt()`
Window
Displays a dialog box that prompts the user for input.

concat()
String
Concatenates the arguments to the calling string.

toFixed()
Number
Rounds off a number into a fixed number of digits.

sort()
Array
Sorts the elements of an array in specific order.

random()
Math
Returns a pseudo-random float number between **0** and **1**.

To learn more about JavaScript built-in methods, visit JavaScript Built-In Methods.

Examples: JavaScript Build-In Methods

JavaScript concat() Method

We use the `concat()` method to concatenate (join) two strings. For example,

`let firstName = "Tony ";
let lastName = "Stark";

// built-in string method concat()
// join lastName to the end of firstName
let fullName = firstName.concat(lastName);

console.log(fullName);

// Output: Tony Stark`

Here, we used `concat()` to concatenate firstName and lastName.

JavaScript toFixed() Method

We use the `toFixed()` method to round off a number into a fixed number of digits. For example,

`let num = 5.12345;

// built-in number method toFixed()
// round off num to two decimal places
let roundedNum = num.toFixed(2);

console.log(roundedNum);

// Output: 5.12`

Here, we use `toFixed(2)` to round off the value of num from **5.12345** to **5.12**.

**Also Read:**

JavaScript Getter and Setter







Table of Contents






Introduction

Access Object Methods

JavaScript this Keyword

Add Methods to an Object

JavaScript Built-In Methods










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Object











Next Tutorial:

JS Constructor Function

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Objects

JavaScript Tutorial

JavaScript Getter and Setter

JavaScript Tutorial

JavaScript Constructor Function

JavaScript Tutorial

JavaScript Proxies
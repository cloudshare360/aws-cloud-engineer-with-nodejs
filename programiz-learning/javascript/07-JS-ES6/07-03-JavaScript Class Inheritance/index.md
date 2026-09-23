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


JavaScript Proxies


JavaScript Classes


JavaScript Constructor Function


JavaScript Objects


JavaScript Methods and this Keyword



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Class Inheritance

















Class Inheritance

Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.

Using class inheritance, a class can inherit all the methods and properties of another class.

Inheritance is a useful feature that allows code reusability.

To use class inheritance, you use the `extends` keyword. For example,

`// parent class
class Person {
constructor(name) {
this.name = name;
}

greet() {
console.log(`Hello ${this.name}`);
}
}

// inheriting parent class
class Student extends Person {

}

let student1 = new Student('Jack');
student1.greet();`

**Output**

Hello Jack

In the above example, the `Student` class inherits all the methods and properties of the `Person` class. Hence, the `Student` class will now have the `name` property and the `greet()` method.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Then, we accessed the `greet()` method of `Student` class by creating a `student1` object.

JavaScript super() keyword

The `super` keyword used inside a child class denotes its parent class. For example,

`// parent class
class Person {
constructor(name) {
this.name = name;
}

greet() {
console.log(`Hello ${this.name}`);
}
}

// inheriting parent class
class Student extends Person {

constructor(name) {

console.log("Creating student class");

// call the super class constructor and pass in the name parameter
super(name);
}

}

let student1 = new Student('Jack');
student1.greet();`

Here, `super` inside `Student` class refers to the `Person` class. Hence, when the constructor of `Student` class is called, it also calls the constructor of the `Person` class which assigns a name property to it.

Overriding Method or Property

If a child class has the same method or property name as that of the parent class, it will use the method and property of the child class. This concept is called method overriding. For example,

`// parent class
class Person {
constructor(name) {
this.name = name;
this.occupation = "unemployed";
}

greet() {
console.log(`Hello ${this.name}.`);
}

}

// inheriting parent class
class Student extends Person {

constructor(name) {

// call the super class constructor and pass in the name parameter
super(name);

// Overriding an occupation property
this.occupation = 'Student';
}

// overriding Person's method
greet() {
console.log(`Hello student ${this.name}.`);
console.log('occupation: ' + this.occupation);
}
}

let p = new Student('Jack');
p.greet();`

**Output**

Hello student Jack.
occupation: Student

Here, the `occupation` property and the `greet()` method are present in parent `Person` class and the child `Student` class. Hence, the `Student` class overrides the `occupation` property and the `greet()` method.

Uses of Inheritance

Since a child class can inherit all the functionalities of the parent's class, this allows code reusability.

Once a functionality is developed, you can simply inherit it. No need to reinvent the wheel. This allows for cleaner code and easier to maintain.

Since you can also add your own functionalities in the child class, you can inherit only the useful functionalities and define other required features.







Table of Contents






Class Inheritance

JavaScript super() keyword

Overriding Method or Property

Uses of Inheritance











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Classes











Next Tutorial:

JS for...of

















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

JavaScript Proxies

JavaScript Tutorial

JavaScript Classes

JavaScript Tutorial

JavaScript Objects
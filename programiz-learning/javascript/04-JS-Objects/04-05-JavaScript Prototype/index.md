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

JavaScript Object.isPrototypeOf()


Javascript Object.setPrototypeOf()


JavaScript Object.getPrototypeOf()


Javascript Object.preventExtensions()


Javascript Object.create()


JavaScript Constructor Function



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Prototype

















Before continuing this tutorial, make sure you are familiar with:

JavaScript Objects

JavaScript Constructor Function

In JavaScript, prototypes allow properties and methods to be shared among instances of the function or object. For example,

`function Car() {
console.log("Car instance created!");
};

// add a property to prototype
Car.prototype.color = "Red";

// add a method to the prototype
Car.prototype.drive = function () {
console.log(`Driving the car painted in ${this.color}...`);
};

// display the added property
console.log(`The car's color is: ${Car.prototype.color}`);

// call the added method
Car.prototype.drive();`

**Output**

The car's color is: Red
Driving the car painted in Red...

In the above example, we have defined a constructor function named `Car()`.

**Add a Property to the Prototype**

We then added a property named color and set its value to `Red`.

`Car.prototype.color = "Red";`

We can access this property using the code `Car.prototype.color`.

**Add a Method to the Prototype**

We also added a method called `drive()` to the `Car` prototype:

`Car.prototype.drive = function () {
console.log(`Driving the car painted in ${this.color}...`);
};`

We can access this method using the code `Car.prototype.drive()`.

**Note:** The usage of the prototype has decreased significantly since the introduction of classes in ES6. However, you can still learn it to improve your understanding of JavaScript.

Prototype Inheritance

Properties or methods added to the prototype of a constructor function are accessible to all objects derived from it. For example,

`function Car(model, year) {
this.model = model;
this.year = year;
};

// create multiple objects
let c1 = new Car("Mustang", 1964);
let c2 = new Car("Corolla", 1966);

// add property
Car.prototype.color = "Red";

// add method
Car.prototype.drive = function() {
console.log(`Driving ${this.model}`);
};

// display added property using c1 and c2 objects
console.log(`${c1.model} color: ${c1.color}`);
console.log(`${c2.model} color: ${c2.color}`);

// display added method using c1 and c2 objects
c1.drive();
c2.drive();
`

**Output**

Mustang color: Red
Corolla color: Red
Driving Mustang
Driving Corolla

In the above example, we created the objects c1 and c2 using the `Car()` constructor.

We then added the following to the prototype of `Car()`:

**1. The color Property**

It has a value of `Red`.

Both c1 and c2 can access it using `c1.color` and `c2.color`, respectively.

**2. The drive() Method**

It is a method that displays a message.

Both c1 and c2 can access it using `c1.drive()` and `c2.drive()`, respectively.

JavaScript Prototype Chaining

JavaScript always searches for properties in the objects of the constructor function first. Then, it searches in the prototype.

This process is known as prototype chaining. For example,

`function Car() {
this.color = "Red";
};

// add property that already exists
Car.prototype.color = "Blue";

// add a new property
Car.prototype.wheels = 4;

const c1 = new Car();

console.log(`The car's color is ${c1.color}.`);
console.log(`The car has ${c1.wheels} wheels.`);`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











**Output**

The car's color is Red.
The car has 4 wheels.

Here, we declared the name property in the `Car()` constructor. Then, we added the same property with a different value to its prototype.

When we display `c1.color`, JavaScript searches for color in c1 and then displays it without checking the prototype.

However, JavaScript can't find wheels in c1. So, when we display `c1.wheels`, it displays the prototype property.

More on JavaScript Prototypes

Access the prototype of a constructor function from its object.

You can access the prototype of a constructor function from its object using the following syntax:

`Object.getPrototypeOf(objectName);`

For example,

`function Car() {
this.name = "Mustang";
}

// add prototype property
Car.prototype.color = "Red";

// create object
let c1 = new Car();

// access prototype object of c1
console.log(Object.getPrototypeOf(c1));

// Output: { color: 'Red' }`

Here, we used the object c1 to view the prototype of the constructor function `Car()`.

Change the property value of a prototype.

There are two ways to change the property value of a prototype:

**1. Directly Modify Prototype**

When we directly modify the property value of the prototype, all objects receive the latest value.

The syntax to directly modify the prototype is:

`ConstructorName.prototype.propertyName = newValue;`

For example,

`function Car() {
this.color = "Red";
};

// add property wheels
Car.prototype.wheels = 4;

// create first car object
let c1 = new Car();

console.log(`Number of wheels on c1 before change: ${c1.wheels}`);

// change prototype property value
Car.prototype.wheels = 6;

// create second car object
let c2 = new Car();

console.log(`Number of wheels on c1 after change: ${c1.wheels}`);
console.log(`Number of wheels on c2: ${c2.wheels}`);`

**Output**

Number of wheels on c1 before change: 4
Number of wheels on c1 after change: 6
Number of wheels on c2: 6

Here, we added the property wheels with a value of **4** to `Car()`.

We then used the following code to change the prototype property value:

`Car.prototype.wheels = 6;`

As a result, this change is reflected in both c1 and c2.

**2. Replace Prototype Object**

When we replace the prototype object,

All new objects receive the latest value.

All previously created objects will retain the previous value.

The syntax to replace the prototype object is:

`ConstructorName.prototype = { propertyName: newValue };`

For example,

`function Car() {
this.color = "Red";
};

// add property wheels
Car.prototype.wheels = 4;

// create a car object
const c1 = new Car();

console.log(`Number of wheels on c1 before change: ${c1.wheels}`);

// replace prototype object
Car.prototype = { wheels: 6 };

// create new car object
const c2 = new Car();

console.log(`Number of wheels on c1 after change: ${c1.wheels}`);
console.log(`Number of wheels on c2: ${c2.wheels}`);`

**Output**

Number of wheels on c1 before change: 4
Number of wheels on c1 after change: 4
Number of wheels on c2: 6

Here, we replaced the prototype object using the following code:

`Car.prototype = { wheels: 6 };`

The c1 object displays the old value of wheels even after updating the prototype.

On the other hand, the c2 object displays the newer value of wheels.

**Note:** You should never modify the prototype property of standard JavaScript built-in objects like strings, arrays, etc. It can cause major errors in your program.

**Also Read:**

JavaScript this Keyword







Table of Contents






Introduction

Prototype Inheritance

JavaScript Prototype Chaining










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

Getter and Setter











Next Tutorial:

JS Array

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Constructor Function

JavaScript Tutorial

JavaScript Objects

JavaScript Tutorial

JavaScript Getter and Setter

JavaScript Tutorial

JavaScript Proxies
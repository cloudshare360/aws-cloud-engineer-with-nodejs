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

JavaScript Object.keys()


JavaScript Object.entries()


JavaScript Proxies


JavaScript Constructor Function


JavaScript Getter and Setter


JavaScript Methods and this Keyword



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Objects

















JavaScript object is a variable that can store multiple data in **key-value** pairs.

Here's a quick example of the JavaScript object. Read the rest of the tutorial for more.

Example

`// student object
const student = {
firstName: "Jack",
rollNo: 32
};

console.log(student);

// Output: { firstName: 'Jack', rollNo: 32 }`

Here, `student` is an object that stores the first name and the roll number of students as key-value pairs.

Create JavaScript Objects

The syntax of JavaScript object is:

`const objectName = {
key1: value1,
key2: value2,
...,
keyN: valueN
};`

Here,

`objectName` - Name of the object.

`key1: value1` - The first key-value pair.

`key2: value2` - The second key-value pair.

`keyN: valueN` - The `Nth` key-value pair.

Each key-value pair has a colon `:` between them and is separated by a comma `,`.

Example 1: JavaScript Objects

`// create person object
const person = {
name: "John",
age: 20
};

console.log(person);

// Output: { name: "John", age: 20 }`

In the above example, `name: "John"` and `age: 30` are key-value pairs.

**Note:** You can also create objects in a single line. For example,

`const person = { name: "John", age: 20 };`

However, it's preferable to break down objects into multiple lines for better readability.

JavaScript Object Properties

In JavaScript, the key-value pairs of an object are referred to as **properties**. For example,

`const person = {
name: "John",
age: 20,
};`

Here, `name: "John"` and `age: 30` are the properties of the object person.

JavaScript Object Properties

Access Object Properties

You can access the **value** of a property by using its **key**.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











**1. Using Dot Notation**

`const dog = {
name: "Rocky",
};

// access property
console.log(dog.name);

// Output: Rocky`

**2. Using Bracket Notation**

`const cat = {
name: "Luna",
};

// access property
console.log(cat["name"]);

// Output: Luna`

JavaScript Object Operations

In JavaScript, we can perform various operations on object properties like modifying, adding, deleting, and so on. Let's discuss some of them.

1. Modify Object Properties

We can modify object properties by assigning a new value to an existing key. For example,

`const person = {
name: "Bobby",
hobby: "Dancing",
};

// modify property
person.hobby = "Singing";

// display the object
console.log(person);

// Output: { name: 'Bobby', hobby: 'Singing' }`

In the above example, we used the dot notation to change the value of the hobby key from `Dancing` to `Singing`.

2. Add Object Properties

`const student = {
name: "John",
age: 20,
};

// add properties
student.rollNo = 14;
student.faculty = "Science";

// display the object
console.log(student);

// Output: { name: 'John', age: 20, rollNo: 14, faculty: 'Science' }`

In the above example, the keys rollNo and faculty do not exist within the object. Hence, when we assign values to these keys, new properties are added to the object.

3. Delete Object Properties

We can remove properties from an object using the `delete` operator. For example,

`const employee = {
name: "Tony",
position: "Officer",
salary: 30000,
};

// delete object property
delete employee.salary

// display the object
console.log(employee);

// Output: { name: 'Tony', position: 'Officer' }`

JavaScript Object Methods

We can also include functions inside an object. For example,

`const person = {
name: "Bob",
age: 30,

// use function as value
greet: function () {
console.log("Bob says Hi!");
}

};

// call object method
person.greet();  // Bob says Hi!
`

Here, we have assigned a function as a value for the greet key.

These functions that are defined inside objects are called **methods**.

**Note:** Just like we use `()` to call a function, we must use `()` to call methods.

You will learn more about JavaScript Methods in the next tutorial.

JavaScript Nested Objects

What is a nested object?

A nested object contains another object as a property. For example,

`// outer object student
const student = {
name: "John",
age: 20,

// contains another object marks
marks: {
science: 70,
math: 75
}

};

// display student
console.log(student);

// Output: { name: 'John', age: 20, marks: { science: 70, math: 75 } }`

In the above example, the student object contains another object nested inside it called marks.

**Access Properties of Nested Objects**

We can access a nested object's property using both the dot and bracket notations.

`const student = {
name: "John",
age: 20,

marks: {
science: 70,
math: 75
}
};

// use dot notation
console.log(student.marks.science);  // 70

// use bracket notation
console.log(student["marks"]["math"]);  // 75
`

**Also Read:**

Different Ways to Create Objects

JavaScript Constructor Function

JavaScript Prototype







Table of Contents






Introduction

Create JavaScript Objects

JavaScript Object Properties

Access Object Properties

JavaScript Object Operations

JavaScript Object Methods










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Recursion











Next Tutorial:

JS Methods

















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

JavaScript Getter and Setter

JavaScript Tutorial

JavaScript Constructor Function

JavaScript Tutorial

JavaScript Methods and this Keyword
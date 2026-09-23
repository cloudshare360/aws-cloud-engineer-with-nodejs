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

JavaScript ES6


JavaScript Constructor Function


JavaScript console.log()


JavaScript Objects


JavaScript Symbol


JavaScript this



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Destructuring Assignment

















JavaScript Destructuring

The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. For example,



**Before ES6:**

`// assigning object attributes to variables
const person = {
name: 'Sara',
age: 25,
gender: 'female'
}

let name = person.name;
let age = person.age;
let gender = person.gender;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female`

**From ES6:**

`// assigning object attributes to variables
const person = {
name: 'Sara',
age: 25,
gender: 'female'
}

// destructuring assignment
let { name, age, gender } = person;

console.log(name); // Sara
console.log(age); // 25
console.log(gender); // female`

**Note**: The order of the name does not matter in object destructuring.

For example, you could write the above program as:

`let { age, gender, name } = person;
console.log(name); // Sara`

**Note**: When destructuring objects, you should use the same name for the variable as the corresponding object key.

For example,

`let {name1, age, gender} = person;
console.log(name1); // undefined`

If you want to assign different variable names for the object key, you can use:

`const person = {
name: 'Sara',
age: 25,
gender: 'female'
}

// destructuring assignment
// using different variable names
let { name: name1, age: age1, gender:gender1 } = person;

console.log(name1); // Sara
console.log(age1); // 25
console.log(gender1); // female`

Array Destructuring

You can also perform array destructuring in a similar way. For example,

`const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three`

Assign Default Values

You can assign the default values for variables while using destructuring. For example,

`let arrValue = [10];

// assigning default value 5 and 7
let [x = 5,  y = 7] = arrValue;

console.log(x); // 10
console.log(y); // 7`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











In the above program, arrValue has only one element. Hence,

the x variable will be **10**

the y variable takes the default value **7**

In object destructuring, you can pass default values in a similar way. For example,

`const person = {
name: 'Jack',
}

// assign default value 26 to age if undefined
const { name, age = 26} = person;

console.log(name); // Jack
console.log(age); // 26`

Swapping Variables

In this example, two variables are swapped using the destructuring assignment syntax.

`// program to swap variables

let x = 4;
let y = 7;

// swapping variables
[x, y] = [y, x];

console.log(x); // 7
console.log(y); // 4`

Skip Items

You can skip unwanted items in an array without assigning them to local variables. For example,

`const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, , z] = arrValue;

console.log(x); // one
console.log(z); // three`

In the above program, the second element is omitted by using the comma separator `,`.

Assign Remaining Elements to a Single Variable

You can assign the remaining elements of an array to a variable using the spread syntax `...`. For example,

`const arrValue = ['one', 'two', 'three', 'four'];

// destructuring assignment in arrays
// assigning remaining elements to y
const [x, ...y] = arrValue;

console.log(x); // one
console.log(y); // ["two", "three", "four"]`

Here, `one` is assigned to the x variable. And the rest of the array elements are assigned to y variable.

You can also assign the rest of the object properties to a single variable. For example,

`const person = {
name: 'Sara',
age: 25,
gender: 'female'
}

// destructuring assignment
// assigning remaining properties to rest
let { name, ...rest } = person;

console.log(name); // Sara
console.log(rest); // {age: 25, gender: "female"}`

**Note**: The variable with the spread syntax cannot have a trailing comma `,`. You should use this rest element (variable with spread syntax) as the last variable.

For example,

`const arrValue = ['one', 'two', 'three', 'four'];

// throws an error
const [ ...x, y] = arrValue;

console.log(x); // eror`

Nested Destructuring Assignment

You can perform nested destructuring for array elements. For example,

`// nested array elements
const arrValue = ['one', ['two', 'three']];

// nested destructuring assignment in arrays
const [x, [y, z]] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three`

Here, the variable y and z are assigned nested elements `two` and `three`.

In order to execute the nested destructuring assignment, you have to enclose the variables in an array structure (by enclosing inside `[]`).

You can also perform nested destructuring for object properties. For example,

`const person = {
name: 'Jack',
age: 26,
hobbies: {
read: true,
playGame: true
}
}
// nested destructuring
const {name, hobbies: {read, playGame}} = person;

console.log(name); // Jack
console.log(read); // true
console.log(playGame); // true`

In order to execute the nested destructuring assignment for objects, you have to enclose the variables in an object structure (by enclosing inside `{}`).

**Note**: Destructuring assignment feature was introduced in **ES6**. Some browsers may not support the use of the destructuring assignment. Visit Javascript Destructuring support to learn more.







Table of Contents






JavaScript Destructuring

Array Destructuring

Assign Default Values

Swapping Variables

Skipping Items

Arbitrary Number of Elements

Nested Destructuring Assignment











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Set











Next Tutorial:

JS Classes

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript ES6

JavaScript Tutorial

JavaScript Constructor Function

JavaScript Tutorial

JavaScript Objects

JavaScript Tutorial

JavaScript Symbol
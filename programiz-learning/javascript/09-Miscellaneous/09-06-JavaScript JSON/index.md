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


JavaScript Map


JavaScript Iterators and Iterables


JavaScript Symbol


JavaScript Object.fromEntries()


JavaScript Proxies



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript and JSON

















JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data. For example,

`// JSON syntax
{
"name": "John",
"age": 22,
"gender": "male",

}`

In JSON, the data are in **key/value** pairs separated by a comma `,`.

JSON was derived from JavaScript. So, the JSON syntax resembles JavaScript object literal syntax. However, the JSON format can be accessed and be created by other programming languages too.

**Note**: JavaScript Objects and JSON are not the same. You will learn about their differences later in this tutorial.

JSON Data

JSON data consists of **key/value** pairs similar to JavaScript object properties. The key and values are written in double quotes separated by a colon `:`. For example,

`// JSON data
"name": "John"`

**Note**: JSON data requires double quotes for the key.

JSON Object

The JSON object is written inside curly braces `{ }`. JSON objects can contain multiple **key/value** pairs. For example,

`// JSON object
{ "name": "John", "age": 22 }`

JSON Array

JSON array is written inside square brackets `[ ]`. For example,

`// JSON array
[ "apple", "mango", "banana"]

// JSON array containing objects
[
{ "name": "John", "age": 22 },
{ "name": "Peter", "age": 20 }.
{ "name": "Mark", "age": 23 }
]`

**Note**: JSON data can contain objects and arrays. However, unlike JavaScript objects, JSON data cannot contain functions as values.

Accessing JSON Data

You can access JSON data using the dot notation. For example,

`// JSON object
const data = {
"name": "John",
"age": 22,
"hobby": {
"reading" : true,
"gaming" : false,
"sport" : "football"
},
"class" : ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML`

We use the `.` notation to access JSON data. Its syntax is: `variableName.key`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











You can also use square bracket syntax `[]` to access JSON data. For example,

`// JSON object
const data = {
"name": "John",
"age": 22
}

// accessing JSON object
console.log(data["name"]); // John`

JavaScript Objects VS JSON

Though the syntax of JSON is similar to the JavaScript object, JSON is different from JavaScript objects.




JSON
JavaScript Object



The key in key/value pair should be in double quotes.
The key in key/value pair can be without double quotes.



JSON cannot contain functions.
JavaScript objects can contain functions.



JSON can be created and used by other programming languages.
JavaScript objects can only be used in JavaScript.





Converting JSON to JavaScript Object

You can convert JSON data to a JavaScript object using the built-in `JSON.parse()` function. For example,

`// json object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// accessing the data
console.log(obj.name); // John`

Converting JavaScript Object to JSON

You can also convert JavaScript objects to JSON format using the JavaScript built-in `JSON.stringify()` function. For example,

`// JavaScript object
const jsonData = { "name": "John", "age": 22 };

// converting to JSON
const obj = JSON.stringify(jsonData);

// accessing the data
console.log(obj); // "{"name":"John","age":22}"`

Use of JSON

JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.

JSON is language independent. You can create and use JSON in other programming languages too.

**Also Read:**

JavaScript Program to Convert Objects to Strings








Table of Contents






Introduction

JSON Data

JSON Object

JSON Array

Accessing JSON Data

JavaScript Objects VS JSON

Converting JSON to JavaScript Object

Converting JavaScript Object to JSON

Use of JSON











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS setInterval()











Next Tutorial:

JS Date and Time

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Map

JavaScript Tutorial

JavaScript Objects

JavaScript Tutorial

JavaScript Iterators and Iterables

JavaScript Tutorial

JavaScript Symbol
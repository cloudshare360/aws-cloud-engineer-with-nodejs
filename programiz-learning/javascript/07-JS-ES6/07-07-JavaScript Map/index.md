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

JavaScript forEach()


JavaScript for... of Loop


JavaScript Set and WeakSet


JavaScript Object.fromEntries()


JavaScript Symbol


JavaScript Proxies



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Map

















The JavaScript **ES6** has introduced two new data structures, i.e `Map` and `WeakMap`.

Map is similar to objects in JavaScript that allows us to store elements in a **key/value** pair.

The elements in a Map are inserted in an insertion order. However, unlike an object, a map can contain objects, functions and other data types as key.

Create JavaScript Map

To create a `Map`, we use the `new Map()` constructor. For example,

`// create a Map
const map1 = new Map(); // an empty map
console.log(map1); // Map {}`

Insert Item to Map

After you create a map, you can use the `set()` method to insert elements to it. For example,

`// create a map
let map1 = new Map();

// insert key-value pair
map1.set('info', {name: 'Jack', age: 26});
console.log(map1); // Map {"info" => {name: "Jack", age: 26}}`

You can also use objects or functions as keys. For example,

`// Map with object key
let map2 = new Map();

let obj = {};
map2.set(obj, {name: 'Jack', age: "26"});

console.log(map2); // Map {{} => {name: "Jack", age: "26"}}`

Access Map Elements

You can access `Map` elements using the `get()` method. For example,

`let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// access the elements of a Map
console.log(map1.get('info')); // {name: "Jack", age: "26"}`

Check Map Elements

You can use the `has()` method to check if the element is in a Map. For example,

`const set1 = new Set([1, 2, 3]);

let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// check if an element is in Set
console.log(map1.has('info')); // true`

Removing Elements

You can use the `clear()` and the `delete()` method to remove elements from a Map.

The `delete()` method returns `true` if a specified key/value pair exists and has been removed or else returns `false`. For example,

`let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// removing a particular element
map1.delete('address'); // false
console.log(map1); // Map {"info" => {name: "Jack", age: "26"}}

map1.delete('info'); // true
console.log(map1); // Map {}`

The `clear()` method removes all key/value pairs from a Map object. For example,

`let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

// removing all element
map1.clear();
console.log(map1); // Map {}`

JavaScript Map Size





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











You can get the number of elements in a Map using the `size` property. For example,

`let map1 = new Map();
map1.set('info', {name: 'Jack', age: "26"});

console.log(map1.size); // 1`

Iterate Through a Map

You can iterate through the Map elements using the for...of loop or forEach() method. The elements are accessed in the insertion order. For example,

`let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
for (let [key, value] of map1) {
console.log(key + '- ' + value);
}`

**Output**

name- Jack
age- 27

You could also get the same results as the above program using the `forEach()` method. For example,

`// using forEach method()
let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
map1.forEach(function(value, key) {
console.log(key + '- ' + value)
})`

Iterate Over Map Keys

You can iterate over the Map and get the key using the key() method. For example,

`let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through the Map
for (let key of map1.keys()) {
console.log(key)
}`

**Output**

name
age

Iterate Over Map Values

You can iterate over the Map and get the values using the values() method. For example,

`let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through the Map
for (let values of map1.values()) {
console.log(values);
}`

**Output**

Jack
27

Get Key/Values of Map

You can iterate over the Map and get the key/value of a Map using the entries() method. For example,

`let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through the Map
for (let elem of map1.entries()) {
console.log(`${elem[0]}: ${elem[1]}`);
}`

**Output**

name: Jack
age: 27

JavaScript Map vs Object




Map
Object



Maps can contain objects and other data types as keys.
Objects can only contain strings and symbols as keys.



Maps can be directly iterated and their value can be accessed.
Objects can be iterated by accessing its keys.



The number of elements of a Map can be determined by `size` property.
The number of elements of an object needs to be determined manually.



Map performs better for programs that require the addition or removal of elements frequently.
Object does not perform well if the program requires the addition or removal of elements frequently.





JavaScript WeakMap

The WeakMap is similar to a Map. However, WeakMap can only contain objects as keys. For example,

`const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {}

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');

console.log(weakMap); // WeakMap {{} => "hello"}`

When you try to add other data types besides objects, WeakMap throws an error. For example,

`const weakMap = new WeakMap();

// adding string as a key to WeakMap
weakMap.set('obj', 'hello');`

// throws error
// TypeError: Attempted to set a non-object key in a WeakMap

WeakMap Methods

WeakMaps have methods `get()`, `set()`, `delete()`, and `has()`. For example,

`const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {}

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');

console.log(weakMap); // WeakMap {{} => "hello"}

// get the element of a WeakMap
console.log(weakMap.get(obj)); // hello

// check if an element is present in WeakMap
console.log(weakMap.has(obj)); // true

// delete the element of WeakMap
console.log(weakMap.delete(obj)); // true

console.log(weakMap); // WeakMap {} `

WeakMaps Are Not iterable

Unlike Maps, WeakMaps are not iterable. For example,

`const weakMap = new WeakMap();
console.log(weakMap); // WeakMap {}

let obj = {};

// adding object (element) to WeakMap
weakMap.set(obj, 'hello');

// looping through WeakMap
for (let i of weakMap) {

console.log(i);  // TypeError
}`

JavaScript `Map` and `WeakMap` were introduced in **ES6**. Some browsers may not support their use. To learn more, visit JavaScript Map support and JavaScript WeakMap support.

**Also Read:**

JavaScript ES6

JavaScript Set and WeakSet







Table of Contents






Introduction

Create JavaScript Map

Insert Item to Map

Access Map Elements

Check Map Elements

Removing Elements

JavaScript Map Size

Iterate Through a Map

Iterate Over Map Keys

Iterate Over Map Values

Get Key/Values of Map

JavaScript Map vs Object

JavaScript WeakMap

WeakMap Methods

WeakMap Not iterable











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Spread Operators Class











Next Tutorial:

JS Set

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript forEach()

JavaScript Tutorial

JavaScript for... of Loop

JavaScript Tutorial

JavaScript Set and WeakSet

JavaScript Tutorial

JavaScript Symbol
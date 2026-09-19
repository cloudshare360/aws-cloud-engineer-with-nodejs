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

JavaScript Getter and Setter


JavaScript Object.hasOwnProperty()


JavaScript Object.propertyIsEnumerable()


Javascript Object.defineProperty()


JavaScript Object.freeze()


JavaScript Objects



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Proxies

















In JavaScript, proxies (proxy object) are used to wrap an object and redefine various operations into the object such as reading, insertion, validation, etc. Proxy allows you to add custom behavior to an object or a function.

Creating a Proxy Object

The syntax of proxy is:

`new Proxy(target, handler);`

Here,

`new Proxy()` - the constructor.

`target` - the object/function which you want to proxy

`handler` - can redefine the custom behavior of the object

For example,

`let student1 = {
age: 24,
name: "Felix"
}

const handler = {
get: function(obj, prop) {
return obj[prop] ? obj[prop] : 'property does not exist';
}
}

const proxy = new Proxy(student1, handler);
console.log(proxy.name); // Felix
console.log(proxy.age); // 24
console.log(proxy.class); // property does not exist`

Here, the `get()` method is used to access the object's property value. And if the property is not available in the object, it returns property does not exist.

As you can see, you can use a proxy to create new operations for the object. A case may arise when you want to check if an object has a particular key and perform an action based on that key. In such cases, proxies can be used.

You can also pass an empty handler. When an empty handler is passed, the proxy behaves as an original object. For example,

`let student = {
name: 'Jack',
age: 24
}

const handler = { };

// passing empty handler
const proxy1 = new Proxy(student, {});

console.log(proxy1); // Proxy {name: "Jack", age: 24}
console.log(proxy1.name); // Jack`

Proxy handlers

Proxy provides two handler methods `get()` and `set()`.

get() handler





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











The `get()` method is used to access the properties of a target object. For example,

`let student = {
name: 'Jack',
age: 24
}

const handler = {

// get the object key and value
get(obj, prop) {

return obj[prop];
}
}

const proxy = new Proxy(student, handler);
console.log(proxy.name); // Jack`

Here, the `get()` method takes the object and the property as its parameters.

set() handler

The `set()` method is used to set the value of an object. For example,

`let student = {
name: 'John'
}

let setNewValue = {
set: function(obj, prop, value) {

obj[prop] = value;
return;
}
};

// setting new proxy
let person = new Proxy(student, setNewValue);

// setting new key/value
person.age = 25;
console.log(person); // Proxy {name: "John", age: 25}`

Here, a new property `age` is added to the student object.

Uses of Proxy

1. For Validation

You can use a proxy for validation. You can check the value of a key and perform an action based on that value.

For example,

`let student = {
name: 'Jack',
age: 24
}

const handler = {

// get the object key and value
get(obj, prop) {

// check condition
if (prop == 'name') {
return obj[prop];
} else {
return 'Not allowed';
}
}
}

const proxy = new Proxy(student, handler);
console.log(proxy.name); // Jack
console.log(proxy.age); // Not allowed`

Here, only the name property of the student object is accessible. Else, it returns Not allowed.

2. Read Only View of an Object

There may be times when you do not want to let others make changes in an object. In such cases, you can use a proxy to make an object readable only. For example,

`let student = {
name: 'Jack',
age: 23
}

const handler = {
set: function (obj, prop, value) {
if (obj[prop]) {

// cannot change the student value
console.log('Read only')
}
}
};

const proxy = new Proxy(student, handler);

proxy.name = 'John'; // Read only
proxy.age = 33; // Read only`

In the above program, one cannot mutate the object in any way.

If one tries to mutate the object in any way, you'll only receive a string saying Read Only.

3. Side Effects

You can use a proxy to call another function when a condition is met. For example,

`const myFunction = () => {
console.log("execute this function")
};

const handler = {
set: function (target, prop, value) {
if (prop === 'name' && value === 'Jack') {
// calling another function
myFunction();
}
else {
console.log('Can only access name property');
}
}
};

const proxy = new Proxy({}, handler);

proxy.name = 'Jack'; // execute this function
proxy.age = 33; // Can only access name property`

JavaScript proxy was introduced from the version of **JavaScript ES6**. Some browsers may not fully support its use. To learn more, visit JavaScript proxy.

**Also Read:**

JavaScript Getter and Setter








Table of Contents






Creating a Proxy Object

get() handler

set() handler

Uses of Proxy











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS for...of











Next Tutorial:

JS setTimeout()

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Getter and Setter

JavaScript Tutorial

JavaScript Objects

JavaScript Tutorial

JavaScript Class Inheritance

JavaScript Tutorial

JavaScript Symbol
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

JavaScript Symbol


JavaScript for... of Loop


JavaScript Generators


Javascript Array entries()


JavaScript Array keys()


JavaScript Array values()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Iterators and Iterables

















JavaScript Iterables and Iterators

JavaScript provides a protocol to iterate over data structures. This protocol defines how these data structures are iterated over using the `for...of` loop.

The concept of the protocol can be split into:

iterable

iterator

The iterable protocol mentions that an iterable should have the `Symbol.iterator` key.

**JavaScript Iterables**

The data structures that have the `Symbol.iterator()` method are called iterables. For example, Arrays, Strings, Sets, etc.

**JavaScript Iterators**

An iterator is an object that is returned by the `Symbol.iterator()` method.

The iterator protocol provides the `next()` method to access each element of the iterable (data structure) one at a time.

Let's look at an example of iterables having `Symbol.Iterator()`

`const arr = [1, 2 ,3];

// calling the Symbol.iterator() method
const arrIterator = arr[Symbol.iterator]();

// gives Array Iterator
console.log(arrIterator);

const str = 'hello';

// calling the Symbol.iterator() method
const strIterator = str[Symbol.iterator]();

// gives String Iterator
console.log(strIterator);`

**Output**

Array Iterator {}
StringIterator {}

Here, calling the `Symbol.iterator()` method of both the array and string returns their respective iterators.

Iterate Through Iterables





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











You can use the `for...of` loop to iterate through these iterable objects. You can iterate through the `Symbol.iterator()` method like this:

`const number = [ 1, 2, 3];

for (let n of  number[Symbol.iterator]()) {
console.log(n);
}`

**Output**

1
2
3

Or you can simply iterate through the array like this:

`const number = [ 1, 2, 3];

for (let n of  number) {
console.log(n);
}`

Here, the iterator allows the `for...of` loop to iterate over an array and return each value.

JavaScript next() Method

The iterator object has a `next()` method that returns the next item in the sequence.

The `next()` method contains two properties: `value` and `done`.

**value**

The `value` property can be of any data type and represents the current value in the sequence.

**done**

The `done` property is a boolean value that indicates whether the iteration is complete or not. If the iteration is incomplete, the `done` property is set to `false`, else it is set to `true`.

Let's look at an example of array iterables:

`const arr = ['h', 'e', 'l', 'l', 'o'];

let arrIterator = arr[Symbol.iterator]();

console.log(arrIterator.next()); // {value: "h", done: false}
console.log(arrIterator.next()); // {value: "e", done: false}
console.log(arrIterator.next()); // {value: "l", done: false}
console.log(arrIterator.next()); // {value: "l", done: false}
console.log(arrIterator.next()); // {value: "o", done: false}
console.log(arrIterator.next()); // {value: undefined, done: true}`

You can call `next()` repeatedly to iterate over an `arrIterator` object.

The `next()` method returns an object with two properties: `value` and `done`.

When the `next()` method reaches the end of the sequence, then the `done` property is set to `false`.

Let's look at how `for...of` loop executes the above program. For example,

`const arr = ['h', 'e', 'l', 'l', 'o'];

for (let i of arr) {
console.log(i);
}`

**Output**

h
e
l
l
o

The `for...of` loop does exactly the same as the program above.

The `for...of` loop keeps calling the `next()` method on the iterator. Once it reaches `done:true`, the `for...of` loop terminates.

User Defined Iterator

You can also create your own iterator and call `next()` to access the next element. For example,

`function displayElements(arr) {

// to update the iteration
let n = 0;

return {

// implementing the next() function
next() {

if(n < arr.length) {
return {
value: arr[n++],
done: false
}
}

return {
value: undefined,
done: true
}
}
}
}

const arr = ['h', 'e', 'l', 'l', 'o'];

const arrIterator = displayElements(arr);

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());`

**Output**

{value: "h", done: false}
{value: "e", done: false}
{value: "l", done: false}
{value: "l", done: false}
{value: "o", done: false}
{value: undefined, done: true}

In the above program, we have created our own iterator. The `displayElements()` function returns `value` and `done` property.

Each time the `next()` method is called, the function gets executed once and displays the value of an array.

Finally, when all the elements of an array are exhausted, the `done` property is set to `true`, with `value` as `undefined`.

**Also Read:**

JavaScript for... of Loop

JavaScript Symbol







Table of Contents






JavaScript Iterables & Iterators

The next() Method

User Defined Iterator











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS use-strict











Next Tutorial:

JS Generators

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Symbol

JavaScript Tutorial

JavaScript for... of Loop

JavaScript Tutorial

JavaScript Generators

JavaScript Tutorial

JavaScript Set and WeakSet
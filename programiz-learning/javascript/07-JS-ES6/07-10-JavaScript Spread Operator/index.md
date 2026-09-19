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

JavaScript Array reverse()


JavaScript Math max()


JavaScript Math min()


JavaScript ES6


JavaScript Destructuring Assignment


JavaScript Object.is()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Spread Operator

















The JavaScript spread operator `...` is used to expand or spread out elements of an iterable, such as an array, string, or object.

This makes it incredibly useful for tasks like combining arrays, passing elements to functions as separate arguments, or even copying arrays.

Here's a quick example of the spread statement. You can read the rest of the tutorial for more.

Example

`let numbers = [1, 2, 3];

// equivalent to
// console.log(numbers[0], numbers[1], numbers[2])
console.log(...numbers);

// Output: 1 2 3`

Here, we used the spread operator `...` inside `console.log()` to expand the numbers array into individual elements.

JavaScript Spread Operator Inside Arrays

We can also use the spread operator inside arrays to expand the elements of another array. For example,

`let fruits = ["Apple", "Banana", "Cherry"];

// add fruits array to moreFruits1
// without using the ... operator
let moreFruits1 = ["Dragonfruit", fruits, "Elderberry"];

// spread fruits array within moreFruits2 array
let moreFruits2 = ["Dragonfruit", ...fruits, "Elderberry"];

console.log(moreFruits1);
console.log(moreFruits2);`

**Output**

[ 'Dragonfruit', [ 'Apple', 'Banana', 'Cherry' ], 'Elderberry' ]
[ 'Dragonfruit', 'Apple', 'Banana', 'Cherry', 'Elderberry' ]

Here, `...fruits` expands the fruits array inside the moreFruits2 array, which results in moreFruits2 consisting only of individual string elements and no inner arrays.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











On the other hand, the moreFruits1 array consists of an inner array because we didn't expand the fruits array inside it.

**Note:** Since the spread operator was introduced in ES6, some browsers may not support its use. To learn more, visit JavaScript Spread Operator support.

Clone Array Using Spread Operator

In JavaScript, objects are assigned by reference and not by values. For example,

`let arr1 = [ 1, 2, 3];
let arr2 = arr1;

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

// append an item to arr1
arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]`

Here, both variables arr1 and arr2 are referring to the same array. Hence, a change in one variable results in a change in both variables.

However, if you want to copy arrays so that they do not refer to the same array, you can use the spread operator. This way, the change in one array is not reflected in the other. For example,

`let arr1 = [ 1, 2, 3];

// copy using spread syntax
let arr2 = [...arr1];

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

// append an item to arr1
arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3]`

Spread Operator With Object

You can also use the spread operator with object literals. For example,

`let obj1 = { x : 1, y : 2 };
let obj2 = { z : 3 };

// use the spread operator to add
// members of obj1 and obj2 to obj3
let obj3 = {...obj1, ...obj2};

// add obj1 and obj2 without spread operator
let obj4 = {obj1, obj2};

console.log("obj3 =", obj3);
console.log("obj4 =", obj4);`

**Output**

obj3 = { x: 1, y: 2, z: 3 }
obj4 = { obj1: { x: 1, y: 2 }, obj2: { z: 3 } }

Here, the properties of obj1 and obj2 are added to obj3 using the spread operator.

However, when we add those two objects to obj4 without using the spread operator, we get `obj1` and `obj2` as keys for obj4.

JavaScript Rest Parameter

When the spread operator is used as a parameter, it is known as the **rest parameter**.

You can accept multiple arguments in a function call using the rest parameter. For example,

`let printArray = function(...args) {
console.log(args);
}

// pass a single argument
printArray(3);

// pass multiple arguments
printArray(4, 5, 6);`

**Output**

[ 3 ]
[ 4, 5, 6 ]

Here,

When a single argument is passed to `printArray()`, the rest parameter takes only one parameter.

When three arguments are passed, the rest parameter takes all three parameters.

**Note**: Using the rest parameter will pass the arguments as array elements.

Spread Operator as Part of Function Argument

You can also use the spread operator as part of a function argument. For example,

`// function that takes three arguments
function sum(num1, num2 , num3) {
console.log(num1 + num2 + num3);
}

let num1 = [1, 3, 4, 5];

// pass the first three array elements
sum(...num1);

// Output: 8`

If you pass multiple arguments using the spread operator, the function takes the required number of arguments and ignores the rest.

**Also Read:**

JavaScript Program to Append an Object to an Array







Table of Contents






Introduction

JavaScript Spread Operator Inside Arrays

Spread Operator With Object

JavaScript Rest Parameter

Spread Operator as Part of Function Argument










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Template Literals











Next Tutorial:

JS Map

















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

JavaScript Destructuring Assignment

JavaScript Tutorial

JavaScript Array

JavaScript Tutorial

JavaScript typeof Operator
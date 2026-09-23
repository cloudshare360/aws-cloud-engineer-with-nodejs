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

JavaScript Array splice()


JavaScript Array shift()


JavaScript Array unshift()


JavaScript Multidimensional Array


JavaScript Array pop()


JavaScript Array slice()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Array

















An array is an object that can store multiple values at once.

`const age = [17, 18, 15, 19, 14];`

In the above example, we created an array to record the age of five students.

Array of Five Elements
Why Use Arrays?

Arrays allow us to organize related data by grouping them within a single variable.

Suppose you want to store a list of fruits. Using only variables, this process might look like this:

`let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Orange";`

Here, we've only listed a few fruits. But what if we need to store **100** fruits?

For such a case, the easiest solution is to store them in an array.

`let fruits = ["Apple", "Banana", "Orange", ...];`

An array can store many values in a single variable, making it easy to access them by referring to the corresponding index number.

Create an Array

We can create an array by placing elements inside an array literal `[]`, separated by commas. For example,

`const numbers = [10, 30, 40, 60, 80];`

Here,

`numbers` - Name of the array.

`[10, 30, 40, 60, 80]` - Elements of the array.

Examples of JavaScript Arrays

Here are a few examples of JavaScript arrays:

`// empty array
const emptyArray = [];

// array of strings
const dailyActivities = ["eat", "work", "sleep"];

// array with mixed data types
const mixedArray = ["work", 1, true];`

**Note:** Unlike many other programming languages, JavaScript allows us to create arrays with mixed data types.

Access Elements of an Array

Each element of an array is associated with a number called an **index**, which specifies its position inside the array.

Consider the following array:

`let numbers = [10, 30, 40, 60, 80];`

Here is the indexing of each element:

Index of Array Elements
We can use an array index to access the elements of the array.

Code
Description

`numbers[0]`
Accesses the first element **10**.

`numbers[1]`
Accesses the second element **30**.

`numbers[2]`
Accesses the third element **40**.

`numbers[3]`
Accesses the fourth element **60**.

`numbers[4]`
Accesses the fifth element **80**.

Let's look at an example.

`let numbers = [10, 30, 40, 60, 80]

// access first element
console.log(numbers[0]);  // 10

// access third element
console.log(numbers[2]);  // 40
`

**Remember:** Array indexes always start with **0**, not **1.**

Add Element to an Array

We can add elements to an array using built-in methods like `push()` and `unshift()`.

**1. Using the push() Method**

The `push()` method adds an element at the end of the array.

`let dailyActivities = ["eat", "sleep"];

// add an element at the end
dailyActivities.push("exercise");

console.log(dailyActivities);

// Output: [ 'eat', 'sleep', 'exercise' ]`

**2. Using the unshift() Method**





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











The `unshift()` method adds an element at the beginning of the array.

`let dailyActivities = ["eat", "sleep"];

// add an element at the beginning
dailyActivities.unshift("work");

console.log(dailyActivities);

// Output: [ 'work', 'eat', 'sleep' ]`

To learn more, visit Array push() and Array unshift().

Change the Elements of an Array

We can add or change elements by accessing the index value. For example,

`let dailyActivities = [ "eat", "work", "sleep"];

// change the second element
// use array index 1
dailyActivities[1] = "exercise";

console.log(dailyActivities);

// Output: [ 'eat', 'exercise', 'sleep' ]`

Here, we changed the array element in index **1** (second element) from `work` to `exercise`.

Remove Elements From an Array

We can remove an element from any specified index of an array using the `splice()` method.

`let numbers = [1, 2, 3, 4, 5];

// remove one element
// starting from index 2
numbers.splice(2, 1);

console.log(numbers);

// Output: [ 1, 2, 4, 5 ]`

In this example, we removed the element at index **2** (the third element) using the `splice()` method.

Notice the following code:

`numbers.splice(2, 1);`

Here, `(2, 1)` means that the `splice()` method deletes one element starting from index **2**.

**Note:** Suppose you want to remove the second, third, and fourth elements. You can use the following code to do so:

`numbers.splice(1, 3);`

To learn more, visit JavaScript Array splice().

Array Methods

JavaScript has various array methods to perform useful operations. Some commonly used array methods in JavaScript are:

Method
Description

concat()
Joins two or more arrays and returns a result.

toString()
Converts an array to a string of (comma-separated) array values.

indexOf()
Searches an element of an array and returns its position (index).

find()
Returns the first value of the array element that passes a given test.

findIndex()
Returns the first index of the array element that passes a given test.

forEach()
Calls a function for each element.

includes()
Checks if an array contains a specified element.

sort()
Sorts the elements alphabetically in strings and ascending order in numbers.

slice()
Selects part of an array and returns it as a new array.

splice()
Removes or replaces existing elements and/or adds new elements.

To learn more, visit JavaScript Array Methods.

More on Javascript Array

Create an array using the new keyword.

You can also create an array using JavaScript's `new` keyword. For example,

`const array2 = new Array("eat", "sleep");

console.log(array2);

// Output: [ 'eat', 'sleep' ]`

**Note**: It's better to create an array using an **array literal** `[]` for greater readability and execution speed.

Remove elements from an array using pop() and shift() methods.

We can remove an element from an array using built-in methods like `pop()` and `shift()`.

**1. Remove the last element using pop().**

`let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the last element
dailyActivities.pop();

console.log(dailyActivities);

// Output: [ 'work', 'eat', 'sleep' ]`

**2. Remove the first element using shift().**

`let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];

// remove the first element
dailyActivities.shift();

console.log(dailyActivities);

// Output: [ 'eat', 'sleep', 'exercise' ]`

To learn more, visit Array pop() and Array shift().

Length of an Array.

We can find the length of an array using the `length` property. For example,

`const dailyActivities = [ "eat", "sleep"];

// return the length of array
console.log(dailyActivities.length);

// Output: 2`

Relationship between arrays and objects in JavaScript.

In JavaScript, arrays are a type of object. However,

**Arrays** use numbered indexes to access elements.

**Objects** use named indexes (keys) to access values.

Since arrays are objects, the array elements are **stored by reference**. Hence, when we assign an array to another variable, we are just pointing to the same array in memory.

So, changing one will change the other because they're essentially the same array. For example,

`let arr = ["h", "e"];

// assign arr to arr1
let arr1 = arr;

// change arr1
arr1.push("l");

console.log(arr);
console.log(arr1); `

**Output**

[ 'h', 'e', 'l' ]
[ 'h', 'e', 'l' ]

Here, we modified the copied array arr1, which also modified the original array arr.

**Also Read:**

JavaScript forEach

JavaScript for...of

JavaScript Multidimensional Array







Table of Contents






Introduction

Create an Array

Access Elements of an Array

Add Element to an Array

Change the Elements of an Array

Remove Elements From an Array

Array Methods










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Prototype











Next Tutorial:

Multidimensional Array

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Multidimensional Array

JavaScript Tutorial

JavaScript Spread Operator

JavaScript Tutorial

JavaScript forEach()

JavaScript Tutorial

JavaScript Set and WeakSet
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


JavaScript Destructuring Assignment


JavaScript Array splice()


JavaScript Array


Javascript Array forEach()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Multidimensional Array

















In JavaScript, multidimensional arrays contain another array inside them.

Here is a simple example of a multidimensional array. Read the rest of the tutorial to learn more.

Example

`// multidimensional array
// contains 3 separate arrays as elements
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

console.log(data);

// Output : [ [ 1, 2, 3 ], [ 1, 3, 4 ], [ 4, 5, 6 ] ]`

Here, we created a multidimensional array named data with the following arrays as its elements: `[ 1, 2, 3 ]`, `[ 1, 3, 4 ]`, `[ 4, 5, 6 ]`.

Use Existing Arrays as Elements

We can also create multidimensional arrays by nesting existing arrays within them. For example,

`// declare three arrays
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// create multidimensional array
// using student1, student2, and student3
let studentsData = [student1, student2, student3];

// print the multidimensional array
console.log(studentsData);

// Output: [ [ 'Jack', 24 ], [ 'Sara', 23 ], [ 'Peter', 24 ] ]`

Here, we first created three arrays named student1, student2, and student3.

We then nested these three arrays within the studentsData array to create our multidimensional array:

`let studentsData = [student1, student2, student3];`

Access Elements of an Array

You can access the elements of a multidimensional array using array indexes. For example,

`let x = [
['Jack', 24],
['Sara', 23],
['Peter', 24]
];

// access the first item
console.log(x[0]);  // [ 'Jack', 24 ]

// access the first item of the first inner array
console.log(x[0][0]);  // Jack

// access the second item of the third inner array
console.log(x[2][1]);  // 24
`

**Output**

[ 'Jack', 24 ]
Jack
24

You can think of a multidimensional array (in this case, x), as a table with **3** rows and **2** columns.

Accessing multidimensional array elements

Add Elements to a Multidimensional Array

You can use an index notation or the push() method to add elements to a multidimensional array.

**1. Using Index Notation**

`let studentsData = [["Jack", 24], ["Sara", 23]];

// add "hello" as the 3rd element
// of the 2nd inner array
studentsData[1][2] = "hello";

console.log(studentsData);

// Output: [ [ 'Jack', 24 ], [ 'Sara', 23, 'hello' ] ]`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











**2. Using the push() Method**

The `push()` method inserts an element at the end of the array. For example,

`let studentsData = [["Jack", 24], ["Sara", 23]];

// add element to the end of the outer array
studentsData.push(["Peter", 24]);

console.log(studentsData);

// add "hello" as the final element
// of the 2nd inner array
studentsData[1].push("hello");

console.log(studentsData);`

**Output**

[ [ 'Jack', 24 ], [ 'Sara', 23 ], [ 'Peter', 24 ] ]
[ [ 'Jack', 24 ], [ 'Sara', 23, 'hello' ], [ 'Peter', 24 ] ]

Add elements using the splice() method.

You can also use the splice() method to add an element at a specified index. For example,

`let studentsData = [["Jack", 24], ["Sara", 23]];

// add element at 1 index
studentsData.splice(1, 0, ["Peter", 24]);

console.log(studentsData);

// Output: [ [ 'Jack', 24 ], [ 'Peter', 24 ], [ 'Sara', 23 ] ] `

Remove Elements From a Multidimensional Array

You can use the splice() method to remove an element from any position in the multidimensional array. For example,

`let studentsData = [['Jack', 24], ['Sara', 23],];

// remove one element
// starting from index 0
studentsData.splice(0,1);

console.log(studentsData);

// Output: [ [ 'Sara', 23 ] ]`

In the above program, `studentsData.splice(0,1)` removes the first element of the multidimensional array. Here,

**0** - The start index from where to modify the array.

**1** - The number of elements to delete.

If you want to delete both arrays, you can use the code `studentsData.splice(0,2)`.

Remove the last element using the pop() method.

If you want to remove the last element from a multidimensional array, you can use the pop() method.

**Remove Element From Outer Array**

`let studentsData = [["Jack", 24], ["Sara", 23]];

// remove the array element from outer array
studentsData.pop();

console.log(studentsData);

// Output: [ [ 'Jack', 24 ] ]`

**Remove Element From Inner Array**

`// remove the element from the inner array
let studentsData = [['Jack', 24], ['Sara', 23]];
studentsData[1].pop();

console.log(studentsData);

// Output: [ [ 'Jack', 24 ], [ 'Sara' ] ]`

Iterate Over Multidimensional Array

In JavaScript, you can use nested loops to go through a multidimensional array: one loop for the outer array and another loop inside it for the inner arrays. For example,

`let studentsData = [["Jack", 24], ["Sara", 23]];

// loop over outer array
for(let i = 0; i < studentsData.length; i++) {

// loop over inner array elements
for(let j = 0; j < studentsData[i].length; j++) {
console.log(studentsData[i][j]);
}
}`

**Output**

Jack
24
Sara
23

Use forEach() to Iterate Over Multidimensional Array

You can also use Array's forEach() method to iterate over a multidimensional array. For example,

`let studentsData = [["Jack", 24], ["Sara", 23]];

// iterate over studentsData
studentsData.forEach((student) => {
student.forEach((data) => {
console.log(data);
});
});`

**Output**

Jack
24
Sara
23

The first `forEach()` method is used to iterate over the outer array elements and the second `forEach()` is used to iterate over the inner array elements.

Use for...of to Iterate Over Multidimensional Array

You can use the for...of loop to iterate over the multidimensional array. For example,

`let studentsData = [["Jack", 24], ["Sara", 23]];

for (let i of studentsData) {
for (let j of i) {
console.log(j);
}
}`

**Output**

Jack
24
Sara
23







Table of Contents






Introduction

Use Existing Arrays as Elements

Access Elements of an Array

Add Elements to a Multidimensional Array

Remove Elements From a Multidimensional Array

Iterate Over Multidimensional Array










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Array











Next Tutorial:

JS Strings

















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

JavaScript Destructuring Assignment

JavaScript Tutorial

JavaScript Array
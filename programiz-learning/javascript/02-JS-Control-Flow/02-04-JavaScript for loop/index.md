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

JavaScript while and do...while Loop


JavaScript for... of Loop


JavaScript for...in loop


JavaScript continue Statement


JavaScript break Statement


JavaScript Iterators and Iterables



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript for loop

















In JavaScript, the `for` loop is used for iterating over a block of code a certain number of times, or to iterate over the elements of an array.

Here's a quick example of the `for` loop. You can read the rest of the tutorial for more details.

Example

`for (let i = 0; i < 3; i++) {
console.log("Hello, world!");
}

// Output:
// Hello, world!
// Hello, world!
// Hello, world!`

In this example, we used the `for` loop to print `"Hello, world!"` three times to the console.

JavaScript for loop Syntax

The syntax of the `for` loop is:

`for (initialExpression; condition; updateExpression) {
// for loop body
}`

Here,

`initialExpression` - Initializes a counter variable.

`condition` - The condition to be evaluated. If `true`, the body of the `for` loop is executed.

`updateExpression` - Updates the value of `initialExpression`.

Once an iteration of the loop is completed, the `condition` is evaluated again. The process continues until the condition is `false`.

To learn more about the `condition`, visit JavaScript Comparison and Logical Operators.

Flowchart of JavaScript for Loop

Flowchart of JavaScript for loop

Example 1: Print Numbers From 1 to 5

`for (let i = 1; i < 6; i++) {
console.log(i);
}`

**Output**

1
2
3
4
5

In this example, we have printed numbers from **1** to **5** using a `for` loop.

Here is how this program works:

Iteration
Variable
Condition: i < 6
Action

1st
`i = 1`
`true`
**1** is printed.
`i` is increased to **2**.

2nd
`i = 2`

`true`
**2** is printed.
`i` is increased to **3**.

3rd
`i = 3`
`true`
**3** is printed.
`i` is increased to **4**.

4th
`i = 4`

`true`
**4** is printed.
`i` is increased to **5**.

5th
`i = 5`

`true`
**5** is printed.
`i` is increased to **6**.

6th
`i = 6`

`false`
The loop is terminated.

Example 2: Display Sum of n Natural Numbers

`// program to display the sum of natural numbers

let sum = 0;
const n = 100

// loop from i = 1 to i = n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
sum += i;  // sum = sum + i
}

console.log(`sum: ${sum}`);

// Output: sum: 5050`

Initially, the value of sum is **0**, while n has a constant value of **100**.

Then, we iterate a `for` loop from `i = 1 to n`. In each iteration,

i is added to sum.

Then, the value of i is increased by **1**.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











When i becomes **101**, the test condition becomes `false` and sum will be equal to `0 + 1 + 2 + ... + 100`.

Iterate Through an Array

A `for` loop can also be used to iterate over elements of an array. For example,

`const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}`

**Output**

apple
banana
cherry

This loop iterates through the fruits array and prints each element to the console.

More on JavaScript for loop

Nested for Loops

A `for` loop can also have another `for` loop inside it. For each cycle of the outer loop, the inner loop completes its entire sequence of iterations. For example,

`// outer loop
for (let i = 0; i < 3; i++) {

// inner loop
for (let j = 0; j < 2; j++) {
console.log(`i = ${i}, j = ${j}`);
}

}`

**Output**

i = 0, j = 0
i = 0, j = 1
i = 1, j = 0
i = 1, j = 1
i = 2, j = 0
i = 2, j = 1

Here,

**Outer Loop** - Runs from `i = 0 to 2`.

**Inner Loop** - Runs from `j = 0 to 1`.

In each iteration of the outer loop, the inner loop runs from `j = 0 to 1`.

JavaScript Infinite for loop

In JavaScript, we can create an infinite `for` loop by setting a condition that always evaluates to `true`. For example,

`for (let i = 0; true; i++) {
console.log("This loop will run forever!");
}`

**Output**

This loop will run forever!
This loop will run forever!
This loop will run forever!
…

In this example, the condition in the `for` loop is explicitly set to `true`.

Since this condition never changes and always evaluates to `true`, the loop will continue indefinitely (until the memory is full).

**Note**: Creating an infinite loop is something that we should generally avoid, as it will consume all available resources to execute the loop endlessly.

Omitting Parts of the for Loop

We can omit any part of the `for` loop declaration and include it in a different part of the code.

Let's look at an example.

`// initialization outside the loop
let i = 0;

// omit initialization and update statements
for (; i < 3; ) {

console.log(`i is ${i}`);

// increment inside the loop body
i++;
}`

**Output**

i is 0
i is 1
i is 2

Here, we have initialized i before the loop, which iterates as long as i is less than **3**.

Notice that i is incremented within the loop body, which allows us to skip the update statement inside the parentheses `()` of the `for` loop.

In other words, `for (; i < 3; )` indicates omitted initialization and update expression, focusing only on the condition.

**Also Read:**

JavaScript while and do...while Loop

JavaScript for...of Loop

JavaScript for...in Loop

JavaScript break Statement

JavaScript continue Statement







Table of Contents






Introduction

JavaScript for loop Syntax

Flowchart of JavaScript for Loop

Example 1: Print Numbers From 1 to 5

Example 2: Display Sum of n Natural Numbers

Iterate Through an Array










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS if...else











Next Tutorial:

JS while Loop

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript while and do...while Loop

JavaScript Tutorial

JavaScript continue Statement

JavaScript Tutorial

JavaScript for... of Loop

JavaScript Tutorial

JavaScript for...in loop
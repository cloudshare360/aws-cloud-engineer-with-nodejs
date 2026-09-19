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

JavaScript break Statement


JavaScript for loop


JavaScript while and do...while Loop


JavaScript if...else Statement


JavaScript switch...case Statement


JavaScript for...in loop



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript continue Statement

















The `continue` statement skips the current iteration of the loop and proceeds to the next iteration.

Here's a brief example to demonstrate the `continue` statement. You can read the rest of the tutorial to learn more.

Example

`// display odd numbers

for (let i = 1; i <= 5; i++) {
// skip the iteration if i is even
if (i % 2 === 0) {
continue;
}
console.log(i);
}

// Output:
// 1
// 3
// 5`

Here, `continue` skips the rest of the loop's body when i is even. Thus, only odd numbers are printed.

Working of JavaScript continue Statement

Working of JavaScript continue Statement
**Note**: The `continue` statement is usually used inside decision-making statements such as if...else.

Example 1: JavaScript continue With for Loop

We can use the continue statement to skip iterations in a `for` loop. For example,

`for (let i = 1; i <= 10; ++i) {

// skip iteration if value of
// i is between 4 and 9
if (i > 4 && i < 9) {
continue;
}
console.log(i);
}`

**Output**

1
2
3
4
9
10

In the above example, we used a `for` loop to print the value of the variable i in each iteration. Notice the statement,

`if (i > 4 && i < 9) {
continue;
}`

Here, the `continue` statement is executed whenever i becomes more than **4** and less than **9**.

Hence, the output skips the values **5**, **6,** **7**, and **8**.

Example 2: JavaScript continue With while Loop

We can also use the `continue` statement with a `while` loop. For example,

`var num = 1;

while (num <= 10) {

// skip iteration if num is even
if (num % 2 === 0) {
++num;
continue;
}

console.log(num);
++num;
}`

**Output**

1
3
5
7
9





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











In the above example, we used a `while` loop to print odd numbers from **1** to **10**. Notice the line,

`if (num % 2 === 0) {
++num;
continue
}`

When the number is even,

The value of num is incremented for the next iteration.

The `continue` statement then skips the current iteration.

Notice that we have increased the value of num both inside and outside the `if` statement.

**Inside the if Block**

You must increase the value of num before the `continue` statement is executed. Otherwise, you will end up creating an infinite loop because `num <= 10` will always be `true`.

**Outside the if Block**

When the `if` block is not executed, your code to increase num will also be skipped. Thus, you must increase num again outside the `if` block to prevent an infinite loop.

More on JavaScript continue

JavaScript continue With Nested Loop.

When `continue` is used inside two nested loops, `continue` affects only the inner loop. For example,

`// nested for loops

// outer loop
for (let i = 1; i <= 3; i++) {

// inner loop
for (let j = 1; j <= 3; j++) {
if (j == 2) {
continue;
}
console.log(`i = ${i}, j = ${j}`);
}
}`

**Output**

i = 1, j = 1
i = 1, j = 3
i = 2, j = 1
i = 2, j = 3
i = 3, j = 1
i = 3, j = 3

In the above program, the `continue` statement only skips the iteration of the inner loop when `j == 2`.

Using continue inside a nested loop

Using continue with labels.

In nested loops, it's possible to skip iterations of the outer loop by using a **labeled continue statement**.

Working of labeled break statement in JavaScript
Let's look at an example.

`outerloop: for (let i = 1; i <= 3; i++) {

innerloop: for (let j = 1; j <= 3; j++) {

if (j === 2) {
continue outerloop;
}

console.log("i = " + i + ", j = " + j);
}
}`

**Output**

i = 1, j = 1
i = 2, j = 1
i = 3, j = 1

In the above example, we have labeled our loops as:

`outerloop: for (let i = 1; i <= 3; i++) {...}
innerloop: for (let j = 1; j <= 3; j++) {...}`

This helps us identify the loops. Notice the use of the labeled `continue` statement:

`if (j === 2) {
continue outerloop;
}`

This skips the current iteration of the `outerloop` whenever `j === 2`.

**Also Read:**

JavaScript break Statement

JavaScript for Loop

JavaScript while Loop







Table of Contents






Introduction

Example 1: JavaScript continue With for Loop

Example 2: JavaScript continue With while Loop










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS break











Next Tutorial:

JS Switch

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript break Statement

JavaScript Tutorial

JavaScript for loop

JavaScript Tutorial

JavaScript while and do...while Loop

JavaScript Tutorial

JavaScript if...else Statement
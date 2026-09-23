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

JavaScript continue Statement


JavaScript while and do...while Loop


JavaScript switch...case Statement


JavaScript for loop


JavaScript if...else Statement


JavaScript throw Statement



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript break Statement

















The `break` statement terminates the loop immediately when it's encountered.

Here's a quick example of the `break` statement. You can read the rest of the tutorial for more.

Example

`// infinite loop because condition is always true
while (true) {

// get number input from user
let num = Number(prompt("Enter a number: "));

// break condition
if (num == 0) {
break;
}

console.log(num);
}

// Output:
// Enter a number: 5
// 5
// Enter a number: 0`

In this example, the `break` statement terminates the infinite loop when the user input num is **0.** If it isn't **0**, the loop keeps taking input and printing it to the screen.

Working of JavaScript break Statement

The image below shows the working of the `break` statement in for and while loops.

Working of JavaScript break Statement
**Note**: The `break` statement is usually used inside decision-making statements such as if...else.

Example 1: JavaScript break With for Loop

`// Program to print the value of i

for (let i = 1; i <= 5; i++) {

// break condition
if (i == 3) {
break;
}

console.log(i);
}`

**Output**

1
2

In the above program, we have used a for loop to print numbers from **1** to **5**. Notice the use of `break` inside the `if` statement:

`if(i == 3) {
break;
}`

Here, when the value of i becomes **3**, the `break` statement is executed, which terminates the loop.

Hence, the output doesn't include values greater than or equal to **3**.

Example 2: JavaScript break With while Loop

We can terminate a `while` loop using the `break` statement. For example,

`// Program to find the sum of positive numbers
// the while loop runs infinitely
// loop terminates only when user enters a negative number

let sum = 0;

// infinite loop
while (true) {

// get number input
let num = Number(prompt("Enter a number: "));

// terminate the loop if num is negative
if (num < 0)
break;
}

// otherwise, add num to sum
else {
sum += num;
}
}

// print the sum
console.log(`Sum: ${sum}`);`

**Output**

Enter a number: 3
Enter a number: 5
Enter a number: 0
Enter a number: 8
Enter a number: -3
Sum: 16

In the above example, we have used a `while` loop whose condition is always `true`.

`while (true) {
// code
}`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Inside the loop, we ask for user input.

If the input value is negative, `num < 0` becomes `true`, and the `break` statement terminates the loop.

Otherwise, the input value is added to the sum variable.

`if (num < 0) {
break;
}
else {
sum += num;
}`

More on JavaScript break

JavaScript break With Nested Loop.

When `break` is used inside two nested loops, it terminates the inner loop. For example,

`// nested for loops

// outer loop
for (let i = 1; i <= 3; i++) {

// inner loop
for (let j = 1; j <= 3; j++) {
if (i == 2) {
break;
}
console.log(`i = ${i}, j = ${j}`);
}
}`

**Output**

i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3

In the above program, the `break` statement executes when `i == 2`. It terminates the inner loop and the control flow moves to the outer loop.

Hence, the value of `i = 2` is never displayed in the output.

Using break inside a nested loop

Using break with labels.

When using nested loops, we can terminate the outer loop with a **labeled break statement**.

Working of labeled break statement in JavaScript
As you can see in the image above, the `outerloop` label identifies the outer loop.

When `break outerloop;` is encountered, it exits the outer loop, and control shifts to the statements following it.

Let's look at an example.

`outerloop: for (let i = 1; i <= 3; i++) {

innerloop: for (let j = 1; j <= 3; j++) {

if (j === 3) {
break outerloop;
}

console.log("i = " + i + ", j = " + j);
}
}`

**Output**

i = 1, j = 1
i = 1, j = 2

In the above example, we have labeled our loops as:

`outerloop: for (let i = 1; i <= 3; i++) {...}
innerloop: for (let j = 1; j <= 3; j++) {...}`

This helps us identify the loops. Notice the use of the labeled `break` statement:

`if (j === 3) {
break outerloop;
}`

Here, the `break` statement will terminate the loop labeled as `outerloop`.

Using break in a switch statement.

We can also use the `break` statement within a switch statement to terminate a case. For example,

`let fruit = "Apple";

switch (fruit) {
case "Banana":
console.log("Banana is good!");
break;
case "Apple":
console.log("Apple is tasty!");
break;
default:
console.log("Unknown fruit!");
}

// Output: Apple is tasty!`

In this example, the case for `Apple` is executed, and then `break` terminates the `switch` statement.

**Also Read:**

JavaScript continue Statement







Table of Contents






Introduction

Working of JavaScript break Statement

Example: break Statement With while Loop

break with Nested Loop










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS while Loop











Next Tutorial:

JS continue

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript continue Statement

JavaScript Tutorial

JavaScript while and do...while Loop

JavaScript Tutorial

JavaScript switch...case Statement

JavaScript Tutorial

JavaScript for loop
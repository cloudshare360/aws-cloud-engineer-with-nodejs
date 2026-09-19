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

JavaScript Ternary Operator


JavaScript break Statement


JavaScript switch...case Statement


JavaScript throw Statement


JavaScript try...catch...finally Statement


JavaScript continue Statement



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript if...else Statement

















The JavaScript `if...else` statement is used to execute/skip a block of code based on a condition.

Here's a quick example of the `if...else` statement. You can read the rest of the tutorial if you want to learn about `if...else` in greater detail.

Example

`let score = 45;

// check if score is fifty or greater
if (score >= 50) {
console.log("You passed the examination.");
}
else {
console.log("You failed the examination.");
}

// Output: You failed the examination.`

In the above example, the program displays `You passed the examination.` if the score variable is equal to **50**. Otherwise, it displays `You failed the examination.`

JavaScript if...else Statement

In computer programming, the `if...else` statement is a conditional statement that executes a block of code only when a specific condition is met. For example,

Suppose we need to assign different grades to students based on their scores.

If a student scores above **90**, assign grade **A**.

If a student scores above **75**, assign grade **B**.

If a student scores above **65**, assign grade **C**.

These conditional tasks can be achieved using the `if...else` statement.

JavaScript if Statement

We use the `if` keyword to execute code based on some specific condition.

The syntax of `if` statement is:

`if (condition) {
// block of code
}`

The `if` keyword checks the condition inside the parentheses `()`.

If the condition is evaluated to `true`, the code inside `{ }` is executed.

If the condition is evaluated to `false`, the code inside `{ }` is skipped.

**Note:** The code inside `{ }` is also called the body of the `if` statement.

Working of the if Statement

Example 1: JavaScript if Statement

`// Program to check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
// the body of the if statement
console.log("positive number");
}

console.log("nice number");`

**Sample Output 1**

Enter a number: 5
positive number
nice number

In the above program, when we enter **5**, the condition `number > 0` evaluates to `true`. Thus, the body of the `if` statement is executed.

**Sample Output 2**

Enter a number: -1
nice number

Again, when we enter **-1**, the condition `number > 0` evaluates to `false`. Hence, the body of the `if` statement is skipped.

Since `console.log("nice number");` is outside the body of the `if` statement, it is always executed.

**Note:** We use comparison and logical operators in our `if` conditions. To learn more, you can visit JavaScript Comparison and Logical Operators.

JavaScript else Statement

We use the `else` keyword to execute code when the condition specified in the preceding `if` statement evaluates to `false`.

The syntax of the `else` statement is:

`if (condition) {
// block of code
// execute this if condition is true
}
else {
// block of code
// execute this if condition is false
}`

The `if...else` statement checks the `condition` and executes code in two ways:

If `condition` is **true**, the code inside `if` is executed. And, the code inside `else` is skipped.

If `condition` is **false**, the code inside `if` is skipped. Instead, the code inside `else` is executed.

Working of the if...else statement

Example 2: JavaScript if…else Statement

`let age = 17;

// if age is 18 or above, you are an adult
// otherwise, you are a minor

if (age >= 18) {
console.log("You are an adult");
}
else {
console.log("You are a minor");
}

// Output: You are a minor`

In the above example, the `if` statement checks for the condition `age >= 18`.

Since we set the value of age to **17**, the condition evaluates to `false`.

Thus, the code inside `if` is skipped. And, code inside `else` is executed.

When can we omit { } in if…else statements?

We can omit `{ }` in `if…else` statements when we have a single line of code to execute. For example,

`let num = 4;

// if condition
if (num % 2 == 0)
console.log("even number");
else
console.log("odd number");

// Output: even number`

JavaScript else if Statement

We can use the `else if` keyword to check for multiple conditions.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











The syntax of the `else if` statement is:

`// check for first condition
if (condition1) {
// if body
}

// check for second condition
else if (condition2){
// else if body
}

// if no condition matches
else {
// else body
}`

Here,

First, the condition in the `if` statement is checked. If the condition evaluates to `true`, the body of `if` is executed, and the rest is skipped.

Otherwise, the condition in the `else if` statement is checked. If `true`, its body is executed and the rest is skipped.

Finally, if no condition matches, the block of code in `else` is executed.

Working of the if...else if...else statement

Example 3: JavaScript if...else if Statement

`let rating = 4;

// rating of 2 or below is bad
// rating of 4 or above is good
// else, the rating is average

if (rating <= 2) {
console.log("Bad rating");
}
else if (rating >= 4) {
console.log("Good rating!");
}
else {
console.log("Average rating");
}

// Output: Good rating!`

In the above example, we used the `if` statement to check for the condition `rating <= 2`.

Likewise, we used the `else if` statement to check for another condition, `rating >= 4`.

Since the `else if` condition is satisfied, the code inside it is executed.

How to use multiple else if statements?

We can use the `else if` keyword as many times as we want. For example,

`let alphabet = "c";

if (alphabet == "a") {
console.log("a for apple");
}
// first else if statement
else if (alphabet == "b") {
console.log("b for banana");
}
// second else if statement
else if (alphabet == "c") {
console.log("c for cat");
}
// use more else if statements if needed
// otherwise, use an else statement
else {
console.log("unknown alphabet");
}

// Output: c for cat`

In the above example, we used two `else if` statements.

The second `else if` statement was executed as its condition was satisfied.

Nested if...else Statement

When we use an `if...else` statement inside another `if...else` statement, we create a **nested if...else** statement. For example,

`let marks = 60;

// outer if...else statement
// student passed if marks 40 or above
// otherwise, student failed

if (marks >= 40) {

// inner if...else statement
// Distinction if marks is 80 or above

if (marks >= 80) {
console.log("Distinction");
}
else {
console.log("Passed");
}
}

else {
console.log("Failed");
}

// Output: Passed`

**Outer if...else**

In the above example, the outer `if` condition checks if a student has passed or failed using the condition `marks >= 40`. If it evaluates to `false`, the outer `else` statement will print `Failed`.

On the other hand, if `marks >= 40` evaluates to `true`, the program moves to the inner `if...else` statement.

**Inner if...else statement**

The inner `if` condition checks whether the student has passed with distinction using the condition `marks >= 80`.

If `marks >= 80` evaluates to `true`, the inner `if` statement will print `Distinction`.

Otherwise, the inner `else` statement will print `Passed`.

**Note:** Avoid nesting multiple `if…else` statements within each other to maintain code readability and simplify debugging.

More on JavaScript if...else Statement

When can we use the ternary operator instead of an if…else statement?

We can use the ternary operator `?:` instead of an `if...else` statement if the operation we're performing is very simple. For example,

`let grade = 40;
let result;

if (grade >= 50)
result = 'pass'
else
result = 'fail'

console.log(result)`

can be written as

`let grade = 40;

let result = (grade >= 50) ? 'pass' : 'fail';

console.log(result)`

When can we replace our if…else statement with the switch statement?

We can replace our `if…else` statement with the switch statement when we deal with a large number of conditions.

For example,

`let grade = "C";

// using if else for many conditions
// first condition
if (grade === "A") {
console.log("Excellent!");
}
// second condition
else if (grade === "B") {
console.log("Good!");
}
// third condition
else if (grade === "C") {
console.log("Average");
}
// fourth condition
else if (grade === "D") {
console.log("Bad");
}
// otherwise, execute else block
else {
console.log("Fail");
}

// Output: Average`

In the above example, we used `if…else` to evaluate five conditions, including the `else` block.

Now, let's use the `switch` statement for the same purpose.

`let grade = "C";

// using switch...case
switch (grade) {
// first condition
case "A":
console.log("Excellent!");
break;
// second condition
case "B":
console.log("Good!");
break;
// third condition
case "C":
console.log("Average");
break;
// fourth condition
case "D":
console.log("Bad");
break;
default:
console.log("Fail");
}

// Output: Average`

As you can see, the `switch` statement makes our code more readable and maintainable.

In addition, `switch` is faster than long chains of `if…else` statements.

How can we add multiple conditions within a single if...else statement?

We can use logical operators such as `&&` and `||` within an `if` statement to add multiple conditions. For example,

`let age = 35;
let salary = 6000;

// combine two conditions
// using the "and" operator &&
if (age >= 30 && salary >= 5000) {
console.log("Eligible for premium membership.");
}
else {
console.log("Not eligible for premium membership.");
}

// Output: Eligible for premium membership.`

Here, we used the logical operator `&&` to add two conditions in the `if` statement.

**Also Read:**

JavaScript break Statement

JavaScript continue Statement







Table of Contents






Introduction

JavaScript if...else Statement

JavaScript if Statement

JavaScript else Statement

JavaScript else if Statement

Nested if...else Statement

Also Read










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Comparison Operator











Next Tutorial:

JS for Loop

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Ternary Operator

JavaScript Tutorial

JavaScript break Statement

JavaScript Tutorial

JavaScript throw Statement

JavaScript Tutorial

JavaScript switch...case Statement
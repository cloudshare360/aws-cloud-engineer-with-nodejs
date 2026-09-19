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

JavaScript for loop


JavaScript break Statement


JavaScript for... of Loop


JavaScript for...in loop


JavaScript continue Statement


JavaScript Ternary Operator



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript while and do...while Loop

















JavaScript while Loop

The `while` loop repeatedly executes a block of code as long as a specified condition is `true`.

The syntax of the `while` loop is:

`while (condition) {
// body of loop
}`

Here,

The `while` loop first evaluates the condition inside `( )`.

If the condition evaluates to `true`, the code inside `{ }` is executed.

Then, the condition is evaluated again.

This process continues as long as the condition evaluates to `true`.

If the condition evaluates to `false`, the loop stops.

Flowchart of while Loop

Flowchart of JavaScript while loop

Example 1: Display Numbers From 1 to 3

`// initialize variable i
let i = 1;

// loop runs until i is less than 4
while (i < 4) {
console.log(i);
i += 1;
}`

**Output**

1
2
3

Here is how the above program works in each iteration of the loop:

Variable
Condition: i < 4
Action

`i = 1`
`true`
**1** is printed. i is increased to **2**.

`i = 2`
`true`
**2** is printed. i is increased to **3**.

`i = 3`
`true`
**3** is printed. i is increased to **4**.

`i = 4`
`false`
The loop is terminated.

To learn more about loop conditions, visit JavaScript Comparison and Logical Operators.

Example 2: Sum of Only Positive Numbers

`let num = 0, sum = 0;

// loop as long as num is 0 or positive
while (num >= 0) {

// add all positive numbers
sum += num;

// take input from the user
num = parseInt(prompt("Enter a number: "));
}

// last, display sum
console.log(`The sum is ${sum}`);`

**Output**

Enter a number: 2
Enter a number: 4
Enter a number: -3
The sum is 6

The above program prompts the user to enter a number.

Since JavaScript `prompt()` only takes inputs as string, `parseInt()` converts the input to a number.

As long as we enter positive numbers, the `while` loop adds them up and prompts us to enter more numbers.

So when we enter a negative number, the loop terminates.

Finally, we display the total sum of positive numbers.

**Note:** When we add two or more numeric strings, JavaScript treats them as strings. For example, `"2" + "3" = "23"`. So, we should always convert numeric strings to numbers to avoid unexpected behaviors.

JavaScript do...while Loop

The `do...while` loop executes a block of code once, then repeatedly executes it as long as the specified condition is `true`.

The syntax of the `do...while` loop is:

`do {
// body of loop
} while(condition);`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Here,

The `do…while` loop executes the code inside `{ }`.

Then, it evaluates the condition inside `( )`.

If the condition evaluates to `true`, the code inside `{ }` is executed again.

This process continues as long as the condition evaluates to `true`.

If the condition evaluates to `false`, the loop terminates.

Flowchart of do...while Loop

Flowchart of JavaScript do...while loop

Example 3: Display Numbers from 3 to 1

`let i = 3;

// do...while loop
do {
console.log(i);
i--;
} while (i > 0);`

**Output**

3
2
1

Here, the initial value of i is **3**. Then, we used a `do...while` loop to iterate over the values of i. Here is how the loop works in each iteration:

Action
Variable
Condition: i > 0

**3** is printed. i is decreased to **2**.
`i = 2`
`true`

**2** is printed. i is decreased to **1**.
`i = 1`
`true`

**1** is printed. i is decreased to **0**.
`i = 0`
`false`

The loop is terminated.
-
-

What is the difference between while and do...while loops.

The difference between `while` and `do...while` is that the `do...while` loop executes its body at least once. For example,

`let i = 0;

// false condition
// body executes once
do {
console.log(i);
} while (i > 1);

// Output: 0`

On the other hand, the `while` loop doesn't execute its body if the loop condition is `false`. For example,

`let i = 0;

// false condition
// body not executed
while (i > 1) {
console.log(i);
};`

Example 4: Sum of Positive Numbers

`let sum = 0, num = 0;

do {

// add all positive numbers
sum += num;

// take input from the user
num = parseInt(prompt("Enter a number: "));

// loop terminates if num is negative
} while (num >= 0);

// last, display sum
console.log(`The sum is ${sum}`);`

**Output**

Enter a number: 2
Enter a number: 4
Enter a number: -3
The sum is 6

In the above program, the `do...while` loop prompts the user to enter a number.

As long as we enter positive numbers, the loop adds them up and prompts us to enter more numbers.

If we enter a negative number, the loop terminates without adding the negative number.

More on JavaScript while and do...while Loops

What is an infinite while loop in JavaScript?

An infinite `while` loop is a condition where the loop runs infinitely, as its condition is always `true`. For example,

`let i = 1;

// always true condition
while(i < 5) {
console.log(i);
}`

Also, here is an example of an infinite `do...while` loop,

`let i = 5;

// always true condition
do {
console.log(i);
} while (i > 1);`

In the above program, the condition `1` `> 1` is always `true`, which causes the loop body to run forever.

**Note:** Infinite loops can cause your program to hang. So, avoid creating them unintentionally.

What is the difference between for and while loops?

We use a `for` loop when we need to perform a fixed number of iterations. For example,

`// display hi 3 times

for (let i = 1; i <= 3; i++) {
console.log("hi");
}

console.log("bye");`

**Output**

hi
hi
Hi
bye

Meanwhile, we use a `while` loop when the termination condition can vary. For example,

`// display hi as long as user wants
let isDisplay = true;
let userChoice = "";

while (isDisplay) {
console.log("hi");

userChoice = prompt("print hi again? y for yes: ");
if (userChoice != "y")
isDisplay = false;
}

console.log("bye");`

**Output**

hi
print hi again? y for yes: y
hi
print hi again? y for yes: y
hi
print hi again? y for yes: n
bye

In the above program, we let the user print `hi` as much as they desire.

Since we don't know the user's decision, we use a `while` loop instead of a `for` loop.

**Also Read:**

JavaScript break Statement

JavaScript continue Statement







Table of Contents






JavaScript while Loop

Example 1: Display Numbers From 1 to 3

Example 2: Sum of Only Positive Numbers

JavaScript do...while Loop

Example 3: Display Numbers from 3 to 1

Example 4: Sum of Positive Numbers










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS for Loop











Next Tutorial:

JS break

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript for loop

JavaScript Tutorial

JavaScript break Statement

JavaScript Tutorial

JavaScript for... of Loop

JavaScript Tutorial

JavaScript Ternary Operator
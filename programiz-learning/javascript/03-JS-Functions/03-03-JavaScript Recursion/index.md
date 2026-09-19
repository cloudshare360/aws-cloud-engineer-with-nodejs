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

Javascript setTimeout()


Javascript Array forEach()


JavaScript console.log()


Javascript setInterval()


JavaScript Function and Function Expressions


JavaScript CallBack Function



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Recursion

















Recursion is a programming technique where a function calls itself repeatedly to solve a problem. For example,

`// Program to countdown till 1

// recursive function
function counter(count) {

// display count
console.log(count);

// condition for stopping
if(count > 1) {

// decrease count
count = count - 1;

// call counter with new value of count
counter(count);
} else {

// terminate execution
return;
};
};

// access function
counter(5);`

**Output**

5
4
3
2
1

In the above example, we have a function `counter()` that accepts the argument `count`, which is the starting point for our countdown till **1**.

The `counter()` function first displays count then checks if the value of count is greater than **1** with `count > 1`.

If `count > 1` evaluates to `true`, the program decreases the value of count and calls `counter()` with the new value of count (recursion).

Otherwise, if `count > 1` evaluates to `false`, the program executes the `return` statement, stopping the recursion.

Here,

The `counter()` function is a **recursive function**, a function that calls itself recursively.

The `count > 1` condition is called a **base case**, a condition that specifies when the recursion must stop.

**Note:** Without base cases, a recursive function won't know when to stop, resulting in an **infinite recursion** (error).

Counting Down Till 1 Using Recursion

Example: Find Factorial of a Number

Now, let's see an example of how we can use recursion to find the factorial of a number.

`// recursive function
function factorial(num) {

// base case
// recurse only if num is greater than 0
if (num > 1) {
return num * factorial(num - 1);
}
else {
return 1;
};
};

let x = 3;

// store result of factorial() in variable
let y = factorial(x);

console.log(`The factorial of ${x} is ${y}`);`

**Output**

The factorial of 3 is 6





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











Here, the `factorial()` function calls itself recursively as long as the num variable is greater than **1**.

We can divide the overall recursion process into two halves.

The iterations in the first half includes:

Variable
Base case: num > 1
Action

`num = 3`
`true`
`factorial(3)` returns `3 * factorial(2)`

`num = 2`
`true`
`factorial(2)` returns `2 * factorial(1)`

`num = 1`
`false`
`factorial(1)` returns `1`

`factorial(3)` returns `3 * factorial(2)` and waits for `factorial(2)` to compute.

`factorial(2)` returns `2 * factorial(1)` and waits for `factorial(1)` to compute.

`factorial(1)` doesn't pass the base case, so it directly returns **1**.

After that, the second half takes place in reverse:

`factorial(1)` returns **1.**

`factorial(2)` returns `2 * factorial(1)`. Since `factorial(1)` returned 1, `factorial(2)` returns `2 * 1 = 2`.

`factorial(3)` returns `3 * factorial(2)`. Since `factorial(2)` returned 2, `factorial(3)` returns `3 * 2 = 6`.

Finally, the returned value from `factorial(3)` is stored in the result variable.

Computing Factorial Using Recursion

More on JavaScript Recursion

Does JavaScript have a recursion limit?

Yes, JavaScript does have a recursion limit.

The recursion limit prevents errors caused by too many nested function calls.

However, the limit varies depending on the JavaScript engine and the environment in which the code is running.

For instance, the maximum limit can differ between Firefox and Chrome. Whereas, devices with higher memory might have higher recursion limits than devices with less memory.

What is an infinite recursion?

When there is no base case in a recursive function, it runs infinitely, resulting in an infinite recursion. For example,

`// recursive function
function greet() {

// display "Hello"
console.log("Hello");

// call itself
greet();
};

// access function
greet();`

**Output**

Hello
Hello
Hello
...
RangeError: Maximum call stack size exceeded

Here, we have a recursive function `greet()` without a base case.

As you can see, `greet()` keeps calling itself until the program runs into an error (RangeError).







Table of Contents






Introduction

Example: Find Factorial of a Number










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Hoisting











Next Tutorial:

JS Object

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

Javascript setTimeout()

JavaScript Tutorial

JavaScript console.log()

JavaScript Tutorial

Javascript setInterval()

JavaScript Tutorial

JavaScript Promise and Promise Chaining
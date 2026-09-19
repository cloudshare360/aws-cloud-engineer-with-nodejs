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

JavaScript CallBack Function


Javascript Function call()


Javascript Function apply()


JavaScript Arrow Function


JavaScript Constructor Function


JavaScript Closures



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Function and Function Expressions

















A function is an independent block of code that performs a specific task, while a function expression is a way to store functions in variables.

Here's a quick example of function and function expression. You can read the rest of the tutorial for more.

Example

`// create a function named greet()
function greet() {
console.log("Hello World!");
}

// store a function in the displayPI variable
// this is a function expression
let displayPI = function() {
console.log("PI = 3.14");
}

// call the greet() function
greet();

// call the reply() function
displayPI();

// Output:
// Hello World!
// PI = 3.14`

Here, we created the `greet()` function and used the displayPI variable to create a function expression. Then, we called the functions by using their names followed by parentheses `()` i.e. `greet()` and `displayPI()`.

Create a JavaScript Function

We can create a function in JavaScript using the `function` keyword:

`function greet() {
console.log("Hello World!");
}`

Create a JavaScript Function
Here, we have created a simple function named `greet()` that prints `Hello World!` on the screen.

Our function contains the following parts:

**Function Keyword** - The `function` keyword is used to create the function.

**Function Name** - The name of the function is `greet`, followed by parentheses `()`.

**Function Body** - The code that is executed when we call the function. In our case, it is `console.log("Hello World!");`

Frequently Asked Questions

Benefits of Using a Function

Suppose you need to write a program to draw a circle and color it. You can create two functions to solve this problem:

A function to draw the circle.

A function to color the circle.

From this example, we can see that functions provide the following benefits:

**Reusable Code**: Since functions are independent blocks of code, you can declare a function once and use it multiple times. For example, once you create a function to draw a circle, you can use it whenever you need to draw a circle.

**Organized Code:** Dividing small tasks into different functions makes our code easy to organize.

**Readability:** Functions increase readability by reducing redundancy and improving the structure of our code.

Call a Function

Previously, we declared a function named `greet()`:

`function greet() {
console.log("Hello World!");
}`

If we run the above code, we won't get any output. But why?

It's because creating a function doesn't mean we are executing the code inside it. In other words, the function is ready and available for us to execute whenever we choose.

And if we want to use the function, we need to call it.

**Function Call**

`greet();`

As you can see, we call a function by writing the function name (`greet`) followed by parentheses `()`.

Example 1: JavaScript Function Call

`// create a function
function greet() {
console.log("Hello World!");
}

// call the function
greet();

console.log("Outside function");`

**Output**

Hello World!
Outside function

In the above example, we created a function named `greet()`. Here's how the control of the program flows:

Working of a Function in JavaScript
Here,

When the `greet()` function is called, the program's control transfers to the function definition.

All the code inside the function is executed (`Hello World!` is printed).

The program control then jumps to the next statement after the function call (`Outside function` is printed).

JavaScript Function Arguments

Arguments are values you pass to the function when you call it.

`// function with a parameter called 'name'
function greet(name) {
console.log(`Hello ${name}`);
}

// pass argument to the function
greet("John");

// Output: Hello John`

In the above example, we passed `"John"` as an argument to the `greet()` function.

Pass Argument to the Function
Notice the name variable declared inside parentheses:

`function greet(name) {
// code
}`

Here, name is a **function parameter**, which acts as a placeholder to store the function argument.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











In other words, the argument `"John"` is stored in the name parameter.

**Remember:** A function argument is the value we pass to the function, while a function parameter is a placeholder that stores the argument passed to the function.

**Pass Different Arguments to the Function**

We can pass different arguments in each call, making the function re-usable and dynamic.

`function greet(name) {
console.log(`Hello ${name}`);
}

// pass "John" as argument
greet("John");

// pass "David" as argument
greet("David");`

**Output**

Hello John
Hello David

Example 2: JavaScript Function to Add Two Numbers

We can also pass multiple arguments to a single function. For example,

`// function with two arguments
function addNumbers(num1, num2) {
let sum = num1 + num2;
console.log(`Sum: ${sum}`);
}

// call function by passing two arguments
addNumbers(5, 4);

// Output:
// Sum: 9`

In the above example, we have created a function named `addNumbers()` with two parameters: num1 and num2. Here,

num1 takes the value of the first argument, **5**.

num2 takes the value of the second argument, **4**.

The function then adds the values of num1 and num2 and the result is printed as output.

JavaScript Function Argument

The return Statement

We can return a value from a JavaScript function using the `return` statement.

`// function to find square of a number
function findSquare(num) {

// return square
return num * num;

}

// call the function and store the result
let square = findSquare(3);

console.log(`Square: ${square}`);`

**Output**

Square: 9

In the above example, we have created a function named `findSquare()`. The function accepts a number and returns the square of the number.

In our case, we passed **3** as an argument to the function. So, the function returns the square of **3**, which is **9**, to the function call.

We then stored this return value in the square variable and printed it.

Working of JavaScript Functions

The return Statement Terminates the Function

Any code written in the function after the `return` statement is not executed. For example,

`function display() {

console.log("This will be executed.");

return "Returning from function.";

console.log("This will not be executed.");
}

let message = display();
console.log(message);  `

**Output**

This will be executed.
Returning from function.

In this example, the `display()` function doesn't execute the second `console.log()` statement inside it.

This is because the function execution stops at the `return` statement. So, the following code is never reached:

`console.log("This will not be executed.");`

This is what actually happens:

First, the function prints `This will be executed.` to the screen.

Then, it returns the string `Returning from function.` to the function call.

Finally, the function terminates its execution.

The return value is then stored in the message variable and printed.

Function Terminates After return

JavaScript Library Functions

JavaScript provides some built-in functions that can be directly used in our program. We don't need to create these functions; we just need to call them.

Some common JavaScript library functions are:

Library Function
Description

console.log()
Prints the string inside the quotation marks.

Math.sqrt()
Returns the square root of a number.

Math.pow()
Returns the power of a number.

toUpperCase()
Returns the string converted to uppercase.

toLowerCase()
Returns the string converted to lowercase.

To learn more about library functions, visit JavaScript Library Functions.

Example 3: JavaScript Library Function

`// Math.sqrt() computes the square root
let squareRoot = Math.sqrt(4);
console.log("Square Root of 4 is", squareRoot);

// Math.pow() computes the power
let power = Math.pow(2, 3);
console.log("2 to the power of 3 is", power);

// toUpperCase() converts text to uppercase
let band = "Iron Maiden";
let bandUpper = band.toUpperCase();
console.log(`Favorite Band: ${bandUpper}`);`

**Output**

Square Root of 4 is 2
2 to the power 3 is 8
Favorite Band: IRON MAIDEN

Here,

`Math.sqrt(4)` calculates the square root of **4**, resulting in **2**.

`Math.pow(2, 3)` computes `2 ^ 3` (**2** raised to the power of **3**), which is **8**.

`band.toUpperCase()` converts the string in the band variable to uppercase, resulting in `IRON MAIDEN`.

Function Expressions

In JavaScript, a function expression is a way to store functions in variables. For example,

`// store a function in the square variable
let square = function(num) {
return num * num;
};

console.log(square(5));

// Output: 25`

In this example, the function that calculates the square of a number is assigned to the square variable.

We then used this variable to call the function expression using the code `square(5)`, where **5** is the function argument.

**Note:** Like with functions, we need to use parentheses `()` with the variable name to call a function expression.

**Also Read:**

JavaScript Default Parameters

JavaScript Arrow Function

JavaScript CallBack Function







Table of Contents






Introduction

Create a JavaScript Function

Call a Function

Example 1: JavaScript Function Call

JavaScript Function Arguments

Example 2: JavaScript Function to Add Two Numbers

The return Statement

The return Statement Terminates the Function

JavaScript Library Functions

Function Expressions










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Switch











Next Tutorial:

JS Variable Scope

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript CallBack Function

JavaScript Tutorial

JavaScript Closures

JavaScript Tutorial

JavaScript Arrow Function

JavaScript Tutorial

JavaScript this
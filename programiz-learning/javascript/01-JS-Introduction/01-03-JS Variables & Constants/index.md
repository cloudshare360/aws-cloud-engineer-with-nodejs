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

JavaScript Variable Scope


JavaScript let Vs var


JavaScript Hoisting


JavaScript Destructuring Assignment


JavaScript Keywords and Identifiers


JavaScript null and undefined



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Variables and Constants

















JavaScript Variables

A JavaScript variable is a container for storing data.  For example,

`let num = 5;`

Here, num is a variable that stores the number **5**.

Declare Variables in JavaScript

In JavaScript, we use the `var` or `let` keywords to declare variables. For example,

`var age;
let name;`

Here, age and name are variables.

What is the difference between var and let?

Both `var` and `let` are used to declare variables. However, there are some differences between them.

var
let

`var` is used in older versions of JavaScript.
`let` is the new way of declaring variables, starting with **ES6 (ES2015)**.

Variables created with `var` are function-scoped, meaning they can be accessed anywhere within the function they were defined in.
Variables declared with `let` are block-scoped, meaning they can only be accessed within the block where they were declared.

For example, `var x;`
For example, `let y;`

To learn more, visit JavaScript let Vs var.

**Note:** It is recommended we use `let` instead of `var`. However, there are a few browsers that do not support `let`. To learn more, visit JavaScript let browser support.

Initialize Variables in JavaScript

We use the assignment operator `=` to assign a value to a variable.

`// declare variable num
let num;

// assign 5 to num
num = 5;`

Here, **5** is assigned to the variable num.

You can also initialize variables during its declaration.

`// declare variable num1 and assign 5 to it
let num1 = 5;

// declare variable num2 and assign 6 to it
let num2 = 6;`

Declare multiple variables in a single statement.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











In JavaScript, it's possible to declare multiple variables in a single statement.

`// declare variables num1, num2, and num3
// assign values 5, 6, and 7 respectively
let num1 = 5, num2 = 6, num3 = 7;`

Here, we have declared and assigned values to three variables in a single line:

The value assigned to num1 is **5**.

The value assigned to num2 is **6**.

The value assigned to num3 is **7**.

Use a variable without initializing it.

If you use a variable without initializing it, it will have an `undefined` value.

`// declare variable num
let num;

// print num
console.log(num);

// Output: undefined`

Here, we have declared a variable named num. However, since it does not contain any value, its value is `undefined`.

To learn more about `undefined`, visit JavaScript null and undefined.

Change the Value of Variables

The value of a variable may **vary**. Hence, the name **variable**.

Let's look at the example below to learn how to change the value of a variable:

`// assign 5 to variable score
let score = 5;
console.log(score); // 5

// change the value of score to 3
score = 3;
console.log(score); // 3`

Here, the value of the score variable is changed from **5** to **3** when we assign a new value to it.

Rules for Naming JavaScript Variables

Variable names must start with a letter, an underscore `_`, or the dollar sign `$`. For example,

`// valid
let message = "hello";
let _message = "hello";
let $message = "hello";`

Variables cannot start with numbers. For example,

`// invalid
let 1message = "hello"; // this gives an error`

Variable names are case-sensitive. So age and Age are different variables. For example,

`let age = 23;
let Age = 20;

console.log(age); // 23
console.log(Age); // 20`

Variable names cannot be keywords (special words reserved for specific purposes in JavaScript such as `if`, `else`, `let`, `var`, etc.). For example,

`//invalid
let new = 5; // Error! new is a keyword`

Recommended ways to name a variable in JavaScript.

You can name the variables any way you want. However, we recommend you use the following naming conventions:

In JavaScript, variables are generally named in **camelCase** format if they have multiple words.

For example, firstName, annualSalary, numberOfBooks, etc.

It's a good practice to give a descriptive name to a variable.

For example, if you are using a variable to store the number of apples, it is better to name that variable apples or numberOfApples rather than x or n.

JavaScript Constants

A constant is a type of variable whose value cannot be changed.

In JavaScript, we use the `const` keyword to create constants. For example,

`// assign 5 to num
const num = 5;`

Once a constant is initialized, we cannot change its value.

`// assign 5 to num
const num = 5;

// assign 10 to num
num = 10;
console.log(num) // Error! constant cannot be changed`

Always Initialize a Constant During Declaration

If you do not initialize a constant at the time of declaration, it throws an error. For example,

`// Error! Missing initializer in const declaration
const x;

// attempt to initialize constant after declaration
x = 5;

console.log(x)`

**Note:** If you are sure that the value of a variable won't change throughout the program, we recommend you use `const`.

However, there are a few browsers that do not support `const`. Visit JavaScript const browser support to learn more.

Also Read

JavaScript Data Types







Table of Contents






JavaScript Variables

Declare Variables in JavaScript

Initialize Variables in JavaScript

Change the Value of Variables

Rules for Naming JavaScript Variables

JavaScript Constants










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

Getting Started











Next Tutorial:

JS console.log()

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript let Vs var

JavaScript Tutorial

JavaScript Variable Scope

JavaScript Tutorial

JavaScript Hoisting

JavaScript Tutorial

JavaScript Destructuring Assignment
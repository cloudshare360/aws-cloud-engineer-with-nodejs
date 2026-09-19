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

JavaScript console.log()


JavaScript String


JavaScript ES6


JavaScript switch...case Statement


JavaScript Data Types


JavaScript String length



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Template Literals (Template Strings)

















JavaScript template literals are strings that allow us to embed variables or expressions directly within them. They are enclosed in backticks ````.

Here is a simple example of template literals. Read the rest of the tutorial to learn more.

Example

`let name = "Alice";
let greeting = `Hello ${name}`;

console.log(greeting);

// Output: Hello Alice`

Here, ``Hello ${name}`` is a template literal and we have embedded the name variable directly within it.

Example: JavaScript Template Literals

We can use template literals to embed JavaScript expressions or variables with the help of the `${...}` syntax. For example,

`let number1 = 8;
let number2 = 3;

// embed expression within template literal
let result = `The sum of ${number1} and ${number2} is ${number1 + number2}.`;

console.log(result);

// Output: The sum of 8 and 3 is 11.`

In the above example, the following code is the template literal:

``The sum of ${number1} and ${number2} is ${number1 + number2}.``

In this template literal,

`${number1 + number2}` is the embedded expression.

`${number1}` and `${number2}` are the embedded variables.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











**Notes:**

Before template literals were introduced in JavaScript ES6, we would use the `+` operator to concatenate variables and expressions in a string.

Some browsers may not support the use of template literals. To learn more, visit JavaScript Template Literal support.

Template literals allow any type of quotes to be included directly.

Before JavaScript introduced template literals, single quotes (`' '`) or double quotes (`" "`) were used for strings.

And, you had to be careful when including quotes inside strings to avoid errors. For example, you could either

Mix single and double quotes.

Use escape characters.

`// valid codes
// mix quotes to avoid errors
let string1 = 'A "quote" inside a string';
let string2 = "Another 'quote' inside a string";

// invalid codes
// cannot use same quotes
string1 = 'A 'quote' inside a string';
string2 = "Another "quote" inside a string";

// valid code after using escape characters
string1 = 'A \"quote\" inside a string';
string2 = "Another \'quote\' inside a string"; `

With template literals, you can easily include both single and double quotes in strings without needing escape characters:

`let string1 = `This is a string with a 'single quote' in it.`;
let string2 = `This is a string with a "double quote" in it.`;

console.log(string1);
console.log(string2);`

**Output**

This is a string with a 'single quote' in it.
This is a string with a "double quote" in it.

Create multiline strings using template literals.

Template literals also make it easy to write multiline strings. For example,

`// multiline strings using template literals
let address = `123 Main St.
San Francisco, CA
94105`;

console.log(address);`

**Output**

123 Main St.
San Francisco, CA
94105

Tagged Templates

Tagged templates are an advanced form of template literals in JavaScript. They allow you to parse template literals with a function.

Furthermore, you don't need to use parentheses `()` when passing the template literal to the function. For example,

`function displayMessage(message) {
return message;
}

// create a tagged template
let result = displayMessage`Hello Jack`;

console.log(result);  // [ 'Hello Jack' ]`

Here, unlike regular function arguments, the template literal is split into an array.

In our example, the function received an array with a single element (the string from the template literal). So, we obtained `[ 'Hello Jack' ]` as an output.

**Tip:** Try passing normal strings as arguments to the `displayMessage()` function and notice the difference in syntax and output.







Table of Contents






Introduction

Example: JavaScript Template Literals

Tagged Templates










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Default Parameters











Next Tutorial:

JS Spread Operators Class

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript console.log()

JavaScript Tutorial

JavaScript String

JavaScript Tutorial

JavaScript ES6

JavaScript Tutorial

JavaScript switch...case Statement
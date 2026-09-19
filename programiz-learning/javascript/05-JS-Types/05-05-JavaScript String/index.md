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

JavaScript Template Literals (Template Strings)


JavaScript console.log()


Javascript String substring()


JavaScript String codePointAt()


JavaScript String charAt()


Javascript String toUpperCase()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript String

















The JavaScript string is a primitive data type that represents textual data. For example,

`let name = "John";`

Create JavaScript Strings

In JavaScript, we create strings by surrounding them with quotes or backticks.

Single Quotes
`'Hello'`

Double Quotes
`"Hello"`

Backticks
``Hello``

Single quotes and double quotes are practically the same, and you can use either of the two.

Backticks are generally used when you need to insert variables or expressions into a string. This is done by wrapping variables or expressions with `${variable or expression}`. For example,

`// strings example
let name1 = 'Peter';
let name2 = "Jack";
let result = `The names are ${name1} and ${name2}`;

console.log(result);

// Output: The names are Peter and Jack`

**Note:** In JavaScript, strings enclosed by backticks `` `` are called template literals.

Access String Characters

You can access the characters in a string in two ways:

**1. Using Indexes**

One way is to treat strings as an array and access the character at the specified index. For example,

`let message = "hello";

// use index 1 to access
// 2nd character of message
console.log(message[1]);  // e`

Here, the code `message[1]` gives us the character at index **1** of the message string, i.e., its second character.

**2. Using the charAt() Method**

Another way is to supply the position of the character to the `charAt()` method. For example,

`let message = "hello";

// use charAt(1) to get the
// 2nd character of message
console.log(message.charAt(1));  // e`

Here, the code `message.charAt(1)` gives us the character at index **1** of the message string.

Features of JavaScript Strings

JavaScript strings have some interesting features. The most important of these features are:

**1. JavaScript Strings are Immutable**

In JavaScript, the characters of a string cannot be changed. For example,

`let message = "hello";
message[0] = "H";
console.log(message);  // hello`

In the above example, we tried changing the first character of message using the code:

`message[0] = "H";`

However, this operation failed due to the immutable nature of JavaScript strings.

That being said, you can successfully assign a new value to the string variable. For example,

`let message = "hello";
message = "Hello";
console.log(message);  // Hello`

**2. JavaScript Strings are Case-Sensitive**

In JavaScript., the lowercase and uppercase letters are treated as different values. For example,

`let value1 = "a";
let value2 = "A"
console.log(value1 == value2);  // false`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











As you can see, `a` and `A` are treated as different values.

JavaScript String Methods

Method
Description

charAt()
Returns the character at the specified index.

concat()
Joins two or more strings.

replace()
Replace a string with another string.

split()
Converts the string to an array of strings.

substr()
Returns a part of a string by taking the starting position and length of the substring.

substring()
Returns a part of the string from the specified start index (inclusive) to the end index (exclusive).

slice()
Returns a part of the string from the specified start index (inclusive) to the end index (exclusive).

toLowerCase()
Returns the passed string in lowercase.

toUpperCase()
Returns the passed string in uppercase.

trim()
Removes whitespace from the strings.

includes()
Searches for a string and returns a boolean value.

search()
Searches for a string and returns the position of a match.

To learn more, visit JavaScript String methods.

Example: JavaScript String Methods

`let text1 = "hello";
let text2 = "world";
let text3 = "     JavaScript    ";

// concatenate two strings
let result1 = text1.concat(' ', text2);

console.log(result1);  // hello world

// convert the text to uppercase
let result2 = text1.toUpperCase();

console.log(result2);  // HELLO

// remove whitespace from the string
let result3 = text3.trim();

console.log(result3);  // JavaScript

// convert the string to an array
let result4 = text1.split();

console.log(result4);  // [ 'hello' ]

// slice the string
let result5= text1.slice(1, 3);

console.log(result5);  // el`

**Output**

hello world
HELLO
JavaScript
[ 'hello' ]
el

More on JavaScript Strings

Get String Length

To find the length of a string, you can use the built-in length property. For example,

`let message = "hello";
console.log(message.length);

// Output: 5`

Insert a quote inside another quote.

You can write a quote inside another quote. However, the quote should not match the surrounding quotes. For example,

`// valid
let message = 'My name is "Peter".';

// invalid
let message = 'My name is 'Peter'.';`

JavaScript String Objects

You can create string objects using the `new` keyword. For example,

`let value1 = "hello";
let value2 = new String("hello");

console.log(value1);  // hello
console.log(value2);  // [String: 'hello']

console.log(typeof(value1));  // string
console.log(typeof(value2));  // object`

**Note**: We recommend you avoid using string objects since they slow down the program.

Convert to String

We use the `String()` function to convert various data types to strings. For example,

`let value1 = 225;  // number
let value2 = true;  // boolean

//convert to string
let result1 = String(value1);
let result2 = String(value2);

console.log(result1);  // 225
console.log(result2);  // true`

To learn more about string conversion, visit JavaScript Type Conversion.

JavaScript Escape Characters

In JavaScript, you use escape characters to insert characters that are difficult or impossible to represent directly in a string.

You can use the backslash escape character `\` to include special characters in your string. For example,

`// insert double quotes inside string
let name = "My name is \"Peter\".";
console.log(name);`

**Output**

My name is "Peter".

In the above program, each `\"` inserts a double quote inside the string without causing syntax errors.

Here are other ways that you can use escape character `\`:

Code
Character

`\"`
Double Quote

`\\`
Backslash

`\n`
New Line

`\r`
Carriage Return

`\v`
Vertical Tab

`\t`
Horizontal Tab

`\b`
Backspace

`\f`
Form feed

JavaScript Multiline Strings

JavaScript provides multiple techniques to create multiline strings. They can be broadly classified into two types:

Multiline in code but not in the output.

Multiline in both code and output.

Let's explore them in greater detail:

**1. Multiline in code but not in the output.**

Separating a long string into multiple lines can make your code look clean. You can achieve this using the `+` or the `\` operators.

However, these multiline strings will be represented as a single line in the output. For example,

`// use the + operator
let message1 = "This is a long message " +
"that spans across multiple lines " +
"in the code.";

// use the \ operator
let message2 = "This is a long message \
that spans across multiple lines \
in the code.";

console.log(message1);
console.log(message2);`

**Output**

This is a long message that spans across multiple lines in the code.
This is a long message that spans across multiple lines in the code.

**2. Multiline in both code and output.**

Use any of the following to print multiple lines using a single string variable:

Template Literals `` ``

Newline Escape Character `\n`

For example,

`// use template literal
let message1 = `This is a long message
that spans across multiple lines
in the code.`;

// use escape character \n
// each \n inserts a new line into the string
let message2 = "This is a long message\nthat spans across multiple lines\nin the code.";

console.log(message1);

// print an empty line
console.log();

console.log(message2);`

**Output**

This is a long message
that spans across multiple lines
in the code.

This is a long message
that spans across multiple lines
in the code.

**Also Read:**

JavaScript Number







Table of Contents






Introduction

Access String Characters

Features of JavaScript Strings

JavaScript String Methods










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

Multidimensional Array











Next Tutorial:

JS for...in

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Template Literals (Template Strings)

JavaScript Tutorial

JavaScript console.log()

JavaScript Tutorial

JavaScript Data Types

JavaScript Tutorial

JavaScript Comments
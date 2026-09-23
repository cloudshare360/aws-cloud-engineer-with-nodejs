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

JavaScript null and undefined


JavaScript typeof Operator


JavaScript Type Conversion


JavaScript Number


JavaScript Booleans


JavaScript Symbol



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Data Types

















Data types represent the different kinds of values we can use in JavaScript.

There are altogether **8** basic data types in JavaScript.

Data Type
Description
Example

`String`
Textual data.
`'hello'`, `"hello world!"`, etc.

`Number`
An integer or a floating-point number.
`3`, `3.234`, `3e-2`, etc.

`BigInt`
An integer with arbitrary precision.
`900719925124740999n`, `1n`, etc.

`Boolean`
Any of two values: `true` or `false`.
`true` and `false`

`undefined`
A data type whose variable is not initialized.
`let a;`

`null`
Denotes a `null` value.
`let a = null;`

`Symbol`
A data type whose instances are unique and immutable.
`let value = Symbol('hello');`

`Object`
Key-value pairs of collection of data.
`let student = {name: "John"};`

**Note:** JavaScript data types are divided into primitive and non-primitive types.

**Primitive Data Types:** They can hold a single simple value. `String`, `Number`, `BigInt`, `Boolean`, `undefined`, `null`, and `Symbol` are primitive data types.

**Non-Primitive Data Types:** They can hold multiple values. `Objects` are non-primitive data types.

JavaScript String

A string represents textual data. It contains a sequence of characters. For example, `"hello"`, `"JavaScript"`, etc.

In JavaScript, strings are surrounded by quotes:

**Single quotes:** `'Hello'`

**Double quotes:** `"Hello"`

**Backticks:** ``Hello``

For example,

`// string enclosed within single quotes
let fruit = 'apple';
console.log(fruit)

// string enclosed within double quotes
let country = "USA";
console.log(country);

// string enclosed within backticks
let result = `fail`;
console.log(result);`

**Output**

apple
USA
fail

In a string, we can either use single quotes or double quotes. However, it is recommended to use double quotes.

**Note:** It is illegal to mismatch quotes in strings. For example, the strings `'hello"` and `"world'` are enclosed inside one single quote and one double quote, which results in an error.

To learn more about strings, visit JavaScript String.

JavaScript Number

In JavaScript, the **number** type represents numeric values (both integers and floating-point numbers).

**Integers** - Numeric values without any decimal parts. Example: **3**, **-74**, etc.

**Floating-Point** - Numeric values with decimal parts. Example: **3.15**, **-1.3**, etc.

`// integer value
let integer_number = -3;
console.log(integer_number);

// floating-point value
let float_number = 3.15;
console.log(float_number);`

**Output**

-3
3.15

To learn more about numbers, visit JavaScript Number.

Special Numeric Values

JavaScript can also represent special numeric values.

JavaScript can also represent special numeric values such as `Infinity`, `-Infinity`, and `NaN` (Not-a-Number). For example,

`let number1 = 3 / 0;
console.log(number1);  // Infinity

let number2 = -3 / 0;
console.log(number2);  // -Infinity

// strings can't be divided by numbers
let number3 = "abc" / 3;
console.log(number3);  // NaN`

JavaScript BigInt

**BigInt** is a type of number that can represent very large or very small integers beyond the range of the regular **number** data type.

**Note:** The regular number data type can handle values less than **(2^53 - 1)** and greater than **-(2^53 - 1)**.

A `BigInt` number is created by appending `n` to the end of an integer. For example,

`// BigInt value
let value1 = 900719925124740998n;

// add two big integers
let result1 = value1 + 1n;
console.log(result1);  // "900719925124740999n"

let value2 = 900719925124740998n;`





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











**Output**

900719925124740999n
TypeError: Cannot mix BigInt and other types, use explicit conversions

**Note:** `BigInt` was introduced in a newer version of JavaScript (ES11) and is not supported by many browsers, including Safari. To learn more, visit JavaScript BigInt support.

You can't mix BigInt and number

You can't mix BigInt and number values.

In JavaScript, you can't mix BigInt and number values (for instance, by performing arithmetic operations between them).

`// BigInt value
let value = 900719925124740998n;;

// Error! BitInt and number cannot be added
let sum = value + 1;
console.log(sum);`

**Output**

TypeError: Cannot mix BigInt and other types, use explicit conversions

JavaScript Boolean

A `Boolean` data can only have one of two values: `true` or `false`. For example,

`let dataChecked = true;
console.log(dataChecked);  // true

let valueCounted = false;
console.log(valueCounted);  // false`

If you want to learn more about booleans, visit JavaScript Booleans.

JavaScript undefined

In JavaScript, `undefined` represents the absence of a value.

If a variable is declared but the value is not assigned, then the value of that variable will be `undefined`. For example,

`let name;
console.log(name);  // undefined`

It is also possible to explicitly assign `undefined` as a variable value. For example,

`let name = undefined;
console.log(name);  // undefined`

**Note:** You should avoid explicitly assigning `undefined` to a variable. Usually, we assign `null` to variables to indicate "unknown" or "empty" values.

JavaScript null

In JavaScript, `null` represents **"no value"** or **"nothing."** For example,

`let number = null;
console.log(number);  // null`

Here, `let number = null;` indicates that the number variable is set to have no value.

Visit JavaScript null and undefined to learn more.

JavaScript Symbol

A `Symbol` is a unique and primitive value. This data type was introduced in **ES6**.

When you create a `Symbol`, JavaScript guarantees that it is distinct from all other symbols, even if they have the same descriptions. For example,

`// two symbols with the same description
let value1 = Symbol("programiz");
let value2 = Symbol("programiz");

console.log(value1 === value2);  // false`

Here, we have used `===` to compare value1 and value2. It returns `true` if the two values are exactly the same. Otherwise, it returns `false`.

Though both value1 and value2 contain `"programiz"`, JavaScript treats them as different since they are of the `Symbol` type. Hence, `value1 === value2` returns `false`.

To learn more, visit JavaScript Symbol.

JavaScript Object

An `Object` holds data in the form of key-value pairs. For example,

`let student = {
firstName: "John",
lastName: null,
class: 10
};`

Here, we have created an object named student that contains key-value pairs:

Key
Value

`firstName`
`"John"`

`lastName`
`null`

`class`
`10`

To learn more, visit JavaScript Objects.

More on JavaScript Data Types

How can you check the data type of a variable?

You can use the typeof operator to find the data type of a variable. For example,

`let name = "ram";
console.log(typeof(name));  // string

let number = 4;
console.log(typeof(number));  // number

let valueChecked = true;
console.log(typeof(valueChecked));  // boolean

let a = null;
console.log(typeof(a));  // object`

**Note:** Notice that `typeof` returned `object` for the `null` type. This has been a known issue in JavaScript since its first release.

JavaScript automatically determines the variable's data type.

JavaScript determines the type of a variable based on the value assigned to it.

As a result, changing the value of a variable can also change its type, provided the new value is of a different type. For example,

`// data is of undefined type
let data;
console.log(typeof(data));  // undefined

// data is of number type
data = 5;
console.log(typeof(data));  // number

// data is of string type
data = "JavaScript Programming";
console.log(typeof(data));  // string`







Table of Contents






Introduction

JavaScript String

JavaScript Number

JavaScript BigInt

JavaScript Boolean

JavaScript undefined

JavaScript null

JavaScript Symbol

JavaScript Object










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS console.log()











Next Tutorial:

JS Operators

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript null and undefined

JavaScript Tutorial

JavaScript typeof Operator

JavaScript Tutorial

JavaScript Booleans

JavaScript Tutorial

JavaScript Type Conversion
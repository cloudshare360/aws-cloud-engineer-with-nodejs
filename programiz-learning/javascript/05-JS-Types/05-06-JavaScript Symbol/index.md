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

JavaScript Object.getOwnPropertySymbols()


JavaScript Iterators and Iterables


JavaScript typeof Operator


JavaScript Object.getOwnPropertyDescriptor()


JavaScript Object.hasOwnProperty()


JavaScript Data Types



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Symbol

















JavaScript Symbol

The JavaScript **ES6** introduced a new primitive data type called `Symbol`. Symbols are immutable (cannot be changed) and are unique. For example,

`// two symbols with the same description

const value1 = Symbol('hello');
const value2 = Symbol('hello');

console.log(value1 === value2); // false`

Though value1 and value2 both contain the same description, they are different.

Creating Symbol

You use the `Symbol()` function to create a `Symbol`. For example,

`// creating symbol
const x = Symbol()

typeof x; // symbol`

You can pass an optional string as its description. For example,

`const x = Symbol('hey');
console.log(x); // Symbol(hey)`

Access Symbol Description

To access the description of a symbol, we use the `.` operator. For example,

`const x = Symbol('hey');
console.log(x.description); // hey`

Add Symbol as an Object Key





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











You can add symbols as a **key** in an object using square brackets `[]`. For example,

`let id = Symbol("id");

let person = {
name: "Jack",

// adding symbol as a key
[id]: 123 // not "id": 123
};

console.log(person); // {name: "Jack", Symbol(id): 123}`

Symbols are not included in for...in Loop

The for...in loop does not iterate over Symbolic properties. For example,

`let id = Symbol("id");

let person = {
name: "Jack",
age: 25,
[id]: 12
};

// using for...in
for (let key in person) {
console.log(key);
}`

**Output**

name
age

Benefit of Using Symbols in Object

If the same code snippet is used in various programs, then it is better to use `Symbols` in the object key. It's because you can use the same key name in different codes and avoid duplication issues. For example,

`let person = {
name: "Jack"
};

// creating Symbol
let id = Symbol("id");

// adding symbol as a key
person[id] = 12;`

In the above program, if the `person` object is also used by another program, then you wouldn't want to add a property that can be accessed or changed by another program. Hence by using `Symbol`, you create a unique property that you can use.

Now, if the other program also needs to use a property named **id**, just add a Symbol named `id` and there won't be duplication issues. For example,

`let person = {
name: "Jack"
};

let id = Symbol("id");

person[id] = "Another value";`

In the above program, even if the same name is used to store values, the `Symbol` data type will have a unique value.

In the above program, if the string key was used, then the later program would have changed the value of the property. For example,

`let person = {
name: "Jack"
};

// using string as key
person.id = 12;
console.log(person.id); // 12

// Another program overwrites value
person.id = 'Another value';
console.log(person.id); // Another value`

In the above program, the second `user.id` overwrites the previous value.

Symbol Methods

There are various methods available with Symbol.




Method
Description



`for()`
Searches for existing symbols



`keyFor()`
Returns a shared symbol key from the global symbol registry.



`toSource()`
Returns a string containing the source of the Symbol object



`toString()`
Returns a string containing the description of the Symbol



`valueOf()`
Returns the primitive value of the Symbol object.





Example: Symbol Methods

`// get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');

// get name by symbol
console.log( Symbol.keyFor(sym) ); // hello
console.log( Symbol.keyFor(sym1) ); // id`

Symbol Properties




Properties
Description



`asyncIterator`
Returns the default AsyncIterator for an object



`hasInstance`
Determines if a constructor object recognizes an object as its instance



`isConcatSpreadable`
Indicates if an object should be flattened to its array elements



`iterator`
Returns the default iterator for an object



`match`
Matches against a string



`matchAll`
Returns an iterator that yields matches of the regular expression against a string



`replace`
Replaces matched substrings of a string



`search`
Returns the index within a string that matches the regular expression



`split`
Splits a string at the indices that match a regular expression



`species`
Creates derived objects



`toPrimitive`
Converts an object to a primitive value



`toStringTag`
Gives the default description of an object



`description`
Returns a string containing the description of the symbol





Example: Symbol Properties Example

`const x = Symbol('hey');

// description property
console.log(x.description); // hey

const stringArray = ['a', 'b', 'c'];
const numberArray = [1, 2, 3];

// isConcatSpreadable property
numberArray[Symbol.isConcatSpreadable] = false;

let result = stringArray.concat(numberArray);
console.log(result); // ["a", "b", "c", [1, 2, 3]]`

**Also Read:**

JavaScript Iterators and Iterables









Table of Contents






JavaScript Symbol

Creating Symbol

Access Symbol Description

Add Symbol as an Object Key

Symbols not included in for...in Loop

Benefit of Using Symbols in Object

Symbol Methods

Symbol Properties











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Numbers











Next Tutorial:

JS try...catch...finally

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Iterators and Iterables

JavaScript Tutorial

JavaScript typeof Operator

JavaScript Tutorial

JavaScript Data Types

JavaScript Tutorial

JavaScript Regex
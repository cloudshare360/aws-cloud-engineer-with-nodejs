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

JavaScript for... of Loop


JavaScript Keywords and Identifiers


JavaScript Iterators and Iterables


JavaScript "use strict"


JavaScript try...catch...finally Statement


JavaScript throw Statement



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Generators

















In JavaScript, generators provide a new way to work with functions and iterators.

Using a generator,

you can stop the execution of a function from anywhere inside the function

and continue executing code from a halted position

Create JavaScript Generators

To create a generator, you need to first define a generator function with `function*` symbol. The objects of generator functions are called generators.

`// define a generator function
function* generator_function() {
... .. ...
}

// creating a generator
const generator_obj = generator_function();`

**Note**: The generator function is denoted by `*`. You can either use `function* generatorFunc() {...}` or `function *generatorFunc(){...}` to create them.

Using yield to Pause Execution

As mentioned above, you can pause the execution of a generator function without executing the whole function body. For that, we use the `yield` keyword. For example,

`// generator function
function* generatorFunc() {

console.log("1. code before the first yield");
yield 100;

console.log("2. code before the second yield");
yield 200;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());`

**Output**

1. code before the first yield
{value: 100, done: false}

Here,

A generator object named `generator` is created.

When `generator.next()` is called, the code up to the first `yield` is executed. When `yield` is encountered, the program returns the value and pauses the generator function.

**Note**: You need to assign generator objects to a variable before you use it.

Working of multiple yield Statements

The `yield` expression returns a value. However, unlike the `return` statement, it doesn't terminate the program. That's why you can continue executing code from the last yielded position. For example,

`function* generatorFunc() {

console.log("1. code before first yield");
yield 100;

console.log("2. code before the second yield");
yield 200;

console.log("3. code after the second yield");
}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());`

**Output**

1. code before first yield
{value: 100, done: false}
2. code before second yield
{value: 200, done: false}
3. code after the second yield
{value: undefined, done: true}

Here is how this program works.

The first `generator.next()` statement executes the code up to the first yield statement and pauses the execution of the program.

The second `generator.next()` starts the program from the paused position.

When all the elements are accessed, it returns {value: undefined, done: true}.

Working of generator function in JavaScript

Passing Arguments to Generator Functions





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











You can also pass arguments to a generator function. For example,

`// generator function
function* generatorFunc() {

// returns 'hello' at first next()
let x = yield 'hello';

// returns passed argument on the second next()
console.log(x);
console.log('some code');

// returns 5 on second next()
yield 5;

}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next(6));
console.log(generator.next());`

**Output**

{value: "hello", done: false}
6
some code
{value: 5, done: false}
{value: undefined, done: true}

In the above program,

The first `generator.next()` returns the value of the `yield` (in this case, 'hello'). However, the value is not assigned to variable x in `let x = yield 'hello';`


{value: "hello", done: false}


When `generator.next(6)` is encountered, the code again starts at `let x = yield 'hello';` and the argument **6** is assigned to x. Also, remaining code is executed up to the second `yield`.

6
some code
{value: 5, done: false}


When the third `next()` is executed, the program returns {value: undefined, done: true}. It is because there are no other yield statements.

{value: undefined, done: true}


Generators are Used for Implementing Iterables

Generators provide an easier way to implement iterators.

If you want to implement an iterator manually, you have to create an iterator with the `next()` method and save the state. For example,

`// creating iterable object
const iterableObj = {

// iterator method
[Symbol.iterator]() {
let step = 0;
return {
next() {
step++;
if (step === 1) {
return { value: '1', done: false};
}
else if (step === 2) {
return { value: '2', done: false};
}
else if (step === 3) {
return { value: '3', done: false};
}
return { value: '', done: true };
}
}
}
}

for (const i of iterableObj) {
console.log(i);
}`

**Output**

1
2
3

Since generators are iterables, you can implement an iterator in an easier way. Then you can iterate through the generators using the for...of loop. For example,

`// generator function
function* generatorFunc() {

yield 1;
yield 2;
yield 3;
}

const obj = generatorFunc();

// iteration through generator
for (let value of obj) {
console.log(value);
}`

Generator Methods




Method
Description



`next()`
Returns a value of yield



`return()`
Returns a value and terminates the generator



`throw()`
Throws an error and terminates the generator





JavaScript return Vs yield Keyword




return Keyword
yield Keyword



Returns the value and terminates the function.
Returns the value and halts the function but does not terminate the function.



Available in both the normal functions and generator functions.
Available only in generator functions.





JavaScript Generator Function With return

You can use the `return` statement in a generator function. The `return` statement returns a value and terminates the function (similar to regular functions). For example,

`// generator function
function* generatorFunc() {

yield 100;

return 123;

console.log("2. some code before second yield");
yield 200;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());`

**Output**

{value: 100, done: false}
{value: 123, done: true}
{value: undefined, done: true}

In the above program, when the `return` statement is encountered, it returns the value and `done` property becomes `true`, and the function terminates. Hence, the `next()` method after the `return` statement does not return anything.

**Note**: You can also use the `return()` method instead of the `return` statement like `generator.return(123);` in the above code.

JavaScript Generator Throw Method

You can explicitly throw an error on the generator function using the throw() method. The use of `throw()` method throws an error and terminates the function. For example,

`// generator function
function* generatorFunc() {
yield 100;
yield 200;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());

// throws an error
// terminates the generator
console.log(generator.throw(new Error('Error occurred.')));
console.log(generator.next());`

**Output**

{value: 1, done: false}
Error: Error occurred.

Uses of Generators

Generators let us write cleaner code while writing asynchronous tasks.

Generators provide an easier way to implement iterators.

Generators execute its code only when required.

Generators are memory efficient.

Generators were introduced in ES6. Some browsers may not support the use of generators. To learn more, visit JavaScript Generators support.







Table of Contents






Introduction

Create JavaScript Generators

JavaScript yield Statement

Multiple yield Statements

Arguments to Generators

Generators & Iterables

Generator Methods

Generators with return

Generator Throw Method

Uses of Generators











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

Iterators and Iterables











Next Tutorial:

JS Regex

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript for... of Loop

JavaScript Tutorial

JavaScript Keywords and Identifiers

JavaScript Tutorial

JavaScript Iterators and Iterables

JavaScript Tutorial

JavaScript "use strict"
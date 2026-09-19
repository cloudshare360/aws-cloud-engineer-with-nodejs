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

JavaScript Object.seal()


JavaScript this


JavaScript Modules


JavaScript Variable Scope


Javascript Object.preventExtensions()


JavaScript Object.freeze()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript "use strict"

















In JavaScript, `'use strict';` states that the code should be executed in '**strict mode**'. This makes it easier to write good and secure JS code. For example,

`myVariable = 9;`

Here, myVariable is created without declaring. This works as a global variable in JavaScript. However, if you use this in strict mode, the program will throw an error. For example,

`'use strict';

// Error
myVariable = 9;`

The above code throws an error because myVariable is not declared. In strict mode, you cannot use the variable without declaring them.

To indicate this program is in the strict mode, we have used

`'use strict';`

at the top of the program.

You can declare the strict mode by adding `'use strict';` or `"use strict";` at the beginning of a program.

When you declare strict mode at the beginning of a program, it will have global scope and all the code in the program will execute in strict mode.

Strict Mode in Variable

In strict mode, using a variable without declaring it throws an error.

**Note**: You need to declare strict mode at the **beginning** of the program. If you declare strict mode below some code, it won't work.

For example,

`console.log("some code");

// 'use strict' is ignored
// must be at the top
"use strict";

x = 21; // does not throw an error`

Strict Mode in Function

You can also use strict mode inside a function. For example,

`myVariable = 9;
console.log(myVariable); // 9

function hello() {

// applicable only for this function
'use strict';

string = 'hello'; // throws an error
}

hello();`

If you use `'use strict';` inside a function, the code inside the function will be in strict mode.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











In the above program, `'use strict';` is used inside the `hello()` function. Hence, the strict mode is applicable only inside the function.

As you can see, in the beginning of the program, `myVariable` is used without declaring.

If you declare `'use strict';` at the top of the program, you cannot use a variable without declaring it inside the function as well. For example,

`// applicable to whole program
'use strict';

function hello() {
string = 'hello'; // throws an error
}

hello();`

**Note** : Strict mode doesn't apply to block statements with `{}` braces.

Things Not Allowed in Strict Mode

1. Undeclared variable is not allowed.

`'use strict';

a = 'hello'; // throws an error`

2.Undeclared objects are not allowed.

`'use strict';

person = {name: 'Carla', age: 25}; // throws an error`

3. Deleting an object is not allowed.

`'use strict';

let person = {name: 'Carla'};

delete person; // throws an error`

4. Duplicating a parameter name is not allowed.

`"use strict";

function hello(p1, p1) { console.log('hello')}; // throws an error

hello();`

5. Assigning to a non-writable property is not allowed.

`'use strict';

let obj1 = {};

Object.defineProperty(obj1, 'x', { value: 42, writable: false });

// assignment to a non-writable property
obj1.x = 9; // throws an error`

6. Assigning to a getter-only property is not allowed.

`'use strict';

let obj2 = { get x() { return 17; } };

// assignment to a getter-only property
obj2.x = 5; // throws an error`

7. Assigning to a new property on a non-extensible object is not allowed.

`'use strict';

let obj = {};
Object.preventExtensions(obj);

// Assignment to a new property on a non-extensible object
obj.newValue = 'new value'; // throws an error`

8. Octal syntax is not allowed.

`'use strict';

let a = 010; // throws an error`

9. The variable name arguments and eval are not allowed.

`'use strict';

let arguments = 'hello'; // throws an error

let eval = 44;`

10.You cannot also use these reserved keywords in strict mode.

`implements` `interface` `let` `package` `private` `protected` `public` `static` `yield`

Benefits of Strict Mode

The use of strict mode:

helps to write a cleaner code

changes previously accepted silent errors (bad syntax) into real errors and throws an error message

makes it easier to write "secure" JavaScript







Table of Contents






Introduction

Strict Mode in Function

Things Not Allowed in Strict Mode

Benefits of Strict Mode











#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS this











Next Tutorial:

Iterators and Iterables

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript this

JavaScript Tutorial

JavaScript Modules

JavaScript Tutorial

JavaScript Variable Scope

JavaScript Tutorial

JavaScript Comparison and Logical Operators
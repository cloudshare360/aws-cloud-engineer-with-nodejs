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

JavaScript Operators


JavaScript Booleans


JavaScript Object.is()


JavaScript Ternary Operator


JavaScript null and undefined


JavaScript typeof Operator



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript Comparison and Logical Operators

















JavaScript Comparison Operators

Comparison operators **compare** two values and return a boolean value (`true` or `false`). For example,

`const a = 3, b = 2;
console.log(a > b);

// Output: true `

Here, we have used the `>` comparison operator to check whether a (whose value is **3**) is greater than b (whose value is **2**).

Since **3** is greater than **2**, we get `true` as output.

**Note:** In the above example, `a > b` is called a **boolean expression** since evaluating it results in a boolean value.

Commonly Used Comparison Operators

Operator
Meaning
Example

`==`
Equal to
`3 == 5  // false`

`!=`
Not equal to
`3 != 4  // true`

`===`
Strictly equal to
`3 === "3"  // false`

`!==`
Strictly not equal to
`3 !== "3"  // true`

`>`
Greater than
`4 > 4  // false`

`<`
Less than
`3 < 3  // false`

`>=`
Greater than or equal to
`4 >= 4  // true`

`<=`
Less than or equal to
`3 <= 3  // true`

1. JavaScript Equal To Operator

The **equal to** operator `==` evaluates to

`true` if the values of the operands are equal.

`false` if the values of the operands are not equal.

For example,

`// same value, same type
console.log(5 == 5);  // true

// same value, different type
console.log(2 == "2");  // true

// different values, same type
console.log("hello" == "Hello");  // false`

**Note**: In JavaScript, `==` is a comparison operator, whereas `=` is an assignment operator. If you mistakenly use `=` instead of `==`, you might get unexpected results.

2. Not Equal To Operator

The **not equal to** operator `!=` evaluates to

`true` if the values of the operands aren't equal.

`false` if the values of the operands are equal.

For example,

`// same value, same type
console.log(2 != 2);  // false

// same value, different type
console.log(2 != "2");  // false

// different value, same type
console.log(2 != 3);  // true`

3. Strict Equal To Operator

The **strict equal to** operator `===` evaluates to

`true` if both the values and the types of the operands are the same.

`false` if either the values or the types of the operands are not the same.

For example,

`// same value, same type
console.log(2 === 2);  // true

// same value, different type
console.log(2 === "2");  // false`

Difference between the == and === operators.

The `==` (equality) operator only checks the values of the operands and not their types. For example,

However, the `===` (strict equality) operator checks both the values and types of the operands. For example,

`// only checks the values
console.log(2 == "2");  // true

// checks both the values and the types
console.log(2 === "2");  // false`

This means, the `==` operator returns `true` as long as the values of the operands are equal. But, the `===` operator only returns `true` when both the values and the types of the operands are equal.

4. Strict Not Equal To Operator

The **strict not equal to** operator `!==` evaluates to

`true` if either the values or the types of the operands are not the same.

`false` if both the values and the types of the operands are the same.

For example,

`// same value, same type
console.log(2 !== 2);  // false

// same value, different type
console.log(2 !== "2");  // true

// different value, same type
console.log("Hello" !== "World");  // true`

5. Greater Than Operator

The **greater than** operator `>` returns

`true` if the value on the left is greater than the value on the right.

`false` if the value on the left isn't greater than the value on the right.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











For example,

`// left operand is greater
console.log(3 > 2);  // true

// both operands are equal
console.log(4 > 4);  // false

// left operand is smaller
console.log(2 > 5);  // false`

6. Greater Than Or Equal To Operator

The **greater than or equal to** operator `>=` returns

`true` if the value on the left is greater than or equal to the value on the right.

`false` if the value on the left is less than the value on the right.

For example,

`// left operand is greater
console.log(3 >= 2);  // true

// both operands are equal
console.log(4 >= 4);  // true

// left operand is smaller
console.log(2 >= 5);  // false`

7. Less Than Operator

The **less than** operator `<` returns

`true` if the value on the left is less than the value on the right.

`false` if the value on the left isn't less than the value on the right.

For example,

`// left operand is smaller
console.log(2 < 5);  // true

// both operands are equal
console.log(4 < 4);  // false

// left operand is greater
console.log(3 < 2);  // false`

8. Less Than Or Equal To Operator

The **less than or equal to** operator `<=` returns

`true` if the value on the left is less than or equal to the value on the right.

`false` if the value on the left is greater than the value on the right.

For example,

`// left operand is smaller
console.log(2 <= 5);  // true

// both operands are equal
console.log(4 <= 4);  // true

// left operand is greater
console.log(3 <= 2);  // false`

JavaScript Logical Operators

Logical operators return a boolean value by evaluating boolean expressions. For example,

`const x = 5, y = 3;

console.log((x < 6) && (y < 5));

// Output: true`

Here, `&&` is the logical operator **AND**. Since both the boolean expressions `x < 6` and `y < 5` are `true`, evaluating them with the `&&` operator also results in `true`.

Commonly Used Logical Operators

Operator
Syntax
Description

`&&` (Logical AND)
`expression1 && expression2`
`true` only if both `expression1` and `expression2` are `true`

`||` (Logical OR)
`expression1 || expression2`
`true` if either `expression1` or `expression2` is `true`

`!` (Logical NOT)
`!expression`
`false` if `expression` is `true` and vice versa

1. Logical AND Operator

The **logical AND** operator `&&` returns `true` if both the expressions are `true`. For example,

`let x = 2;

// both expressions are true
console.log((x < 4) && (4 >= x));  // true

// only one expression is true
console.log((x <= 4) && (2 == 4));  // false

// both expressions are false
console.log((x > 4) && (x == 4));  // false`

Here,

`(x < 4) && (4 >= x)` results in `true` because both expressions are `true`.

`(x <= 4) && (2 == 4)` results in `false` because the expression `2 == 4` is `false`.

`(x > 4) && (x == 4)` results in `false` because both expressions are `false`.

2. Logical OR Operator

The **logical OR** operator `||` returns `true` if at least one expression is `true`. For example,

`let x = 2;

// both expressions are true
console.log((x < 4) || (4 >= x));  // true

// only one expression is true
console.log((x <= 4) || (2 == 4));  // true

// both expressions are false
console.log((x > 4) || (x == 4));  // false`

Here,

`(x < 4) || (4 >= x)` results in `true` because both expressions are `true`.

`(x <= 4) || (2 == 4)` results in `true` because the expression `x <= 4` is `true`.

`(x > 4) || (x == 4)` results in `false` because both expressions are `false`.

3. Logical NOT Operator

The **logical NOT** operator `!` returns `true` if the specified expression is `false` and vice versa. For example,

`// NOT on true
console.log(!true);  // false

// NOT on false
console.log(!false);  // true

// comparison example
console.log(!(2 < 3));  // false`

Here,

`!true` results in `false` because `!` inverts the value of `true` to `false`.

`!false` results in `true` because `!` inverts the value of `false` to `true`.

`!(2 < 3)` results in `false` because `!` inverts the `true` value of `(2 < 3)` to `false`.

Frequently Asked Question

Difference between JavaScript comparison and logical operators.

In JavaScript, we use comparison operators to compare two values and find the resulting boolean value (`true` or `false`). For example,

`// less than operator
console.log(4 < 5);

// Output: true`

In the above example, we used the `<` operator to find the boolean value for the condition `4 < 5`.

On the other hand, we use logical operators to perform logical operations on boolean expressions. For example,

`// ! logical NOT
console.log(!(4 < 5));

// Output: false`

Here, the expression `4 < 5` gives us the boolean value `true`. The `!` operator then acts on this boolean value and inverts it to `false`.

**Also Read:**

JavaScript Operators

JavaScript if...else Statement

JavaScript for loop







Table of Contents






JavaScript Comparison Operators

JavaScript Equal To Operator

Strict Equal To Operator

Greater Than Operator

Less Than Operator

JavaScript Logical Operators

Logical AND Operator

Logical OR Operator

Logical NOT Operator










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS Type Conversion











Next Tutorial:

JS if...else

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript Operators

JavaScript Tutorial

JavaScript Booleans

JavaScript Tutorial

JavaScript null and undefined

JavaScript Tutorial

JavaScript Ternary Operator
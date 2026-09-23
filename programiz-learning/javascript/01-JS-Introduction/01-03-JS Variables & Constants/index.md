# JavaScript Variables and Constants

> Offline notes for Programiz topic 01-03. Source: https://www.programiz.com/javascript/variables-constants

## JavaScript Variables

A JavaScript variable is a container for storing data.

```js
let num = 5;
```

Here, `num` is a variable that stores the number `5`.

## Declare Variables in JavaScript

In JavaScript, we use the `var` or `let` keywords to declare variables.

```js
var age;
let name;
```

`age` and `name` are variables.

### What is the difference between `var` and `let`?

| Feature | `var` | `let` |
|---|---|---|
| Scope | Function-scoped | Block-scoped |
| Re-declaration | Allowed | Not allowed in same scope |
| Hoisting | Yes (undefined) | No (ReferenceError if used before declaration) |
| Global object | Attached to `window`/`global` | Not attached |
| Block scope | Ignores `{}` blocks | Respects `{}` blocks |

```js
// var example
var x = 10;
var x = 20; // OK - re-declaration allowed
console.log(x); // 20

// let example
let y = 10;
// let y = 20; // Error! Identifier 'y' has already been declared
```

```js
// Block scope difference
{
  var a = 5;
  let b = 5;
}
console.log(a); // 5 (function-scoped, leaks outside block)
console.log(b); // ReferenceError: b is not defined (block-scoped)
```

## Initialize Variables in JavaScript

We use the assignment operator `=` to assign a value to a variable.

```js
// declare variable num
let num;

// assign 5 to num
num = 5;
```

You can also initialize variables during declaration.

```js
// declare variable num1 and assign 5 to it
let num1 = 5;

// declare variable num2 and assign 6 to it
let num2 = 6;
```

## Declare Multiple Variables in a Single Statement

```js
let a = 1, b = 2, c = 3;
```

## Use a Variable Without Initializing It

```js
let message;
console.log(message); // undefined
```

## Change the Value of Variables

The value of a variable may vary.

```js
// assign 5 to variable score
let score = 5;
console.log(score); // 5

// change the value of score to 3
score = 3;
console.log(score); // 3
```

## Rules for Naming JavaScript Variables

1. Variable names must start with a letter, an underscore `_`, or the dollar sign `$`.

```js
// valid
let message = "hello";
let _message = "hello";
let $message = "hello";
```

2. Variables cannot start with numbers.

```js
// invalid
let 1message = "hello"; // this gives an error
```

3. Variable names are case-sensitive. So `age` and `Age` are different variables.

```js
let age = 23;
let Age = 20;

console.log(age); // 23
console.log(Age); // 20
```

4. Variable names cannot be keywords (special words reserved for specific purposes in JavaScript such as `if`, `else`, `let`, `var`, etc.).

```js
// invalid
let new = 5; // Error! new is a keyword
```

### Recommended Naming Conventions

| Style | Example |
|---|---|
| camelCase | `myVariable`, `firstName`, `totalPrice` |
| snake_case | `my_variable`, `first_name` (less common in JS) |
| PascalCase | `MyClass`, `MyComponent` (for classes) |
| UPPER_CASE | `MAX_VALUE`, `PI` (for constants) |

## JavaScript Constants

A constant is a type of variable whose value cannot be changed.

In JavaScript, we use the `const` keyword to create constants.

```js
// assign 5 to num
const num = 5;
```

Once a constant is initialized, we cannot change its value.

```js
// assign 5 to num
const num = 5;

// assign 10 to num
num = 10;
console.log(num) // Error! constant cannot be changed
```

### Always Initialize a Constant During Declaration

If you do not initialize a constant at the time of declaration, it throws an error.

```js
// Error! Missing initializer in const declaration
const x;

// attempt to initialize constant after declaration
x = 5;

console.log(x)
```

> **Note:** If you are sure that the value of a variable won't change throughout the program, we recommend you use `const`.

## When to Use `let` vs `const` vs `var`

| Keyword | Use When |
|---|---|
| `const` | Value will NOT change (default choice) |
| `let` | Value WILL change (e.g., counters, user input) |
| `var` | Avoid in modern code (legacy compatibility only) |

## Quick Reference

```js
// Constants - value cannot be changed
const PI = 3.14159;
const MAX_USERS = 100;

// Variables - value can be changed
let count = 0;
let username = "Alice";

// Reassign variables
count = count + 1;
username = "Bob";

// Multiple declaration
let x = 1, y = 2, z = 3;
```

## Hands-On Practice

See the `hands-on/` directory for runnable examples:

| File | Topic | Run with |
|---|---|---|
| `01-basic-variable.js` | Basic variable definition | `node hands-on/01-basic-variable.js` |
| `02-declare-variables.js` | Declare with var and let | `node hands-on/02-declare-variables.js` |
| `03-var-vs-let.js` | var vs let difference | `node hands-on/03-var-vs-let.js` |
| `04-block-scope.js` | Block scoping | `node hands-on/04-block-scope.js` |
| `05-declare-then-assign.js` | Declare then assign | `node hands-on/05-declare-then-assign.js` |
| `06-declare-and-initialize.js` | Declare and initialize | `node hands-on/06-declare-and-initialize.js` |
| `07-multiple-declaration.js` | Multiple declaration | `node hands-on/07-multiple-declaration.js` |
| `08-uninitialized-variable.js` | Uninitialized variable | `node hands-on/08-uninitialized-variable.js` |
| `09-change-variable-value.js` | Change variable value | `node hands-on/09-change-variable-value.js` |
| `10-valid-variable-names.js` | Valid naming rules | `node hands-on/10-valid-variable-names.js` |
| `11-invalid-starts-with-number.js` | Invalid: starts with number | (demonstration only) |
| `12-case-sensitive.js` | Case sensitivity | `node hands-on/12-case-sensitive.js` |
| `13-invalid-keyword.js` | Invalid: keyword | (demonstration only) |
| `14-const-basics.js` | const basics | `node hands-on/14-const-basics.js` |
| `15-const-cannot-change.js` | const cannot change | (demonstration only) |
| `16-const-missing-initializer.js` | const missing initializer | (demonstration only) |
| `17-let-vs-const.js` | let vs const best practices | `node hands-on/17-let-vs-const.js` |

> **Note:** Files 11, 13, 15, and 16 contain intentionally invalid code to demonstrate error cases. Do not run them.

## Key Takeaways

1. Use `const` for values that won't change
2. Use `let` for values that will be reassigned
3. Avoid `var` in modern JavaScript
4. Always initialize `const` variables at declaration
5. Follow camelCase naming convention
6. Never use reserved keywords as variable names
7. Variable names are case-sensitive
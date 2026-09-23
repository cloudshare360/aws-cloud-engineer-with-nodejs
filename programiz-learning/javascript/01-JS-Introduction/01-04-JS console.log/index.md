# JavaScript console.log()

> Offline notes for Programiz topic 01-04. Source: https://www.programiz.com/javascript/console

## Introduction

In JavaScript, the `console.log()` method displays messages or variables in the browser's console.

### Example

```js
let message = "Hello, JavaScript!";
console.log(message);
// Output: Hello, JavaScript!
```

When we run the above code, `Hello, JavaScript!` is printed on the console.

---

## Syntax of JavaScript console.log()

```
console.log(message);
```

Here, `message` is a value or a variable whose value is to be printed to the console.

---

## Example 1: JavaScript console.log() Method

```js
console.log("Good Morning!");
console.log(2000);
```

**Output**

```
Good Morning!
2000
```

- `console.log("Good Morning!")` prints the string `"Good Morning!"` to the console.
- `console.log(2000)` prints the number **2000** to the console.

---

## Example 2: Print Values Stored in Variables

```js
// store value in greet variable
const greet = "Hello";

// print the value of greet variable
console.log(greet);
```

**Output**

```
Hello
```

---

## More on JavaScript console.log()

### 1. Using Substitution Strings

```js
let count = 5;
console.log("There are %d items in your basket.", count);
// Output: There are 5 items in your basket.
```

Here, `%d` is a placeholder for a decimal or integer number.

### 2. Using Template Literals

```js
let count = 5;
let message = `There are ${count} items in your basket.`;
console.log(message);
// Output: There are 5 items in your basket.
```

Here, we inserted the value of the `count` variable inside the message using the code `${count}`.

---

## Hands-On Practice

See the `hands-on/` directory for runnable examples:

| File | Description |
|---|---|
| `console-log-1.js` | Basic console.log with a variable |
| `console-log-2.js` | Printing string and number |
| `console-log-3.js` | Printing a variable value |
| `console-log-4.js` | Using substitution strings |
| `console-log-5.js` | Using template literals |

Run any example with:

```bash
node "hands-on/console-log-1.js"
```

---

## Key Takeaways

1. `console.log()` prints values to the browser console
2. It can print strings, numbers, variables, and expressions
3. Use template literals (backticks) for dynamic string interpolation
4. Use `%d` for number substitution in strings
5. `console.log()` is essential for debugging
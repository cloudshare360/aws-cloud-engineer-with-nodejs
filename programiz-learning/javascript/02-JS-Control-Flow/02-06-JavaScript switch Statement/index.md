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

JavaScript break Statement


JavaScript if...else Statement


JavaScript continue Statement


JavaScript String replace()


JavaScript Keywords and Identifiers


Javascript String match()



























#programizcom47948 {display: none; }
#programizcom47949 {display: block;}
@media(min-width: 992px) { #programizcom47948 {display: block;} #programizcom47949 {display: none;}}



JavaScript switch...case Statement

















The JavaScript `switch...case` statement executes different blocks of code based on the value of a given expression.

Here's a simple example of the `switch...case` statement. You can read the rest of the tutorial for more.

Example

`let trafficLight = "green";
let message = ""

switch (trafficLight) {
case "red":
message = "Stop immediately.";
break;
case "yellow":
message = "Prepare to stop.";
break;
case "green":
message = "Proceed or continue driving.";
break;
default:
message = "Invalid traffic light color.";
}

console.log(message)

// Output: Proceed or continue driving.`

The above program checks the value of trafficLight and prints the corresponding meaning of the traffic light. If the value doesn't match any of the specified cases, it prints `Invalid traffic light color.`

Syntax of the switch...case Statement

`switch (expression) {

case value1:
// code block to be executed
// if expression matches value1
break;

case value2:
// code block to be executed
// if expression matches value2
break;

...

default:
// code block to be executed
// if expression doesn't match any case
}`

Here,

The `switch` statement first evaluates the `expression`.

After that, it compares the result against value1. If a matching is found, the corresponding code block is executed. Then, the `break` statement immediately stops further checking of other cases.

If there is no match for value1, the program compares the result with the next specified case value (value2). This process continues until a matching case is found.

If none of the case values match, the code block in the `default` block is executed.

Let's try to understand this process with a flowchart below.

Flowchart of switch Statement

Flowchart of JavaScript switch statement

Example 1: Simple Program Using switch...case

Suppose we want to display a message based on the current day of the week. Let's look at the example below to see how we can achieve this using `switch...case`.

`let day = 3;
let activity;

switch (day) {

case 1:
console.log("Sunday");
break;

case 2:
console.log("Monday");
break;

case 3:
console.log("Tuesday");
break;

case 4:
console.log("Wednesday");
break;

case 5:
console.log("Thursday");
break;

case 6:
console.log("Friday");
break;

case 7:
console.log("Saturday");
break;

default:
console.log("Invalid Day");
}`

**Output**

Tuesday

This program prints the day based on the number stored in the day variable (**1** for `Sunday`, **2** for `Monday`, and so on).

Here, the `switch` statement checks the value of day against a series of cases:

First, it checks day against `case 1`. Since it doesn't match, this case is skipped.

Next, it checks day against `case 2`. Since it doesn't match, this case is skipped.

Then, it checks day against `case 3`. Since there is a match, its code block is executed (`Tuesday` is printed).

After printing `Tuesday`, a `break` statement is encountered, which terminates the `switch` statement.

Example 2: Simple Calculator Using switch...case

`// take user input for two numbers
let number1 = Number(prompt("Enter the value of number1: "));
let number2 = Number(prompt("Enter the value of number2: "));

// take user input to select an operator
const operator = prompt("Enter a operator ( either +, -, * or / ): ");

switch(operator) {

case "+":
result = number1 + number2;
console.log(`${number1} + ${number2} = ${result}`);
break;

case "-":
result = number1 - number2;
console.log(`${number1} - ${number2} = ${result}`);
break;

case "*":
result = number1 * number2;
console.log(`${number1} * ${number2} = ${result}`);
break;

case "/":
result = number1 / number2;
console.log(`${number1} / ${number2} = ${result}`);
break;

default:
console.log("Invalid operator");
}`

**Sample Output 1**

Enter the value of number1: 6
Enter the value of number2: 3
Enter a operator ( either +, -, * or / ): *
6 * 3 = 18

**Sample Output 2**

Enter the value of number1: 6
Enter the value of number2: 3
Enter a operator ( either +, -, * or / ): +
6 + 3 = 9

In the above program, we prompted the user to:

Enter two numbers: number1 and number2.

Select an operator: `+`, `-`, `*`, or `/`.

Based on the user input, the `switch` statement performs the corresponding calculation.

**Note:** Here, we have used template literal ``${number1} + ${number2} = ${result}`` that combines text and variable into one string.





#div-gpt-ad-Programizcom37046 {display:none; width: 728px; height: 90px; }
#div-gpt-ad-Programizcom36796 {display: block;}
@media(min-width: 992px) { #div-gpt-ad-Programizcom37046 {display: block;} #div-gpt-ad-Programizcom36796 {display: none;}}











It shows the values of number1, number2, and result directly in the message, like `5 + 3 = 8`. To learn more about template literals, visit JavaScript Template Literals.

More on JavaScript switch Statement

The default case is optional.

It is not necessary to use the `default` case in JavaScript. For example,

`let country = "Nepal";

switch (country) {
case "USA":
console.log("American");
break;
case "UK":
console.log("British");
break;
case "Japan":
console.log("Japanese");
}

console.log("Code after switch statement")

// Output: Code after switch statement`

We haven't used a `default` case in the program above. Moreover, the value of the country variable doesn't match any of the cases in the `switch` statement.

In such cases, the `switch` statement is skipped entirely and the program flow goes to the line that comes after the body of the `switch` statement.

What happens when we use a switch statement without break?

So far, we have used a `break` statement inside each `case` block. For example,

`case 2:
console.log("Monday");
break;`

The `break` statement terminates the execution of `switch-case` once a matching case has been found.

Without `break`, the program would continue executing subsequent cases even after finding a match. For example,

`let fruit = "banana";

switch (fruit) {
case "apple":
console.log("Apple case");
case "banana":
console.log("Banana case");
case "orange":
console.log("Orange case");
default:
console.log("Unknown fruit");
}`

**Output**

Banana case
Orange case
Unknown fruit

How can we use a single block of code for multiple case values?

Sometimes, we may want multiple case values to trigger the same block of code. For this, we can use multiple cases with a single block.

Let's look at the example below to understand this clearly.

`// Program to categorize age

let age = 19;

switch (age) {

// when age is 13, 14, or 15
case 13:
case 14:
case 15:
console.log("Early Teen")
break;

// when age is 16 or 17
case 16:
case 17:
console.log("Mid Teen");
break;

// when age is 18 or 19
case 18:
case 19:
console.log("Late Teen");
break;

// when age is none of the above
default:
console.log("Other Age Group");
}`

**Output**

Late Teen

In the above program, we have grouped multiple cases together, which allows us to use a single block of code for all the cases in the group. These groups are:

**cases 13, 14, and 15** - Prints `Early Teen` to the screen.

**cases 16 and 17** - Prints `Mid Teen` to the screen.

**cases 18 and 19** - Prints `Late Teen` to the screen.

Since **19** matches the second `case` in the third group (`case 19`), `Late Teen` is printed as an output.

JavaScript switch statement performs strict type checking.

The JavaScript `switch` statement performs type checking, ensuring both the value and the type of the expression match the `case` value. For example,

`let a = 1;

switch (a) {
case "1":
a = "one (string type)";
break;
case 1:
a = "one (number type)";
break;
case 2:
a = "two (number type)";
break;
default:
a = "not found";
}

console.log(`The value of a is ${a}.`);`

**Output**

The value of a is one (number type).

In the above program, we have assigned an integer value **1** to the variable a. Here,

`case "1"` checks if a is the string `"1"`. It evaluates to `false` because a is not of string type.

`case 1` checks if a is the integer **1**. It evaluates to `true` since both the type and the value of a match against `case 1`, thus assigning `"one (number type)"` to a.

Comparison between switch statement and if...else statement.

Both `switch...case` and `if...else` statements are used for decision-making. However, `switch...case` and `if...else` are useful in different conditions:

Use `switch` for a large number of conditions based on the same expression, which can be more readable than `if...else`.

Use `if...else` for complex logical conditions that can't be easily expressed as discrete cases.

Let's look at two programs that perform the same task, one by using a `switch` statement and another by using `if...else`:

`// Program using switch statement

let color = "green";

switch (color) {
case "red":
console.log("Stop");
break;
case "yellow":
console.log("Caution");
break;
case "green":
console.log("Go");
break;
default:
console.log("Invalid color");
}

// Output: Go`

In the above program, the color variable is strictly compared against each case. When it matches the case `"green"`, `Go` is printed as output.

`// Program using if...else statement

let color = "green";

if (color === "red") {
console.log("Stop");
}
else if (color === "yellow") {
console.log("Caution");
}
else if (color === "green") {
console.log("Go");
}
else {
console.log("Invalid color");
}

// Output: Go`

Here, the `if...else` statement checks the value of color against various conditions.

When color matches `"green"`, the corresponding block executes, printing `Go` as the output.

**Also Read:**

JavaScript if...else Statement

JavaScript continue Statement







Table of Contents






Introduction

Syntax of the switch...case Statement

Flowchart of switch Statement

Example 1: Simple Program Using switch...case

Example 2: Simple Calculator Using switch...case










#div-gpt-ad-Programizcom36790 {display:none; }
#div-gpt-ad-Programizcom36794 {display: block; }
@media(min-width: 992px) { #div-gpt-ad-Programizcom36790 {display: block;} #div-gpt-ad-Programizcom36794 {display: none; }}



















Previous Tutorial:

JS continue











Next Tutorial:

JS Functions

















Share on:














Did you find this article helpful?


























Sorry about that.

How can we improve it?

Feedback *


Leave this field blank




























Related Tutorials

JavaScript Tutorial

JavaScript break Statement

JavaScript Tutorial

JavaScript if...else Statement

JavaScript Tutorial

JavaScript Keywords and Identifiers

JavaScript Tutorial

JavaScript continue Statement
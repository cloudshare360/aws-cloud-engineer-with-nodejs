// 17-let-vs-const.js
// Best practices for choosing let vs const vs var:
// Use const for values that won't change (default choice).
// Use let for values that will be reassigned (e.g., counters, user input).
// Avoid var in modern JavaScript (legacy compatibility only).

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

// Display all values
console.log(PI); // Output: 3.14159
console.log(MAX_USERS); // Output: 100
console.log(count); // Output: 1
console.log(username); // Output: Bob
console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3
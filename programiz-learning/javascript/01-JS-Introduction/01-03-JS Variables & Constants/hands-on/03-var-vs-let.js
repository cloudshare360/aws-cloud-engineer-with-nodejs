// 03-var-vs-let.js
// Demonstrates the difference between var and let.
// var allows re-declaration in the same scope.
var x = 10;
var x = 20; // OK - re-declaration allowed with var
console.log(x); // Output: 20

// let does NOT allow re-declaration in the same scope.
let y = 10;
// let y = 20; // Error! Identifier 'y' has already been declared
console.log(y); // Output: 10
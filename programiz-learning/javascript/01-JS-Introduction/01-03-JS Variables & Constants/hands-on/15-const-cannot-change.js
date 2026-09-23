// 15-const-cannot-change.js
// Once a constant is initialized, we cannot change its value.
// assign 5 to num
const num = 5;

// assign 10 to num
num = 10;
console.log(num) // Error! constant cannot be changed
//
// To see the error, uncomment the line above:
// num = 10;
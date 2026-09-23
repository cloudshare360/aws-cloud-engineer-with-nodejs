// 16-const-missing-initializer.js
// Always Initialize a Constant During Declaration.
// If you do not initialize a constant at the time of declaration, it throws an error.
// Error! Missing initializer in const declaration
const x;

// attempt to initialize constant after declaration
x = 5;

console.log(x)
//
// To see the error, uncomment the lines above:
// const x;
// x = 5;
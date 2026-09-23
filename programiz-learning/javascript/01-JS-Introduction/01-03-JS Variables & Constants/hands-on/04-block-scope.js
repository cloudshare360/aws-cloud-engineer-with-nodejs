// 04-block-scope.js
// Demonstrates block scoping difference between var and let.
// var is function-scoped: it leaks outside the block { }.
// let is block-scoped: it is confined to the block { }.
{
  var a = 5;
  let b = 5;
}
// 'a' is accessible outside the block (var is function-scoped)
console.log(a); // Output: 5 (function-scoped, leaks outside block)
// 'b' is NOT accessible outside the block (let is block-scoped)
console.log(b); // Error: ReferenceError: b is not defined (block-scoped)
"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
} // named function
console.log(add(2, 3));
console.log(add(2, 3, 5));
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
// arrow function
console.log(sub(2, 3));
const mult = function (num1, num2) {
    return num1 * num2;
}; // function expression
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
// console.log(add2(2, 3, ...[5,6,7]));
// console.log(add2(2, 3, 4, 5, 6, 7));
// Languag: typescript
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d", "e"]);

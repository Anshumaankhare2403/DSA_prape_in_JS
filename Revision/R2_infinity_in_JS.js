let a = 100/0;
let b = -100/0;
let c=  0/0;
let d = Infinity/3;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Division by zero does NOT throw an error in JavaScript
// Unlike some languages (like C or Java with integers), JavaScript allows division by zero.
// JavaScript uses floating-point arithmetic
// -> 100 is a finite positive number
// -> 0 is zero
// -> Dividing a positive number by zero results in positive Infinity

// Infinity is a special numeric value
// JavaScript has built-in special values:
// -> Infinity
// => -Infinity
// => NaN
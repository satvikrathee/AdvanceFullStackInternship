// Question 14 

import { add, sub, mul, div } from './mathUtils.js';

console.log("Add:", add(5, 3));
console.log("Sub:", sub(5, 3));
console.log("Mul:", mul(5, 3));

try {
  console.log("Div:", div(6, 2));
  console.log("Div by Zero:", div(6, 0));
} catch (error) {
  console.log("Error caught:", error.message);
}

// Question 15 

// app.js

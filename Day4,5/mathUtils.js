
// Question 14 
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export function mul(a, b) {
  return a * b;
}

export function div(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Question 15

 // logger.js 



function log(level, msg) {
  console.log(`[${level.toUpperCase()}] ${msg}`);
}

module.exports = {
  log
};

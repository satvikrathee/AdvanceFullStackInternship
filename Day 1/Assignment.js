
// 1. Create a variable using const and store your college name. Print it.
const collegeName = "Geeta University";
console.log("College:", collegeName);

// 2. Create a variable using let and update its value three times.
let status = "apple";
console.log("Status 1:", status);
status = "Mango";
console.log("Status 2:", status);
status = "Banana";
console.log("Status 3:", status);
status = "Grapes";
console.log("Status 4:", status);

// 3. Create a block using {} and show that a variable declared with let cannot be accessed outside it.
{
  let score = 95;
  console.log("Inside block score:", score);
}
// ->> The next line would cause an error if uncommented, because score is not defined outside the block.
// console.log(score);

// 4. Write a program to swap two numbers using array destructuring.
let a = 10;
let b = 20;
console.log("Before swap:", a, b);
[a, b] = [b, a];
console.log("After swap:", a, b);

// 5. Create an arrow function that returns the cube of a number.
const cube = x => x * x * x;
console.log("Cube of 3:", cube(3));

// 6. Create an arrow function to check whether a number is even or odd.
const evenOrOdd = num => (num % 2 === 0 ? "Even" : "Odd");
console.log("7 is", evenOrOdd(7));
console.log("8 is", evenOrOdd(8));

// 7. Create an arrow function that finds the maximum of three numbers.
const maxOfThree = (x, y, z) => Math.max(x, y, z);
console.log("Max of 4, 9, 2:", maxOfThree(4, 9, 2));

// 8. Use destructuring to get first, second and remaining values.
const nums = [10, 20, 30, 40, 50];
const [first, second, ...remaining] = nums;
console.log("First:", first);
console.log("Second:", second);
console.log("Remaining:", remaining);

// 9. Create a function that receives a user's name and age and returns a greeting using template literals.
function greetUser(name, age) {
  return `Hello ${name}, you are ${age} years old.`;
}
console.log(greetUser("Satvik Rathee", 19));

// 10. Generate the following URL dynamically using template literals.
const userId = 1;
const apiUrl = `/api/users/${userId}`;
console.log(apiUrl);

// 11. Create an object and destructure all properties.
const student = {
  name: "Satvik Rathee",
  age: 19,
  course: "BCA"
};
const { name, age, course } = student;
console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);

// 12. Rename course to technology while destructuring.
const { course: technology } = student;
console.log("Technology:", technology);

// 13. Create a function with a default parameter.
function createUser(name, role = "Student") {
  return `Name: ${name}, Role: ${role}`;
}
console.log(createUser("Satvik "));
console.log(createUser("Rathee", "Teacher"));

// 14. Create a calculator function where the operation defaults to "add".
function calculator(x, y, operation = "add") {
  if (operation === "add") return x + y;
  if (operation === "subtract") return x - y;
  if (operation === "multiply") return x * y;
  if (operation === "divide") return x / y;
  return null;
}
console.log("Add:", calculator(10, 5));
console.log("Subtract:", calculator(10, 5, "subtract"));

// 15. Create a function that receives unlimited numbers and returns their sum using the Rest Operator.
function sum(...numbers) {
  return numbers.reduce((total, current) => total + current, 0);
}
console.log("Sum:", sum(10, 20, 30, 40));

// 16. Create a function that receives unlimited numbers and returns the largest number.
function maxAll(...numbers) {
  return Math.max(...numbers);
}
console.log("Largest:", maxAll(10, 20, 30, 40));

// 17. Merge two arrays using the Spread Operator.
const frontend = ["HTML"];
const backend = ["Node"];
const fullStack = [...frontend, ...backend];
console.log("Full Stack:", fullStack);

// 18. Copy an array using the Spread Operator and add one extra value.
const copyFruits = [...frontend, "JavaScript"];
console.log("Copied array with extra:", copyFruits);

// 19. Copy an object and update only the email property.
const user = {
  name: "Satvik Rathee",
  email: "satvik@example.com"
};
const updatedUser = { ...user, email: "satvik.new@example.com" };
console.log("Updated user:", updatedUser);

// 20. Create a product object and create a new object with an added discount field using the Spread Operator.
const product = {
  name: "Laptop",
  price: 50000
};
const discountedProduct = { ...product, discount: "10%" };
console.log("Product with discount:", discountedProduct);

// 21. Use map() and an arrow function to return only names from the given array.
const users = [
  { name: "Satvik Rathee", age: 19 },
  { name: "Mohan", age: 30 },
  { name: "Amit", age: 9 }
];
const userNames = users.map(user => user.name);
console.log("User names:", userNames);

// 22. Use filter() to get users whose age is greater than 24.
const Above24 = users.filter(user => user.age > 24);
console.log("Users older than 24:", Above24);
    
// 23. Use reduce() to calculate the total age of all users.
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Total age:", totalAge);

// 24. Create a function createInvoice(customerName, amount) and return a formatted string.
function createInvoice(customerName, amount) {
  return `Invoice for ${customerName}: $${amount.toFixed(2)}`;
}
console.log(createInvoice("Satvik Rathee", 2500));

// 25. Mini Challenge: calculate total marks and average.
const student2 = {
  name: "Satvik Rathee",
  marks: [80, 90, 70, 85]
};
const { name: studentName, marks } = student2;
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / marks.length;
console.log(`Student: ${studentName}`);
console.log(`Total: ${totalMarks}`);
console.log(`Average: ${averageMarks}`);
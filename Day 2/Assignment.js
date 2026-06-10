// Section A: Scope & Lexical Scope (1–10) 


//  Q1 [Status: Pending] 
// Predict Output 
// let a = 10; 
 
// function outer() { 
//    let a = 20; 
 
//    function inner() { 
//        console.log(a); 
//    } 
 
//    inner(); 
// } 
 
// outer();

// Answer: 20

// Q2 [Status: Pending] 
// let count = 1; 
 
// function test() { 
//    console.log(count); 
 
//    let count = 2; 
// } 
 
// test();

// Answer: ReferenceError: Cannot access 'count' before initialization


//  Q3 [Status: Pending] 
// Create a nested function structure of 4 levels and print variables from all parent scopes. 
// Expected: 
// 1 
// 2 
// 3 
// 4

function level1() {
    const var1 = 1;

    function level2() {
        const var2 = 2;

        function level3() {
            const var3 = 3;

            function level4() {
                const var4 = 4;
                
                console.log(var1);
                console.log(var2);
                console.log(var3);
                console.log(var4);
            }
            level4();
        }
        level3();
    }
    level2();
}


level1();


// Q4 [Status: Pending] 
// Write a function that returns another function and demonstrates lexical scope.

function createCounter() {

    let count = 0; 

   
    return function() {
        count += 1; 
        return count;
    };
}
const counter = createCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter());

// Q5 [Status: Pending] 
// Predict Output 
// var x = 100; 
 
// function a() { 
 
//    console.log(x); 
 
//    var x = 50; 
// } 
 
// a(); 

// Answer: undefined (due to variable hoisting, the declaration of 'x' is hoisted to the top of function 'a', but not its assignment)


// Q6 [Status: Pending] 
// Create a function where a child function can access grandparent variables. 

function grandparentScope() {
    const grandparentValue = "Hello from the Grandparent!";

    function parentScope() {
        
        function childScope() {
           
            console.log(grandparentValue); 
        }

        childScope();
    }

    parentScope();
}
grandparentScope();

//  Q7 [Status: Pending] 
// Predict Output 
// let name = "Ram"; 
 
// function show() { 
 
//    let name = "Mohan"; 
 
//    return function() { 
 
//        console.log(name); 
 
//    } 
// } 
 
// show()();

// Answer: Mohan (the inner function forms a closure and retains access to the 'name' variable in its lexical scope, which is "Mohan")


// Q8 [Status: Pending] 
// Create a 3-level nested function and access all variables inside the innermost function.

function level1() {
    const var1 = "Grandparent Variable";

    function level2() {
        const var2 = "Parent Variable";

        function level3() {
            const var3 = "Local Variable";
            
        
            console.log(var1);
            console.log(var2);
            console.log(var3);
        }
        level3();
    }
    level2();
}
level1();

//  Q9 [Status: Pending] 
// Can a parent access a child variable? 
//  Demonstrate using code.

//No, a parent function cannot access variables declared inside a child function. Scope in programming is strictly one-way (inside-out).

function parentFunction() {
    
    function childFunction() {
        
        const childVar = "I am hidden from the parent!"; 
    }

    childFunction();

    console.log(childVar); 
}
parentFunction(); 

// Q10 [Status: Pending] 
// Create a private variable using lexical scope. 

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
            return `Deposited ${amount}. New balance: ${balance}`;
        },
        getBalance: function() {
            return balance;
        }
    };
}
const myAccount = createBankAccount(100);

console.log(myAccount.getBalance());
console.log(myAccount.deposit(50));

console.log(myAccount.balance);

// Q11 [Status: Pending] 
// Create a counter closure. 
// Output: 
// 1 
// 2 
// 3

function createCounter() {
    let count = 0;

    return function() {
        count += 1;
        console.log(count);
    };
}

const counter = createCounter();

counter();
counter();
counter();

// Q12 
// Create a reverse counter. 
// Output: 
// 10 
// 9 
// 8

function createReverseCounter(startValue) {
    let count = startValue;

    return function() {
        console.log(count);
        count -= 1;
    };
}

const reverseCounter = createReverseCounter(10);

reverseCounter();
reverseCounter();
reverseCounter();

// Q13 
// Create a closure-based bank account. 
// Methods: 
// deposit() 
// withdraw() 
// checkBalance()
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: ${amount}`);
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
            } else {
                balance -= amount;
                console.log(`Withdrew: ${amount}`);
            }
        },
        checkBalance: function() {
            console.log(`Balance: ${balance}`);
        }
    };
}

const account = createBankAccount(100);

account.checkBalance(); 
account.deposit(50);    
account.checkBalance(); 
account.withdraw(30);   
account.checkBalance(); 


// Q14 
// Create a closure that remembers the username forever. 
function rememberUsername(username) {
    return function() {
        console.log(username);
    };
}

const getUser = rememberUsername("Alice123");
getUser();


// Q15 
// Create a closure-based login attempt tracker. 
// After 3 failed attempts: 
// Account Locked
function createLoginTracker() {
    let attempts = 0;
    const maxAttempts = 3;

    return function(isSuccessful) {
        if (attempts >= maxAttempts) {
            console.log("Account Locked");
            return;
        }

        if (isSuccessful) {
            attempts = 0;
            console.log("Login Successful");
        } else {
            attempts += 1;
            if (attempts >= maxAttempts) {
                console.log("Account Locked");
            } else {
                console.log(`Failed attempt ${attempts}`);
            }
        }
    };
}

const login = createLoginTracker();
login(false);
login(false);
login(false);
login(false);


// Q16 
// Build a closure that stores a secret password. 
// Only getter should be available.

function createSecretVault(password) {
    const secret = password;

    return {
        getPassword: function() {
            return secret;
        }
    };
}

const vault = createSecretVault("SuperSecret123");
console.log(vault.getPassword());


// Q17 
// Build a shopping cart using closure. 
// Methods: 
// addItem() 
// removeItem() 
// showItems()

function createShoppingCart() {
    let items = [];

    return {
        addItem: function(item) {
            items.push(item);
            console.log(`${item} added`);
        },
        removeItem: function(item) {
            const index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                console.log(`${item} removed`);
            } else {
                console.log(`${item} not found`);
            }
        },
        showItems: function() {
            console.log(items);
        }
    };
}

const cart = createShoppingCart();
cart.addItem("Laptop");
cart.addItem("Mouse");
cart.showItems();
cart.removeItem("Mouse");
cart.showItems();



// Q18 
// Create a closure-based voting machine. 
// Each user can vote only once.


function createVotingMachine() {
    let votes = {};

    return function(userId, candidate) {
        if (votes[userId]) {
            console.log(`User ${userId} has already voted!`);
        } else {
            votes[userId] = candidate;
            console.log(`Vote cast for ${candidate}`);
        }
    };
}

const vote = createVotingMachine();
vote("user1", "Candidate A");
vote("user1", "Candidate B");
vote("user2", "Candidate B");


// Q19 
// Build a closure that counts how many times a function is executed.
function trackExecution(fn) {
    let count = 0;

    return function(...args) {
        count += 1;
        console.log(`Execution Count: ${count}`);
        return fn(...args);
    };
}

const alertUser = trackExecution(() => "System alert!");
alertUser();
alertUser();




// Q20 
// Build a closure-based expense tracker. 
// Methods: 
// addExpense() 
// getTotal() 

function createExpenseTracker() {
    let total = 0;

    return {
        addExpense: function(amount) {
            total += amount;
            console.log(`Added expense: ${amount}`);
        },
        getTotal: function() {
            return total;
        }
    };
}

const tracker = createExpenseTracker();
tracker.addExpense(50);
tracker.addExpense(20);
console.log(`Total: ${tracker.getTotal()}`);



// Q21 
// Create an IIFE that prints: 
// Welcome to JavaScript 

(function() {
    console.log("Welcome to JavaScript");
})();


// Q22 
// Pass arguments to an IIFE and calculate area of rectangle. 

(function(length, width) {
    const area = length * width;
    console.log(area);
})(10, 5);


// Q23 
// Create an arrow function IIFE. 

((name) => {
    console.log(`Hello ${name}`);
})("Developer");


// Q24 
// Use IIFE to create private variables. 

const secretKeyManager = (function() {
    const privateKey = "XYZ12345";

    return {
        getKey: function() {
            return privateKey;
        }
    };
})();

console.log(secretKeyManager.getKey());
console.log(secretKeyManager.privateKey);


// Q25 
// Create a module pattern using IIFE. 
// Methods: 
// increment() 
// decrement() 
// reset() 

const counterModule = (function() {
    let count = 0;

    return {
        increment: function() {
            count += 1;
            console.log(count);
        },
        decrement: function() {
            count -= 1;
            console.log(count);
        },
        reset: function() {
            count = 0;
            console.log(count);
        }
    };
})();

counterModule.increment();
counterModule.increment();
counterModule.decrement();
counterModule.reset();


// Q26 
// Create a function: 
// calculate(a,b,operation) 
// Perform: 
// add 
// subtract 
// multiply 
// divide 
function calculate(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operation";
    }
}

console.log(calculate(10, 5, "add"));
console.log(calculate(10, 5, "subtract"));
console.log(calculate(10, 5, "multiply"));
console.log(calculate(10, 5, "divide"));



// Q27 
// Create your own custom HOF named: 
// repeat() 
// Example 
// repeat(5, sayHello) 

function repeat(times, fn) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}

function sayHello() {
    console.log("Hello");
}

repeat(5, sayHello);


// Q28 
// Create a logger HOF. 
// Output: 
// [INFO] User Logged In 

function createLogger(level) {
    return function(message) {
        console.log(`[${level.toUpperCase()}] ${message}`);
    };
}

const infoLogger = createLogger("info");
infoLogger("User Logged In");


// Q29 
// Create a function execution timer using HOF. 
// Output: 
// Execution Time: XX ms 
function timeExecution(fn) {
    return function(...args) {
        const start = performance.now();
        const result = fn(...args);
        const end = performance.now();
        console.log(`Execution Time: ${(end - start).toFixed(2)} ms`);
        return result;
    };
}

const heavyTask = timeExecution(() => {
    let sum = 0;
    for (let i = 0; i < 1000000; i++) sum += i;
    return sum;
});

heavyTask();



// Q30 
// Create a function wrapper that counts how many times another function was called.
function countCalls(fn) {
    let count = 0;
    return function(...args) {
        count += 1;
        console.log(`Function called ${count} times`);
        return fn(...args);
    };
}

const greet = countCalls((name) => `Hello ${name}`);
greet("Alice");
greet("Bob");


// Q31 
// Given 
// const users = [ 
// {name:"Ram",age:25}, 
// {name:"Mohan",age:30}, 
// {name:"Amit",age:22} 
// ]; 
// Return: 
// [ 
// "Ram", 
// "Mohan", 
// "Amit" 
// ] 
// using map. 

const users = [ 
    {name:"Ram",age:25}, 
    {name:"Mohan",age:30}, 
    {name:"Amit",age:22} 
];

const names = users.map(user => user.name);

console.log(names);

// Q32 
// Convert 
// [1,2,3,4,5] 
// into 
// [1,4,9,16,25] 
// using map. 
const numbers =[1,2,3,4,5] ;

const squares = numbers.map(num => num * num);

console.log(squares);


// Q33 
// Create an array of product names from: 
// [ 
// {name:"Laptop"}, 
// {name:"Mouse"}, 
// {name:"Keyboard"} 
// ]

const products = [ 
    {name:"Laptop"}, 
    {name:"Mouse"}, 
    {name:"Keyboard"} 
];

const productNames = products.map(product => product.name);

console.log(productNames);


// Q34 
// Filter all even numbers. 
// Input: 
// [1,2,3,4,5,6] 
// Output: 
// [2,4,6] 
const numbers = [1,2,3,4,5,6];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);


// Q35 
// Filter users whose age is greater than 25. 
const users = [
    { name: "Ram", age: 25 },
    { name: "Satvik", age: 30 },
    { name: "Amit", age: 22 },
    { name: "Sita", age: 28 }
];

const olderUsers = users.filter(user => user.age > 25);

console.log(olderUsers);


// Q36 
// Filter expensive products. 
// Condition: 
// price > 1000

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 1500 }
];

const expensiveProducts = products.filter(product => product.price > 1000);

console.log(expensiveProducts);


// Q37 
// Find total sum. 
// Input: 
// [10,20,30,40] 
// Output: 
// 100 

const numbers = [10, 20, 30, 40];

const totalSum = numbers.reduce((sum, num) => sum + num, 0);

console.log(totalSum);

// Q38 
// Find maximum value using reduce. 
// Input: 
// [5,12,3,45,2] 
// Output: 
// 45 
const numbers = [5, 12, 3, 45, 2];

const maxVal = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);

console.log(maxVal);


// Q39 
// Count total characters. 
// Input: 
// ["JavaScript","React","Node"] 
// Output: 
// 20 


const words = ["JavaScript", "React", "Node"];

const totalChars = words.reduce((total, word) => total + word.length, 0);

console.log(totalChars);


// Q40 
//  Ultra Hard 
// Given: 
// const orders = [ 
//    { 
//        id:1, 
//        amount:5000, 
//        status:"completed" 
//    }, 
//    { 
//        id:2, 
//        amount:2000, 
//        status:"pending" 
//    }, 
//    { 
//        id:3, 
//        amount:7000, 
//        status:"completed" 
//    }, 
//    { 
//        id:4, 
//        amount:1000, 
//        status:"completed" 
//    } 
// ]; 
// Using only: 
// filter() 
// map() 
// reduce() 
// Find: 
// 1. Completed Orders 
// 2. Total Revenue 
// 3. Average Revenue 
// 4. Highest Order Amount 
// 5. Array of Order IDs



const orders = [ 
   { id: 1, amount: 5000, status: "completed" }, 
   { id: 2, amount: 2000, status: "pending" }, 
   { id: 3, amount: 7000, status: "completed" }, 
   { id: 4, amount: 1000, status: "completed" } 
];

const completedOrders = orders.filter(order => order.status === "completed");

const totalRevenue = completedOrders.reduce((sum, order) => sum + order.amount, 0);

const averageRevenue = totalRevenue / completedOrders.length;

const highestOrderAmount = orders.reduce((max, order) => (order.amount > max ? order.amount : max), 0);

const orderIds = orders.map(order => order.id);

console.log(completedOrders);
console.log(totalRevenue);
console.log(averageRevenue);
console.log(highestOrderAmount);
console.log(orderIds);

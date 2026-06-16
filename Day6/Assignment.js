// Q1 
// Create your own function: 
// greetUser(name, callback) 
// Output: 
// Hello Ram 
// Welcome Ram 

function greetUser(name, callback) {
    callback(name);
}

function display(name) {
    console.log("Hello " + name);
    console.log("Welcome " + name);
}

greetUser("Ram", display);


// Q2 
// Create: 
// calculate(a,b,callback) 
// Perform: 
// ● Add 
// ● Multiply 
// ● Divide 
// Using callback. 

function calculate(a, b, callback) {
    return callback(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

console.log(calculate(10, 5, add));       
console.log(calculate(10, 5, multiply));  
console.log(calculate(10, 5, divide));    


// Q3 
// Create a custom callback based calculator. 
// Input: 
// calculator(20,10,operation) 
// Output should depend on operation callback. 

function calculator(a, b, operation) {
    return operation(a, b);
}

const addOperation = (x, y) => x + y;
const subtractOperation = (x, y) => x - y;

console.log(calculator(20, 10, addOperation));       
console.log(calculator(20, 10, subtractOperation));  

// Q4 
// Create a function: 
// processStudent(student, callback) 
// Callback should print student details. 

function processStudent(student, callback) {
    callback(student);
}

const studentData = { name: "Satvik Rathee", age: 19, grade: "A" };

processStudent(studentData, function(student) {
    console.log(`Student Details: Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
});

// Q5 
// Create a function: 
// downloadFile(callback) 
// Simulate file download after 2 sec. 

function download(callback) {
    console.log("Downloading file...");
    setTimeout(() => {
        callback("report.pdf");
    }, 2000);
}

download((fileName) => {
    console.log(`${fileName} has downloaded completely.`);
});

// Q6 
// Create: 
// registerUser(callback) 
// After registration callback should send welcome email. 

function registerUser(username, callback) {
    console.log(`User ${username} registered successfully.`);
    callback(username);
}

registerUser("Karan", (user) => {
    console.log(`Welcome email sent to ${user}@example.com`);
});

// Q7 
// Create: 
// placeOrder(callback) 
// After order callback should generate invoice. 

function placeOrder(orderId, callback) {
    console.log(`Order ${orderId} placed.`);
    callback(orderId);
}

placeOrder("ORD99823", (id) => {
    console.log(`Invoice generated successfully for order: ${id}`);
});

// Q8 
// Create: 
// fetchUser(callback) 
// Return dummy user after 3 sec. 

function fetchUser(callback) {
    console.log("Fetching user from database...");
    setTimeout(() => {
        const dummyUser = { id: 101, username: "Sita" };
        callback(dummyUser);
    }, 3000);
}

fetchUser((user) => {
    console.log("User data retrieved:", user);
});


// Q9 
// Create callback-based OTP verification. 

function verifyOTP(inputOTP, actualOTP, callback) {
    if (inputOTP === actualOTP) {
        callback(null, "Verification successful!");
    } else {
        callback("Incorrect OTP. Access denied.", null);
    }
}

verifyOTP("4321", "4321", (error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(success);
    }
});

// Q10 
// Create callback-based login system.

function loginSystem(username, password, callback) {
    if (username === "admin" && password === "pass123") {
        callback(null, "Access granted.");
    } else {
        callback("Invalid credentials.", null);
    }
}

loginSystem("admin", "pass123", (err, message) => {
    if (err) {
        console.log(err);
    } else {
        console.log(message);
    }
});

// Q11 
// Predict output 
// console.log("A"); 
// setTimeout(()=>{ 
// console.log("B"); 
// },0); 
// console.log("C"); 

// Answer == 
// A
// C
// B

// Q12 
// Predict output 
// setTimeout(()=>{ 
// console.log(1); 
// },1000); 
// console.log(2); 

// Answer == 2
// 1

// Q13 
// Predict output 
// console.log("Start"); 
// setTimeout(()=>{ 
// console.log("Timeout"); 
// },0); 
// console.log("End"); 

// Answer == Start
// End
// Timeout

// Q14 
// Create countdown: 
// 5 
// 4 
// 3 
// 2 
// 1 
// Boom 
// Using setTimeout. 


function countdown(num) {
    if (num > 0) {
        console.log(num);
        setTimeout(() => countdown(num - 1), 1000);
    } else {
        console.log("Boom");
    }
}
countdown(5);

// Q15 
// Create digital bomb timer. 

function startBombTimer(seconds) {
    let timeLeft = seconds;
    
    const timer = setInterval(() => {
        if (timeLeft > 0) {
            console.log(`Time remaining: 00:${timeLeft < 10 ? '0' : ''}${timeLeft} `);
            timeLeft--;
        } else {
            clearInterval(timer);
            console.log(" BOOM! Timer exploded! ");
        }
    }, 1000);
}
startBombTimer(10);

// Q16 
// Create delayed greeting system. 
// User enters name. 
// After 2 sec greeting appears. 

function delayedGreeting(name) {
    console.log("Processing greeting...");
    setTimeout(() => {
        console.log(`Hello ${name}! Welcome back.`);
    }, 2000);
}
delayedGreeting("Satvik Rathee");

// Q17 
// Create delayed notification system. 

function notification(message, delayMs) {
    console.log("Notification scheduled...");
    setTimeout(() => {
        console.log(` NOTIFICATION: ${message}`);
    }, delayMs);
}
notification("You have a new message.", 3000);

// Q18 
// Create delayed button disable feature. 
function simulateButtonDisable() {
    let button = { disabled: false, innerText: "Click Me" };
    console.log("Button status:", button);

    setTimeout(() => {
        button.disabled = true;
        button.innerText = "Disabled";
        console.log("Button status updated:", button);
    }, 4000);
}
simulateButtonDisable();


// Q19 
// Create delayed redirect simulation. 

function simulateRedirect(url) {
    console.log("Payment successful! Preparing to redirect...");
    setTimeout(() => {
        console.log(` Redirecting you now to: ${url}`);
    }, 2500);
}
simulateRedirect("https://example.com");

// Q20 
// Create a function: 
// wait(seconds, callback)

function wait(seconds, callback) {
    setTimeout(callback, seconds * 1000);
}

wait(3, () => {
    console.log("Executed after exactly 3 seconds.");
});


// Q21 
// Simulate: 
// Login 
// ↓ 
// Get User 
// ↓ 
// Get Orders 
// ↓ 
// Show Orders 
// Using nested callbacks. 

function login(username, callback) {
    console.log("Logging in...");
    setTimeout(() => {
        console.log("Logged in successfully.");
        callback(username);
    }, 1000);
}

function getUser(username, callback) {
    console.log(`Fetching user profile for ${username}...`);
    setTimeout(() => {
        const user = { id: 101, name: username, membership: "Premium" };
        callback(user);
    }, 1000);
}

function getOrders(userId, callback) {
    console.log(`Fetching orders for user ID: ${userId}...`);
    setTimeout(() => {
        const orders = ["Order #552", "Order #981"];
        callback(orders);
    }, 1000);
}

function showOrders(orders) {
    console.log("Displaying Orders:", orders.join(", "));
}


login("Satvik Rathee", (username) => {
    getUser(username, (user) => {
        getOrders(user.id, (orders) => {
            showOrders(orders);
        });
    });
});

// Q22 
// Create callback hell with 5 nested levels. 

function step1(callback) {
    setTimeout(() => { console.log("Level 1 Complete"); callback(); }, 500);
}
function step2(callback) {
    setTimeout(() => { console.log("Level 2 Complete"); callback(); }, 500);
}
function step3(callback) {
    setTimeout(() => { console.log("Level 3 Complete"); callback(); }, 500);
}
function step4(callback) {
    setTimeout(() => { console.log("Level 4 Complete"); callback(); }, 500);
}
function step5() {
    setTimeout(() => { console.log("Level 5 Complete - Ultimate Pyramid of Doom reached!"); }, 500);
}


step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                step5();
            });
        });
    });
});

// Q23 
// Simulate food ordering system. 
// Order 
// ↓ 
// Cook 
// ↓ 
// Pack 
// ↓ 
// Deliver 

function orderFood(item, callback) {
    console.log(`Food Ordered: ${item}`);
    setTimeout(() => callback(item), 1000);
}

function cookFood(item, callback) {
    console.log(`Cooking: ${item}...`);
    setTimeout(() => callback(item), 1500);
}

function packFood(item, callback) {
    console.log(`Packing: ${item} in eco-containers...`);
    setTimeout(() => callback(item), 800);
}

function deliverFood(item) {
    console.log(`Delivered: Hot ${item} has arrived at your doorstep! `);
}


orderFood("Pizza", (item) => {
    cookFood(item, (cookedItem) => {
        packFood(cookedItem, (packedItem) => {
            deliverFood(packedItem);
        });
    });
});

// Q24 
// Simulate hospital process. 
// Registration 
// ↓ 
// Doctor 
// ↓ 
// Test 
// ↓ 
// Medicine 


function registration(patient, callback) {
    console.log(`Patient registered: ${patient}`);
    setTimeout(() => callback(patient), 1000);
}

function consultDoctor(patient, callback) {
    console.log(`Doctor checking ${patient}... Diagnosing symptoms.`);
    setTimeout(() => callback(patient), 2000);
}

function runTest(patient, callback) {
    console.log(`Running blood test for ${patient}...`);
    setTimeout(() => callback(patient), 1500);
}

function giveMedicine(patient) {
    console.log(`Medicines prescribed and handed to ${patient}. Discharge complete.`);
}

registration("Rohan", (p) => {
    consultDoctor(p, (p) => {
        runTest(p, (p) => {
            giveMedicine(p);
        });
    });
});

// Q25 
// Simulate college admission process. 
// Form 
// ↓ 
// Verification 
// ↓ 
// Payment 
// ↓ 
// Admission 

function submitForm(student, callback) {
    console.log(`Application form submitted for ${student}.`);
    setTimeout(() => callback(student), 1000);
}

function verifyDocuments(student, callback) {
    console.log(`Verifying certificates for ${student}...`);
    setTimeout(() => callback(student), 1200);
}

function processPayment(student, callback) {
    console.log(`Processing semester fees payment for ${student}...`);
    setTimeout(() => callback(student), 1000);
}

function finalAdmission(student) {
    console.log(`Admission Granted! Welcome to the university, ${student}.`);
}


submitForm("Satvik", (name) => {
    verifyDocuments(name, (name) => {
        processPayment(name, (name) => {
            finalAdmission(name);
        });
    });
});

// Q26 
// Create callback chain for: 
// Signup 
// ↓ 
// Verify Email 
// ↓ 
// Login 
// ↓ 
// Dashboard 

function signup(email, callback) {
    console.log(`Creating account for: ${email}`);
    setTimeout(() => callback(email), 1000);
}

function verifyEmail(email, callback) {
    console.log(`Verification link clicked for ${email}. Email Verified.`);
    setTimeout(() => callback(email), 1000);
}

function loginUser(email, callback) {
    console.log(`Logging in user: ${email}`);
    setTimeout(() => callback(email), 800);
}

function loadDashboard(email) {
    console.log(`Welcome back ${email}! Loading your dashboard analytics...`);
}


signup("dev@example.com", (email) => {
    verifyEmail(email, (email) => {
        loginUser(email, (email) => {
            loadDashboard(email);
        });
    });
});


// Q27 
// Create nested callbacks with random delays. 

const getRandomDelay = () => Math.floor(Math.random() * 2000) + 500;

function stepA(callback) {
    let delay = getRandomDelay();
    setTimeout(() => { console.log(`Step A done in ${delay}ms`); callback(); }, delay);
}

function stepB(callback) {
    let delay = getRandomDelay();
    setTimeout(() => { console.log(`Step B done in ${delay}ms`); callback(); }, delay);
}

function stepC() {
    let delay = getRandomDelay();
    setTimeout(() => { console.log(`Step C done in ${delay}ms. Final execution over.`); }, delay);
}

stepA(() => {
    stepB(() => {
        stepC();
    });
});

// Q28 
// Create callback-based weather fetching simulation. 


function fetchWeather(callback) {
    setTimeout(() => {
        let weather = {
            city: "Delhi",
            temp: "35°C"
        };

        callback(weather);
    }, 2000);
}

fetchWeather((data) => {
    console.log("City:", data.city);
    console.log("Temperature:", data.temp);
});


// Q29 
// Create callback-based e-commerce checkout flow. 

function checkInventory(cartItem, callback) {
    console.log(`Checking inventory stock for: ${cartItem}`);
    setTimeout(() => callback(cartItem), 800);
}

function calculateTax(item, callback) {
    console.log(`Calculating structural tax for ${item}...`);
    setTimeout(() => callback(item, 18), 700); // 18% tax
}

function chargeCard(item, tax, callback) {
    console.log(`Charging customer account for ${item} (including ${tax}% tax)...`);
    setTimeout(() => callback(true), 1500);
}


checkInventory("MacBook Pro", (item) => {
    calculateTax(item, (item, taxRate) => {
        chargeCard(item, taxRate, (isSuccess) => {
            if (isSuccess) console.log("Transaction secure. Order pipeline started!");
        });
    });
});

// Q30 
// Create callback-based movie booking flow.

function selectMovie(movieName, callback) {
    console.log(`Movie Selected: ${movieName}`);
    setTimeout(() => callback(movieName), 500);
}

function pickSeats(movieName, callback) {
    console.log(`Reserving seats J12, J13 for ${movieName}...`);
    setTimeout(() => callback("Seats J12-J13"), 1000);
}

function executePayment(seats, callback) {
    console.log(`Processing payment gateway ledger for ${seats}...`);
    setTimeout(() => callback("TXN_88192"), 1200);
}

function sendTicket(txnId) {
    console.log(`Confirmation payload dispatched! Ticket confirmed via transaction: ${txnId} 🎟️`);
}

selectMovie("Inception", (movie) => {
    pickSeats(movie, (seats) => {
        executePayment(seats, (txnId) => {
            sendTicket(txnId);
        });
    });
});


// Q31 
// Create live clock. 

// function startLiveClock() {
//     setInterval(() => {
//         const now = new Date();
//         const timeString = now.toLocaleTimeString();
//         console.log(`Current Time: ${timeString}`);
//     }, 1000);
// }

// startLiveClock();

// Q32 
// Create stopwatch. 
// Start 
// Pause 
// Reset 

let stopwatchInterval = null;
let milliseconds = 0;

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const remainingMs = Math.floor((ms % 1000) / 10);

    const minStr = String(minutes).padStart(2, '0');
    const secStr = String(seconds).padStart(2, '0');
    const msStr = String(remainingMs).padStart(2, '0');

    return `${minStr}:${secStr}:${msStr}`;
}

function startStopwatch() {
    if (stopwatchInterval) return; // Prevent multiple intervals
    console.log("Stopwatch Started");
    stopwatchInterval = setInterval(() => {
        milliseconds += 10;
        console.clear(); // Keeps console neat in most environments
        console.log(`Time: ${formatTime(milliseconds)}`);
    }, 10);
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    console.log(`Paused at: ${formatTime(milliseconds)}`);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    milliseconds = 0;
    console.log("Stopwatch Reset to 00:00:00");
}

// Example usage sequence:
// startStopwatch();
// setTimeout(pauseStopwatch, 3000);
// setTimeout(resetStopwatch, 5000);


// Q33 
// Create traffic light simulation. 
// Red 
// ↓ 
// Yellow 
// ↓ 
// Green 
// Repeat forever. 


function runTrafficLight() {
    function changeLight() {
        console.log(" RED - Stop!");
        
        setTimeout(() => {
            console.log(" YELLOW - Prepare!");
            
            setTimeout(() => {
                console.log(" GREEN - Go!");
                
                setTimeout(() => {
                    changeLight();
                }, 4000); 
                
            }, 2000); 
            
        }, 4000); 
    }
    
    changeLight();
}
runTrafficLight();

// Q34 
// Create auto slider. 
// Every 3 sec image changes. 

const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
let currentIndex = 0;

function startAutoSlider() {
    console.log(`Showing slide: ${images[currentIndex]}`);
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        console.log(`Showing slide: ${images[currentIndex]}`);
    }, 3000);
}
startAutoSlider();

// Q35 
// Create typing effect animation. 
// Example: 
// Hello World 
// One character at a time.

function typeEffect(text, speedMs = 150) {
    let index = 0;
    let currentText = "";

    const typingInterval = setInterval(() => {
        if (index < text.length) {
            currentText += text[index];
            console.clear();
            console.log(currentText );
            index++;
        } else {
            clearInterval(typingInterval);
            console.clear();
            console.log(currentText);
        }
    }, speedMs);
}
typeEffect("Hello World");


// Q36 
// Predict Output 
// console.log("A"); 
// setTimeout(()=>{ 
// console.log("B"); 
// },1000); 
// setTimeout(()=>{ 
// console.log("C"); 
// },0); 
// console.log("D"); 

// Answer == A
// D
// C
// B

// Q37 
// Predict Output 
// function one(){ 
// console.log("One"); 
// } 
// setTimeout(one,0); 
// console.log("Two"); 

// Answer == Two
// One

// Q38 
// Predict Output 
// console.log("Start"); 
// for(let i=0;i<1000000000;i++){} 
// setTimeout(()=>{ 
// console.log("Timeout"); 
// },0); 
// console.log("End"); 

// Answer== Start
// End
// Timeout

// Q39 
// Create Event Loop Visualizer. 
// Show: 
// Call Stack 
// Web API 
// Callback Queue 
// Flow on screen using DOM. 

// Answer == in index.html

// Q40 
// �
// �
//  FINAL BOSS 
// Build a Mini Async Task Manager

// Amswer == in index2.html
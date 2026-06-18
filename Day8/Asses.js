// Q1 
// Create an async function that returns: 
// Hello World 

async function getHelloWorld() {
  return "Hello World";
}

// Q2 
// Create an async function that returns a user object. 

async function getUser() {
  return { id: 1, name: "Satvik", email: "satvik@example.com" };
}

// Q3 
// Create an async function that returns an array of products. 

async function getProducts() {
  return [
    { id: 101, name: "Laptop", price: 999 },
    { id: 102, name: "Phone", price: 499 }
  ];
}

// Q4 
// Create an async function that returns current date. 

async function getCurrentDate() {
  return new Date();
}

// Q5 
// Create an async function that returns random number. 

async function getRandomNumber() {
  return Math.random();
}

// Q6 
// Create an async function that returns student details. 

async function getStudentDetails() {
  return { rollNo: 23, name: "Satvik Rathee", grade: "A" };
}

// Q7 
// Create an async function that returns company details. 

async function getCompanyDetails() {
  return { name: "TechCorp", industry: "Software", employees: 500 };
}

// Q8 
// Create an async function that returns cart items. 
async function getCartItems() {
  return [
    { itemId: 1, title: "Book", quantity: 2 },
    { itemId: 2, title: "Pen", quantity: 5 }
  ];
}


// Q9 
// Create an async function that returns total order amount. 


async function getTotalOrderAmount() {
  return 149.99;
}
// Q10 
// Create an async function and verify it always returns Promise. 

async function checkPromise() {
  return "Testing";
}

const result = checkPromise();

console.log(result instanceof Promise); 

// Q11 
// Create: 
// getUser() 
// Use await to print user. 

async function getUser() {
  return { id: 1, name: "Alex" };
}

async function run() {
  const user = await getUser();
  console.log(user);
}
run();

// Q12 
// Create: 
// getProduct() 
// Use await. 

async function getProduct() {
  return { id: 101, name: " Mouse", price: 25 };
}

async function run() {
  const product = await getProduct();
  console.log(product);
}
run();

// Q13 
// Create: 
// getOrders() 
// Use await. 

async function getOrders() {
  return [{ orderId: "A12", total: 150 }];
}

async function run() {
  const orders = await getOrders();
  console.log(orders);
}
run();

// Q14 
// Create: 
// getPayment() 
// Use await. 

async function getPayment() {
  return { status: "Success", transactionId: "TXN998" };
}

async function run() {
  const payment = await getPayment();
  console.log(payment);
}
run();

// Q15 
// Create delay function: 
// wait(2000) 
// Using Promise. 

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// Q16 
// Print: 
// Start 
// (wait 2 sec) 
// End 

async function runSequence() {
  console.log("Start");
  await wait(2000); 
  console.log("End");
}
runSequence();

// Q17 
// Print: 
// 1 
// (wait) 
// 2 
// (wait) 
// 3 
async function printNumbers() {
  console.log(1);
  await wait(1000);
  console.log(2);
  await wait(1000);
  console.log(3);
}
printNumbers();


// Q18 
// Create async greeting system. 

async function greetUser(name) {
  await wait(500);
  return `Hello, ${name}! Welcome back.`;
}

async function runGreeting() {
  const message = await greetUser("Satvik");
  console.log(message);
}
runGreeting();

// Q19 
// Create async OTP verification. 

async function verifyOTP(inputOTP, correctOTP) {
  await wait(1000); 
  return inputOTP === correctOTP;
}

async function runVerification() {
  const isVerified = await verifyOTP("1234", "1234");
  console.log(isVerified ? "Access Granted" : "Invalid OTP");
}
runVerification();

// Q20 
// Create async login simulation.

async function login(username, password) {
  console.log("Authenticating...");
  await wait(1500);
  
  if (username === "admin" && password === "secret") {
    return { success: true, token: "JWT_TOKEN_123" };
  }
  return { success: false, error: "Invalid credentials" };
}

async function runLogin() {
  const result = await login("admin", "secret");
  console.log(result);
}
runLogin();


// Q21 
// Create async function that throws error. 
// Handle using try catch. 

async function throwError() {
  throw new Error("Something went wrong!");
}

async function run() {
  try {
    await throwError();
  } catch (error) {
    console.error("Caught error:", error.message);
  }
}
run();

// Q22 
// Create async login validation. 
// Invalid login should throw error. 

async function validateLogin(username, password) {
  if (username !== "admin" || password !== "1234") {
    throw new Error("Invalid credentials");
  }
  return "Login successful!";
}

async function runLogin() {
  try {
    const status = await validateLogin("user", "wrong");
    console.log(status);
  } catch (error) {
    console.error("Login failed:", error.message);
  }
}
runLogin();

// Q23 
// Create async bank withdrawal. 
// Insufficient balance should throw error. 

async function withdrawMoney(amount, balance) {
  if (amount > balance) {
    throw new Error("Insufficient balance");
  }
  return balance - amount;
}

async function runWithdrawal() {
  try {
    const newBalance = await withdrawMoney(500, 200);
    console.log("Remaining balance:", newBalance);
  } catch (error) {
    console.error("Transaction failed:", error.message);
  }
}
runWithdrawal();

// Q24 
// Create async payment gateway simulation. 

async function processPayment(amount) {
  console.log(`Processing payment of $${amount}...`);
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  if (amount <= 0) throw new Error("Invalid payment amount");
  return { status: "Success", transactionId: "TXN" + Date.now() };
}

// Q25 
// Create async registration validator. 

async function validateRegistration(username, email, password) {
  if (!username || username.length < 3) throw new Error("Username too short");
  if (!email.includes("@")) throw new Error("Invalid email format");
  if (password.length < 6) throw new Error("Password too weak");
  return "Registration details valid";
}

// Q26 
// Create async email validator. 

async function validateEmail(email) {
  if (!email.includes("@")) {
    throw new Error();
  }
  return true;
}

async function run() {
  try {
    const isValid = await validateEmail("test@example.com");
    console.log(isValid);
  } catch (error) {
    console.log("Failed");
  }
}
run();

// Q27 
// Create async password validator. 

async function validatePassword(password) {
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
  return "Password strength acceptable";
}

// Q28 
// Create async ATM simulation. 

async function atmSimulation(pin, amount, accountBalance) {
  console.log("Reading card...");
  await new Promise(r => setTimeout(r, 500));

  if (pin !== 1234) throw new Error("Incorrect PIN");
  if (amount > accountBalance) throw new Error("Insufficient funds");

  console.log("Dispensing cash...");
  await new Promise(r => setTimeout(r, 1000));
  return { remainingBalance: accountBalance - amount };
}

// Q29 
// Create async product purchase flow. 

async function purchaseProduct(inStock, price) {
  if (!inStock) {
    throw new Error("Out of stock!");
  }
  return { status: "Success", paid: price };
}

// How to run it:
async function run() {
  try {
    const result = await purchaseProduct(true, 49.99);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}
run();

// Q30 
// Create async order cancellation flow.

async function cancelOrder(isShipped) {
  if (isShipped) {
    throw new Error();
  }
  return true;
}

async function run() {
  try {
    const result = await cancelOrder(false);
    console.log(result);
  } catch (error) {
    console.log("Failed");
  }
}
run();


// Q31 
// Create: 
// Login 
// ↓ 
// Get User 
// ↓ 
// Get Orders 
// ↓ 
// Payment 
// Using async await. 

async function login() { return true; }
async function getUser() { return { id: 1 }; }
async function getOrders() { return [{ id: 101 }]; }
async function processPayment() { return "Paid"; }

async function runWorkflow() {
  try {
    await login();
    const user = await getUser();
    const orders = await getOrders();
    const payment = await processPayment();
    console.log(payment);
  } catch (error) {
    console.log("Failed");
  }
}
runWorkflow();

// Q32 
// Create movie booking flow. 
async function selectSeat() { return true; }
async function bookTicket() { return true; }
async function makePayment() { return true; }

async function bookMovie() {
  try {
    await selectSeat();
    await bookTicket();
    const success = await makePayment();
    console.log(success);
  } catch (error) {
    console.log("Failed");
  }
}
bookMovie();

// Q33 
// Create food delivery flow. 

async function placeOrder() { return true; }
async function prepareFood() { return true; }
async function assignRider() { return true; }

async function foodDelivery() {
  try {
    await placeOrder();
    await prepareFood();
    const delivered = await assignRider();
    console.log(delivered);
  } catch (error) {
    console.log("Failed");
  }
}
foodDelivery();

// Q34 
// Create train ticket booking flow. 

async function checkAvailability() { return true; }
async function bookBerth() { return true; }
async function payFare() { return true; }

async function bookTrainTicket() {
  try {
    await checkAvailability();
    await bookBerth();
    const ticket = await payFare();
    console.log(ticket);
  } catch (error) {
    console.log("Failed");
  }
}
bookTrainTicket();

// Q35 
// Create college admission flow.

async function submitApplication() { return true; }
async function verifyDocuments() { return true; }
async function payFees() { return true; }

async function collegeAdmission() {
  try {
    await submitApplication();
    await verifyDocuments();
    const admitted = await payFees();
    console.log(admitted);
  } catch (error) {
    console.log("Failed");
  }
}
collegeAdmission();


// Q36 
// Fetch: 
// Users 
// Products 
// Orders 
// Together using Promise.all. 

async function getUsers() { return ["User1", "User2"]; }
async function getProducts() { return ["Prod1", "Prod2"]; }
async function getOrders() { return ["Order1"]; }

async function fetchAllData() {
  try {
    const [users, products, orders] = await Promise.all([
      getUsers(),
      getProducts(),
      getOrders()
    ]);
    console.log(users, products, orders);
  } catch (error) {
    console.log("Failed");
  }
}
fetchAllData();

// Q37 
// Create 5 APIs with delays. 
// Execute parallel. 

const delay = (ms, val) => new Promise(r => setTimeout(() => r(val), ms));

async function runParallelAPIs() {
  try {
    const results = await Promise.all([
      delay(500, "API 1"),
      delay(1000, "API 2"),
      delay(300, "API 3"),
      delay(1200, "API 4"),
      delay(200, "API 5")
    ]);
    console.log(results);
  } catch (error) {
    console.log("Failed");
  }
}
runParallelAPIs();

// Q38 
// Build dashboard loader. 
// Load: 
// User 
// Orders 
// Products 
// Notifications 
// Together. 

async function getUser() { return "Profile"; }
async function getOrders() { return "Orders"; }
async function getProducts() { return "Products"; }
async function getNotifications() { return "Notifications"; }

async function loadDashboard() {
  try {
    const dashboardData = await Promise.all([
      getUser(),
      getOrders(),
      getProducts(),
      getNotifications()
    ]);
    console.log(dashboardData);
  } catch (error) {
    console.log("Failed");
  }
}
loadDashboard();

// Q39 
// Create image gallery loader using Promise.all. 

async function loadImage(url) { return `Loaded: ${url}`; }

async function loadGallery() {
  try {
    const images = await Promise.all([
      loadImage("img1.png"),
      loadImage("img2.png"),
      loadImage("img3.png")
    ]);
    console.log(images);
  } catch (error) {
    console.log("Failed");
  }
}
loadGallery();

// Q40 
// Create multiple file downloader using Promise.all.

async function downloadFile(fileName) { return `${fileName} downloaded`; }

async function downloadAllFiles() {
  try {
    const downloadedFiles = await Promise.all([
      downloadFile("file1.pdf"),
      downloadFile("file2.zip"),
      downloadFile("file3.jpg")
    ]);
    console.log(downloadedFiles);
  } catch (error) {
    console.log("Failed");
  }
}
downloadAllFiles();



// Q41 
// Create: 
// 3 APIs Success 
// 2 APIs Fail 
// Show all results. 

async function api1() { return "Success 1"; }
async function api2() { return "Success 2"; }
async function api3() { return "Success 3"; }
async function api4() { throw new Error("Fail 1"); }
async function api5() { throw new Error("Fail 2"); }

async function runAPIs() {
  const results = await Promise.allSettled([api1(), api2(), api3(), api4(), api5()]);
  console.log(results);
}
runAPIs();

// Q42 
// Build admin dashboard using allSettled. 

async function getStats() { return "Stats"; }
async function getUsers() { return "Users"; }
async function getLogs() { throw new Error("Logs Offline"); }

async function loadDashboard() {
  const data = await Promise.allSettled([getStats(), getUsers(), getLogs()]);
  console.log(data);
}
loadDashboard();

// Q43 
// Build batch file uploader. 
// Some uploads fail. 

async function uploadFile(file, shouldFail) {
  if (shouldFail) throw new Error(`Failed: ${file}`);
  return `Uploaded: ${file}`;
}

async function uploadBatch() {
  const results = await Promise.allSettled([
    uploadFile("doc.pdf", false),
    uploadFile("img.png", true),
    uploadFile("vid.mp4", false)
  ]);
  console.log(results);
}
uploadBatch();

// Q44 
// Build student result processor. 
// Some students fail.

async function processStudent(name, score) {
  if (score < 40) throw new Error(`${name} failed exam`);
  return `${name} passed`;
}

async function runProcessor() {
  const results = await Promise.allSettled([
    processStudent("Alice", 85),
    processStudent("Bob", 30),
    processStudent("Charlie", 72)
  ]);
  console.log(results);
}
runProcessor();


// Q45 
// Create 3 servers. 
// Return fastest response using race. 

const serverA = () => new Promise(r => setTimeout(() => r("Server A"), 500));
const serverB = () => new Promise(r => setTimeout(() => r("Server B"), 100));
const serverC = () => new Promise(r => setTimeout(() => r("Server C"), 300));

async function getFastest() {
  const winner = await Promise.race([serverA(), serverB(), serverC()]);
  console.log(winner); // Outputs: "Server B"
}
getFastest();

// Q46 
// Create: 
// Server1 Fail 
// Server2 Fail 
// Server3 Success 
// Return first success using any. 

const s1 = () => Promise.reject("Fail 1");
const s2 = () => Promise.reject("Fail 2");
const s3 = () => new Promise(r => setTimeout(() => r("Success 3"), 100));

async function getFirstSuccess() {
  try {
    const firstSuccessful = await Promise.any([s1(), s2(), s3()]);
    console.log(firstSuccessful); // Outputs: "Success 3"
  } catch (error) {
    console.log("All failed");
  }
}
getFirstSuccess();

// Q47 
// Build API timeout mechanism using race. 


const apiCall = () => new Promise(r => setTimeout(() => r("Data fetched"), 2000));
const timeout = () => new Promise((_, reject) => setTimeout(() => reject("Timeout!"), 1000));

async function fetchWithTimeout() {
  try {
    const result = await Promise.race([apiCall(), timeout()]);
    console.log(result);
  } catch (error) {
    console.log(error); 
  }
}
fetchWithTimeout();

// Q48 
// Create async generator. 
// Yield: 
// Ram 
// Shyam 
// Mohan 
// Consume using: 
// for await...of 


async function* getNames() {
  yield "Ram";
  yield "Satvik";
  yield "Mohan";
}

async function run() {
  for await (const name of getNames()) {
    console.log(name);
  }
}
run();

// Q49 
// Build Async Notes Manager 
// Features: 
// Add Note 
// Delete Note 
// Update Note 
// Fetch Notes 
// All methods async.

class NotesManager {
  notes = [];

  async add(note) {
    this.notes.push(note);
  }

  async delete(note) {
    this.notes = this.notes.filter(n => n !== note);
  }

  async update(oldNote, newNote) {
    await this.delete(oldNote);
    await this.add(newNote);
  }

  async fetch() {
    return this.notes;
  }
}

async function run() {
  const manager = new NotesManager();
  
  await manager.add("Buy Milk");
  await manager.add("Call Bob");
  await manager.update("Buy Milk", "Buy Fresh Milk");
  await manager.delete("Call Bob");

  const result = await manager.fetch();
  console.log(result); 
}
run();


// 50 Build Complete E-Commerce Async Flow 
// Flow: 
// Login 
// ↓ 
// Get User 
// ↓ 
// Get Products 
// ↓ 
// Get Cart 
// ↓ 
// Apply Coupon 
// ↓ 
// Calculate Total 
// ↓ 
// Payment 
// ↓ 
// Generate Invoice 
// ↓ 
// Send Email 
// ↓ 
// Track Order 
// ↓ 
// Delivery



async function login() {}
async function getUser() {}
async function getProducts() {}
async function getCart() {}
async function applyCoupon() {}
async function calculateTotal() {}
async function processPayment() {}
async function generateInvoice() {}
async function sendEmail() {}
async function trackOrder() {}
async function deliverOrder() {}


async function runEcommerceFlow() {
  try {
    await login();
    await getUser();
    await getProducts();
    await getCart();
    await applyCoupon();
    await calculateTotal();
    await processPayment();
    await generateInvoice();
    await sendEmail();
    await trackOrder();
    await deliverOrder();
    console.log("Success");
  } catch (error) {
    console.log("Failed");
  }
}

runEcommerceFlow();

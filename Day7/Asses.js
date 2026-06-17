// IQ1 INTERVIEW OUTPUT ROUND (BONUS)


// Promise.resolve("A") .then(console.log); console.log("B"); 
//B
//a


// IQ2 console.log("A"); Promise.resolve() .then(()=>{ console.log("B"); }); console.log("C");
// A
// C
// B



// IQ3 Promise.resolve(10) .then(num=>num*2) .then(num=>num+5) .then(console.log); 
//25



// IQ4 Promise.reject("Error") .catch(console.log); 
//error



// IQ5 Promise.resolve() .then(()=>{ throw new Error("Boom"); }) .catch(err=>console.log(err.message)); 
//boom



// IQ6 Promise.resolve() .then(()=>{ return Promise.resolve(100); }) .then(console.log); 
//100



// IQ7 Promise.resolve() .then(()=>{ console.log("A"); }) .then(()=>{ console.log("B"); }); 
//a
//b



// IQ8 Promise.all([ Promise.resolve(1), Promise.resolve(2), Promise.resolve(3) ]) .then(console.log); 
//[1,2,3]



// IQ9 Promise.all([ Promise.resolve(1), Promise.reject("Failed"), Promise.resolve(3) ]) .catch(console.log); 
//failed



// IQ10 Predict complete output: console.log("Start"); Promise.resolve() .then(()=>{ console.log("A"); return Promise.resolve("B"); }) .then(console.log); console.log("End"); 
// Start
// End
// A
// B






// Q1 Create your own Promise that resolves after 2 seconds with: Hello World
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

promise1.then(data => console.log(data));


//  Q2 Create a Promise that rejects after 3 seconds with: Server Down 
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server Down");
    }, 3000);
});

promise2.catch(err => console.log(err));


// Q3 Create a Promise that randomly resolves or rejects. 
const promise3 = new Promise((resolve, reject) => {
    const random = Math.random();

    if (random > 0.5) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

promise3
    .then(data => console.log(data))
    .catch(err => console.log(err));


// Q4 Create a Promise that checks age. age >= 18 resolve otherwise reject. 
function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not Eligible");
        }
    });
}

checkAge(20)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


// Q5 Create a Promise that validates password length. 
function validatePassword(password) {
    return new Promise((resolve, reject) => {
        if (password.length >= 8) {
            resolve("Valid Password");
        } else {
            reject("Password must be at least 8 characters");
        }
    });
}

validatePassword("abcd1234")
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


// Q6 Create a Promise that validates email. 
function validateEmail(email) {
    return new Promise((resolve, reject) => {
        if (email.includes("@")) {
            resolve("Valid Email");
        } else {
            reject("Invalid Email");
        }
    });
}

validateEmail("test@gmail.com")
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


// Q7 Create a Promise that simulates bank withdrawal. 
function withdraw(balance, amount) {
    return new Promise((resolve, reject) => {
        if (balance >= amount) {
            resolve(`Withdrawal Successful. Remaining Balance: ${balance - amount}`);
        } else {
            reject("Insufficient Balance");
        }
    });
}

withdraw(5000, 2000)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


// Q8 Create a Promise that simulates ATM transaction. 
function atmTransaction(pin) {
    return new Promise((resolve, reject) => {
        const correctPin = 1234;

        if (pin === correctPin) {
            resolve("Transaction Successful");
        } else {
            reject("Invalid PIN");
        }
    });
}

atmTransaction(1234)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


// Q9 Create a Promise that resolves with user object. 
const promise9 = new Promise((resolve) => {
    const user = {
        id: 1,
        name: "Satvik",
        age: 20
    };

    resolve(user);
});

promise9.then(user => console.log(user));


// Q10 Create a Promise that rejects with custom error object. 
const promise10 = new Promise((resolve, reject) => {
    reject({
        code: 500,
        message: "Internal Server Error"
    });
});

promise10.catch(err => {
    console.log("Error Code:", err.code);
    console.log("Message:", err.message);
});


// Q11 Start with: Promise.resolve(10) Convert: 10 ↓ 20 ↓ 40 ↓ 80 Using chaining.
Promise.resolve(10)
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => console.log(num));


//  Q12 Create a chain that converts: Ram ↓ RAM ↓ RAM MOHAN ↓ RAM MOHAN DIXIT 
Promise.resolve("Ram")
    .then(name => {
        console.log(name);
        return name.toUpperCase();
    })
    .then(name => {
        console.log(name);
        return name + " MOHAN";
    })
    .then(name => {
        console.log(name);
        return name + " DIXIT";
    })
    .then(name => console.log(name));


// Q13 Create a chain that processes product price. 1000 ↓ Add GST ↓ Apply Discount ↓ Final Price 

Promise.resolve(1000)
    .then(price => {
        console.log("Original Price:", price);
        return price + price * 0.18; // GST 18%
    })
    .then(price => {
        console.log("After GST:", price);
        return price - price * 0.10; // Discount 10%
    })
    .then(price => {
        console.log("Final Price:", price);
    });


// Q14 Create a chain for: Login ↓ Get User ↓ Get Orders ↓ Get Payment 
Promise.resolve("Login Successful")
    .then(msg => {
        console.log(msg);
        return "User Data";
    })
    .then(user => {
        console.log("Fetched:", user);
        return "Orders Data";
    })
    .then(orders => {
        console.log("Fetched:", orders);
        return "Payment Data";
    })
    .then(payment => {
        console.log("Fetched:", payment);
    });


// Q15 Create a chain for movie booking flow. 
Promise.resolve("Select Movie")
    .then(step => {
        console.log(step);
        return "Select Seats";
    })
    .then(step => {
        console.log(step);
        return "Make Payment";
    })
    .then(step => {
        console.log(step);
        return "Ticket Confirmed";
    })
    .then(step => console.log(step));


// Q16 Create a chain for food ordering flow. 
Promise.resolve("Order Placed")
    .then(step => {
        console.log(step);
        return "Food Cooking";
    })
    .then(step => {
        console.log(step);
        return "Food Packed";
    })
    .then(step => {
        console.log(step);
        return "Out for Delivery";
    })
    .then(step => {
        console.log(step);
        return "Delivered";
    })
    .then(step => console.log(step));


// Q17 Create a chain for college admission flow. 
Promise.resolve("Fill Form")
    .then(step => {
        console.log(step);
        return "Document Verification";
    })
    .then(step => {
        console.log(step);
        return "Fee Payment";
    })
    .then(step => {
        console.log(step);
        return "Admission Confirmed";
    })
    .then(step => console.log(step));


// Q18 Create a chain for train ticket booking flow. 
Promise.resolve("Search Train")
    .then(step => {
        console.log(step);
        return "Select Seat";
    })
    .then(step => {
        console.log(step);
        return "Payment";
    })
    .then(step => {
        console.log(step);
        return "Ticket Booked";
    })
    .then(step => console.log(step));


// Q19 Create a chain where each step waits 1 second. 
function delay(message) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, 1000);
    });
}

delay("Step 1")
    .then(() => delay("Step 2"))
    .then(() => delay("Step 3"))
    .then(() => delay("Step 4"));


// Q20 Create a chain of 10 .then() calls. 
Promise.resolve(1)
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => {
        console.log(num);
        return num + 1;
    })
    .then(num => console.log("Final:", num));


// Q21 Throw error inside first .then(). Handle in catch. 
Promise.resolve("Start")
    .then(data => {
        console.log(data);
        throw new Error("Something went wrong!");
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log("Caught Error:", err.message);
    });


// Q22 Throw error inside third .then(). Observe skipped thens. 
Promise.resolve(1)
    .then(num => {
        console.log("Step 1:", num);
        return num + 1;
    })
    .then(num => {
        console.log("Step 2:", num);
        return num + 1;
    })
    .then(num => {
        console.log("Step 3:", num);
        throw new Error("Error at Step 3");
    })
    .then(num => {
        console.log("Step 4:", num); 
    })
    .then(num => {
        console.log("Step 5:", num);
    })
    .catch(err => {
        console.log("Caught:", err.message);
    });


// Q23 Create chain: Step1 ↓ Step2 ↓ Error ↓ Catch 
Promise.resolve()
    .then(() => {
        console.log("Step 1");
    })
    .then(() => {
        console.log("Step 2");
        throw new Error("Something Failed");
    })
    .then(() => {
        console.log("Step 3"); 
    })
    .catch(err => {
        console.log("Catch:", err.message);
    });


// Q24 Recover from error inside catch and continue chain. 
Promise.resolve()
    .then(() => {
        console.log("Step 1");
        throw new Error("Network Error");
    })
    .catch(err => {
        console.log("Caught:", err.message);

        return "Default Data";
    })
    .then(data => {
        console.log("Continued with:", data);
    });

    
// Q25 Create multiple catches and observe which one executes. 
Promise.resolve()
    .then(() => {
        console.log("Step 1");
        throw new Error("First Error");
    })
    .catch(err => {
        console.log("Catch 1:", err.message);
    })
    .catch(err => {
        console.log("Catch 2:", err.message);
    })
    .catch(err => {
        console.log("Catch 3:", err.message);
    });


// Q26 Convert callback based greeting function into Promise. 
// Callback Version
function greet(name, callback) {
    setTimeout(() => {
        callback(`Hello ${name}`);
    }, 1000);
}

greet("satvik", (msg) => {
    console.log(msg);
});

// Promise Version
function greet(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello ${name}`);
        }, 1000);
    });
}

greet("Satvik")
    .then(msg => console.log(msg));


// Q27 Convert callback based calculator into Promise. 
// Callback Version
function add(a, b, callback) {
    callback(a + b);
}

add(10, 20, (result) => {
    console.log(result);
});

// Promise Version
function add(a, b) {
    return new Promise((resolve) => {
        resolve(a + b);
    });
}

add(10, 20)
    .then(result => console.log(result));


// Q28 Convert callback based login into Promise. 
// Callback Version
function login(username, password, callback) {
    if (username === "admin" && password === "1234") {
        callback("Login Successful");
    } else {
        callback("Login Failed");
    }
}

login("admin", "1234", (msg) => {
    console.log(msg);
});

// Promise Version
function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === "admin" && password === "1234") {
            resolve("Login Successful");
        } else {
            reject("Invalid Credentials");
        }
    });
}

login("admin", "1234")
    .then(msg => console.log(msg))
    .catch(err => console.log(err));


// Q29 Convert callback based file download simulation into Promise. 
// Callback Version
function downloadFile(callback) {
    setTimeout(() => {
        callback("File Downloaded");
    }, 2000);
}

downloadFile((msg) => {
    console.log(msg);
});

// Promise Version
function downloadFile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("File Downloaded");
        }, 2000);
    });
}

downloadFile()
    .then(msg => console.log(msg));


// Q30 Convert callback based weather API simulation into Promise. 
// Callback Version
function getWeather(city, callback) {
    setTimeout(() => {
        callback(`Weather of ${city}: 35°C`);
    }, 1500);
}

getWeather("Delhi", (data) => {
    console.log(data);
});

// Promise Version
function getWeather(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (city) {
                resolve(`Weather of ${city}: 35°C`);
            } else {
                reject("City not found");
            }
        }, 1500);
    });
}

getWeather("Delhi")
    .then(data => console.log(data))
    .catch(err => console.log(err));



// Q31 Fetch: User Orders Products using Promise.all. 
const getUser = Promise.resolve("User Data");
const getOrders = Promise.resolve("Orders Data");
const getProducts = Promise.resolve("Products Data");

Promise.all([getUser, getOrders, getProducts])
    .then(results => {
        console.log("User:", results[0]);
        console.log("Orders:", results[1]);
        console.log("Products:", results[2]);
    })
    .catch(err => console.log(err));


// Q32 Create 5 promises with different delays. Run using Promise.all. 
const p1 = new Promise(resolve =>
    setTimeout(() => resolve("Task 1"), 1000)
);

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Task 2"), 2000)
);

const p3 = new Promise(resolve =>
    setTimeout(() => resolve("Task 3"), 3000)
);

const p4 = new Promise(resolve =>
    setTimeout(() => resolve("Task 4"), 4000)
);

const p5 = new Promise(resolve =>
    setTimeout(() => resolve("Task 5"), 5000)
);

Promise.all([p1, p2, p3, p4, p5])
    .then(results => {
        console.log(results);
    });


// Q33 Make one Promise reject. Observe Promise.all behavior. 
const p1 = Promise.resolve("Task 1");
const p2 = Promise.resolve("Task 2");
const p3 = Promise.reject("Task 3 Failed");
const p4 = Promise.resolve("Task 4");

Promise.all([p1, p2, p3, p4])
    .then(results => {
        console.log(results);
    })
    .catch(err => {
        console.log("Error:", err);
    });


// Q34 Create dashboard loader using Promise.all. 
const profile = new Promise(resolve =>
    setTimeout(() => resolve("Profile Loaded"), 1000)
);

const notifications = new Promise(resolve =>
    setTimeout(() => resolve("Notifications Loaded"), 2000)
);

const messages = new Promise(resolve =>
    setTimeout(() => resolve("Messages Loaded"), 1500)
);

const settings = new Promise(resolve =>
    setTimeout(() => resolve("Settings Loaded"), 1000)
);

Promise.all([
    profile,
    notifications,
    messages,
    settings
])
.then(data => {
    console.log("Dashboard Ready");
    console.log(data);
});


// Q35 Build parallel file downloader using Promise.all. 
function downloadFile(fileName, time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${fileName} Downloaded`);
        }, time);
    });
}

const file1 = downloadFile("file1.pdf", 2000);
const file2 = downloadFile("file2.jpg", 3000);
const file3 = downloadFile("file3.zip", 1000);

Promise.all([file1, file2, file3])
    .then(files => {
        console.log("All Downloads Complete");
        console.log(files);
    })
    .catch(err => console.log(err));




// Q36 Create: 3 Success 2 Fail Return all results. 
const p1 = Promise.resolve("Success 1");
const p2 = Promise.resolve("Success 2");
const p3 = Promise.resolve("Success 3");

const p4 = Promise.reject("Failed 1");
const p5 = Promise.reject("Failed 2");

Promise.allSettled([p1, p2, p3, p4, p5])
    .then(results => {
        console.log(results);
    });


// Q37 Create admin dashboard loader. Some APIs fail. Still show remaining data. 
const users = Promise.resolve("Users Data");

const reports = Promise.reject("Reports API Failed");

const sales = Promise.resolve("Sales Data");

const notifications = Promise.reject("Notifications API Failed");

Promise.allSettled([
    users,
    reports,
    sales,
    notifications
])
.then(results => {

    results.forEach((result, index) => {

        if (result.status === "fulfilled") {
            console.log(`API ${index + 1}:`, result.value);
        } else {
            console.log(`API ${index + 1}:`, result.reason);
        }

    });

});


// Q38 Build batch upload simulator using Promise.allSettled. 
function uploadFile(fileName, shouldSucceed) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (shouldSucceed) {
                resolve(`${fileName} Uploaded`);
            } else {
                reject(`${fileName} Upload Failed`);
            }

        }, 2000);

    });

}

const file1 = uploadFile("resume.pdf", true);
const file2 = uploadFile("photo.jpg", false);
const file3 = uploadFile("project.zip", true);
const file4 = uploadFile("video.mp4", false);

Promise.allSettled([
    file1,
    file2,
    file3,
    file4
])
.then(results => {

    results.forEach(result => {

        if (result.status === "fulfilled") {
            console.log(result.value);
        } else {
            console.log(result.reason);
        }

    });

});



// Q39-A Create: Server1 → 5 sec Server2 → 2 sec Server3 → 1 sec Return fastest response using race. 
const server1 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server 1 Response");
    }, 5000);
});

const server2 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server 2 Response");
    }, 2000);
});

const server3 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server 3 Response");
    }, 1000);
});

Promise.race([
    server1,
    server2,
    server3
])
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
});


// Q39-B Create: Server1 → Reject Server2 → Reject Server3 → Resolve Return first success using any. 
const server1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server 1 Failed");
    }, 1000);
});

const server2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server 2 Failed");
    }, 2000);
});

const server3 = new Promise(resolve => {
    setTimeout(() => {
        resolve("Server 3 Success");
    }, 3000);
});

Promise.any([
    server1,
    server2,
    server3
])
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
});







// Q1 
// Ek student object banao jisme: 
// ● name 
// ● age 
// ● city 
// Store ho. 

const student = {
  name: "Ram",
  age: 20,
  city: "Delhi"
};

// Q2 
// Upar wale object ka name print karo. 

console.log(student.name);

// Q3 
// Object me greet() method add karo jo print kare: 
// Hello I am Ram 

student.greet = function() {
  console.log(`Hello I am ${this.name}`);
};
student.greet(); 

// Q4 
// Object me isAdult() method banao jo age check kare. 

student.isAdult = function() {
  return this.age >= 18;
};
console.log(student.isAdult()); 

// Q5 
// Object ki sabhi keys print karo. 

console.log(Object.keys(student));

// Q6 
// Object ki sabhi values print karo. 

console.log(Object.values(student));

// Q7 
// Check karo ki object me email property hai ya nahi. 

console.log("email" in student);
// Q8 
// Object me dynamically property add karo. 
// student.course = "MERN"; 

student.course = "MERN";
console.log(student.course);

// Q9 
// Object se age property delete karo. 

delete student.age;
console.log(student.age); // Output: undefined


// Q10 
// Ek object ka clone banao.

const studentClone = { ...student }; 

// Q11 
// Ek object banao jisme showName() method ho aur this.name print kare. 

const user = {
  name: "Rahul",
  showName() {
    console.log(this.name);
  }
};
user.showName();

// Q12 
// Ek object me: 
// name = "Ram" 
// store karo aur method se uppercase print karo. 

const person = {
  name: "Ram",
  printUpper() {
    console.log(this.name.toUpperCase());
  }
};
person.printUpper();

// Q13 
// Object me do methods banao: 
// deposit() 
// withdraw() 
// Aur balance update karo. 

const account = {
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    console.log(this.balance);
  },
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(this.balance);
    }
  }
};
account.deposit(500);
account.withdraw(300);

// Q14 
// Predict Output 
// const user = { 
// name:"Ram", 
// show(){ 
// console.log(this.name); 
// } 
// }; 
// user.show(); 
// Answer= Ram

// Q15 
// Predict Output 
// const user = { 
// name:"Ram", 
// show: () => { 
// console.log(this.name); 
// } 
// }; 
// user.show();

// Answer= Undefined

// Q16 
// Student constructor function banao. 
// Parameters: 
// name 
// age 

function StudentFunc(name, age) {
  this.name = name;
  this.age = age;
}

// Q17 
// 3 student objects create karo constructor se. 

const studentA1 = new StudentFunc("Satvik", 20);
const studentA2 = new StudentFunc("ram", 22);
const studentA3 = new StudentFunc("Aman", 21);

// Q18 
// Constructor function me greet() method add karo. 
function StudentFunc(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello I am ${this.name}`);
  };
}

// Q19 
// Predict Output 
// function User(name){ 
// this.name=name; 
// } 
// const u1=new User("Ram"); 
// console.log(u1.name); 

// Answer == Ram


// Q20 
// Car constructor function banao. 
// Properties: 
// brand 
// price

function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}

// Q21 
// Student constructor banao aur prototype me greet() method add karo. 

function StudentFunc(name, age) {
  this.name = name;
  this.age = age;
}
StudentFunc.prototype.greet = function() {
  console.log(`Hello I am ${this.name}`);
};

// Q22 
// Check karo: 
// obj.__proto__ === Student.prototype 

const obj = new StudentFunc("Ram", 20);
console.log(obj.__proto__ === StudentFunc.prototype);

// Q23 
// Prototype me isAdult() method add karo. 

StudentFunc.prototype.isAdult = function() {
  return this.age >= 18;
};

// Q24 
// Predict Output 
// function User(){} 
// User.prototype.sayHi=function(){ 
// console.log("Hi"); 
// } 
// const u1=new User(); 
// u1.sayHi(); 

// Answer == Hi


// Q25 
// Prototype me course property add karo. 

StudentFunc.prototype.course = "MERN";

// Q26 
// Check karo: 
// u1.hasOwnProperty("course") 
// Output kya hoga? 

// Output == false


// Q27 
// Check karo: 
// "course" in u1 
// Output kya hoga? 

// Output == true


// Q28 
// Prototype chain draw karo: 
// const arr=[]

// Answer ==  arr -> Array.prototype -> Object.prototype -> null

// Q29 
// Animal object banao. 
// Method: 
// eat() 

const animal = {
  eat() {
    console.log("Eating");
  }
};

// Q30 
// Animal se dog object create karo using: 
// Object.create() 

const dog = Object.create(animal);

// Q31 
// Dog me bark() method add karo. 

dog.bark = function() {
  console.log("Woof woof");
};

// Q32 
// Predict Output 
// const animal={ 
// eat(){ 
// console.log("Eating"); 
// } 
// }; 
// const dog=Object.create(animal); 
// dog.eat();

// Answer== Eating

// Q33 
// Student class banao. 
// Properties: 
// name 
// age 

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello I am ${this.name}`);
  }
  isAdult() {
    return this.age >= 18;
  }
}

// Q36 
// 3 objects create karo class se.

const student1 = new Student("Satvik", 20);
const student2 = new Student("Ram", 17);
const student3 = new Student("Aman", 22);

// Q37 
// Animal class banao. 
// Method: 
// eat() 

class Animal {
  eat() {
    console.log("Eating");
  }
}

// Q38 
// Dog class banao jo Animal ko inherit kare. 


// Q39 
// Dog class me bark() method add karo. 

class Dog extends Animal {
  bark() {
    console.log("Bark brk");
  }
}

// Q40 
// Create: 
// const d = new Dog(); 
// Call: 
// d.eat(); 
// d.bark(); 
// Expected Output explain karo.

const d = new Dog();
d.eat();
d.bark();

// Output == 
// Eating 
// Bark brk
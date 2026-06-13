# **Full stack Web Development** 



### DAY 1





* before es6 - only one variable - var 
* after es6 - three types of variable - let, var , const 



Problems with var -

&#x20;  -> Redeclaration allowed 

&#x20;    var =6

&#x20;     var a=30

&#x20;     console.log(a)

1. functional scope
2. loop related problem

&#x20;  



let -> introduced in es6



\-> redeclaration not allowed 

\->   block scope 

\-> loop problem solved 





const -> 

\-> reassignment is not allowed 

\-> in case of objects with const it's allowed 





\-> we cannot access variables of datatypes let and const because they are in **temporal dead zone** 



###### Template Literals

\-> without concatenation of string you can use its value in any line if u want to use

\-> it is introduced in es6

\-> used for multi line string







Default Parameter \&rest /spread operator





REST OPERATOR USECASE IN PROJECTS

\-> function  total(...prices){
}



\-> function mergeusers(...users){

}







##### codes



// const product = [

//   { id : 1 , name : "Mobile" , price : 15000 } ,

//   { id : 2 , name : "Pen" , price : 150 } ,

//   { id : 3 , name : "bottle" , price : 1500 } ,

//   { id : 4 , name : "Laptop" , price : 55000 } ,

//   { id : 5 , name : "Tv" , price : 25000 } ,

// ];



// const red = () => {

&#x20; 

//   return product.reduce((total, item) => total + item.price, 0);

// };



// console.log(red()); 





// const name = "Satvik Rathee" 



// console.log(`hello my name is ${name}`)



//  a=8

//  b=5

// console.log(` Addition of a and b is ${a+b}`)



// array destructuring



// const arr= \[10,20,30,40];



// const\[a,b,c,d]=arr;

// console.log(d)







// object destructuring



// const user={

//     name:'Satvik',

//     age:19

// }

// const {name,age}=user

// const{

//     name:userName

// }=user;

// console.log(userName)



// Default Parameter \& rest/ spread operator



// function greet(name="Guest"){

//     console.log(name);

&#x20;   

// }



// greet();







// Spread operator and rest operator

// rest operator





// function addvalue(...nums){

//     console.log(nums);

// }

// console.log(addvalue(1,2,3,4,5,6,7));





// spread operator



const arr = \[1,2,3,4];

cont arr2=\[...arr]










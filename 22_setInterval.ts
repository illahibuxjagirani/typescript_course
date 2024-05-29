// setInterval
//built-in function in TypeScript/JavaScript

//executes repeatedly after a interval (miliseconds)

//useful for tasks that need to be performed continuously,

// syntax
// setInterval(callback, delay, [arg1, arg2, ...]);

// callback ==> The function to execute repeatedly.

// delay ===> wait between each call to the callback function

// [arg1, arg2, ...] ==> Additional arguments to pass to the callback function (optional).

// setInterval(callback, delay, [arg1, arg2, ...]);

console.log("Welcome to IB Coding School");

// function hello(){
//     console.log(`Hello World!`)
// }
// hello(); // i want to print hello world  after 1 second
// 3 times we will cover it latter

// setInterval(()=>{
//     console.log(`Hello World!`)
// }, 2000);

// Example-1

// let myFun2 = ()=>{
//     console.log("Hello World!")
// }
// let myInterval = setInterval(myFun2, 2000);

// setTimeout(()=>{
//     clearInterval(myInterval)
// }, 7000)

// how to stop this

// clearInterval(myInterval)

// but i want to stop it after 3 seconds
// as we have already learnt settimout

// Example 2: Passing Arguments to the Callback Function

let myFun3 = (myName: string, age: number) => {
  console.log(`Hello! I am ${myName} and my age is ${age}`);
};

setInterval(myFun3, 2000, "illahibux", 18);

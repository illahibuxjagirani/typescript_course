"use strict";
// setTimeout
//built-in function in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
//executes once after a delay
//used to schedule the execution of a function after a specified delay in milliseconds.
//useful for tasks that need to be executed once after a delay
// syntax
// setTimeout(callback, delay, [arg1, arg2, ...]);
// callback ==> function to be excuted after a delay
// delay ===> The time in milliseconds to wait before executing the callback
// [arg1, arg2, ...] ==> Additional arguments to pass to the callback function (optional)
// console.log(`This is Line No.1`) // first this line will print
// setTimeout(function printLine(){
//     console.log(`This is Line No.2`) // but if i want to print this line after 3 seconds
// }, 5000);
// console.log(`This is Line No.3`) // third this line
// Example-1
// console.log("This is line No.1");
// let mySetTimeout = setTimeout(()=>{
//     console.log('This is inside setTimeout! after 3 seconds')
// }, 3000)
// clearTimeout(mySetTimeout)
// if you want to stop setTimeout how you can do it
// Example-2 Passing Arguments to the Callback Function
// let myFun = (name: string, age: number) => {
//   console.log(`My name is ${name}, my age is ${age}`);
// };
// let mySet = setTimeout(myFun, 3000, "illahibux", 18);
// // if i want to stop timeout
// clearTimeout(mySet);

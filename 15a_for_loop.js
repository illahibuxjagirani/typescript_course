"use strict";
// what is loop
Object.defineProperty(exports, "__esModule", { value: true });
// A loop repeats a block of code multiple times until a specified condition is met. loops iterate over collections of data, such as arrays or objects.
// kisi bi block of code ko bar bar repeat karna jab tak certain condition full fill na ho
// for loop
// The for loop repeats a block of code a specified number of times.
// 3 steps
// initialization (delaration of variable),
// let i = 4; 
// a condition (true/false)
// i < 10      // true
// increment/decrement (i++/i--)
// i++
// let i = 4;
// i < 10;
// i++
// syntax
// for(let i = 4; i < 10; i++){
//     console.log("IB Coding School");
// }
// Example-1 Printing numbers from 1 to 10
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// for(let num = 0; num <= 4; num++){
//     console.log(num);   // 1, 2
// num++ => 2
// num++ => 3
// and so on
// }
// how this works
// Example-2 Printing  table of 4
// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12
// 4 x 4 = 16
// 4 x 5 = 20
// 4 x 6 = 24
// 4 x 7 = 28
// 4 x 8 = 32
// 4 x 9 = 36
// 4 x 10 = 40
// console.log('10 Table')
// for(let i = 1; i <= 10; i++){
//     console.log(`${i} x 4 = ${i * 10}`);
// }
// you can make any table
// Example-3 Printing an Array elements
// let myArray: string [] = [ "ayaz", "tariq", "manzoor"];
//                     //      0              1      2       3
// console.log(myArray);
// console.log(myArray.length) // 5
// for(let i = 0; i < myArray.length; i++){
//     console.log(myArray[i]);
// }
// how to get rid of manual numbering

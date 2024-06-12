"use strict";
// rest parameter
Object.defineProperty(exports, "__esModule", { value: true });
// a rest parameter in functions allows you to represent an indefinite number of arguments as an array.
//It's useful when you're not sure how many arguments will be passed to a function
// Note:
// A function can only have one rest parameter.
// The rest parameter must be the last parameter in the function's parameter list.
//It denoted by three dots (...) followed by a name
// Example-1 printing numbers
// function myNumbers(name: string, ...nums: number[]){
//   return `${name} => ${nums}`
// }
// console.log(myNumbers("myString", 25, 20, 30, 40, 50));
// Example-2 Seprate  elements from array
// function seprateArray(seperator: string, ...myArry: string []){
//     return myArry.join(seperator);
// }
// console.log(seprateArray(" ", "Apple", "Mango", "Orange"))
// let myArray = ["one", "two", "three"];
// console.log(myArray)
// console.log(myArray.join(" "));
// Example-3 Finding maximun number
// function findMaximumNumber(...numbersArray: number []){
//   return Math.max(...numbersArray);
// }
// console.log(findMaximumNumber(13, 40, 1, 20, 3));
// let myArray = [13, 30, 20, 3];
// console.log(myArray);
// console.log(...myArray);

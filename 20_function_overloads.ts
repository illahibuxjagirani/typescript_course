
import { myName } from './13_modules/myVariables';
// Function overloading/overloads

// It is a feature that lets you define a function with multiple variations of parameters data types and return types

// It allows the function to behave differently based on the arguments it receives.

// function myFun(a: string,b: number): string{
//     return a + b
// }
// console.log(myFun(5, "Ali")); 
// to solve this problem we use function overloading:




// Example
function myFun(a: string, b: number): string;
function myFun(a: number, b: string): string;
function myFun(a: number, b: number): number;
function myFun(a: number, b: boolean): number;
// function myFun(a: number, b: number, c: string): string;

function myFun(a, b, c?){
    return a + b + c
}
console.log(myFun(2, "Ali"));
console.log(myFun("Ali", 1));
console.log(myFun(10, true));
// console.log(myFun(10, 1, "Ahmed"));







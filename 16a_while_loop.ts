

// while loop
// executing a block of code until certain codition becomes false












// Syntax
while(false){
    console.log("hello World");
}







// Example-1 Counting from 1 to 10

// let myNum = 0;

// while(myNum <= 5){
//     console.log(myNum);
//     myNum++
// }












// Example-2 sum of all numbers

// let totalNum = 50

// let sum = 0;
// let initialNum = 1;
// while(initialNum <= totalNum){
//     sum += initialNum;
//     initialNum++
// }

// console.log(sum);
// 1 + 2 + 3 + 4 + 5 = 14









// Example-3 find Factorial of a number
// factorial of 5 is 1 * 2 * 3 * 4 * 5 =
let totalNum = 20
let factorial = 1;
let initialNum = 1;
while(initialNum <= totalNum){
    factorial *= initialNum;
    initialNum++
}

console.log(factorial);
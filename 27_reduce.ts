
// reduce
// The reduce() method in TypeScript (and JavaScript) is used to process each element of an array and accumulate a single output value


// It iterates over each element 
// provide a callback function, which accumulates a result into a final value.

// Note: It's useful when you want a single value from multiple elements in an array, such as 
// summing up all elements, 
// finding the maximum value, etc

// reduce() takes 2 arguments
// 1. callback function// required
// 2. initail value // optional if not provided will take from array's first element



// The callback function  takes four arguments:
//1. accumulator: The accumulated value, which changes after each iteration.// required

//2. currentValue: The current element being processed in the array. // required

//3. index (optional): The index of the current element being processed.// optional 

//4. array (optional): The array reduce() was called upon // optional


//syntax
// let myArray = [];
// let result = myArray.reduce((accumulator, currentValue, index, array) => {
//     //code here
//   }, initialValue);
  

// before reduce we used loops
// e.g add all numbers in an array with loop

let myNumbers: number [] = [1, 2, 3, 4, 5, 6];
// let sum: number = 0;
// for(let nums of myNumbers){
//     sum += nums
// }
// console.log(sum);

// same with reduce()

let result = myNumbers.reduce((accumulator, currentValue )=>{
    return accumulator + currentValue
}, 10);// if i remove 0

console.log(result);

// now how it works
// accumulator = 1 + 2 = 3
// accumulator = 3 + 3 = 6
// accumulator = 6 + 4 = 10 and so on

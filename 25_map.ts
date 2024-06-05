

// map() method:

// a built-in function that operates on arrays in TypeScript.


//It iterates through each element in an array, 
//provide callback function, and returns a new array






// The callback function  takes three arguments:
//1. currentElement: The current element of an array. // required

//2. index (optional): The index of the current element in array.

//3. array (optional): The original array being mapped over.


// Note: map() create new array orginal array remains unchanged


// before map we were using loops for iterating arrays
// e.g
// let myArry: string [] = ["Ali", "Ahmed", "illahibux"];

// for(let my of myArry){
//     console.log(my);
// }




// syntax
// same thing with map()
// let myArry: string [] = ["Ali", "Ahmed", "illahibux"];

// how we create function

// let myFun = ()=>{
    
// }

// myArry.map((current)=>{
//     console.log(current)
// })







// Example-1 multiplying numbers with 10

// let myNumbers: number [] = [2, 4, 5, 10, 15, 17, 20];
// let myNumbers: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myNumbers.map((num)=>{
//     console.log(`${num} x 10 = ${num * 10}`)
// })








// Example-2 extracting names from an objects in the array

let myArrayObject: {name: string, age: number}[] = [
    {name: 'illahibux', age: 18},
    {name: 'Ali', age: 29},
    {name: 'Ahmed', age: 30},
    {name: 'Nasir', age: 20}
]
// console.log(myArrayObject)

myArrayObject.map((items)=>{
    console.log(`Person name is ${items.name} and his/her age is ${items.age}`)
})
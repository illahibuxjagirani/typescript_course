// filter() method in TypeScript
// create a new array containing only elements from the original array that pass a test/condition.
// How it Works:
// filter() iterates through each element in the original array.
// It require a callback function
// callback function takes 3 parameters
//1. currentElement: The current element of an array. // required
//2. index (optional): The index of the current element in array.
//3. array (optional): The original array being mapped over.
//It should return true if the element satisfies the filtering condition/test, and false otherwise.
//filter() creates a new array and includes only the elements for which the callback function returned true. if no any element pass the test/condition an empty array is returned
// syntax
// let myNumbers: number [] = [2, 5, 10, 20, 15, 23, 30];
// const numsGreaterThan10 = myNumbers.filter((nums)=>{
//     return nums > 15  // true/false
// });
// console.log(numsGreaterThan10);
// Example-1 we want to print names if their length is greater than 5;
// let myNames: string [] = ["Ali", "Ahmed", "illahibux", "Shayan", "Ayaz"];
// const namesNew = myNames.filter((name)=> {
//     return name.length < 5
// });
// console.log(namesNew);
// Example-2 print the user whose age is greater than 20;
var myUsers = [
    { name: 'illahibux', age: 25 },
    { name: 'Ali', age: 40 },
    { name: 'Madad', age: 20 },
    { name: 'Ayaz', age: 30 },
    { name: 'Manzoor', age: 9 },
];
// we can add more condition
var ageGreater20 = myUsers.filter(function (user) {
    return user.age > 20 && user.name.length > 5;
});
console.log(ageGreater20);

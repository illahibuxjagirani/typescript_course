"use strict";
// for in loop
// The "for-in" loop in TypeScript is used to iterate over the properties of an object
Object.defineProperty(exports, "__esModule", { value: true });
// let myObject = {};
// // syntax
// for(let key in myObject){
//     console.log(key)
// }
// Example-1 Printing all keys from an Object
let personDetails = {
    name: "Ali",
    age: 20,
    country: "Pakistan",
    isLoggedIn: true,
    intrests: ["Swimming", "Reading", "Writing"]
};
let serialNum = 1;
for (let keys in personDetails) {
    console.log(`${serialNum}. ${keys}`);
    serialNum++;
}
// Example-2 Printing all keys and Values from an Object
// let personDetails = {
//     name: "Ali",
//     age: 20,
//     country: "Pakistan",
//     isLoggedIn: true,
//     intrests: ["Swimming", "Reading", "Writing"]
// }
// for(let keys in personDetails){
//     // console.log(keys);
//     // console.log(personDetails[keys]);
//     console.log(`${keys} : ${personDetails[keys]}`);
// }

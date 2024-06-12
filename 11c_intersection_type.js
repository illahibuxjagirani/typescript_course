"use strict";
// intersection types
//  combining existing types to create a new type, a type that has all the features of the types you combine.
Object.defineProperty(exports, "__esModule", { value: true });
// The `&` operator is used to create an intersection type.
// interface Person {
//   name: string,
//   age: number
// }
// interface Status {
//   isloggedIn: boolean,
//   address: string
// }
// to solve this issue we use intersection type
// type personStatus = Person & Status;
// let personInfo: personStatus = {
//   name: "Ali",
//   isloggedIn: true,
//   age: 18,
//   address: "karachi"
// }

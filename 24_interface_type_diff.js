"use strict";
// type and interface differnece
Object.defineProperty(exports, "__esModule", { value: true });
// type and interface are used to define custom types of data types like object, arrays union types, tuple etc.
//1. syntax difference
// interface StudentType {
//     name: string
// }
// type StudentType1 = {
//     name: string
// }
// let myObj: StudentType = {
//     name: "Ali"
// }
// let myObj1: StudentType1 = {
//     name: "Ahmed"
// }
// console.log(myObj, myObj1)
//2. auto merges when defined with same name:
// interface StudentType {
//     name: string
// }
// interface StudentType {
//     age: number
// }
// interface StudentType {
//     rollN: number
// }
// type StudentType1 = {
//     name: string
// }
// type StudentType1 = {
//     age: 18
// }
// let myObj: StudentType = {
//     name: "Ali",
//     age: 18,
//     rollN: 12344
// }
// let myObj1: StudentType1 = {
//     name: "Ahmed"
// }
// console.log(myObj)
// 3. merging with extends keyword and intersection types (&)
// extends keyword
// interface StudentType {
//     name: string
// }
// interface NewStudentType extends StudentType {
//     age: number
// }
// type StudentType1 = { // can not do this
//     name: string
// }
// type NewStudentType1 extends StudentType1 = {
// }
// intersection type
// interface StudentType {
//     name: string
// }
// interface StudentType0 {
//     age: number
// }
// interface newStudentType = StudentType & StudentType0
// if i want to merge them with &
// type StudentType1 = {
//     name: string
// }
// type StudentType2 = {
//     age: number
// }
// type newStudentType = StudentType1 & StudentType2 
// intersection can be used in type
// let myObj: newStudentType = {
//     name: "Ali",
//     age: 18
// }
// console.log(myObj)
// 4. Usage;
// interface typically used to define shape of an object
// type can be used for object types, union types, primitive types, typles, etc.
// type myType = string | number // union type
// interface myType1 = string | number // can not use
// type myTupleType = [string, number]
// interface myTupleType1 = [string, number]
// summary
// Declaration Merging:
// Interface: Interfaces can be merged when declared with same name.
// Type: Types cannot be merged. Each type name must be unique.
// Extending:
// Interface: Interfaces can extend other interfaces or types.
// Type: cannot use the extends can be merged using intersection types (&)
// Usage:
// Interface: Typically used to define the shape of an object.
// Type: Can be used for object shapes, but also for other types such as union types, primitive types, tuples, etc.

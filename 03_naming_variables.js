"use strict";
// Rules for Naming Variables in TypeScript:
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Characters:
// Allowed: 
// i. Letters (a-z, A-Z), 
// let myname: string = "illahibux";
// let MYNAME: string = "Ali";
// let MyNamE: string = "Hussain";
// ii. digits (0-9), 
// let Myname1: string = "illahibux";
// let my134Name: string = "Ali";
// let my14Name14: string = "Hussain";   // can not do this
// iii. underscore (_),
// let my_name: string = "illahibux";
// let my_14name: string = "illahibux";
// let myname_: string = "illahibux";
// let _myName: string = "illahibux";
// iv. dollar sign ($).
// let my$name: string = "illahibux";
// let myname$: string = "illahibux";
// let $myname: string = "illahibux";      // not recommended
// Not allowed: 
// Spaces or other special characters (except _ and $).
// let my name: string = "illahibux";      // not allowed
// let  myname : string = "illahibux"; 
// let myname: string = "illahibux";       //special characters are not allowed
// 2. Starting character:
// must be a letter or an underscore (_) or $ (not recommended). 
// It cannot be a digit.
// 3. Case sensitivity:
// Variable names are case-sensitive. 
// For example, age, Age, and AGE are considered different variables.
// let myName: string = "Ali";
// let myname: string = "Umar";
// let MYNAME: string = "Hussain"
// // all three are different
// 4. Descriptive names:
// Use clear names that reflect the variable's purpose.
// Avoid using single-letter.
// let a: number = 234;            //not recommended
// let myNumber: number = 234;     // this is okay
// let ArrayOfString: string [] = ["Ali", "Ahmed"]
// 5. Naming conventions: (Recommended)
// Use CamelCase
//  e.g. customerName, isLoggedIn
// let customerName: string = "Ayaz";  // always recommended
// let customer_Name: string = "Ayaz";
// 6. Keywords:
// Avoid using reserved keywords as variable names. 
//  (e.g., let, const, function, Array, Object)
// let const: string = "illahibux";        //reserved keyword
// let function: string = "Ali";
// let Array: [] = [23];
// let Object: {} = {name: "illahibux"}

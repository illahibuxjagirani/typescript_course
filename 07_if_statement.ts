/*

If Statements

allow your TypeScript code to make decisions based on conditions. depending on whether a certain condition is true or false.






Here's the basic syntax:

if (condition) {
  code to execute if the condition is true
} else {
  code to execute if the condition is false (optional)
}
*/

// let myCondition = true;
// let myCondition = false;
// let num1: number = 5;
// let myName: string = "illahibux";

// if(myName === "illahibux1"){
//   console.log("Hello World!");

// }else{
//   console.log("Welcome to IB Coding School");
// }









// Else if for Multiple Conditions

// If you have more than two conditions, you can chain `else if` statements:
// let num1: number = 1;


// if(num1 === 5){
//   console.log(`num1 is equal to 5`);

// }else if(num1 > 5){
//   console.log(`num1 is greater than 5`)

// }else if(num1 < 5){
//   console.log(`num1 is less than 5`);
// }






// Nesting if-else Statements

let person: string = "Young";
let personAge: number = 60;

if(person === "Young"){

  if(personAge === 30){
    console.log(`person is 30 year old`)
  }else if(personAge < 30){
    console.log(`person age is less than 30`);
  }else{
    console.log(`person age is above 30`);
  }

}else{
  console.log(`Person is not young`)
}

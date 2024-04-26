/*
Switch Statements:
 a way to execute different blocks of code based on the value of an expression.
 work as if else statements




Syntax:

switch (expression) {
  case value1:
    // Code to execute if expression equals value1
    break;

  case value2:
    // Code to execute if expression equals value2
    break;

  // ... more cases

  default:
    // Code to execute if none of the cases match
}

*/


// 1. Example

// let grade: string = "illahibux";

// switch (grade) {
//   case  "A":
//     console.log(`You got A grade`);
//     break;
  
//   case "B":
//     console.log(`You got B grade`);
//     break;
  
//   case "C":
//     console.log(`You got C grade`);
//     break;
  
//   case "F":
//     console.log(`You are fail`);
//     break;

//   default:
//     console.log(`Invalid grade`);
// }









// 2. Example

let dayOfWeek: number = 4;
let dayToday: string;       // only dayToday defined not given a value

switch (dayOfWeek) {
  case 1:
    dayToday = "Monday";
    break;

  case 2:
    dayToday = "Tuesday";
    break;

  case 3:
    dayToday = "Wednesday";
    break;

  case 4:
    dayToday = "Thursday";
    break;

  case 5:
    dayToday = "Friday";
    break;

  case 6:
    dayToday = "Saturaday";
    break;

  case 7:
    dayToday = "Sunday";
    break;

  default:
    dayToday = "Invalid Day";

}

console.log(`Today is ${dayToday}`);
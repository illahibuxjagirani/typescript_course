
// Default Parameters in TypeScript

// Default parameters allow you to assign a default value to a function parameter. This value is used if the caller doesn't explicitly provide an argument for that parameter during the function call










// syntax
// function greet(name: string, greeting: string = "Hello"): string {
//     return `${greeting}, ${name}!`;
//   }
//   console.log(greet("Ali"));
//   console.log(greet("Ali", "Hello Everyone"));









// Example-1 student & School
function studentDetails(name: string ="Anybody", schoolName = "Government School"){
    return `My name is ${name} and I study in ${schoolName}`;
}
// console.log(studentDetails("Ali"));
// console.log(studentDetails("Ahmed", "Allied Public School"));
// console.log(studentDetails());
  
 
  










// Example-2 Multiply 2 numbers
// function twoNumbers(num1: number, num2 = 40){
//     return num1 * num2
// }
// console.log(twoNumbers(23));
// console.log(twoNumbers(23, 2));
// console.log(twoNumbers(3, 2));











// Example-3 Person and City
function personDetails(name: string, city: string = "Karachi"){
    return `My name is ${name} and I live in ${city}`;
}
console.log(personDetails("Ali"));
console.log(personDetails("Ahmed", "Larkana"));
  
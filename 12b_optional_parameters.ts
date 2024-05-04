// optional parameters
// optional parameters allow you to define function parameters that may or may not be provided when calling the function.

// function myFun(num1: number, num2: number, num3?: number) {
//   if(num3){
//     return num1 + num2 + num3;
//   }
//   return num1 + num2;
// }
// console.log(myFun(23, 90));



// function myStringFun(name: string, country?: string){
//   if(country){
//     return `My name is ${name} and my Country is ${country}`
//   }
//   return `My name is ${name}`
// }
// console.log(myStringFun("Ali", "Pakistan"));


// function abc (name?: string, country: string){
//   if(country){
//     return name + country
//   }
//   return name
// }
// console.log(abc("Ali"));

function abc (name?: string, country: string){
  if(country){
    return name + country
  }
  return name
}
console.log(abc("Ali", "Pakistan"));
// function myFun (name: string, country: string = " Pakistan"){
//     return name + country
//   }
//   console.log(myFun("Ali", " Palestine"));
// function myFun (num1: number, num2: string){console.log(num1 + num2)}
//   myFun(23, "7",);
//     function myFun (num1: number, num2: string = "20"){console.log(num1 + num2)}
//  myFun(23, "7");
function myFun(num1, num2, num3) {
    if (num3 === void 0) { num3 = 7; }
    console.log(num1 + num2);
    return num3 + num1;
}
console.log(myFun(2, 4));

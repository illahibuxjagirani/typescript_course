
// Function
// Functions are reusable blocks of code that perform specific tasks.






// Reusable: 
// designed to be used multiple times


// Blocks of Code
// self-contained units of code { }



// Perform Specific Tasks:
// like calculating a value, manipulating data, interacting with the user, or performing some operation


// console.log("Welcome to IB Coding School"); // multiple lines of code
// console.log("Welcome to IB Coding School");

function myParagarph(){
console.log("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusamus, consectetur dolorem tempore aut vel itaque, cum voluptatum similique iure quasi fugit recusandae omnis amet quos dolore a et dignissimos unde voluptatibus earum vero sunt? Veritatis omnis sapiente doloribus fugit, in, modi, aut quaerat placeat maiores natus molestiae laboriosam hic!")
}
// myParagarph();  // calling a function




// how to declare and call a function

// 3 ways to declare a function

// 1. using function keyword

    // function addNumbers(num1: number): number{  
    //     return num1;     // return type will number
    // };
    // console.log(addNumbers(15)); 







// parameters and arguments in function




// 2. Assigning a variable
// let addNumbers = function (num1: number): number{  
//     return num1;     // return type will number
// };
// console.log(addNumbers(15)); 


// 3. Arrow function

// let addName = (myName: number): number => {
//     return myName;
// }
// console.log(addName(123));


// function myFun(num1){
// return num1;
// }
// myFun(23);

// let myFun1 = function(num2){
// return num2
// }
// console.log(myFun1)

// let myfun3 = (num3) =>{
//     return num3
// }
// myfun3(35);



// void type
// void is a return type used in function declarations to indicate that the function does not return a value.

// function myVoidFun(){
//     console.log("IB Coding School");
//     // return is not used here
//     // return "IB Coding School"
// }
// myVoidFun();

// myParagarph();
// myParagarph();
// myParagarph();





//  Optional Parameters:
// Optional parameters can be omitted when calling the function using "?"

// function addNumbers(num1: number, num2: number, num3?: number){
//     if(num3){
//         return num1 + num2 + num3;
//     }else{
//         return num1 + num2;
//     }
// }
// console.log(addNumbers(13, 24));
// console.log(addNumbers(13, 24, 500));







//  Default Parameters:
// Default parameters allow you to initialize a parameter with a default value if no argument is provided for that parameter.
function addNumbers(num1: number, num2: number, num3: number = 786){
        return num1 + num2 + num3; 
}
console.log(addNumbers(3, 4));
console.log(addNumbers(3, 4, 5));






// Rest Parameters:
function myRestParFun(name, ...num: (string | number | boolean)[]){
    return name + num
}
console.log(myRestParFun("IB Coding ", 786, 59, 590, 20, 20, 10, "illahibux", true));
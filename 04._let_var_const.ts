
/* 1. var:
    can be redeclared and reassigned.

    function-scoped or globally scoped.
    Not recommended for use in modern TypeScript
*/

// var myName: string = "illahibux";   // myName declared
// var myName: string = "Ayaz";        // myName redeclared
// myName = "Madad";                   // reassigned



function myFun(){
    const myName: string  = "Ali";
    // let myName: string = "illahibux";

    if(true){
        const myName: string = "illahibux";
        console.log(myName);
    }

    console.log(myName);
}

myFun();








/*
2. let:
   can be reassigned but cannot be redeclared.
   `let` declarations are block-scoped.
*/

// let myName: string = "illahibux";   // myName declared
// let myName: string = "Ayaz";        // myName  can not be redeclared
// myName = "Madad";                   // can be reassigned
   









/*
3. const:
    cannot be  redeclared and reassigned.
   `const` declarations are block-scoped, similar to `let`.
   
*/
// const myNum: number = 786;      // declared
// // const myNum: number = 893;      // can not redclared
// myNum = 590;                // can not be reassigned








   
/*
Recommendations
good practice to use `const` by default and only use `let` when you need to reassign a variable.

const
let

Avoid using `var`

*/

// if(true) {
//     let myName: string = "illahibux";
// };
// console.log(myName);

let myNumber: number = 786;
myNumber = 900;
console.log(myNumber);
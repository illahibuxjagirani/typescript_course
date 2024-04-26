

// Data types in Typescript

// 1. string (textual data in single, double quotes or backticks)

// let myName: string = "illahibux";   // double quotes
// let myName2: string = 'Ali';         // single quote
// let myName3: string = `Ayaz`;       // backtick
// let myName4: string = `786`;       // backtick








// 2. Number (numberic values)
// let myNumber: number = 230;
// let myNumber2: number = .5;












// 3. Boolean (logical value either true or false);

// let IsMyAgeAbove18: boolean = true;
// let IsMyAgeAbove90: boolean = false;








// 4. null (explicity indicate no value)
// let myEmpty: null = null;










// 5. undefined (haven't been assigned yet a value)

// let myValue: undefined = undefined;










// 6. unknown (it bypasses type check)
// let myNameNew: unknown = "illahibux";
// myNameNew = 23;
// myNameNew = true;









// 7. any (it also bypasses type check not recommended to use any)
// let myNameNew: any = "illahibux";
// myNameNew = 23;
// myNameNew = true;








// 8. void (absence of return value from a function)

// function myFunction(): void{
//    return value is required
//    console.log("Hello World")
// }
// myFunction();








// array (collection of items)

// let myArray: (string | number | boolean) [] = ["Ali", true, 786 , "Ayaz"];









// tuple (a fixed array)
// let myTuple:  [string, boolean, number] = ["Ali", true, 786];


let myData:  [string, boolean, number] = ["illahibux", true, 786];
console.log(myData);




// objects (collection of key value pairs)

// let myObject: {} = {
//    name: "Ali",      // key value pair
// key   value
//    age:  18,
//    isLoggedIn: true
// }

let myNum: any = 10;
myNum = "Hello";
console.log(myNum);



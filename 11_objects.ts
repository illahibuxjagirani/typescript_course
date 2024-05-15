
// What are Objects?
// collections of key-value pairs
// key === > string
// value === > any data types





//1. Declaring Objects
// object can be declared using curly braces { };

// let personDetails = {
//     name : "illahibux",
//     country: "Pakistan",
//     isLoggedIn: true,
//     RollNo:     22345
// };      // typescript infered type of an object

// console.log(personDetails);

// let personDetails = {
//     "name" : "illahibux",
//     "country": "Pakistan",
//     "isLoggedIn": true,
//     "RollNo":     22345
// };      // typescript infered type of an object

// console.log(personDetails);


// defining type of an object

// type PersonDetails = {
//     name: string,
//     country: string,
//     isLoggedIn: boolean,
//     RollNo: number,
// } // little bit advance concept

// let personDetails: PersonDetails  = {
//     name : "illahibux",
//     country: "Pakistan",
//     isLoggedIn: true,
//     RollNo:     22345,  
// };     

// console.log(personDetails);







// 2. Accessing Object Properties

// using dot notation
// let personDetails = {
//     name : "illahibux",
//     country: "Pakistan",
//     isLoggedIn: true,
//     RollNo:     22345,  
// };     

// console.log(personDetails.RollNo, personDetails.name);




// using bracket notation []
// let personDetails = {
//     name: "illahibux",
//     country: "Pakistan",
//     isLoggedIn: true,
//     RollNo:     22345,  
// };     

// console.log(personDetails["country"], personDetails["RollNo"]);


// 3. Adding properties
// type PersonDetails = {
//     name: string,
//     country: string,
//     isLoggedIn: boolean,
//     RollNo: number,
//     gender?: string // optional property
// }
// let personDetails: PersonDetails = {
//     name: "illahibux",
//     country: "Pakistan",
//     isLoggedIn: true,
//     RollNo:     22345,
// };     
// console.log(personDetails);

// personDetails.gender = "Male";
// console.log(personDetails);






// 4. Modifying properties
let personDetails = {
    name: "illahibux",
    country: "Pakistan",
    isLoggedIn: true,
    RollNo:     22345,
};     
console.log(personDetails);

personDetails.name = "Ali";
personDetails["RollNo"] = 786;
console.log(personDetails);

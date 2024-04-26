/*
Array:
Arrays are collections of elements that can hold various data types
*/





// Two ways to declare array

// 1. Using square brackets
// let fruits: string [] = ['Apple', 'Orange', 'Banana'];

// let myFriends: string [];       // array declared
// myFriends = ["Madad", "Fayaz", "Ayaz", "Tariq"];    // array value assigned

// let myFriends: (string | number) [] = ["Madad", 13,  "Ayaz", "Fayaz", "Tariq"];
//                     // index   0         1       2        3

// console.log(myFriends);

// let myFriendsMarks: (number | string) [] = ["Madad", 13, 15, 17, 20];
// console.log(myFriendsMarks);







//2. Using the generic
// let numbers: Array<number> = [1, 2, 3];
// let myFriends: Array <string | number> = ["Madad", 13, "Ayaz", "Fayaz", "Tariq"];

// console.log(myFriends);

// let myFriendsMarks: Array <number | boolean | string> = [ true, 13, 15, 17, 20, "illahibux"];
// console.log(myFriendsMarks);






// Type Inference
// let myFriends = ["Madad", 13,  "Ayaz", "Fayaz", "Tariq"]; // typescript inferred data types
// myFriends = ["illahibux"]







// Accessing Array Elements:
// let myFriends = ["Madad",  "Ayaz", "Fayaz", "Tariq"]; 
        // index   0         1        2          3       

// if i want to print only Ayaz from above array?

// let newElement: string = myFriends[1];
// let newElement2: string = myFriends[0];
// console.log(newElement);
// console.log(newElement2);
// console.log(myFriends[0], myFriends[1], myFriends[2], myFriends[3]);






// Common Array Methods

// 1. length (number of elements in the array)
// let myArray: (string  | number) [] = ["Karachi", "Larkana", "Sukkur", 13, 18, 20, 25, 30, 50, 3, 5, 9];
// console.log(myArray); // as we have 4 elements in array, how to find ?
// console.log(myArray.length); // one number higher from last index as we have 3 last index so length will be 4







// 2. push() (add an element to the end of the array)

// let myArray: (string | number) [] = ["Karachi", "Larkana", "Sukkur"];
// console.log(myArray);

// myArray.push("Hyderabad");
// myArray.push(786);
// console.log(myArray);









// 3. pop()    ==> Removes and returns the last element from the array
// let myArray: string  [] = ["Karachi", "Larkana", "Sukkur", "Lahore", "Islamabad"];
// console.log(myArray);

// let removedElement = myArray.pop();
// console.log(myArray);
// console.log(removedElement);    // will return remvoed element







// 4. unshfit() ==> add an element at the beginging of the array
// let myArray: string  [] = ["Karachi", "Larkana", "Sukkur", "Lahore", "Islamabad"];
// console.log(myArray);

// myArray.unshift("Jamshoro");
// console.log(myArray);

// let myArray12: number [ ] = [10, 15, 20, 25];
// console.log(myArray12.unshift("Quetta" ))


let myArray21: number  [ ] = [1, 5, 2, 2];
console.log(myArray21.push(7 ));


// 5. shift()  ==> Removes and return the first element from the array
// let myArray: string  [] = ["Karachi", "Larkana", "Sukkur", "Lahore", "Islamabad"];
// console.log(myArray);

// let removedFirstElement = myArray.shift();
// console.log(myArray);
// console.log(removedFirstElement);

let myArray2: string  [ ] = ["Karachi", "Larkana", "Sukkur"];
console.log(myArray2.shift("Quetta" ))




// 6. concat()  ==> Merges two arrays and return a new array
// let myArray: string  [] = ["Karachi", "Larkana", "Sukkur", "Lahore", "Islamabad"];

// let myArray2: string [] = ["Madad", "illahibux", "Fayaz", "Ayaz"];

// let mergedArrays = myArray.concat(myArray2);
// console.log(mergedArrays);







// 7. slice(start, end) ==> Extract a section of the array and returns a new array
// let myArray: string  [] = ["Karachi", "Larkana", "Sukkur", "Lahore", "Islamabad"];
// console.log(myArray);

// let sectionExtracted = myArray.slice(1, 2);
// console.log(myArray); // does not change original array
// console.log(sectionExtracted);






// 8. splice(start, deleteCount, item1, ..., itemN)
// Modifies the original array by removing existing elements and/or adding new elements at a specified index.

// let myArray: string  [] = ["Karachi", "Larkana", "Sukkur", "Lahore", "Islamabad"];
// console.log(myArray);

// myArray.splice(1, 4, "Ratodero", "Dadu");
// console.log(myArray); // modified the orginal array








// 9. indexOf(element) ==> Returns the first index at which a given element can be found, or -1 if not found.

// let myArray: string  [] = ["Karachi", "Larkana", "Sukkur", "Lahore", "Islamabad"];
// console.log(myArray.indexOf("Islamabad"));
// console.log(myArray.indexOf("karachi")); // case sensetive




  
// 10. join(separator)   ==> joins all array elements into a string, separted by the specified separator

let myArray: string  [] = ["Karachi", "Larkana", "Sukkur", "Lahore", "Islamabad"];
console.log(myArray);

// console.log(myArray.join(", "));
console.log(myArray.join("\n")); // for new line




/*
Operators:
operators are symbols or keywords used to perform operations on data.

*/
// Type of Operator in TypeScript


//Arithmetic Operators:

//1. + Addition (numbers or string concatenation)

// number addition
// let num1: number = 38;
// let num2: number = 50;
// let sumOfNumbers: number = num1 + num2;
// console.log(sumOfNumbers);





// string concatenation
// let myName: string = "illahibux";
// let myName2: string = "Ali";
// let myName3: string = "Hussain";
// let addTwoString: string = myName2 + " " + myName3;
// console.log(addTwoString);









// 2. - Subtraction

// let num1: number = 50;
// let num2: number = 23;
// let results: number = num1 - num2;
// console.log(results);









// 3. * Multiplication
// let num1: number = 30;
// let num2: number = 3;
// let results: number = num1 * num2;
// console.log(results);








// 4.  / Division
// let num1: number = 30;
// let num2: number = 2;
// let results: number = num1 / num2;
// console.log(results);








// 5. % Module (remainder after division)

// let num1: number = 50;
// let num2: number = 3;
// let result: number = num1 % num2;
// console.log(result);






// 6. ++ Increment (adds 1 to a variable);
// let num1: number = 43;
// console.log(num1);
// num1++;
// num1++;
// console.log(num1);







// 7. -- Decrement (subtracts 1 from a variable)

// let num1: number = 43;
// console.log(num1);
// num1--;
// num1--;
// console.log(num1);






// Assignment Operators:

// = Assignment

// let myName = "illahibux"; // here = is used as assignment operator
  






// `+=`, `-=`, `*=`, `/=` Compound assignment (performs operation and assigns result)

// let num1: number = 50;
// console.log(num1);

// num1 += 40;
// console.log(num1);

// num1 -= 40;
// console.log(num1);


// num1 *= 40;
// console.log(num1);

// num1 /= 40;
// console.log(num1);







// Comparison Operators:

//1.  == Equal to (loose comparison, not recommended for strict comparisons);

// let num1: number = 30;
// let num2: string = "30";
// console.log(num1 == num2); // ignore for time being
// // check only values





//2. === Strictly equal to (checks type and value)
// let num1: number = 30;
// let num2: number = 30;
// console.log(num1 === num2); // ignore for time being
// // check type and  values both







// 3. !=  Not equal to (loose comparison)
// let num1: number = 30;
// let num2: string = "30";
// console.log(num1 != num2); // ignore for time being

// // check values only




// 4. !== Strictly not equal to (checks type and value)(recommended for strict comparisons)
// let num1: number = 30;
// let num2: number = 30;
// console.log(num1 !== num2); // ignore for time being

// check type and values both
 





// 5. `<` less than
// let num1: number = 35;
// let num2: number = 50;
// console.log(num1 < num2);






// 6. `>` greater than
// let num1: number = 35;
// let num2: number = 50;
// console.log(num1 > num2);








// 7. `<=` less than or equal to
// let num1: number = 35;
// let num2: number = 35;
// console.log(num1 <= num2);








// 8. `>=` greater than or equal to
// let num1: number = 35;
// let num2: number = 35;
// console.log(num1 >= num2);









// Logical Operators:

// 1. `&&`  And (both sides must be true for the expression to be true)
// let num1: number = 35;
// let num2: number = 35;
// let num3: number = 4;
// let num4: number = 3;

// console.log(num1 === num2 && num3 === num4); // always == or ===

  






// // 2. `||` Or (at least one side must be true for the expression to be true)
// let num1: number = 35;
// let num2: number = 35;
// let num3: number = 4;
// let num4: number = 3;

// console.log(num1 === num2 || num3 === num4); // always == or ===

  
console.log(45 >= "45");






// 3. `!` Not (inverts the truth value)

let num1: number = 50;
let num2: number = 5;
console.log(num1 !== num2); // not equal to

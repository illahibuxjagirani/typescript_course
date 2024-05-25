// Inquirer:
// Inquirer is the library of Node.js for creating interactive CLI (command-line interface)
// it takes differents types of inputs from user;

// how to install it

// import  inquirer  from 'inquirer';

// const myQuestions = await inquirer.prompt([
//     {
//         type: "input",
//         name: "userName",
//         message: "What is your Name?"
//     },
//     {
//         type: "input",
//         name: "country",
//         message: "What is your country name?"
//     }

// ]);
// console.log(myQuestions.userName, myQuestions.country);
















// Basic Types of inquirer prompt

//2. number ==> Prompts the user to enter a number
// const myQuestions = await inquirer.prompt([
//     {
//         type: "number",
//         name: "userAge",
//         message: "What is your Age?"
//     }
// ]);
// console.log(myQuestions.userAge);







// 3. confirm ==> presents a yes/no question
// const myQuestions = await inquirer.prompt([
//     {
//         type: "confirm",
//         name: "wantFood",
//         message: "Do you want to buy Food?"
//         // default: false
//     }
// ]);
// console.log(myQuestions);




// 4. list ==> displays a list of options for the user to choose from
// const myQuestions = await inquirer.prompt([
//     {
//         type: "list",
//         name: "fruits",
//         message: "Select fruits do you want to eat!",
//         choices: ["Apple", "Mango", "Banana", "Grapes"]
//     }
// ]);
// console.log(myQuestions.fruits);








// 5. checkbox ==> allows the user to select multiple options from a list
// const myQuestions = await inquirer.prompt([
//     {
//         type: "checkbox",
//         name: "fruits",
//         message: "Select fruits do you want to eat!",
//         choices: ["Apple", "Mango", "Banana", "Grapes"]
//     }
// ]);
// console.log(myQuestions.fruits);









// 6. password: prompts the user to enter a password with hidden characters.
const myQuestions = await inquirer.prompt([
    {
        type: "password",
        name: "yourPassword",
        message: "Enter your password",
    }
]);
console.log(myQuestions);
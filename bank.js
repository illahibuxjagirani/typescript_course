"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the Customer class
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    constructor(firstName, lastName, gender, age, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobileNumber;
    }
    // Method to display full details of the customer
    getDetails() {
        return `
        Customer Details:
        Name: ${this.firstName} ${this.lastName}
        Gender: ${this.gender}
        Age: ${this.age}
        Mobile Number: ${this.mobileNumber}
      `;
    }
}
// Implement the BankAccount class
class BankAccount {
    balance;
    customer;
    constructor(customer, initialBalance = 0) {
        this.customer = customer;
        this.balance = initialBalance;
    }
    debit(amount) {
        if (amount <= 0)
            return 'Amount must be greater than zero';
        if (this.balance < amount)
            return 'Insufficient balance';
        this.balance -= amount;
        return `Debited ${amount}. New balance is ${this.balance}`;
    }
    credit(amount) {
        if (amount <= 0)
            return 'Amount must be greater than zero';
        this.balance += amount;
        return `Credited ${amount}. New balance is ${this.balance}`;
    }
    checkBalance() {
        return this.balance;
    }
}
// Helper function to read user input from stdin
function readInput(prompt) {
    return new Promise((resolve) => {
        process.stdout.write(prompt);
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
}
// Main menu function
async function mainMenu() {
    console.log(`
      Welcome to Simple Bank CLI
      1. Check Balance
      2. Credit Account
      3. Debit Account
      4. View Customer Details
      5. Exit
    `);
    const option = await readInput('Choose an option: ');
    switch (option) {
        case '1':
            console.log(`Your balance is: ${account.checkBalance()}`);
            break;
        case '2':
            const creditAmount = await readInput('Enter amount to credit: ');
            console.log(account.credit(parseFloat(creditAmount)));
            break;
        case '3':
            const debitAmount = await readInput('Enter amount to debit: ');
            console.log(account.debit(parseFloat(debitAmount)));
            break;
        case '4':
            console.log(customer.getDetails());
            break;
        case '5':
            console.log('Goodbye!');
            process.exit(0);
        default:
            console.log('Invalid option, please try again.');
    }
    mainMenu();
}
// Create a customer and account for the CLI application
const customer = new Customer('John', 'Doe', 'Male', 30, '123-456-7890');
const account = new BankAccount(customer, 1000); // initial balance of 1000
// Start the application
mainMenu();

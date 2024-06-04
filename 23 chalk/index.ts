import chalk from 'chalk'

let myString: string = "Welcome to IB Coding School";
// console.log(myString)

//notes


// 1. text color
// console.log('Text Colors')

// console.log("Black", chalk.black(myString));

// console.log("Red", chalk.red(myString));
// // console.log(chalk.red("Hello World"))

// console.log("Green", chalk.green(myString));

// console.log("Yellow", chalk.yellow(myString));

// console.log("Blue", chalk.blue(myString));

// console.log("Magenta", chalk.magenta(myString));

// console.log("Cyan", chalk.cyan(myString));

// console.log("White", chalk.white(myString));




// 2. background color
// console.log('Background Colors')

// console.log("Black", chalk.bgBlack(myString));

// console.log("Red", chalk.bgRed(myString));

// console.log("Green", chalk.bgGreen(myString));

// console.log("Yellow", chalk.bgYellow(myString));

// console.log("Blue", chalk.bgBlue(myString));

// console.log("Magenta", chalk.bgMagenta(myString));

// console.log("Cyan", chalk.bgCyan(myString));

// console.log("White", chalk.bgWhite(myString));






// 3. Text Styles:
// console.log('Text Styles')
// console.log("Bold:", chalk.bold(myString))
// console.log("Dim:", chalk.dim(myString))
// console.log("Italic:", chalk.italic(myString))
// console.log("Underline:", chalk.underline(myString))
// console.log("Strikethrough:", chalk.strikethrough(myString))







// 4. Nesting Styles
// You can combine multiple styles by nesting them:
console.log(chalk.blue.bgRed.italic.strikethrough(myString));




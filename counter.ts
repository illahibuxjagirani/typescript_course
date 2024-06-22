import * as readline from "readline";

const readlineObj = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Milliseconds in a Second: 1 second = 1000 milliseconds
// Seconds in a Minute: 1 minute = 60 seconds
// Minutes in an Hour: 1 hour = 60 minutes
// Hours in a Day: 1 day = 24 hours
// Days in a Year: 1 year = 365.25 days (to account for leap years on average

function startCountdown(seconds: number) {
  const endTime = Date.now() + seconds * 1000; // Jan 1 1970

  const timer = setInterval(() => {
    const now = Date.now();
    const remainingTime = endTime - now;

    if (remainingTime <= 0) {
      clearInterval(timer);
      console.log("\nTime up!\n");
      console.log("Thank you for using Counter App\n")
      readlineObj.close();
    } else {
      process.stdout.write(
        `\rTime remaining: ${Math.floor(remainingTime / 1000)} seconds`
      );
    }
  }, 1000);
}

readlineObj.question("Enter countdown duration in seconds: ", (input) => {
  const secondsInString = input;
  const secondsInNumber = Number(secondsInString);

  if (secondsInNumber <= 0) {
    console.log("Please enter a valid positive number.");
    readlineObj.close();
  } else {
    console.log(`Starting countdown for ${secondsInNumber} seconds...`);
    startCountdown(secondsInNumber);
  }
});

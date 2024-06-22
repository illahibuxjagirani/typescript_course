
// synchronous vs asynchronous:

// synchronous
// operations are performed one after another. Each operation must complete before the next one starts.

// Synchronous code can be blocking. If an operation takes a long time, it blocks the entire program until it completes.


// Asynchronous:

// operations can be performed without waiting for previous operations to complete.
// It does not block other operations, which is handled mechanisms like callbacks, promises, and async/await.
// Commonly used for operations like network requests or any task that takes time.


// for example

// if task a 5 seconds
// task b 4 seconds
// task b 2 seconds
// task b 1 seconds
// task b 10 seconds

// total = 22 seconds


// with sync typescript it takes seconds?

// with async typescript it takes seconds?


// how would we knnow that we are writing async or sync code?
// setTimeout
// setInterval
// promises
// async/await
// network request (fetch API)


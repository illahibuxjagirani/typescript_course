"use strict";
// synchronous and asynchronous:
Object.defineProperty(exports, "__esModule", { value: true });
// synchronous
// operations are performed one after another. 
// Each operation must complete before the next one starts.
// Synchronous code can be blocking. If an operation takes a long time, it blocks the entire program until it completes.
// Asynchronous:
// operations can be performed without waiting for previous operations to complete.
// It does not block other operations, which is handled mechanisms like callbacks, promises, and async/await.
// Commonly used for operations like network requests or any task that takes time.
// how would we know that we are writing async or sync code?
// commonly used methods
// setTimeout
// setInterval
// promises // we will cover later
// async/await
// network request (fetch API)
// let see some examples
// if task a takes 5 seconds (second it will)
// task b 10 seconds
// task b 1 seconds (first it will execute)
// total = 16 seconds
// with sync typescript it takes seconds?
// 16 seconds
// with async typescript it takes seconds?
// 10 seconds
// all three operations will starts at same time and ends according to their time
console.log(`This is line 1`);
setTimeout(() => {
    console.log(`This is line 2`);
    console.log(`This is line 3`);
}, 3000);
// this is sync typescript
// if i want to print line 2 at last or after 3 seconds
// this concept is called async typescript

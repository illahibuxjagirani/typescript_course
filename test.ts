function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add(10, 20)); // Output: 30 (number + number)
console.log(add("Hello ", "World")); // Output: "Hello World" (string + string)
console.log(add("Hello ", 3)); // Output: "Hello World" (string + string)

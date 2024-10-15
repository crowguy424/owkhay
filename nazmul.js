const Akash = require('prompt-sync')({sigint: true});

let a = Akash("Enter the first number: ");
let b = Akash("Enter the second number: ");

let temp;

temp = a;
a = b;
b = temp;

console.log(`Number before swapping: ${a} ${b}`);
console.log(`Number after swapping: ${a} ${b}`);
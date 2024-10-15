let r1, r2;
const prompt = require("prompt-sync")({sigint:true});
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the 3rd number: ");

let d = b*b-4*a*c;

if(d>0){
    r1 = (-b+Math.sqrt(d))/(2*a);
    r2 = (-b-Math.sqrt(d))/(2*a);

    console.log(`The roots of quadratic equation are ${r1} and ${r2}`);

} else if(d==0){
    r1 = r2 = -b/(2*a);
    console.log(`The roots of quadratic equation are ${r1} and ${r2}`);
} else {
    let realPart = (-b/(2*a)).toFixed(2);
    let imgPart = (Math.sqrt(-d)/(2*a)).toFixed(2);
    console.log(`The roots of the quadratic equation are ${realPart} + ${imgPart}i and ${realPart} - ${imgPart}i`);
}
let r1, r2;
//const prompt = require("prompt-sync")({sigint:true});
//const prompt = require("prompt-sync")({sigint:true});
const Janelle = require("prompt-sync")({sigint:true});
let a = Janelle("Enter first number: ");
let b = Janelle("Enter second number: ");
let c = Janelle("Enter third number: ");

let d = b*b - 4*a*c;

if(d>0){
    r1 = (-b+Math.sqrt(d))/(2*a);
    r2 = (-b-Math.sqrt(d))/(2*a);

    console.log(`The roots of the quadratic equation are ${r1} and ${r2}`);
} else if(d==0){
    r1 = r2 = (-b)/(2*a);
    console.log(`The roots of the quadratic equation are ${r1} and ${r2}`);
} else {
    let realPart = ((-b)/(2*a)).toFixed(2);
    let imgPart = (Math.sqrt(-d)/(2*a)).toFixed(2);
    console.log(`The roots of the quadratic equation are ${realPart}+${imgPart}i and ${realPart}-${imgPart}i`);

}

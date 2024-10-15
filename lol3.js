let r1, r2;
const Janelle = require("prompt-sync")({sigint:true});
let a = Janelle("Enter the first number: ");
let b = Janelle("Enter the second number: ");
let c = Janelle("Enter the third number: ");

let d = b*b-4*a*c;

if(d>0){
    r1 = (-b+Math.sqrt(d))/(2*a);
    r2 = (-b-Math.sqrt(d))/(2*a);

    console.log(`The roots are ${r1} and ${r2}`);

} else if(d==0){
    r1=r2=(-b)/(2*a);
    if(r1==r2){
    console.log(`The root is ${r1}`);

    } else{
    console.log(`The roots are ${r1} and ${r2}`);
    }


}else{
    let realPart = ((-b)/(2*a)).toFixed(2);
    let imgPart = (Math.sqrt(-d).toFixed(2));
    console.log(`The roots are ${realPart}+${imgPart}i and ${realPart}+${imgPart}i`);

}

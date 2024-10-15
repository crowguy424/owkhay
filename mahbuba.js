const Mahbuba = require('prompt-sync')({sigint:true});

let pop = Mahbuba("Enter the width: ");
let bravo = Mahbuba("Enter the height: ");
let angleInDegrees = Mahbuba("Enter the required angle: ");
let angleInRadians = (angleInDegrees)*(Math.PI/180);
let sineValue = Math.sin(angleInRadians);
let area = 0.5*pop*bravo*sineValue;
console.log(`The required area is ${area}`);
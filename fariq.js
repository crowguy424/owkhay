var result = "Suprovaat";
console.log("result");
var now = new Date();
console.log(now);
var curHours = now.getHours();
console.log(curHours);
if(curHours > 12 && curHours < 18){

    result = "Good Afternoon";

} else if(curHours > 18){

    result = "Good Evening";

}

console.log(result);
console.log("<h1> It is " + result + " </h1>");
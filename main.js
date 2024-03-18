//using if/else if or else statement 
//with the help of different condition
//example 01
let sevenStage: number = 7;
if(sevenStage === 1){
    console.log("you are a bady")
}else if(sevenStage === 2){
    console.log("you are a child")
}else if(sevenStage === 3){
    console.log("you are young")
}else if(sevenStage === 4){
    console.log("you are a soldier")
}else if(sevenStage === 5){
    console.log("you are meture and have a wisdomatic decision")
}else if(sevenStage === 6){
    console.log("you are an old")
}else{
    console.log("you are very older and ithis stage is second childhood")
}
//example 02
var user_name = "Ashir";
var age = 18;
var password = 1234;
if (user_name.length === 5) {
    console.log("you are correct user");
}
else if (age === 18 && password === 1234) {
    console.log("you are eligible");
}
else if (user_name === "Ashir" || password === 1235) {
    console.log("Enter a wrong password");
}
else {
    console.log("wrong information");
}
//example 03
let x: number = 95;
 if(x > 80){
     console.log("A+ grade marvellous")
 }else if (x < 70) {
     console.log("A grade outstanding performance")
 } else if(x < 60) {
     console.log("B grade good effort")
 } else if(x < 50) {
     console.log("C grade concentratde in your studies")
 } else {
     console.log("you are failed")
 };

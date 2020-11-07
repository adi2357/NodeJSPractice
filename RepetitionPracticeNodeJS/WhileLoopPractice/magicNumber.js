const prompt = require("prompt-sync")();

let isMagicNumber = false;
let userCheck = "";
let min = 0;
let max = 100;
let mid = (min + max) / 2;
while(!isMagicNumber){
    userCheck = prompt("Is " + mid + " is Less than your number (y/n) : ");
    if(userCheck == "y"){
        min = mid;
    } else {
        max = mid;
    }
    if( userCheck != "y"){
        userCheck = prompt("Is " + mid + " is Greater than your number (y/n) : ");
        if( userCheck == "y"){
            max = mid;
        } else {
            min = mid;
        }
    }
    mid = Math.floor((min + max) / 2);
    if(max == min) isMagicNumber = true;
}
console.log("Your Number is : " + mid);

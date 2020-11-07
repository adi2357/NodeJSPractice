const args = process.argv.slice(2);
let number1 = parseInt(args[0]);
let number2 = parseInt(args[1]);

function isPalindrome(value1, value2){
    let reverse = 0;
    while(value1 >= 1 ){
        reverse = parseInt(reverse * 10 + (value1 % 10));
        value1 = parseInt(value1 / 10);
    }
    if(reverse == value2){
        return true;
    }
    else return false;
}

if(isPalindrome(number1, number2)){
    console.log("The two numbers are Palindromes");
} else {
    console.log("The two numbers are not Palindromes");
}
let sumOfDigits = 0;
for(let index = 0; index < 5; index++){
    sumOfDigits += (Math.floor(Math.random() * 100));
}

let average = sumOfDigits / 5;
console.log("Sum of Digits : " + sumOfDigits);
console.log("Average : " + average);
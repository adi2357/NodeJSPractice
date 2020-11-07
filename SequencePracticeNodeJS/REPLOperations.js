let singleDigit = Math.floor(Math.random() * 10);
console.log("Random Single Digit : " + singleDigit);

let diceNumber1 = Math.floor(Math.random() * 10) % 6 + 1;
console.log("Random Dice Number : " + diceNumber1);

let diceNumber2 = Math.floor(Math.random() * 10) % 6 + 1;
let sumOfTwoDiceNumbers = diceNumber1 + diceNumber2;
console.log("Sum of Two Random Dice Number : " + sumOfTwoDiceNumbers);
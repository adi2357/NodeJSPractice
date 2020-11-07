const args = process.argv.slice(2);
let inputNumber = parseInt(args[0]);

if(inputNumber == 1)    console.log("Unit");
else if(inputNumber == 10)  console.log("Ten");
else if(inputNumber == 100) console.log("Hundred");
else if(inputNumber == 1000)    console.log("Thousand");
else console.log("INVALID NUMBER.");
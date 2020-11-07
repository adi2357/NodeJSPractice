const args = process.argv.slice(2);
let a = parseInt(args[0]);
let b = parseInt(args[1]);
let c = parseInt(args[2]);

//1. a + b * c
let operation1 = a + b * c;
console.log("1. a + b * c = " + operation1);
//2. a % b + c
let operation2 = a % b + c;
console.log("2. a % b + c = " + operation2);
//3. c + a / b
let operation3 = c + a / b;
console.log("3. c + a / b = " + operation3);
//4. a * b + c
let operation4 = a * b + c;
console.log("4. a * b + c = " + operation4);

if(operation1 > operation2 && operation1 > operation3 && operation1 > operation4){
    console.log("Maximum operation is : 1. a + b * c");
    maxOperation = operation1;
} else if(operation2 > operation1 && operation2 > operation3 && operation2 > operation4){
    console.log("Maximum operation is : 2. a % b + c");
} else if(operation3 > operation1 && operation3 > operation2 && operation3 > operation4){
    console.log("Maximum operation is : 3. c + a / b");
} else {
    console.log("Maximum operation is : 4. a * b + c");
}

if(operation1 < operation2 && operation1 < operation3 && operation1 < operation4){
    console.log("Minimum operation is : 1. a + b * c");
    maxOperation = operation1;
} else if(operation2 < operation1 && operation2 < operation3 && operation2 < operation4){
    console.log("Minimum operation is : 2. a % b + c");
} else if(operation3 < operation1 && operation3 < operation2 && operation3 < operation4){
    console.log("Minimum operation is : 3. c + a / b");
} else {
    console.log("Minimum operation is : 4. a * b + c");
}
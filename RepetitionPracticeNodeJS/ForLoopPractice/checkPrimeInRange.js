const args = process.argv.slice(2);
let start = parseInt(args[0]);
let end = parseInt(args[1]);

function isPrime(number){
    let count =0;
    for(let i = 1; i <= number; i++){
        if(number % i == 0) count++;
    }
    if(count == 2){
        return true;
    } else {
        return false;
    }
}

let isPrimeArray = [];
for(let i = start; i <= end; i++){
    if(isPrime(i))
        isPrimeArray.push(i);
}
console.log("Prime Numbers between " + start + " and " + end + " are : " + isPrimeArray.join(","));

const args = process.argv.slice(2);
let input = parseInt(args[0]);
let table = "";
let index = 1;
while(index <= input && Math.pow(2, index) <= 256){
    table += Math.pow(2, index) + " ";
    index++;
}
console.log(table);
const args = process.argv.slice(2);
let input = parseInt(args[0]);
let table = "";
for (let i = 0; i <= input; i++){
    table += Math.pow(2, i) + " ";
}
console.log(table);
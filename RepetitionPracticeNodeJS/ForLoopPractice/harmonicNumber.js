const args = process.argv.slice(2);
let n = parseInt(args[0]);

let nthHarmonic = 0;
for (let i = 1; i <= n; i++){
    nthHarmonic += 1/i;
}
console.log(n + "th Harmonic : " + nthHarmonic.toFixed(2));
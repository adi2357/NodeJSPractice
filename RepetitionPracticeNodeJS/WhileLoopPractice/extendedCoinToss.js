const IS_HEADS = 0;
const IS_TAILS = 1;

let timesTossed = 0;
let countHeadWin = 0;
let countTailWin = 0;

while(countHeadWin < 11 && countTailWin < 11){
    timesTossed++
    let toss = Math.floor(Math.random() * 10) % 2;
    switch(toss){
        case IS_HEADS :
            countHeadWin++;
            break;
        case IS_TAILS :
            countTailWin++;
            break;
    }
}
console.log("Times Coin Tossed : " + timesTossed);
console.log("HEAD WINS : " + countHeadWin + " TAIL WINS : " + countTailWin);
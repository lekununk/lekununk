function lotteryWin () {
    let myNumbers = [];

    // for loop; 6 Numbers
    for(let i=0; i < 6; i++){
    // random() : 0~1 random Int
    // floor() : To get Int after rounding
    // There are 70 numbers in MegaMillion
    var num = Math.floor(Math.random() * 70) + 1;

    // Numbers should not be duplicated
    for(let j in myNumbers){
    while(num == myNumbers[j]){ // when the new number generated is equal to previous number
      num = Math.floor(Math.random() * 70) + 1;
        }
    }
    //push() - add numbers
    myNumbers.push(num);
};

    // sort numbers lowest to biggest
    myNumbers.sort (function (a,b) {
        return a - b;
        });

    return myNumbers
    // while (myNumbers !== winningNumbers) {
    //     counts++;
    //     console.log(myNumbers, counts)
    // }
};

function matchingTwoNumbers(winningNumbers) {
    let counts = 0;
    // sort WinningNumbers lowest to biggest as well to match
    let myNumbers = lotteryWin();
    winningNumbers.sort (function (a,b) {
        return a - b;
        });

     while (myNumbers !== winningNumbers) {
        counts++;
        let newNumbers = lotteryWin();
        console.log(`[${newNumbers}] vs [${winningNumbers}]. Counts: ${counts}`)
    }
}

// Tuesday, 8/8/2023 winning number
let results = matchingTwoNumbers([13,19,20,32,33,14]);
console.log(results);
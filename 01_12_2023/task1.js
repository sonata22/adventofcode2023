const fs = require("fs"); // include file system package
fs.readFile("puzzleInput.txt", (err, data) => {
    if (err) throw err;
    const text = data.toString().split("\r\n");
    let numsArray = [];
    for (str of text) {
        let newStr = "";
        for (letter of str) {
            if (letter.match(/[0-9]/i)) {
                newStr += letter;
            }
        }
        numsArray.push(newStr);
    }
    let numArrayFinal = [];
    for (num of numsArray) {
        let newStr = "";
        if (num.length > 1) {
            newStr = num[0] + num[num.length - 1];
        } else {
            newStr += num + num;
        }
        numArrayFinal.push(newStr);
    }
    let sum = 0;
    for (num of numArrayFinal){
        sum += Number(num);
    }
    console.log(sum);
})

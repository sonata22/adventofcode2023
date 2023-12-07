import fs from 'fs'; //file system module import

const initialLines = fs.readFileSync('puzzleInput.txt', 'utf-8')
    .trim() //trim white spaces
    .split('\r\n');

function partOne() {
    const values = initialLines.map((line) => {
        let first = line.split('').find((v) => !Number.isNaN(Number(v)))
        let last = line.split('').findLast((v) => !Number.isNaN(Number(v)))
        return Number(first + last);
    });
    return values.reduce((s, v) => s + v);
}

// console.log(partOne());

const numberWordsRegExp = new RegExp(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'].join('|'), 'g');

const numberWordsToDigits = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
}

// not working
function partTwo() {
    const values = initialLines.map((line) => {
        console.log(line);
        const newLine = line.replaceAll(numberWordsRegExp, function (x) {
            return numberWordsToDigits[x];
        });
        console.log(newLine);
        let first = newLine.split('').find((v) => !Number.isNaN(Number(v)))
        let last = newLine.split('').findLast((v) => !Number.isNaN(Number(v)))
        console.log(Number(first + last));
        return Number(first + last);
    });
    return values.reduce((s, v) => s + v);
}
console.log(partTwo());
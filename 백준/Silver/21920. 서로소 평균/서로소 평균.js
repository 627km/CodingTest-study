const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let n = Number(input.shift());
let x = Number(input.pop());
let numbers = input[0].split(" ").map((value) => Number(value));

function getGCD(a, b) {
    let originalA = a;
    let originalB = b;
    while (a % b !== 0) {
        let r = a % b;
        if (r !== 0) {
            a = b;
            b = r;
        }
    }
    return b;
}

let count = 0;
let result = [];
let solution = 0;

for (let i = 0; i < n; i++) {
    if (getGCD(x, numbers[i]) === 1) {
        count += 1;
        result.push(numbers[i]);
        solution += numbers[i];
    }
}
console.log(solution / result.length);
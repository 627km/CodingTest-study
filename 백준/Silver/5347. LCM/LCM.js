const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

let n = Number(input.shift());

for (let i = 0; i < n; i++) {
    let [a, b] = input[i]
        .split(" ")
        .sort((a, b) => b - a)
        .map((value) => Number(value));
    let originalA = a;
    let originalB = b;
    while (a % b !== 0) {
        let temp = a % b;
        if (temp !== 0) {
            a = b;
            b = temp;
        }
    }
    let result = (originalA * originalB) / b;
    console.log(result);
}
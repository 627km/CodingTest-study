const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let n = Number(input.shift());

let answer = [];

for (let i = 0; i < n; i++) {
    let [a, b] = input[i].split(" ").map((item) => Number(item));
    let originalA = a;
    let originalB = b;

    while (a % b !== 0) {
        let r = a % b;
        if (r !== 0) {
            a = b;
            b = r;
        }
    }

    let min = (originalA * originalB) / b;
    answer.push(min);
}

console.log(answer.join("\n"));

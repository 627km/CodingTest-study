const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");
input.sort((a, b) => a - b);
let a = input[0];
let b = input[1];

let originalA = Number(a);
let originalB = Number(b);

while (a % b !== 0) {
    let b1 = a % b;

    if (b1 !== 0) {
        a = b;
        b = b1;
    }
}
let gcd = b;
let lcm = (originalA * originalB) / b;

console.log(gcd);
console.log(lcm);
const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim();

let newInput = "";
let flag = true;
let cycle = 1;
if (Number(input) < 10) {
    newInput = "0" + input;
} else {
    newInput = input;
}

let [a, b] = newInput.split("").map((it) => Number(it));
let sum = a + b;

if (sum >= 10) {
    sum = String(sum).split("")[1];
}

let newNumber = String(b) + String(sum);

if (newInput != newNumber) {
    while (flag) {
        [a, b] = newNumber.split("").map((it) => Number(it));
        sum = a + b;
        if (sum >= 10) {
            sum = String(sum).split("")[1];
        }
        newNumber = String(b) + String(sum);

        if (newInput == newNumber) {
            cycle += 1;
            break;
        }
        cycle += 1;
    }
}

console.log(cycle);
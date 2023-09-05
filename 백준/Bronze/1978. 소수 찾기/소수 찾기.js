const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split("\n");

let N = Number(input[0]);
let numbers = input[1].split(" ").map((num) => parseInt(num));
let counter = 0;

const isPrime = (n) => {
    if (n < 2) {
        return;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return;
        }
    }
    counter++;
};

for (let j = 0; j < N; j++) {
    isPrime(numbers[j]);
}

console.log(counter);
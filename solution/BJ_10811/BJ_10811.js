// BJ_10811
// 바구니 뒤집기 (배열 뒤집기)

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim().split("\r\n");

const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);

let basket = [];

for (let i = 1; i <= n; i++) {
    basket.push(i);
}

for (let i = 1; i <= m; i++) {
    let [a, b] = input[i].split(" ").map((n) => parseInt(n));
    let arr = [];
    for (let j = a - 1; j < b; j++) {
        arr.push(basket[j]);
    }
    arr.reverse();
    basket.splice(a - 1, b - a + 1, ...arr);
}
console.log(basket.join(" "));

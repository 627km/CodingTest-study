let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let N = Number(input[0]);

let dist = input[1].split(' ').map(Number);
let price = input[2].split(' ').map(Number);

let min = price[0];
for (let i = 0; i < price.length; i++) {
    min = Math.min(min, price[i]);
    price[i] = min;
}

let answer = 0;

for (let i = 0; i < N - 1; i++) {
    answer += price[i] * dist[i];
}

console.log(answer);
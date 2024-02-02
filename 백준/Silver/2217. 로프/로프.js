let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let N = Number(input[0]);
let roop = [];
for (let i = 1; i <= N; i++) {
    roop.push(Number(input[i]));
}
roop.sort((a, b) => {
    return a - b;
});

for (let i = 0; i < roop.length; i++) {
    roop[i] = roop[i] * N;
    N--;
}
let answer = 0;
answer = Math.max(...roop);
console.log(answer);

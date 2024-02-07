const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];
let answer = 0;

for (let i = 1; i <= n; i++) {
    arr.push(Number(input[i]));
}

for (i = arr.length - 1; i > 0; i--) {
    if (arr[i] <= arr[i - 1]) {
        let gap = arr[i - 1] - arr[i];
        arr[i - 1] = arr[i - 1] - (gap + 1);
        answer += gap + 1;
    }
}
console.log(answer);

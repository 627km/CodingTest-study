const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let tc = Number(input.shift());

for (let i = 0; i < tc; i++) {
    let n = Number(input.shift());

    let arr = input.shift().split(' ').map(Number);

    let max = arr[n - 1];

    let profit = 0;

    // 배열 뒤에서 부터 봐야함
    for (let j = n - 2; j >= 0; j--) {
        if (arr[j] < max) {
            profit += max - arr[j];
        } else if (arr[j] > max) {
            max = arr[j];
        }
    }

    console.log(profit);
}

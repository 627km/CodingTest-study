const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = Number(input[0]);
let K = Number(input[1]);

let start = 1;
let end = 10 ** 10; // N의 최대값은 10의 5제곱. 따라서 end는 N의 제곱이므로 10의 10제곱이다.

let result;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for (let i = 1; i <= N; i++) {
    total += Math.min(parseInt(mid / i), N);
  }
  if (total >= K) {
    result = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}
console.log(result);

let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let N = Number(input[0]);
let A = input[1].split(' ').map(Number);
let M = Number(input[2]);
let B = input[3].split(' ').map(Number);

A.sort((a, b) => a - b);

let answer = [];
for (let i = 0; i < M; i++) {
  let start = 0;
  let end = N - 1;
  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (A[mid] == B[i]) {
      result = 1;
      break;
    } else if (A[mid] < B[i]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  answer.push(result);
}

console.log(answer.join('\n'));

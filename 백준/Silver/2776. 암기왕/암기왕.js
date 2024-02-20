let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let testCase = Number(input.shift());

let answer = [];
for (let tc = 0; tc < testCase; tc++) {
  let N = Number(input.shift());
  let A = input.shift().split(' ').map(Number);
  let M = Number(input.shift());
  let B = input.shift().split(' ').map(Number);

  A.sort((a, b) => a - b);

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
}

console.log(answer.join('\n'));

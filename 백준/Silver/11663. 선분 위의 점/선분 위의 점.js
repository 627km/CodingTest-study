let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [N, M] = input.shift().split(' ').map(Number);
let points = input.shift().split(' ').map(Number);

points.sort((a, b) => a - b);

let answer = [];

for (let i = 0; i < M; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  let sum = M;

  let left = 0;
  let right = N - 1;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (points[mid] >= a) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  sum -= left;
  right = N - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (points[mid] > b) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  sum -= M - left;

  answer.push(sum);
}

console.log(answer.join('\n'));

const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [M, N] = input.shift().split(' ').map(Number);
let stick = input.shift().split(' ').map(Number);

function devide(mid, arr) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    cnt += Math.floor(arr[i] / mid);
  }
  return cnt;
}

let start = 1;
let end = 1000000000;
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  if (devide(mid, stick) >= M) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);

let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let [X, Y] = input[0].split(' ').map(Number);

let start = 1;
let end = 1000000000;
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let Z = Math.floor((100 * Y) / X);
  let newZ = Math.floor((100 * (Y + mid)) / (X + mid));
  if (newZ == Z) {
    start = mid + 1;
  } else {
    result = mid;
    end = mid - 1;
  }
}

console.log(result !== 0 ? result : -1);


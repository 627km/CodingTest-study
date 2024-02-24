const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n")
const [N, M] = input.shift().split(' ').map(Number);
const money = input.map(Number);

let min = Math.min(...money);
let max = money.reduce((r, v) => r + v, 0);
let answer = Infinity;

while (min <= max) {
  let updateMin = 0;
  mid = Math.floor((min + max) / 2);
  let temp = mid;
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    if (temp - money[i] >= 0) {
      temp -= money[i];
    } else {
      cnt++;
      temp = mid - money[i];
      if (temp < 0) {
        updateMin = money[i];
        break;
      }
    }
  }

  if (updateMin > 0) {
    min = updateMin;
    continue;
  }

  if (temp < mid) cnt++;

  if (cnt <= M) {
    if (answer > mid) {
      answer = mid
    }
    max = mid - 1;
  } else {
    min = mid + 1;
  }
}

console.log(answer)
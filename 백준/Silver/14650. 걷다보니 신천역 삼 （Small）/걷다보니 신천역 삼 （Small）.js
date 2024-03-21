const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);

let selected = [];
let answer = 0;

function dfs(depth, n) {
  if (depth == n) {
    let result = 0;
    if (selected[0] != 0) {
      for (let i of selected) {
        result += i;
      }
      if (result % 3 == 0) {
        answer++;
      }
    }
    return;
  }

  for (let i = 0; i < 3; i++) {
    selected.push(i);
    dfs(depth + 1, n);
    selected.pop();
  }
}

dfs(0, n);
console.log(answer);

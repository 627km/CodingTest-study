const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let temp = [];
  temp = input[i].split(' ').map(Number);
  arr.push(temp);
}
let nums = [];
for (let i = 0; i < n; i++) {
  nums.push(i);
}

let visited = new Array(n).fill(false);
let selected = [];

let answer = 10000000;
function dfs(arr, depth) {
  if (depth == n) {
    let result = 0;
    selected.push(selected[0]);
    
    for (let i = 0; i < n; i++) {
      let cost = arr[selected[i]][selected[i + 1]];
      if (cost == 0) {
        selected.pop();
        return;
      }
      result += cost;
    }
    
    answer = Math.min(answer, result);
    selected.pop();
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) {
      continue;
    }

    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
console.log(answer);

const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);

let arr = [1, 5, 10, 50];
let selected = [];

let set = new Set();

function dfs(arr, depth, start) {
  if (depth == n) {
    let result = [];
    let total = 0;

    for (i of selected) {
      result.push(arr[i]);
    }
    for (x of result) {
      total += x;
    }
    set.add(total);
    return;
  }

  for (let i = start; i < 4; i++) {
    selected.push(i);
    dfs(arr, depth + 1, i);
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(set.size);

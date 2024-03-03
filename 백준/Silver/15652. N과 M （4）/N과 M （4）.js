const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

let output = [];

let answer = '';

function dfs(output, depth, start) {
  if (depth == m) {
    answer += output.join(' ');
    answer += '\n';
    return;
  }

  for (let i = start; i < n; i++) {
    output.push(i + 1);
    dfs(output, depth + 1, i);
    output.pop();
  }
}

dfs(output, 0, 0);
console.log(answer);

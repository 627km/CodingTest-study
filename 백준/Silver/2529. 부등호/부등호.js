const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let k = Number(input[0]);
let arr = input[1].split(' ');
// 0부터 9까지의 숫자이므로 10개 생성
let visited = new Array(10).fill(false);
let result = [];
let current = ''; // 제일 큰 수 저장
let first = ''; // 제일 작은 수 저장

function dfs(depth) {
  // 부등호의 개수가 k개면 숫자(수열)는 k+1개 필요
  if (depth == k + 1) {
    let check = true; // 부등식이 만족하는지 확인
    for (let i = 0; i < k; i++) {
      if (arr[i] == '<') {
        if (result[i] > result[i + 1]) {
          check = false;
        }
      } else if (arr[i] == '>') {
        if (result[i] < result[i + 1]) {
          check = false;
        }
      }
    }
    if (check) {
      // check가 그대로 true인 경우 (부등식을 만족하는 경우)
      current = '';
      for (let x of result) {
        current += x + '';
      }
      if (first == '') {
        first = current; // 첫번째 수열이 가장 작은 수 이다.
      }
    }
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) {
      continue;
    }
    result.push(i);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(current + '\n' + first);
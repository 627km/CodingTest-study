const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [r, c] = input[0].split(' ').map(Number);
let arr = [];
for (let i = 1; i <= r; i++) {
  arr.push(input[i]);
}
// 상 하 좌 우 ex) 위로 한칸 움직이면 x는 -1, y는 그대로이다.
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let visited = new Array(26).fill(false);
let maxDepth = 0;

function dfs(depth, x, y) {
  maxDepth = Math.max(maxDepth, depth);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) {
      continue;
    }

    let nextAlphabet = arr[nx].charCodeAt(ny) - 'A'.charCodeAt(0); // 다음 알파벳의 인덱스 계산
    if (!visited[nextAlphabet]) {
      visited[nextAlphabet] = true; // 다음 알파벳을 방문했다고 표시
      dfs(depth + 1, nx, ny);
      visited[nextAlphabet] = false; // 백트래킹: 다음 알파벳을 방문하지 않았다고 표시
    }
  }
}

visited[arr[0].charCodeAt(0) - 'A'.charCodeAt(0)] = true; // 시작 알파벳 방문 처리
dfs(1, 0, 0);

console.log(maxDepth);
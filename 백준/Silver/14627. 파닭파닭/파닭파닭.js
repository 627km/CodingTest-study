const fs = require('fs');
const filePath = process.platform === 'linux' ? './dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [S, C] = input[0].split(' ').map(Number);
C = BigInt(C);
let pa = input
  .slice(1)
  .map((_) => _.trim())
  .map(BigInt);

function check(key) {
  // key의 최대값 10^9.
  let ret = 0;

  for (let i = 0; i < pa.length; i++) {
    // 최대 10^6개.
    ret += parseInt(pa[i] / BigInt(key)); // 파의 최대 길이 10^9.
  }

  if (ret >= C) return true;
  else return false;
}
function binarySearch() {
  // 연산 과정에서 나올 수 있는 최대 수 2*10^9.
  let ret = 0n;

  let left = 1n;
  let right = 1000000000n;
  while (left <= right) {
    let mid = BigInt(parseInt((left + right) / 2n));
    if (check(mid)) {
      left = mid + 1n;
      ret = mid;
    } else {
      right = mid - 1n;
    }
  }

  return ret;
}
function sol() {
  let answer = 0n;

  let longgestPa = binarySearch(); // 주어진 파 중에 길이가 가장 짧은 파.
  let total = 0n;
  for (let i = 0; i < pa.length; i++) {
    total += pa[i];
  }

  return console.log((total - longgestPa * C).toString().trim());
}
sol();

let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let N = Number(input.shift());
let arr1 = input.shift().split(' ').map(Number);
let M = Number(input.shift());
let arr2 = input.shift().split(' ').map(Number);

arr1.sort((a, b) => a - b);

function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}
let answer = '';
for (let i = 0; i < M; i++) {
  let cnt = countByRange(arr1, arr2[i], arr2[i]);
  answer += cnt + ' ';
}

console.log(answer);

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);

console.log(a * b.toString().split('')[2]);
console.log(a * b.toString().split('')[1]);
console.log(a * b.toString().split('')[0]);
console.log(a * b);
let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');
let math = input[0];

let arr = [];
arr = math.split('-');

for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split('+');
    let answer = 0;
    for (let j = 0; j < temp.length; j++) {
        answer += parseInt(temp[j]);
    }
    arr[i] = answer;
}

let result = arr[0];

for (let i = 1; i < arr.length; i++) {
    result -= arr[i];
}
console.log(result);

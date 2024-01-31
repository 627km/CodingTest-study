let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

let N = Number(input[0]);

let distance = [];
distance = input[1].split(' ').map(Number);

let price = [];
price = input[2]
    .split(' ')
    .map(Number)
    .slice(0, price.length - 1);

let sum = 0;

let flag = false;

while (!flag) {
    for (let i = 0; i < price.length; i++) {
        let min = Math.min(...price);
        if (price[i] === min) {
            let totalDistance = 0;
            for (let j = 0; j < distance.length; j++) {
                totalDistance += distance[j];
            }
            sum += price[i] * totalDistance;
            flag = true;
            break;
        } else {
            sum += price[i] * distance[i];
            distance[i] = 0;
        }
    }
}

console.log(sum);

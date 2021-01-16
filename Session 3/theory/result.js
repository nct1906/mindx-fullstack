const fs = require('fs');
const isOdd = require('./isOdd');
let data = '';
try {
    data = fs.readFileSync('number.txt').toString();
} catch (error) {
    console.log(error)
}
if (!data) return
const numbers = data.split(' ').map(number => parseInt(number))
let count = 0
for (let num of numbers) {
    if (isOdd(num)) count++;
}
fs.writeFileSync('output,txt', count + '')
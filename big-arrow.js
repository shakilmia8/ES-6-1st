const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);
console.log(sum);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const mul = multiply(4, 12, 2);
console.log(mul);

const tenTimes = (num) => num * 10;
const ten = tenTimes(17);
console.log(ten);

const fiveTimes = num => num * 5;
const five = fiveTimes(17);
console.log(five);

const getName = () => 'Mamun Chowdhury';
const name = getName();
console.log(name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(12, 5);
console.log(total);
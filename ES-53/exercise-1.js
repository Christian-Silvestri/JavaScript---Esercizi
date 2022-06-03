/* function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
} */

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));
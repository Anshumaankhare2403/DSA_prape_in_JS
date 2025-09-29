let n1 = 12
let n2 = 24
const arr = []
const arr1 = []

for (let i = 1; i <= n1; i++) {
    if (n1 % i === 0) {
        arr.push(i)
    }

}
for (let i = 1; i <= n2; i++) {
    if (n2 % i === 0) {
        arr1.push(i)
    }

}
let common = Math.max(...arr.filter(value => arr1.includes(value)));
console.log(common)
// console.log(arr)
// console.log(arr1)
// console.log(n1 % n2)

// console.log()
// other logice of GCD
// function findGCD(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// console.log(findGCD(22, 24)); // Output: 12

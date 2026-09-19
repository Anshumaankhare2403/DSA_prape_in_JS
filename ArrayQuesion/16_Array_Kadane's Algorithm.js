let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let max = nums[0];
// for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//         sum += nums[j]
//         max = Math.max(max, sum);
//     }

// }

let max = nums[0];
let sum = 0;

for (let x of nums) {
    sum = Math.max(x, sum + x);
    max = Math.max(max, sum);
}

console.log(max);

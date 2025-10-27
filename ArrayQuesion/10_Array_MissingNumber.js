const nums = [0, 3, 1, 5, 2];
const n = nums.length;
const expectedSum = n * (n + 1) / 2;
let actualSum = 0;

for (let i = 0; i < n; i++) {
    actualSum += nums[i];
}
console.log(expectedSum - actualSum);


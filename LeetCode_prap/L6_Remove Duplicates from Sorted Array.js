const nums = [1, 1, 2];
// let r = 0;
// let l = nums.length - 1;
// let insertPos = 1;
// const arr = []

// while (r <= l) {
//     if (nums[r] !== nums[r + 1]) {
//         nums[insertPos] = nums[r];
//         arr.push(nums[r])
//     }
//     r++;
// }
// console.log(arr)




let insertPos = 1;

for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
        nums[insertPos] = nums[i];
        insertPos++;
    }
}

console.log(insertPos);

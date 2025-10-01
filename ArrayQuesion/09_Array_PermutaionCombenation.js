const nums = [1, 2, 3];
// let cc = [];

// for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//         for (let k = 0; k < nums.length; k++) {
//             if (i !== j && j !== k && i !== k) {
//                 cc.push([nums[i], nums[j], nums[k]]);
//             }
//         }
//     }
// }

// console.log(cc)

let n = nums.length;
let i = n - 2;

// Step 1: Find first decreasing element from the right
while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
}

if (i >= 0) {
    // Step 2: Find element just larger than nums[i]
    let j = n - 1;
    while (nums[j] <= nums[i]) {
        j--;
    }
    // Swap
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

// Step 3: Reverse the suffix
let left = i + 1, right = n - 1;
while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
}

console.log(nums)
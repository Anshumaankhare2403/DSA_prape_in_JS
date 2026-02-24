// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[k]) {
//         [nums[0], nums[1], nums[2], nums[3], nums[4], nums[5], nums[6]] = [nums[4], nums[5], nums[6], nums[0], nums[1], nums[2], nums[3]]
//     }
// }
// console.log(nums);

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3 % nums.length; // Handle k > length
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

reverse(nums, 0, nums.length - 1);
reverse(nums, 0, k - 1);
reverse(nums, k, nums.length - 1);
console.log(nums)


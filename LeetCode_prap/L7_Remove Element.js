const nums = [3, 2, 2, 3];
let val = 3;
let l = 0
for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i])
    if (nums[i] !== val) {
        nums[l] = nums[i]
        l++;

    }
}
console.log(l)
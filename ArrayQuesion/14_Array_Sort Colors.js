let nums = [2, 0, 2, 1, 1, 0];
for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] > nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        }
    }

}

console.log(nums)
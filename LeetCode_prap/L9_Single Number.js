const nums = [1, 2, 2, 3, 4, 4, 3, 1];
let single = 0;
for (let i = 0; i < nums.length; i++) {
    single ^= nums[i];
}

console.log(single)
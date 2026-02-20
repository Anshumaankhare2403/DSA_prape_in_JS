let nums = [3, 2, 3];
let target = 6;
let arr = [];
for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            arr.push(i, j);
            break;

        }

    }
}

console.log(arr)
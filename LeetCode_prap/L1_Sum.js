const nums = [2, 7, 11, 15];
const target = 9;

const arr = []

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            arr.push(i, j)
            console.log(arr)
        }

    }
}


const map = new Map();
for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
        return [map.get(complement), i];

    }
    map.set(nums[i], i);
}

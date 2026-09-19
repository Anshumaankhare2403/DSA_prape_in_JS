let nums = [3, 2, 3];
let count = {};
let mejor;

for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    count[num] = (count[num] || 0) + 1;
    if (count[num] > nums.length / 2) {
        mejor = num;
        break;
    }

}
console.log(mejor)


// const nums = [0, 1, 0, 3, 12];

// for (let i = 0; i < nums.length - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < nums.length - i - 1; j++) {
//         if (nums[j] > nums[j + 1]) {
//             let temp = nums[j];
//             nums[j] = nums[j + 1];
//             nums[j + 1] = temp;
//             swapped = true;
//         }
//     }
//     if (!swapped) break;
// }

// for (let k = 0; k < nums.length; k++) {
//     if (nums[k] === 0) {
//         nums[nums.length - 1] = nums[k];
//         nums[k] = nums[nums.length - 1];
//     }
// }

// console.log(nums); 


const nums = [0, 1, 0, 3, 12];

let pos = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
        [nums[i], nums[pos]] = [nums[pos], nums[i]]
        pos++;
    }
}

console.log(nums)



// let writeIndex = 0;
// for (let num of nums) {
//     if (num !== 0) {
//         nums[writeIndex++] = num;
//     }
// }
// while (writeIndex < nums.length) {
//     nums[writeIndex++] = 0;
// }
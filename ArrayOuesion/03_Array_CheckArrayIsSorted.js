// const arr = [3, 4, 5, 1, 2];
// let isAsc = true;
// let isDesc = true;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//         isAsc = false;
//     }
//     if (arr[i] > arr[i - 1]) {
//         isDesc = false;
//     }
// }

// let isSorted = isAsc || isDesc;
// console.log(`array is sorted = ${isSorted}`); // false


const nums = [3, 4, 5, 1, 2];
let countDesc = 0;

for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
        countDesc++;
    }
}

// Also check last and first element for circular rotation
if (nums[nums.length - 1] > nums[0]) {
    countDesc++;
}

const isRotatedSorted = countDesc <= 1;
console.log(`array is rotated sorted = ${isRotatedSorted}`); // true

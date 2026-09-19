// Compare the performance of normal Bubble Sort and optimized Bubble Sort on a large array of random numbers.

function normalBubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

function optimizedBubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // stop early if no swaps
    }
    return arr;
}


// Generate random array
function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * 10000));
}

let arr1 = generateRandomArray(10000); // large array
let arr2 = [...arr1]; // copy for fairness
let arr = [
    6321, 4845, 7272, 4527, 2766, 6523, 2625, 3383, 1960, 9776,
    5928, 5592, 7303, 6565, 6049, 3318, 2082, 6576, 6913, 1011,
    3979, 3215, 8387, 3548, 8860, 6953, 7841, 842, 1701, 9150,
    1812, 714, 7031, 1348, 8028, 3598, 3920, 6446, 445, 5384,
    3865, 6879, 6964, 6868, 5119, 5270, 5646, 4763, 6556, 5795
]

console.time("Normal Bubble Sort");
normalBubbleSort(arr1);
console.timeEnd("Normal Bubble Sort");

console.time("Optimized Bubble Sort");
optimizedBubbleSort(arr2);
console.timeEnd("Optimized Bubble Sort");

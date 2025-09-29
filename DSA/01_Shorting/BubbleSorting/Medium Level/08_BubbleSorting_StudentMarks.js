// Given an array of student marks [45, 78, 12, 89, 34], sort them in ascending order using Bubble Sort.

const arr = [45, 78, 12, 89, 34];

function BubbleSorting(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swap = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }
        if (!swap) break;
    }
    return arr;

}
console.log("Sorted array:", BubbleSorting(arr));
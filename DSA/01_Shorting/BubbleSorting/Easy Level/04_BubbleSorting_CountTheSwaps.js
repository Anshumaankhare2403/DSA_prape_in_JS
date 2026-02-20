// Count the number of swaps performed when sorting [4, 3, 2, 1] using Bubble Sort.

let arr = [4, 3, 2, 1];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swap = true;
        }
        count++;
        if (!swap) break;
    }
}

console.log("Sorted array:", arr);
console.log("Number of swaps:", count);


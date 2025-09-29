// Sort the array [10, 1, 7, 6, 14, 9] in ascending order using Bubble Sort.

let arr = [10, 1, 7, 6, 14, 9];

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
console.log(`Bubble Sorting in ascending = `, arr);
// Use Bubble Sort to sort an array but ignore duplicates (e.g., input: [5, 3, 8, 3, 2, 5] → output: [2, 3, 5, 8]`).

let arr = [5, 3, 8, 3, 2, 5];
arr = [...new Set(arr)];
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
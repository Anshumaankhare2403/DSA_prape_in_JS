// Given an array of strings ["banana", "apple", "cherry", "date"], use Bubble Sort to sort them alphabetically.

const arr = ["banana", "Banana", "Apple", "apple", "cherry", "date"];

function BubbleSorting(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let swap = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].localeCompare(arr[j + 1]) > 0) {
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
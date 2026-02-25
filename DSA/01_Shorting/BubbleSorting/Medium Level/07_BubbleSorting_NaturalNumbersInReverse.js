// Use Bubble Sort to sort the first N natural numbers in reverse (e.g., input: N=5 → [5,4,3,2,1]).

let n = 5;
let arr = [];

while (n) {
    arr.push(n)
    n--;
}

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
console.log("Initial array:", arr);
console.log("Sorted array:", BubbleSorting(arr));
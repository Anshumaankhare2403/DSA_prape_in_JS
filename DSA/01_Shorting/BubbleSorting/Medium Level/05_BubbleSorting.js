// Write a Bubble Sort function in JavaScript and sort [34, 12, 25, 16, 11, 90].

function bubbleSorting(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let swaped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaped = true;
            }
        }
        if (!swaped) break;
    }
    return arr;
}

let arr = [34, 12, 25, 16, 11, 90];
console.log("Bubble Sorting = ", bubbleSorting(arr));

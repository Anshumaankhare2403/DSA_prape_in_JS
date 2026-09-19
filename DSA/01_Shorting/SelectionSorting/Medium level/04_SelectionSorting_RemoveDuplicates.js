// Sort an array but remove duplicates before sorting.

let arr = [5, 3, 8, 3, 2, 5]
arr = [... new Set(arr)];

for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;
        }
    }
    if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
}

console.log(arr);
// Sort an array in descending order using Selection Sort.
const arr = [5, 1, 4, 2, 8];

for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[min]) {
            min = j;
        }
    }
    if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
}
console.log(arr);
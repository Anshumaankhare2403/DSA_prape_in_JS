// Sort an array of strings alphabetically using Selection Sort.
const arr = ["banana", "apple", "cherry", "date"];

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

console.log(arr)
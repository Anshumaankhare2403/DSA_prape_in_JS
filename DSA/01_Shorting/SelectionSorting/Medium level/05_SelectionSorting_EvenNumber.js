// Sort only the even numbers in the array using Selection Sort, keep odd numbers in place.

const arr = [9, 2, 8, 7, 6, 1];
let even = arr.filter(num => num % 2 === 0);
for (let i = 0; i < even.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < even.length; j++) {
        if (even[j] < even[min]) {
            min = j;
        }
    }

    if (min !== i) {
        [even[i], even[min]] = [even[min], even[i]]
    }
}


let evenIndex = 0;
for (let k = 0; k < arr.length; k++) {
    if (arr[k] % 2 === 0) {
        arr[k] = even[evenIndex++];
    }
}
console.log(arr);
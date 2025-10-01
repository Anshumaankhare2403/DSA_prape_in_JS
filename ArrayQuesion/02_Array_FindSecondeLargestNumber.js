
const arr = [8, 8, 7, 6, 5];
let l = -Infinity;
let s = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l) {
        l = arr[i];

    }
    else if (arr[i] > s && arr[i] !== l) {
        s = arr[i];

    }
}
console.log(s)
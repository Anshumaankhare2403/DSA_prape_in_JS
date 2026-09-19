
// const arr = [3, 3, 6, 1];
// const arr = [3, 3, 0, 99, -40];
const arr = [-1, -2, -3, -4, -5];
let l = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l) {
        l = arr[i];
    }
}
console.log(l);
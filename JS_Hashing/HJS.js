const arr = [1, 2, 3, 4, 5, 6, 6, 6, 6, 7, 8, 8, 8, 9, 9, 9, 9, 10];
const set = new Set();
const onot = []
let c = 0;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] === arr[i + 1]) {
        // console.log(arr[i])
        onot.push(arr[i], arr[i + 1])
        c++
    }
    else {
        set.add(arr[i])
    }

}
console.log(c)
console.log(onot)
console.log(set)

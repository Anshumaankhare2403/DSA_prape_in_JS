const array = [1, 2, 3, 4, 5]
const arr = ['a', 'b', 'c']
// let a = array.join('').split('').reverse().map(Number)
// console.log(a)
// let b = arr.join('').split('').reverse().map(String)
// console.log(b)

function revers(arr, i = 0, e = arr.length - 1) {
    // console.log(arr[i - 1])
    if (i >= e) return arr;

    [arr[i], arr[e]] = [arr[e], arr[i]];
    return revers(arr, i + 1, e - 1);
}
console.log(revers(array));

// let e = array.length - 1;
// let i = 0;
// const arra = []
// for (i; i <= e; e--) {
//     arra.push(array[e]);

// }

// console.log(arra);
// console.log([...array].reverse());


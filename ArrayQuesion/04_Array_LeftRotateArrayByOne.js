// const arr = [1, 2, 3, 4, 5];
// const arr = [-1, 0, 3, 6];
// let d = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[arr.length - 1]) {
//         arr[i] = d;
//     }
//     else {
//         arr[i] = arr[i + 1];

//     }
// }
// console.log(arr);


const arr = [1, 2, 3, 4, 5];
let d = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
arr[arr.length - 1] = d;

console.log(arr); // [2, 3, 4, 5, 1]
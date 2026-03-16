const arr = [];
const n = 10;
for (let i = 0; i < n; i++) {
    arr[i] = i+1;
}
console.log("Insertion");
console.log(arr);
console.log("Remove at END:-");
arr.length = arr.length-1
console.log(arr);

console.log("Remove at START ");
for (let i = 0; i < arr.length-1; i++) {
    arr[i]=arr[i+1];
}
arr.length = arr.length-1;
console.log(arr);

console.log("Remove at INDEX ");
let index = 2;
for (let i = index; i < arr.length-1; i++) {
    arr[i] = arr[i+1];
}
arr.length = arr.length-1;
console.log(arr);
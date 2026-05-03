let arr = [1,2,3,4,5];
arr.length--;

for (let i = 1; i < arr.length; i++) {
    console.log("before =",arr[i-1]);
    arr[i - 1] = arr[i];
    console.log("after = ",arr[i-1]);
}
arr.length--;

let index=1;

for (let i = 0; i < arr.length; i++) {
    if(i===index){
        arr[i]=arr[i+1];
    }    
}
arr.length--;

for (let i = index; i < arr.length; i++) {
       arr[i]=arr[i+1];
}
arr.length--;

console.log(arr);


arr1=[1,2,3,4,5];

arr1.pop();
// arr1.shift();
arr1.splice(0,1)
// let aa = arr1.shift();
console.log(arr1);



let arr = [1,2,2,3,3,4,5];
let arr1 = {
    "name":"Anshumaan khare",
    "age":20,
    "gender":"M"
}
// for (of) array 
for (const i of arr){
    console.log(i)
}
// for (in) Object 
for (let x in arr1){
    console.log(arr1[x])
}

let n = arr.length;
console.log(n);
let i  = 0 ;



while(i<n){
    console.log(arr[i])
    i++;
}
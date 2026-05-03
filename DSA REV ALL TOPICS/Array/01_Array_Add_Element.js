let arr = [1,2,3,4];
// manual way to add element at end 
for(let i =0;i<=arr.length;i++){
    if(i===arr.length){
        arr[i++]=arr.length+1;
    }
}
let n = 0;
let prev = n;
for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    arr[i]=prev;
    prev = temp;  
}
arr[arr.length] = prev;


console.log(arr);



let arr1 = [1,2];

arr1.push(3);
arr1.unshift(0);;

console.log(arr1)



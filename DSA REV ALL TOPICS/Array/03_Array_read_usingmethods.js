let arr = [1,2,3,4,5];

arr.forEach((item,index)=>{
    console.log(item);
})
console.log("other way foreach");
arr.forEach((item)=>{
    console.log(item);
})
console.log("other way using map")
arr.map((i)=>{
    console.log(i);
})
console.log("other way using filter")
arr.filter((i)=>{
    i++
    console.log(i)
})
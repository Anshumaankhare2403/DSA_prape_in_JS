// let arr = [1,2,2,3,3,4,5];
// let arr1 = {
//     "name":"Anshumaan khare",
//     "age":20,
//     "gender":"M"
// }
// // for (of) array 
// for (const i of arr){
//     console.log(i)
// }
// // for (in) Object 
// for (let x in arr1){
//     console.log(arr1[x])
// }

// let n = arr.length;
// console.log(n);
// let i  = 0 ;



// while(i<n){
//     console.log(arr[i])
//     i++;
// }


let arrdata = ["The Shawshank Redemption (1994)","The Godfather (1972)","The Dark Knight (2008)","The Godfather Part II (1974)","12 Angry Men (1957) "];
console.log(arrdata);

console.log( arrdata.join("-"));



let arrnum = [1,2,3,4,5,6,7];
console.log(arrnum[1]);

let arrun = ["Banana", "Orange", "Apple", "Mango"];
console.log(arrun);
arrun.unshift("Lemon","MALE")
console.log(arrun);


const fullSongArray = ["Verse 1", "Chorus", "Verse 2", "Bridge", "Guitar Solo", "Outro", "Fade Out"];
console.log(fullSongArray);
fullSongArray.pop("Fade Out");
fullSongArray.pop(6);
console.log(fullSongArray);
fullSongArray.pop();
console.log(fullSongArray);


let data = fullSongArray.slice(2);
console.log(data)


let newArr = [1,2,3,4,5,6,7,8,9,10];
let out = newArr.indexOf(10);
console.log(out)// it show the element is present inside the array or not 

let newOut = newArr.includes(10);
console.log(newOut)

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
const newARR=arr1.concat(arr2);
const ARR = arr1+arr2;//not good way to concat Two array 
console.log(newARR);
console.log(ARR);


let dataARR = [9,3,2,4,5,1,6,7,8,99];
console.log(dataARR.sort((a,b)=>a-b));


let datass = [...arr1]
console.log(datass)
console.log(dataARR===arr1)// Values are same, but references are different 
//Spread operator creates a shallow copy
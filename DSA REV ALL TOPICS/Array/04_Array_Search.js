// let arr = [10, 5, 20, 8, 15];
// let max = 0;
// let min  = 0 ;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[i]<arr[j]){
//             max = arr[i];
//         }
//         if(arr[i]>arr[j]){
//             min = arr[j];
//         }
//     }    
// }

// console.log(max);
// console.log(min);

let arr = [0, 1, 0, 2, 4];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             [arr[i], arr[j]] = [arr[j], arr[i]];

//         }
//     }
// }

// for (let k = 0; k < arr.length; k++) {
//     if (arr[k] == 0) {
//         arr.push(arr[k]);
//         arr.shift();
//     }
// }

// arr = arr.sort((a,b)=>a-b);

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]===0){
//         arr.push(arr[i]);
//         arr.shift();
//     }    
// }
// console.log(arr)

// let x =5 ; 
// while(x){
//     console.log(x);
//     x-=1;
// }
let n = 5
let fac=1;

for (let i = n; i >= n; i--) {
    fac*=fac;

}

console.log(fac)


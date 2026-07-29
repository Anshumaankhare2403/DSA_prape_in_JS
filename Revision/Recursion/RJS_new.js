// // let arr = [22,3,14,53,64];
// // function findnum(arr=){
    
// // }


// let num = 5;
// // function printNum(num){
// //     console.log(num);
// //     if(num>1){
// //         printNum(--num);
// //     }
// //     else{
// //         return;
// //     }
// // }
// function printNum(num,i=1){
//     console.log(i);
//     if(num>=1){
//         printNum(--num,i+1);
//     }
//     else{
//         return;
//     }
// }
// printNum(--num);


let pow = 2;
let num = 5;

function powNumber(pow,num){
    if(pow===1){
        return num;
    }
    return pow * powNumber(pow,num-1);
}

powNumber(pow,num)
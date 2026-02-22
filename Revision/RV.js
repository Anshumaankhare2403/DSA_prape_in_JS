// // const swipt=(a,b)=>{
// //     let c = a;
// //     a=b;
// //     b=c;
// //     console.log(a);
// //     console.log(b);
// // }

// // swipt(10,20);

// let y = 7;
// y += 2;ne
// y *= 3;
// y -= 4;
// y %= 5;
// console.log(y);
// let year = 200;

// if(year%4===0 && year%100!==0 || year%400===0){
//     console.log('Leap Year');
// }
// else{
//     console.log('Not a Leap Year');
// }


let amount = 7000;
if (amount <= 5000) {
    console.log( amount);
}
else if (amount <= 7000 || amount <= 5001) {
    let discount = amount * 5 / 100;
    console.log(amount - discount);
}

let x = 0;
if (x) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

let unit =100;
if(unit>=100){
        console.log( unit*4.2);
    }
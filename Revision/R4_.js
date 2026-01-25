let i = 10;
let n= 10;
do{
    console.log(i)
    i--;
}while(i<=n)

let str = "AnshumaanKhare";
let text = ""
for(let i of str){
    text+=i
    console.log(text);
    
}


let num = 20;
for (let i = 1; i < num; i++) {
    if(i%2===0){
        continue;

    }    
    else{
        console.log(i);
    }
}


let fac = 5;
let d = 1;
for (let i = 1; i <= fac; i++) {
    d*=i;
    console.log(d)
}


let n1 = 3;
let text1 = "";
for (let i = 1; i <= n1; i++) {
    for (let j =1; j <= n; j++) {
            text1+=j+" ";
    }
    console.log(text1);
    text1 = "";        
}


let arr = [1,2,3,4,5];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i]>arr[j]){
        [arr[i],arr[j]]=[arr[j],arr[i]];
        }               
    } 
    
}
console.log(arr)

let obj = {
    "name":"Anahumaankhare",
    "age":22,
    "gender":"Mali"
}

for(let i in obj){
    console.log(`${i}:${obj[i]}`);  
}
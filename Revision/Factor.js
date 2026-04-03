let n = 0;
let a = n;
for (let i = 1; i < n; i++) {
    let b = n-i;
    let fact = a*b;
    a = fact;
    
}
if(n===0){
    a=1;
}
console.log("fact",a)


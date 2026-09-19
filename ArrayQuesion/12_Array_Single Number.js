let nums = [4, 1, 2, 1, 2];
let cc = {}
let dup = 0;

for (let x of nums) {
    cc[x] = (cc[x] || 0) + 1;
}
for (let c in cc) {
    if (cc[c] === 1) {
        dup = Number(c);
    }
}

console.log(dup);
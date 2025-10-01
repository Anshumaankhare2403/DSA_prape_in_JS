const num = [2, -4, 4, 0, 10];
const t = 6;
let found = false;

for (let i = 0; i < num.length; i++) {
    if (num[i] === t) {
        console.log(i)
        found = true;
        break;
    }
}

if (!found) {
    console.log("-1");
}
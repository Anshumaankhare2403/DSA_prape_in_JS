let prices = [7, 1, 5, 3, 6, 4];

let minn = prices[0];
let maxx = 0;

for (let x of prices) {
    minn = Math.min(minn, x);
    maxx = Math.max(maxx, x - minn);
}

console.log(maxx)
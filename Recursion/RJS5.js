let num = 122
function reverse(n, r = 0) {
    if (n === 0) return r;
    return reverse(Math.floor(n / 10), r * 10 + (n % 10));
}

function isPlandrom(num) {
    const reversed = reverse(num);
    return num === reversed ? "Plandrome" : "not Plandrom"

}

console.log(isPlandrom(num))
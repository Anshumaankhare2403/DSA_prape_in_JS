

function fabo(n, i = 0, x = 1, arr = [0, 1]) {

    if (arr.length - 1 >= n) return arr.toString().split(",").reverse().map(Number);
    let c = i + x
    arr.push(c)
    return fabo(n, x, c, arr)
}

console.log(fabo(5))
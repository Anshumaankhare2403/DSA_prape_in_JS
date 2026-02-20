// const n = 10
// let a = 0
// let b = 1
// const arr = [a, b]
// const fabo = (i) => {

//     let c = a + b
//     arr.push(c)
//     a = b
//     b = c
//     i++
//     if (i > n) return i
//     return fabo(i)
// }

// fabo(2)

// console.log(arr)


// clean code and reuable code 

function fabo(n, a = 0, b = 1, arr = [0, 1]) {
    if (arr.length > n) return arr
    arr.push(a + b)
    return fabo(n, b, a + b, arr)

}

console.log(fabo(10))
let n = 1221221
// if (n === Number(n.toString().split('').reverse().join(''))) {
//     console.log('n is plandrome number ')
// }
// else {
//     console.log('n is not plandrome number ')

// }
const o = n
let r = 0;

while (n > 0) {
    let d = n % 10
    r = r * 10 + d
    n = Math.floor(n / 10)
}

const v = o === r ? "is a plandrom" : "is not a plandrom"
console.log(v)


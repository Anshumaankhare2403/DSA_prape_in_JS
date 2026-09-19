// let num = 153
// let ss = String(num)
// let num1 = num
// let temp = []
// // let i = 0
// while (num1 > 0) {
//     let r = num1 % 10
//     num1 = Math.floor(num1 / 10)
//     let s = Math.pow(r, Number(ss.length))
//     temp.push(s)
// }
// let sum = 0
// for (let i in temp) {
//     sum = sum + temp[i]
// }
// console.log(sum)

// if (num === sum) {
//     console.log("true")
// }
// else {
//     console.log("false")
// }

// imporvide version from GPT 
let num = 153
let d = String(num).split('').map(Number)
let p = d.length
let sum = d.reduce((acc, val) => acc + Math.pow(val, p))
console.log(typeof (sum))
console.log(num === sum ? true : false)


// let arr = [1, 2, 3]
// let s = arr.reduce((acc, val) => Number(acc + val), 10)
// console.log(s)
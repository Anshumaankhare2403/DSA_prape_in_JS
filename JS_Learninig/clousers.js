
function a(b) {
    function c() {
        console.log(x, b)
    }
    let x = 10
    return c()

}

a(100)


// setTimeout(function a(){console.log("1000")},3000)

// const a = []
// for (let i = 1; i <= 10; i++) {

//     setTimeout(function ful() {
//         a.push(i)
//         console.log(i)
//         console.log(a)

//     }, i * 1000)

// }





// let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let i = 0
// let tt = setInterval(() => {
//     console.log(b[i])
//     i++
//     if (i === b.length) {
//         clearInterval(tt)
//     }
// }, 1000)



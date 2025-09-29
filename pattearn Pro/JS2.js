const n = 10
// for (let i = 0; i < n; i++) {
//     let txt = ""
//     for (let j = 0; j <= i; j++) {
//         txt += "*"
//     }
//     console.log(txt)

// let s = 1
// for (let i = 0; i < n; i++) {
//     let txt = ""
//     for (let j = 0; j <= i; j++) {
//         txt += s
//         s++
//     }
//     console.log(txt)
// }

for (let i = 0; i < n; i++) {
    let txt = ""
    for (let j = 0; j <= i; j++) {
        if (i === 0 || i === n - 1) {
            txt += "*"
        }
        else {
            if (j === 0 || j === i) {
                txt += "*"

            }
            else {
                txt += " "
            }
        }
    }
    console.log(txt)
}
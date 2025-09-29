const n = 10
// for (let i = 0; i < n; i++) {
//     let txt = ""
//     for (let j = 0; j < n; j++) {
//         txt += "*"
//     }
//     console.log(txt)
// }
// s = 1
// for (let i = 0; i < n; i++) {
//     let txt = ""
//     for (let j = 1; j <= n; j++) {

//         txt += " " + s
//         s++

//     }

//     console.log(txt)
// }



for (let i = 0; i < n; i++) {
    let txt = ""
    for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1) {
            txt += " * "
        }
        else {
            if (j === 0 || j === n - 1) {
                txt += " * "
            }
            else {
                txt += "   "
            }
        }
    }
    console.log(txt)
}
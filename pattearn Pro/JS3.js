const n = 5
// for (let i = 0; i < n; i++) {
//     let txt = ""
//     for (let j = n; j > i; j--) {
//         txt += "*"

//     }
//     console.log(txt)
// }
let s = 50
for (let i = 0; i < n; i++) {
    let txt = ""
    for (let j = n; j > i; j--) {
        txt += " " + s
        s--

    }
    console.log(txt)
}
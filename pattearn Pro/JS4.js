const n = 5
for (let i = 0; i < n; i++) {
    let txt = ""
    for (let j = 0; j < i; j++) {
        txt += " "
    }
    for (let k = n; k > i; k--) {
        txt += "*"
    }
    console.log(txt)
}
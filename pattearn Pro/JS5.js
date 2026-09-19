const n = 5
for (let i = 0; i < n; i++) {
    let txt = ""
    for (let j = n; j > i; j--) {
        txt += " "
    }
    for (let k = 0; k <= i; k++) {
        txt += "*"
    }
    for (let z = 0; z < i; z++) {
        txt += "*"
    }
    console.log(txt)
}
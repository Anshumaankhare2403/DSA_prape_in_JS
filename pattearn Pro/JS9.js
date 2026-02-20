const n = 5;
let num = 0
let num2 = 2
for (let i = 0; i < n; i++) {
    let txt = ""
    for (let k = n - 1; k >= i; k--) {
        txt += "   "
    }
    for (let x = 0; x < i; x++) {
        // txt += "$"
        if (num <= 9) {
            txt += ` 0${num}`
        }
        else {
            txt += ` ${num}`

        }
        num++
    }

    for (let j = 0; j <= i; j++) {
        if (num <= 9) {
            txt += ` 0${num}`
        }
        else {
            txt += ` ${num}`

        }
        num++
    }
    console.log(txt)

}
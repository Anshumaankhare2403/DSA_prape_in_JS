const n = 10
for (let i = 0; i < n; i++) {
    let txt = ""
    for (let j = n; j > i; j--) {
        txt += " "

    }

    for (let k = 0; k <= i; k++) {
        if (k === 0 || k === 1 || i === n / 2 || i === n / 2 + 1) {
            txt += "*"
        }
        else {
            txt += " "
        }
    }
    for (let g = 0; g < i; g++) {
        // txt += "+"
        if (i === g + 2 || i === g + 1 || i === n / 2 || i === n / 2 + 1) {
            txt += "*"

        }

        else {
            txt += " "

        }
    }



    console.log(txt)

}


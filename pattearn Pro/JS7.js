const n = 10

for (let i = 0; i < n; i++) {
    let txt = ""
    for (let j = 0; j < n; j++) {

        txt += " "


    }
    for (let j = 0; j < n / 2 / 3; j++) {

        txt += "*"


    }
    for (let x = n / 2; x > i; x--) {

        // txt += "*"
        if (i === x - 1 || i === x - 2) {
            txt += "*"
        }
        else {
            txt += " "
        }


    }
    for (let k = n / 2; k <= i; k++) {

        if (k === i - 0 || k === i - 1) {
            txt += "*"
        }
        else {
            txt += " "
        }

    }
    console.log(txt)

}
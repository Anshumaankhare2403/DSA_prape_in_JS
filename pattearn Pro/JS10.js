let n = 5;
let t = n;
for (let i = 0; i < n; i++) {
    let txt = "";
    for (let j = 0; j < n; j++) {
        if (i === j || i === n - 1 || i === 0) {
            txt += "* ";
            if (i === 1 || j === n - 1) {
                txt += "-"
            }

        }



    }
    console.log(txt)
}
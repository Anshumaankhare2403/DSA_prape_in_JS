// Pick an even number so n/2 and n/6 stay integers
const n = 12;                      // change this to scale the letters
const mid = Math.floor(n / 2);     // handy shortcut

for (let i = 0; i < n; i++) {
    let line = "";

    /* === 1st pattern (your first loop – looks like an “A”) === */
    for (let j = n; j > i; j--) line += " ";

    for (let k = 0; k <= i; k++) {
        if (k <= 1 || i === mid || i === mid + 1) line += "*";
        else line += " ";
    }

    for (let g = 0; g < i; g++) {
        if (i === g + 1 || i === g + 2 || i === mid || i === mid + 1)
            line += "*";
        else
            line += " ";
    }

    /* ---- small gap between the two letters ---- */
    line += "   ";

    /* === 2nd pattern (your second loop – looks like a “V”) === */
    for (let j = 0; j < n / 2; j++) line += " ";
    for (let j = 0; j < n / 6; j++) line += "*";

    for (let x = n / 2; x > i; x--) {
        if (i === x - 1 || i === x - 2) line += "*";
        else line += " ";
    }

    for (let k = n / 2; k <= i; k++) {
        if (k === i || k === i - 1) line += "*";
        else line += " ";
    }

    console.log(line);
}

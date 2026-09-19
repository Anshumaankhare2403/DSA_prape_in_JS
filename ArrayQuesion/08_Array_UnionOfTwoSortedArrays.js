const num1 = [3, 4, 6, 7, 9, 9];
const num2 = [1, 5, 7, 8, 8];
let Sumnum = new Set(num1.concat(num2));
let Union = [...Sumnum];
for (let i = 0; i < Union.length - 1; i++) {
    for (let j = i + 1; j < Union.length; j++) {
        if (Union[i] > Union[j]) {
            let add = [Union[i], Union[j]] = [Union[j], Union[i]];
        }

    }
}


console.log(Union)
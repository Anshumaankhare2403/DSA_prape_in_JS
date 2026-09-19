let arr = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
let zeroRows = new Set();
let zeroCols = new Set();

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 0) {
            zeroRows.add(i)
            zeroCols.add(j);
        }
    }


}

for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
        if(zeroCols.has(j)||zeroRows.has(i)){
            arr[i][j] = 0;
        }
    }


}

console.log(arr);
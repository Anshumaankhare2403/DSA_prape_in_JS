const arr = [
    [3, 1, 2],
    [9, 5, 4],
    [8, 7, 6]
];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        let min = j;
        // console.log(arr[i][j])
        for (let k = j + 1; k < arr.length; k++) {
            console.log(arr[i][j][k])

        }
        if (min !== j) {
            [arr[j], arr[min]] = [arr[min], arr[j]]
        }
    }

}
console.log(arr)

// Modify Bubble Sort to stop early if the array becomes sorted before all passes. Test it on [1, 2, 3, 4, 5].

function Issorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return bubbleSorting(arr);
        }
    }
    return "Array allready sorted";
}

function bubbleSorting(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let swaped = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaped = true;
            }
        }
        if (!swaped) break;
    }
    return arr;
}

let arr = [3, 2, 1, 4, 5];
console.log(Issorted(arr));
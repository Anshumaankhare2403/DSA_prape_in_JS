function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}


console.log("Linear Search (target 6):", linearSearch([2, 4, 6, 8, 10], 6));

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (target < arr[mid]) right = mid - 1;
        else left = mid + 1;
    }

    return -1;
}


console.log("Binary Search (target 15):", binarySearch([5, 10, 15, 20, 25], 15));



function findMissingNumber(arr) {
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    console.log(actualSum)
    return expectedSum - actualSum;
}

const numbers = [0, 1, 3];
const missing = findMissingNumber(numbers);
console.log(`The missing number is: ${missing}`); // Output: The missing number is: 4
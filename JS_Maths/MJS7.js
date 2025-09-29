let num = 31
let count = 0
let arr = []
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        arr.push(i)
        count++
    }

}
console.log(arr)
console.log(count === 2 ? "prime number" : "not a prime number")


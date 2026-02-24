// Recustion is js
// function prin(n, i) {
//     console.log(i)
//     i++
//     if (i >= n) return i
//     return prin(n, i)
// }
// prin(5, 1)



//  other way to do code in recursion

// function reuse(n, i = 1) {

//     // console.log(i)
//     if (i >= n) return i
//     i++
//     return reuse(n, i)

// }

// reuse(5)


// sum the number using recution

function sumall(n, i = 0, s = 0) {
    // console.log(i)
    if (i >= n) return s
    i++

    // console.log(s)
    return sumall(n, i, s + i)
}
console.log(sumall(5))






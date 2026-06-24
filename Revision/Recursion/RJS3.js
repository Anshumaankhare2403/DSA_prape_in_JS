function factor(n, i = 1, s = n) {
    // console.log(n)
    if (i >= n) return s
    n--
    return factor(n, i, s * n)
}

console.log(factor(5))
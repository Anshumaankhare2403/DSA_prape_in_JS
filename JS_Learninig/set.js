
const ll = new Set()
ll.add("a")
ll.add("s")
ll.add("c")
ll.add("b")
ll.add("d")
ll.add("fname", "anmshumaankhare")
for (let x of ll) {
    console.log(x)
}
console.log(ll)
console.log(typeof (ll))
console.log(ll.has(2))
ll.forEach((x) => {
    console.log(x)
})

console.log(ll.values())
let text = ""
for (let a of ll.values()) {
    text += a
}
console.log(text)

console.log(ll.entries())



// weakset

const ss = new WeakSet()
let obj = { "name": "anuj" }
ss.add(obj)
console.log(ss.has(obj))
for (let x of ss) {
    console.log(x)
}
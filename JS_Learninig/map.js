const m = new Map([["anuj", 200], ["kahre", 201]])
console.log(m)
m.set("anshumaankhare", 2000)
m.set(1, 2000)
console.log(m)
console.log(m.get("anuj"))
console.log(typeof (m))
m instanceof Map
console.log(m instanceof Map)
console.log(m.size)
console.log(m.delete(1))
console.log(m.clear())
console.log(m)


// weakmap 

const mm = new WeakMap()
let obj1 = {}
let obj2 = {}
mm.set(obj1, "blue")
mm.set(obj2, "green")
console.log(mm.get(obj1))
console.log(mm.get(obj2))
console.log(mm.has(obj1))
console.log(mm.has(obj2))

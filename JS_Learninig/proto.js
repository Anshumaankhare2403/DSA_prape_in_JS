const aa = "anuuj"

// console.log(typeof (aa))
console.log(aa.__proto__)

const pro = {
    name: "anuj",
    age: 22,

}

const pro2 = {
    sallery: 200000,
    __proto__: pro
}

console.log(pro2.sallery)
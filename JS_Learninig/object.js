

// const car  = {
//     car_name : "BMW",
//     car_price:2000000,
//     car_data:function (){
//         return `CARNAME = ${this.car_name} and CARPRICE =  ${this.car_price}`;
//     },
//     car_colors :['black','blue','green','red','yellow']
// }

// console.log(car.car_name);
// console.log(car.car_price)
// console.log(car.car_data())
// console.log(car.car_colors)

// let arr = []
// for(i in car){
//    arr.push(i)
// }
// console.log(arr)

// for(x of car.car_colors){
//     arr.push(x)
// }
// console.log(arr)
// console.log(arr.length)

const obj =  new Object()

obj.name = ["anshumaan", "khare"]
obj.age = [21,"asd"]
obj.salar = 100000
obj.ShowAllData = function(){
    return `Fullname = ${this.name[0]}${this.name[1]} and Age =${this.age} and salary = ${this.salar} `
}

console.log(obj)

console.log(obj.ShowAllData())
console.log(typeof(String(obj.age)))
// delete obj.age
console.log(obj.age)


const color =  { 
    typeofcolor : {
        colorone:"anujkhare",
        c2 :  "sexxxx",
        c3:"pink"

    },

}


console.log(color['typeofcolor']['c3'])

const xxx = Object.values(color.typeofcolor)

console.log(xxx)


const fruits = {Bananas:300, Oranges:200, Apples:500};
let txt = []

for (let [fruit, value] of Object.entries(fruits)){
    // txt+=fruit+":"+value+"\n"
    txt.push([fruit,value])
}
console.log(txt)

console.log(JSON.stringify(fruits))

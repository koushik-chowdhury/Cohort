const num = [1,2,3,4]
let number = 42
console.log(typeof number)
let text = "Hello"
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof symbol)
let symbolVar = Symbol()
console.log(symbolVar)

// converting dataType

let num1 = '42'
let convertNum = Number(num1) // 1st method
console.log(convertNum);
console.log(typeof convertNum);

let convertNum1 = parseInt(num1) // 1st method
console.log(convertNum1);
console.log(typeof convertNum1);

console.log(Math.floor(Math.random()*6)+1) // random number

const chaiTypes = ['green tea','herbal tea','lemon tea','milk tea']

let index = chaiTypes.indexOf("green tea")

// if(index !== -1){
//     chaiTypes.splice(index, 3)
//     console.log(chaiTypes)
// }

// forEach loop
chaiTypes.forEach((chai, index)=>{
console.log(`${index} : ${chai}`)
})

let moreChaiTypes = ['oolong tea','white tea']

let allChaitype = chaiTypes.concat(moreChaiTypes) // using concat

console.log(allChaitype);

let chaiRecipe = {
    name: 'masala chai',
    ingredients: {
        teaLeaves: 'assam tea',
        milk: 'full cream milk',
        sugar: 'brown sugar',
        spices: ['Dalchini','ginger']
    },
    instruction: 'boil water, add tea leaves, milk, sugar and spices'
}

let updatedRecipe = {
    ...chaiRecipe,
    instruction: 'boil water, add tea leaves, milk, sugar and spices with some love'
}

console.log(updatedRecipe)

let {name,ingredients} = chaiRecipe

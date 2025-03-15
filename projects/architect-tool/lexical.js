// let fname = 'koushik'

// function sayName(){
//     let fname = 'simran'
//     console.log(`indide function fname is ${fname}`)
// }
// console.log(`value of fname is ${fname}`)
// sayName()

function increament(){
    let count = 0
    return function(){
        count++
        return count
    }
}

const x = increament()
console.log(x())
console.log(x())

const y = increament()

console.log(y())
// ## 6. filter() – Return elements that match a condition

// 1. Use `filter()` to get even numbers from `nums4 = [1, 2, 3, 4, 5, 6]`.
// 2. Filter names with 4 or fewer letters from `names2 = ["Bob", "Jonathan", "Kim"]`.
// 3. Extract users older than 18 from `users2 = [{age: 15}, {age: 22}, {age: 30}]`.
// 4. Filter values greater than 50 from `values = [10, 50, 100]`.
// 5. Try filtering numbers greater than 50 from `[10, 20, 30]` and print the result.


// 1
const nums4 = [1, 2, 3, 4, 5, 6]

const evenNums = nums4.filter((number)=>number%2===0)
console.log(evenNums)
console.log(nums4)

// 2 
const names2 = ["Bob", "Jonathan", "Kim","Koushik","Satyajit"]

const namesLess4 = names2.filter((name)=>name.length<=4)
console.log(namesLess4)
console.log(names2)

// 3
const users2 = [{age: 15}, {age: 22}, {age: 30}]

const olderThan18 = users2.filter(({age})=>age>18) // object destructure

console.log(olderThan18)
console.log(users2)

// 4
const values = [10, 50, 100]

const greaterThan50 = values.filter((value)=>value>50)
console.log(greaterThan50)
console.log(values)

// 5

const numbers = [10,20,30]

const newNumber = numbers.filter((number)=>number>50)
console.log(newNumber)

// KEYPOINTS 
    // Creates a new array with elements that pass the conditon.
    // Does NOT modify the original array.
    // Returns an empty array [] if no elements match the condition.

// Callback function parameters:
    // value
    // index
    // original array
// ## 2. pop() – Remove the last element

// 1. Remove and print the last element from `arr = [100, 200, 300]` along with the modified array.
// 2. Try popping from an empty array `emptyArr = []` and print the result.
// 3. Remove the last element from `fruits2 = ["apple", "mango", "grapes"]` and print the result.
// 4. Pop the last element from `nums = [5, 10, 15]`, store it in `lastNum`, and print both.
// 5. Check if `obj2 = { key: "value" }` supports the `pop()` method and explain the result.

const arr = [100, 200, 300] 

let removedArray = arr.pop(arr)
console.log(removedArray)

const emptyArr =[]
console.log(emptyArr.pop())

const fruits2 = ["apple", "mango", "grapes"]

let removeElement = fruits2.pop()
console.log(removeElement)

const nums = [5, 10, 15]
let lastNum = nums.pop()
console.log(lastNum)

const student = {
    name:'koushik',
    surname:'chowdhury'
} 

// student.pop() error not a function





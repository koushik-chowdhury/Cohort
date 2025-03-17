// ## 2. pop() – Remove the last element

// 1. Remove and print the last element from `arr = [100, 200, 300]` along with the modified array.
// 2. Try popping from an empty array `emptyArr = []` and print the result.
// 3. Remove the last element from `fruits2 = ["apple", "mango", "grapes"]` and print the result.
// 4. Pop the last element from `nums = [5, 10, 15]`, store it in `lastNum`, and print both.
// 5. Check if `obj2 = { key: "value" }` supports the `pop()` method and explain the result.

// 1
const arr = [100, 200, 300] 

let removedArray = arr.pop(arr)
console.log(removedArray)
console.log(arr)

// 2
const emptyArr =[]
const res = emptyArr.pop()
console.log(res)

// 3
const fruits2 = ["apple", "mango", "grapes"]

const removeElement = fruits2.pop()
console.log(removeElement)
console.log(fruits2)

// 4
const nums = [5, 10, 15]

let lastNum = nums.pop()
console.log(lastNum)
console.log(nums)

// 5
const student = {
    name:'koushik',
    surname:'chowdhury'
} 

// KEYPOINTS 
    // removes the last element from the array
    // returns the removed element
    // return undefined if there is no element in the array
    // not work on objects





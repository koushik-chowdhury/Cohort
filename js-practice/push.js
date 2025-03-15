// ## 1. push() – Add elements to the end

// 1. Add "orange" and "banana" to the array `fruits = ["apple", "mango"]` and print the result.
// 2. Create an empty array `numbers`, push `10, 20, 30` into it, and print the array.
// 3. Push "JavaScript" into the array `skills = ["HTML", "CSS"]` and display the result.
// 4. Given `obj = { items: ["Item1", "Item2"] }`, push "New Item" into the `items` array and print it.
// 5. Push `[4, 5, 6]` into `arr1 = [1, 2, 3]` and print the result.


const fruits = ["apple", "mango"]

fruits.push('orange','banana')
console.log(fruits);

const number = []
number.push(10,20,30)
console.log(number)

skills = ['HTML','Css']
skills.push('Javascript')

console.log(skills)

const obj = { items: ["Item1", "Item2"] }

obj.items.push('item3')
console.log(obj)


const arr1 = [1,2,3,]
arr1.push(...[4, 5, 6])

console.log(arr1)


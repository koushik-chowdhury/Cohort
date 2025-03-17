// # 5. map() – Transform each element

// 1. Use `map()` to double each element in `nums3 = [10, 20, 30]` and print the result.
// 2. Convert `celsius = [0, 20, 30]` to Fahrenheit using `map()` and print the new array.
// 3. Convert `lowerCaseWords = ["apple", "banana"]` to uppercase using `map()`.
// 4. Extract names from `users = [{name: "John"}, {name: "Alice"}]` using `map()`.
// 5. Use `map()` to find the length of each string in `strList = ["hello", "world", "JavaScript"]`.

// 1
const nums3 = [10, 20, 30];

const result = nums3.map((el) => el * 2);
console.log(result);
console.log(nums3)

// 2
const celcius = [0, 20, 30];
const fahrenheit = celcius.map(celToFar);
function celToFar(c) {
  return (c * 9) / 5 + 32;
}
console.log(fahrenheit);
console.log(celcius)

// 3
const lowerCaseWords = ["apple", "banana"];

const upperCase = lowerCaseWords.map(changeCase);
function changeCase(word) {
  return word.toUpperCase();
}
console.log(upperCase);
console.log(lowerCaseWords)

// 4
const users = [{ name: "John" }, { name: "Alice" }];

let names = users.map(({name})=>name)
console.log(names)
console.log(users)

// 5
const strList = ["hello", "world", "JavaScript"]

const len = strList.map((str)=>(
    `${str}:${str.length}`
))
console.log(len)
console.log(strList)

// KEYPOINTS 
    // Creates a new array with transformed elements
    // Does NOT modify the original array.

// Callback function parameters:
    // value
    // index
    // original array
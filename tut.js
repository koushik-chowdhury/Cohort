// const obj1 = {
//   fname: "koushik",
//   lname: "chowdhury",
// };
// console.log(obj1);

// // class

// class Person {
//   constructor(fname, lname,town,isActive) {
//     this.fname = fname;
//     this.lname = lname;
//     this.town = town
//     this.isActive = isActive
//   }
//   getFullName() {
//     return `${this.fname} ${this.lname}`;
//   }
// }

// const p1 = new Person("Piyush", "Garg",'Malda',true);
// const p2 = new Person("Akash", "Kadlag");

// console.log(p1.getFullName());
// console.log(p2.getFullName());
// console.log(p2.getFullName());
// console.log(p1);

// // Task

// class A {
//   funInsideA() {
//     return ("A");
//   }
// }
// class B extends A{
//   funInsideB() {
//     return ("B");
//   }
// }
// const p = new B();
// console.log(p.funInsideA());
// test passed need to understand the logic
// function generatePattern(n) {
//   let star = "";

//   // Upper pyramid
//   for (let i = 1; i <= n; i++) {
//     for (let space = i; space < n; space++) {
//       star += ' ';
//     }
//     star += "*".repeat(2 * i - 1);
//     star += '\n';
//   }

//   // Lower inverted pyramid
//   for (let i = 1; i < n; i++) { // Runs only `n-1` times
//     for (let space = 1; space <= i; space++) {
//       star += ' ';
//     }
//     for (let j = 1; j <= (2 * (n - i) - 1); j++) {
//       star += "*";
//     }
//     if (i !== n - 1) star += '\n'; // Prevents the extra newline at the end
//   }

//   return star;
// }

// console.log(generatePattern(5));

// Adding a custom method to Function prototype

// Function.prototype.describe = function() {
//   console.log(`function name is ${this.name}`);
// };

// // Example 1: Named function
// function testFunction() {
//   console.log("Hello, World!");
// }

// Calling describe on the function
// testFunction.describe(); // Output: function name is testFunction

// function applyOperation(a,b,operation){
//   return operation(a,b)
// }
// const result = applyOperation(20,10,(x,y)=>x/y)
// console.log(result)

// let count = 0
// function counter(){
//   return function create(){
//     count++
//     return count
//   }
// }

n = 5
let mounten = ''
for(let i= n; i>=1;i--){
  for(let j = 1; j<=i;j++){
    mounten += '*'
  }
  mounten += '0'
}
console.log(mounten)

foodList = ['meat','burger','pizza','rice']
foodList = foodList.filter(food => food.toLowerCase() !== 'burger')
console.log(foodList)
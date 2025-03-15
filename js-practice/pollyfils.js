const arr = [1, 2, 3, 4, 5, 6];

// // Signature of forEach - No return, function input, value, index

// //  call fn for every value

// if (!Array.prototype.myForEache) {
//   Array.prototype.myForEache = function (userFn) {
//     const originalArr = this;
//     // console.log(this);
//     for (let i = 0; i < originalArr.length; i++) {
//       userFn(originalArr[i], i);
//     }
//   };
// }

// const ret = arr.myForEache(function (value, index) {
//   console.log(`${index} at ${value}`);
// });

// // MAP

// // Signature of map
// // Return ? - New Array, each element iterate, userFn

// if (!Array.prototype.myMap) {
//   Array.prototype.myMap = function (userFn) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//       const values = userFn(this[i], i);
//       result.push(values);
//     }
//     return result;
//   };
// }

// const tripple = arr.myMap((e) => e * 3);
// console.log(tripple);

// // Filter

// // Signature - Return new array | input: userFn,
// // agar user ka function true return karta hai toh current value ko new array mai karta hai

// const mod = arr.filter((e) => e % 2 === 0);
// console.log(mod);

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

// const newMod = arr.myFilter((e) => e % 2 === 0);
// console.log(`Hello dosto ${newMod}`);

// const index = arr.indexOf(2);

if (!Array.prototype.myIndexOf) {
  Array.prototype.myIndexOf = function(searchElement, fromIndex) {
    let n = fromIndex | 0;
    // if (n < 0) {
    //   n = Math.max(this.length + n, 0);
    // }
    for (let i = n; i < this.length; i++) {
      if (searchElement === this[i]) {
        return i;
      }
    }
    return -1;
  };
}

console.log(`hey i am ${arr.myIndexOf(2)}`)



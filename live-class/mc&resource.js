// forEach polyfill

// Signature

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  };
}
let arr = [1, 2, 3, 4, 5];

// arr.myForEach((value,index)=>{
//     console.log(value, index)
// })

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      let value = cb(this[i], i);
      result.push(value);
    }
    return result;
  };
}

const tripArray = arr.myMap((e) => e * 3);
console.log(tripArray);

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, initialValue = undefined) {
    let acc = initialValue || this[0];
    const startIndex = initialValue ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      acc = cb(acc, this[i]);
    }
    return acc;
  };
}

console.log(arr.myReduce((acc, cur) => acc + cur));


// pollyfill of promise


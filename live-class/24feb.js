
// console.log(arr[-11]);

// negetiveIndex(arr, -1)

const user = {
  name: "koushik",
  age: 22,
  password: "123",
};

const proxyUser = new Proxy(user, {
    get(target, prop, value) {
    console.log(prop);
    if (prop === "password") {
        throw new Error("Access Denied");
    }
    return target[prop];
},
set(target, prop, user) {},
});
console.log(proxyUser.city);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function negetiveIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  });
}

let Arr = negetiveIndex(arr)

Arr[-1] = 22

console.log(Arr)


// PROJECT
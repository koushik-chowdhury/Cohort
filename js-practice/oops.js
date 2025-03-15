// diffrence between function and method
// method : means part ob object | function means stand alone function

const person1 = {
  fname: "koushik",
  lname: "chowdhury",
  getFullname: function () {
    return `${this.fname} ${this.lname}`;
  },
};
const person2 = {
  fname: "Simran",
  lname: "chowdhury",
};

console.log(person1.getFullname());

person2.__proto__ = person1;

console.log(person2.getFullname());

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullname() {
    return `${this.fname} ${this.lname}`;
  }
}

const p1 = new Person("koushik", "chowdhury");
const p2 = new Person("Simran", "chowdhury");

console.log(p1.getFullname());

function Robot(name, batteryLevel) {
  this.name = name;
  this.batteryLevel = batteryLevel;
}

// Define charge method on Robot's prototype
Robot.prototype.charge = function () {
  this.batteryLevel += 20;
  if (this.batteryLevel > 100) {
    this.batteryLevel = 100; // Ensures battery level does not exceed 100
  }
  return this.batteryLevel;
};

// Example Usage:
let bot = new Robot("Robo1", 50);
console.log(bot.charge()); // Output: 70
console.log(bot.charge()); // Output: 90
console.log(bot.charge()); // Output: 100
console.log(bot.charge()); // Output: 100 (shouldn't exceed 100)


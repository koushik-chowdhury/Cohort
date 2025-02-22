const student1 = {
  fname: "koushik",
  lname: "chowdhury",
  getFullName: function(){
    return`${this.fname} ${this.lname}`
  },
};
const student2 = {
  fname: "Elon",
  lname: "Musk",
};

console.log(student1.getFullName())

student2.__proto__ = student1
console.log(student2.getFullName())

class Person{
    constructor(fname, lname){
        this.fname = fname
        this.lname = lname
    }
   getFullName(){
return`${this.fname} ${this.lname}`
    }
}

const p1 = new Person('koushik','chowdhury')
const p2 = new Person('Elon','Musk')

console.log(p2.getFullName())
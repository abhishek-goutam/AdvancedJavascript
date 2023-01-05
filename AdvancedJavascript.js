// 1.Write a function and use 'call' to call the function

var obj = { num: 2 };

var addToThis = function (a) {
  return this.num + a;
};

console.log(addToThis.call(obj, 1));

// 2.Write a program using apply
var arr = [1, 2, 3];

var obj = { num: 2 };

var obj2 = { num: 5 };

var addToThis = function (a) {
  return this.num + a;
};

console.log(addToThis.apply(obj, arr));

console.log(addToThis.apply(obj2, arr));

// 3.Write a program using bind

let name = {
  firstName: "Abhishek",

  lastName: "Goutam",
};

let printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let printName = printFullName.bind(name);

printName();

// 4.Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
// Dont pass in args. Read from 'this' and use BIND

let student = {
  age: 20,
};

let printAge = function () {
  console.log(this.age);
};

let ageDetails = printAge.bind(student);

ageDetails();

// ********************Currying************************

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(4);

let multiplyByThree = multiply.bind(this,3);
multiplyByThree(10);

//  *************************************Currying using function closure************************************

let multiplyUsingClosure = function(x){

    return function(y){
        console.log(x * y);
    }
}

let multiplyByTwos = multiplyUsingClosure(2);
multiplyByTwos(2);
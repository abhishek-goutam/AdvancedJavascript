
class Student {
  static count = 0;
  constructor(name, age, phoneNumber, marks) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.marks = marks;
    Student.numberOfObjects();
  };
  
  eligible = () => {
    return () => {
      if (this.marks > 40 && this.age > 24) {
        return true;
      } else {
        return false;
      }
    };
  }

  static numberOfObjects() {
    console.log(Student.count++);
  }
}

let student1 = new Student("Abhishek", 30, 1234567890, 41);
let student2 = new Student("Goutam", 20, 1234567098, 29);
let student3 = new Student("Ankit", 28, 1234567890, 30);
let student4 = new Student("Alex", 38, 1234567890, 42);
let student5 = new Student("Bobby", 18, 1234567890, 60);

let arr = [];

arr.push(student1);
arr.push(student2);
arr.push(student3);
arr.push(student4);
arr.push(student5);

for (let i = 0; i < arr.length; i++) {
  if (arr[i].eligible()() == true) {
    console.log("Eligible Candidate -->" + JSON.stringify((arr[i])));
  }
}
console.log(student1.eligible()());

// doubts
// 1. How can we push the objects created to an array at the time of object creation.
// 2. Since in arrow function the this keyword refers to the global variable or object , so when we create a function
//  and return an arrow function how should we make the parameters so that it can refer to the variabl in scope.

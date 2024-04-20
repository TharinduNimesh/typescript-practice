// create a class Person with properties name, email, mobile and method walk
class Person {
  constructor(
    public name: string,
    public email: string,
    public mobile: string
  ) {}

  walk() {
    console.log("Walking");
  }
}

/* 
    create a class Student that extends Person with 
    properties studentId, grade and method study 
*/
class Student extends Person {
  constructor(
    public readonly studentId: number,
    public name: string,
    public email: string,
    public mobile: string,
    public grade: number
  ) {
    super(name, email, mobile);
  }

  study() {
    console.log("Studying");
  }
}

const student1 = new Student(1, "Alice", "alice@example.com", "1234567890", 10);

console.log(student1.studentId); // 1
student1.walk(); // we can call walk method from Person class
student1.study(); // we can call study method from Student class

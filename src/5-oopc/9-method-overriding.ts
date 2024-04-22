class Person {
  constructor(
    public _name: string,
    public email: string,
    public mobile: string
  ) {}

  get name() {
    return this._name;
  }

  walk() {
    console.log("Walking");
  }

  talk() {
    console.log("Talking");
  }
}

class Student extends Person {
  constructor(
    public readonly studentId: number,
    public override _name: string,
    public override email: string,
    public override mobile: string,
    public grade: number
  ) {
    super(_name, email, mobile);
  }

  study() {
    console.log("Studying");
  }
}

class Teacher extends Person {
  constructor(
    public readonly teacherId: number,
    public override _name: string,
    public override email: string,
    public override mobile: string,
    public subject: string
  ) {
    super(_name, email, mobile);
  }

  override get name() {
    return `Dr. ${this._name}`;
  }

  override talk() {
    console.log("Teaching");
  }
}

const student1 = new Student(1, "Alice", "alice@example.com", "1234567890", 10);
const teacher1 = new Teacher(1, "Bob", "Bob@example.com", "1234567890", "Math");

console.log(student1.studentId); // 1
student1.talk(); // we can call talk method from Person class
console.log(student1.name); // Alice

console.log(teacher1.teacherId); // 1
teacher1.talk(); // we can call overridden talk method from Teacher class
console.log(teacher1.name); // Dr. Bob (name is prefixed with Dr. from overridden getter)

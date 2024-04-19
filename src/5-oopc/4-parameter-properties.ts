class Employee {
  // this is a shorthand way of defining and initializing properties
  constructor(
    private readonly id: number,
    public name: string,
    public role: string
  ) {}
}

const employee = new Employee(1, "John Doe", "Developer");

console.log(employee.name); // John Doe
console.log(employee.role); // Developer

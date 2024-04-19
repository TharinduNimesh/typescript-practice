type Role = "admin" | "user" | "developer";

class Employee {
  constructor(
    private readonly id: number,
    public name: string,
    private _role: Role
  ) {}

  // getter
  get role() {
    return this._role;
  }

  // setter
  set role(role: Role) {
    this._role = role;
  }
}

const employee = new Employee(1, "John Doe", "developer");

console.log(employee.name); // John Doe
console.log(employee.role); // developer (getter)

employee.role = "admin"; // setter
console.log(employee.role); // admin (getter)

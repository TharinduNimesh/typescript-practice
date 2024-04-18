// Define type Employee
type Employee = {
  name: string;
  age: number;
};

//  Define type Manager by combining Employee and department
type Manager = {
  department: string;
} & Employee;

// Create an object of type Manager
const employeeManager: Manager = {
  name: "John Doe",
  age: 42,
  department: "Engineering",
};

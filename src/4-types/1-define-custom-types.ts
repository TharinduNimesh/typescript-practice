// Define custom types (User and Car) using TypeScript
type User = {
  name: string;
  age: number;
  mobile: string;
};

// Define Car type (with User type as owner)
type Car = {
  brand: string;
  model: string;
  year: number;
  owner: User;
};

// Create a car object using Car type
const car: Car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2019,
  owner: {
    name: "John Doe",
    age: 30,
    mobile: "1234567890",
  },
};

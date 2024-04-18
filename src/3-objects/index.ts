// Define Custom Object Type
type User = {
  readonly id: number;
  name: string;
  age: number;
  retire: (date: Date) => void;
};

// Define user object
const user: User = {
  id: 1,
  name: "Alice",
  age: 30,
  retire: function (date: Date) {
    console.log(`${this.name} will retire on ${date}`);
  },
};

user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
user.name = "Bob"; // No Error
user.age = 40; // No Error
user.retire(new Date("2040-01-01"));
// Output: Bob will retire on Fri Jan 01 2040 00:00:00 GMT+0700 (Indochina Time)

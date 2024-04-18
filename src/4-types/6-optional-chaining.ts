// define a Customer type
type Customer = {
  birthDate: Date;
};

// Define a function that returns a Customer object or null
function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthDate: new Date() };
}

const customer1 = getCustomer(1); // birthDate is a Date
const customer2 = getCustomer(0); // birthDate is undefined

console.log(customer1?.birthDate.getFullYear()); // 2021
console.log(customer2?.birthDate.getFullYear()); // undefined

// Access optional in Arrays
const arr: number[] | null = null;
console.log(arr?.[0]); // undefined

// Access optional in any (function) 
let log: any = null;
log?.("Hello, World!"); // undefined

log = console.log;
log?.("Hello, World!"); // Hello, World!

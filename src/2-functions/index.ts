// get income (type number) and return tax (type number)
function calculateTax1(income: number): number {
  if (income < 10000) {
    return income * 0.3;
  }
  return income * 0.4;
}
calculateTax1(5000); // output: 1500
calculateTax1(15000, "someValue"); // Error: Expected 1 arguments, but got 2.

// get income (type number) and taxRate (type number) and return tax (type number)
function calculateTax2(income: number, taxRate: number): number {
  if (income < 10000) {
    return income * taxRate;
  }
  return income * taxRate;
}
calculateTax2(5000, 0.3); // output: 1500
calculateTax2(15500); // Error: Expected 2 arguments, but got 1.

// get income (type number) and *optional* taxRate (type number) and return tax (type number)
function calculateTax3(income: number, taxRate: number = 0.3): number {
  if (income < 10000) {
    return income * taxRate;
  }
  return income * taxRate;
}
calculateTax3(5000); // output: 1500
calculateTax3(15500, 0.5); // output: 7750

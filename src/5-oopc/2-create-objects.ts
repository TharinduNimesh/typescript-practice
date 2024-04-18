import Account from "./1-define-classes";

const account = new Account(1, "John Doe");
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance()); // 50

try {
  account.withdraw(100);
} catch (error: any) {
  console.error(error?.message); // Insufficient balance
}

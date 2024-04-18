class Account {
  readonly id: number;
  name: string;
  private balance: number = 0; // private access modifier
  nickname?: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): number | never {
    if (this.balance < amount) {
      throw new Error("Insufficient balance");
    }
    this.balance -= amount + this.calculateTax();
    return this.balance;
  }

  // private method
  private calculateTax(): number {
    return this.balance * 0.05;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new Account(1, "John Doe");

account.balance = 100; // Property 'balance' is private and only accessible within class 'Account'.
account.calculateTax(); // Property 'calculateTax' is private and only accessible within class 'Account'.

class Account {
  readonly id: number;
  name: string;
  balance: number = 0;
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
    this.balance -= amount;
    return this.balance;
  }

  getBalance(): number {
    return this.balance;
  }
}

export default Account;

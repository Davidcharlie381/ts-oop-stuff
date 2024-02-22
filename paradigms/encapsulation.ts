class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (this.balance < amount) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
    }
  }

  getBalance(): number {
    return this.balance
  }

}


const myAccount: BankAccount = new BankAccount(2_000_000);
myAccount.deposit(2000);
myAccount.withdraw(500);
console.log(myAccount.getBalance()); // Encapsulation in action as it restricts access to balance
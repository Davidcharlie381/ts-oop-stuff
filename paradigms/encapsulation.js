"use strict";
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance < amount) {
            console.log("Insufficient funds");
        }
        else {
            this.balance -= amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const myAccount = new BankAccount(2000000);
myAccount.deposit(2000);
myAccount.withdraw(500);
console.log(myAccount.getBalance()); // Encapsulation in action as it restricts access to balance

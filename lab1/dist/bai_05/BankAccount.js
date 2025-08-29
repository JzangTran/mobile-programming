"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdraw(amount) {
        this.balance = this.balance > 0 ? this.balance - amount : this.balance;
    }
}
exports.BankAccount = BankAccount;

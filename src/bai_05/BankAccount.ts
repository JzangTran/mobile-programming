export class BankAccount {
    balance: number | 0;

    constructor(balance: number) {
        this.balance = balance;
    }

    public deposit(amount: number){
        this.balance = this.balance + amount;
    }

    public withdraw(amount: number){
        this.balance = this.balance > 0? this.balance - amount: this.balance;
    }
}
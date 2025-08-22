import { Payment } from "./Payment";

export class CardPayment implements Payment {
    cardNumber: string;

    constructor(cardNumber: string) {
        this.cardNumber = cardNumber;
    }

    pay(amount: number): void {
        console.log(`Đã trả ${amount} đ bằng thẻ`);
    }
}
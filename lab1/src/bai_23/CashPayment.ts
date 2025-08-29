import { Payment } from "./Payment";

export class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`Đã trả ${amount} đ bằng tiền mặt`);
    }
}
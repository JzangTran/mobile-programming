"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardPayment = void 0;
class CardPayment {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }
    pay(amount) {
        console.log(`Đã trả ${amount} đ bằng thẻ`);
    }
}
exports.CardPayment = CardPayment;

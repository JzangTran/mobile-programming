"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(products) {
        this.products = products;
    }
    totalPrice() {
        let totalPrice = 0;
        this.products.forEach(product => totalPrice += product.price);
        return totalPrice;
    }
}
exports.Order = Order;

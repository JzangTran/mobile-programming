import { Product } from "./Product";

export class Order {
    products: Product[]

    constructor(products: Product[]) {
        this.products = products;
    }

    totalPrice(): number {
        let totalPrice = 0;
        this.products.forEach(product => totalPrice += product.price)
        return totalPrice;
    }
}
import { Product } from "./Product";

export function getProductsByMinPrice(products: Product[] ,price: number) {
    return products.filter(product => product.price > price);
}
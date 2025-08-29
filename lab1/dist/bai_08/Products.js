"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsByMinPrice = getProductsByMinPrice;
function getProductsByMinPrice(products, price) {
    return products.filter(product => product.price > price);
}

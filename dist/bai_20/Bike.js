"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
class Bike {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    run() {
        console.log(`Xe đạp ${this.model} đang chạy bằng 2 bánh`);
    }
}
exports.Bike = Bike;

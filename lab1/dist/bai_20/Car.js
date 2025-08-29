"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    run() {
        console.log(`Xe hơi ${this.model} đang chạy bằng 4 bánh`);
    }
}
exports.Car = Car;

import { Vehicle } from "./Vehicle";

export class Bike implements Vehicle {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    run(): void {
        console.log(`Xe đạp ${this.model} đang chạy bằng 2 bánh`);
    }
}
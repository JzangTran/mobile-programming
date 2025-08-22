export class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public toString(): string {
        return `brand: ${this.brand}, model: ${this.model}, year: ${this.year}`;
    }
}
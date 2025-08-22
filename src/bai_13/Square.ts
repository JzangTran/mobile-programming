import { Shape } from "./Shape";

export class Square extends Shape {
    size: number;

    constructor(size: number) {
        super();
        this.size = size;
    }

    area(): number {
        return Math.pow(this.size, 2);
    }
}
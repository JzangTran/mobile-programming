export class Rectangle {
    width: number | 0.0;
    height: number | 0.0;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public area(): number {
        return this.width * this.height;
    }

    public perimeter(): number {
        return (this.width + this.height) * 2;
    }
}
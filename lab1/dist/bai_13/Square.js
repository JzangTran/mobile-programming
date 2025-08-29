"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Shape_1 = require("./Shape");
class Square extends Shape_1.Shape {
    constructor(size) {
        super();
        this.size = size;
    }
    area() {
        return Math.pow(this.size, 2);
    }
}
exports.Square = Square;

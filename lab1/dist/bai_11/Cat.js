"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
const Animal_1 = require("./Animal");
class Cat extends Animal_1.Animal {
    constructor(name) {
        super(name);
    }
    meow() {
        return `${this.name} says: Meow! Meow!`;
    }
}
exports.Cat = Cat;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`${this.name} đang phát ra tiếng!`);
    }
}
exports.Animal = Animal;

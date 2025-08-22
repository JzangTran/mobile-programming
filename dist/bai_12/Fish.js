"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name} is flying in the sky!`);
    }
}
exports.Fish = Fish;

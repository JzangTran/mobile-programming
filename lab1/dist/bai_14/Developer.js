"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = void 0;
const Employee_1 = require("./Employee");
class Developer extends Employee_1.Employee {
    constructor(name) {
        super(name);
    }
    code() {
        console.log(`${this.name} is coding!`);
    }
}
exports.Developer = Developer;

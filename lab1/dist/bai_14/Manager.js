"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
const Employee_1 = require("./Employee");
class Manager extends Employee_1.Employee {
    constructor(name) {
        super(name);
    }
    manage() {
        console.log(`${this.name} is managing the team!`);
    }
}
exports.Manager = Manager;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const Person_1 = require("./Person");
class Teacher extends Person_1.Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    introduce() {
        console.log(`${this.name} là giảng viên môn ${this.subject}`);
    }
}
exports.Teacher = Teacher;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const bai_01_1 = require("../bai_01");
class Student extends bai_01_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = age;
    }
    toString() {
        return `${super.toString()}, grade: ${this.grade}`;
    }
}
exports.Student = Student;

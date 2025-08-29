"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    introduce() {
        console.log(`${this.name} đạt hạng ${this.grade}`);
    }
}
exports.Student = Student;

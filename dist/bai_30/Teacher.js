"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    introduce() {
        console.log(`${this.name} là một giảng viên môn ${this.subject}.`);
    }
}
exports.Teacher = Teacher;

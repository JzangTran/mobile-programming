"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    constructor(students = [], teachers = []) {
        this.students = [];
        this.teachers = [];
        this.students = students;
        this.teachers = teachers;
    }
    displayInfo() {
        console.log("Teachers:");
        this.teachers.forEach((teacher) => teacher.introduce());
        console.log("\nStudents:");
        this.students.forEach((student) => student.introduce());
    }
}
exports.School = School;

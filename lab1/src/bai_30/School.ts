import { Student } from "./Student";
import { Teacher } from "./Teacher";

export class School {
    students: Student[] = [];
    teachers: Teacher[] = [];

    constructor(students: Student[] = [], teachers: Teacher[] = []) {
        this.students = students;
        this.teachers = teachers;
    }

    displayInfo(): void {
        console.log("Teachers:");
        this.teachers.forEach((teacher) => teacher.introduce());

        console.log("\nStudents:");
        this.students.forEach((student) => student.introduce());
    }
}
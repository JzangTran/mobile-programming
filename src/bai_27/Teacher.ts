import { Person } from "./Person";

export class Teacher extends Person {
    subject: string;

    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    introduce(): void {
        console.log(`${this.name} là giảng viên môn ${this.subject}`);
    }
}
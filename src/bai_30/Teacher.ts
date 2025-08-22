export class Teacher {
    name: string;
    subject: string;

    constructor(name: string, subject: string) {
        this.name = name;
        this.subject = subject;
    }

    introduce(): void {
        console.log(`${this.name} là một giảng viên môn ${this.subject}.`);
    }
}
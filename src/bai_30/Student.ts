export class Student {
    name: string;
    grade: string;
    
    constructor(name: string, grade: string) {
        this.name = name;
        this.grade = grade;
    }

    introduce(): void {
        console.log(`${this.name} đạt hạng ${this.grade}`);
    }
}
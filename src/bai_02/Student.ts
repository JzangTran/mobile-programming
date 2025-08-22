import { Person } from "../bai_01";

export class Student extends Person {
    grade: number;

    constructor(name: string, age:number, grade: number) {
        super(name, age);
        this.grade = age;
    }
    
    public override toString(): string {
        return `${super.toString()}, grade: ${this.grade}`;
    }


}
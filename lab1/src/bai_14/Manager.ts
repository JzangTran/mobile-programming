import { Employee } from "./Employee";

export class Manager extends Employee {
    constructor(name: string) {
        super(name);
    }
    
    manage(): void {
        console.log(`${this.name} is managing the team!`);
    }
}
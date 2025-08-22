import { Employee } from "./Employee";

export class Developer extends Employee {
    constructor(name: string) {
        super(name);
    }

    code(): void {
        console.log(`${this.name} is coding!`);
    }
}
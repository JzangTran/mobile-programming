import { Animal } from "./Animal";

export class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    meow(): string{
        return `${this.name} says: Meow! Meow!`;
    }
}
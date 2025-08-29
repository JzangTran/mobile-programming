import { Animal } from "./Animal";

export class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    sound(): void {
        console.log(`${this.name} sủa Gâu! Gâu!`);
    }
}
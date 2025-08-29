import { Animal } from "./Animal";

export class Dog extends Animal {
    public makeSound(): void {
        console.log(`Gâu Gâu!`);
    }
}
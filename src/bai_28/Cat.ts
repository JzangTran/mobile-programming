import { Animal } from "./Animal";

export class Cat extends Animal {
    public makeSound(): void {
        console.log(`Meow Meow!`);
    }
}
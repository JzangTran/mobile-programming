export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sound(): void{
        console.log(`${this.name} đang phát ra tiếng!`);
    }
}
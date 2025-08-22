import { Moveable } from "./Movable";

export class Car implements Moveable {
    move(): void {
        console.log(`Car is moving!`);
    }
}
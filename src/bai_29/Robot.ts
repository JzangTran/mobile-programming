import { Moveable } from "./Movable";

export class Robot implements Moveable {
    move(): void {
        console.log(`Robot is moving!`);
    }
}
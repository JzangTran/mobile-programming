import { Appliance } from "./Appliance";

export class Fan implements Appliance {
    turnOn(): void {
        console.log(`Fan đã bật`);
    }
}
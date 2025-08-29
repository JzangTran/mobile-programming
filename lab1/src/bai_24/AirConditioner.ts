import { Appliance } from "./Appliance";

export class AirConditioner implements Appliance {
    turnOn(): void {
        console.log(`AirConditioner đã bật`);
    }
}
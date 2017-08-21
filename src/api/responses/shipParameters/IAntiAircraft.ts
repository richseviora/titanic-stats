import { IAntiAircraftSlot } from "./IAntiAircraftSlot";

export interface IAntiAircraft {
    slots: { [slotId: string]: IAntiAircraftSlot };
    defense: number;
}

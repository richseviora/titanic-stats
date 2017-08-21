import { ISecondaryBatterySlot } from "./ISecondaryBatterySlot";

export interface ISecondaryBattery {
    distance: number;
    slots: { [slotId: string]: ISecondaryBatterySlot };
}

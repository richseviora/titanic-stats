import {IArtilleryShell} from "./IArtilleryShell";
import {IMainBatterySlot} from "./IMainBatterySlot";

export interface IMainBattery {
    max_dispersion: number;
    shells: { [typeId: string]: IArtilleryShell };
    shot_delay: number;
    rotation_time: number;
    distance: number;
    artillery_id: number;
    artillery_id_str: string;
    slots: {
        [slotId: string]: IMainBatterySlot;
    };
    gun_rate: number;
}
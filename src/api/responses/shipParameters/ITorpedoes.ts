import { ITorpedoSlot } from "./ITorpedoSlot";

export interface ITorpedoes {
    visibility_dist: number;
    distance: number;
    torpedoes_id: number;
    torpedo_name: string;
    reload_time: number;
    torpedo_speed: number;
    rotation_time: number;
    torpedoes_id_str: string;
    max_damage: number;
    slots: { [slotId: string]: ITorpedoSlot };
}

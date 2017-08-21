import {IPlane} from "./IPlane";

export interface ITorpedoBomber extends IPlane {
    torpedo_distance: number;
    torpedo_damage: number;
    torpedo_max_speed: number;
    torpedo_bomber_id_str: string;
    torpedo_bomber_id: number;
    gunner_damage: number;
    max_damage: number;
    torpedo_name: string;
}
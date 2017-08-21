import { IPlane } from "./IPlane";

export interface IDiveBombers extends IPlane {
    dive_bomber_id: number;
    dive_bomber_id_str: string;
    bomb_damage: number;
    bomb_bullet_mass: number;
    bomb_name: string;
    bomb_burn_probability: number;
    max_damage: number;
    accuracy: { max: number; min: number };
}

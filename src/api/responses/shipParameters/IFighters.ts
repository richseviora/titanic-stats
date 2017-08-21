import {IPlane} from "./IPlane";

export interface IFighters extends IPlane {
    fighters_id: number;
    fighters_id_str: string;
    max_ammo: number;
    avg_damage: number;
}
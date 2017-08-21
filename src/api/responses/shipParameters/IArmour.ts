import {IWarshipArmorValues} from "../IWarshipArmorValues";

export interface IArmour {
    casemate: IWarshipArmorValues;
    deck: IWarshipArmorValues;
    extremities: IWarshipArmorValues;
    range: IWarshipArmorValues;
    citadel: IWarshipArmorValues;
    flood_prob: number;
    flood_damage: number;
    health: number;
    total: number;
}
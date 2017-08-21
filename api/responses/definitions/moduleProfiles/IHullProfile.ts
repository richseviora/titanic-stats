export interface IHullProfile {
    anti_aircraft_barrels: number;
    torpedoes_barrels: number;
    range: { max: number, min: number };
    health: number,
    planes_amount: number,
    artillery_barrels: number,
    atba_barrels: number;
}
export interface IHull {
    hull_id: number;
    hull_id_str: string;
    torpedoes_barrels: number;
    health: number;
    anti_aircraft_barrels: number;
    range: {
        max: number;
        min: number;
    };
    planes_amount: number;
    artillery_barrels: number;
    atba_barrels: number;
}

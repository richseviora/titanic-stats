import { IClientRequest } from "./IClientRequest";

export interface IShipParameters extends IClientRequest {
    ship_id: number;
    artillery_id?: number;
    dive_bomber_id?: number;
    engine_id?: number;
    fighter_id?: number;
    fire_control_id?: number;
    flight_control_id?: number;
    hull_id?: number;
    torpedo_bomber_id?: number;
    torpedoes_id?: number;
}

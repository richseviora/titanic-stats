import { IClientRequest } from "./IClientRequest";
import { SupportedLanguages } from "../SupportedLanguages";
import { IPaginatedRequest } from "./IPaginatedRequest";
import { ShipNation } from "../ShipNation";
import { ShipTypes } from "../ShipTypes";

export interface IWarshipRequest extends IClientRequest, IPaginatedRequest {
    fields?: string | string[];
    language?: SupportedLanguages;
    ship_id?: number | number[];
    nation?: ShipNation | ShipNation[];
    type?: ShipTypes | ShipTypes[];
}

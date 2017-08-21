import { IWarship } from "./IWarship";

export interface IWarshipCollection {
    [warshipId: string]: IWarship;
}

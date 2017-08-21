import {IEngine} from "./IEngine";
import {IAntiAircraft} from "./IAntiAircraft";
import {IMobility} from "./IMobility";
import {IHull} from "./IHull";
import {IFireControl} from "./IFireControl";
import {IMainBattery} from "./IMainBattery";
import {ISecondaryBattery} from "./ISecondaryBattery";
import {ITorpedoes} from "./ITorpedoes";
import {IFlightControl} from "./IFlightControl";
import {IFighters} from "./IFighters";
import {ITorpedoBomber} from "./ITorpedoBomber";
import {IDiveBombers} from "./IDiveBombers";
import {IWeaponry} from "./IWeaponry";
import {IConcealment} from "./IConcealment";
import {IArmour} from "./IArmour";

export interface IShipParameters {
    engine: IEngine;
    anti_aircraft: IAntiAircraft | null;
    mobility: IMobility;
    hull: IHull;
    fire_control: null | IFireControl;
    artillery: IMainBattery | null;
    atbas: ISecondaryBattery | null;
    torpedoes: ITorpedoes | null;
    flight_control: IFlightControl | null;
    fighters: IFighters | null ;
    torpedo_bomber: ITorpedoBomber | null ;
    dive_bomber: IDiveBombers | null ;
    weaponry: IWeaponry;
    battle_level_range_max: number;
    battle_level_range_min: number;
    concealment: IConcealment;
    armour: IArmour;
}
import {ModuleType} from "../../ModuleType";
import {ITorpedoBomberProfile} from "./moduleProfiles/ITorpedoBomberProfile";
import {IFireControlProfile} from "./moduleProfiles/IFireControlProfile";
import {ITorpedoProfile} from "./moduleProfiles/ITorpedoProfile";
import {IArtilleryProfile} from "./moduleProfiles/IArtilleryProfile";
import {IHullProfile} from "./moduleProfiles/IHullProfile";
import {IFlightControlProfile} from "./moduleProfiles/IFlightControlProfile";
import {IFighterProfile} from "./moduleProfiles/IFighterProfile";
import {IEngineProfile} from "./moduleProfiles/IEngineProfile";
import {IDiveBomberProfile} from "./moduleProfiles/IDiveBomberProfile";

export interface IModule {
    profile: IModuleProfile;
    name: string;
    image: string;
    tag: string;
    module_id_str: string;
    module_id: number;
    type: ModuleType | string;
    price_credit: number;
}

export interface IModuleProfile {
    torpedo_bomber?: ITorpedoBomberProfile;
    fire_control?: IFireControlProfile;
    torpedoes?: ITorpedoProfile;
    artillery?: IArtilleryProfile;
    hull?: IHullProfile;
    flight_control?: IFlightControlProfile;
    fighter?: IFighterProfile;
    engine?: IEngineProfile;
    dive_bomber?: IDiveBomberProfile;
}


import {IWarshipModuleTree} from "./IWarshipModuleTree";
import {IWarshipModules} from "./IWarshipModules";
import {IShipParameters} from "./shipParameters/IShipParameters";

export interface IWarship {
  description: string;
  price_gold: number;
  ship_id_str: string;
  has_demo_profile: boolean;
  images: {};
  nation: string;
  is_premium: boolean;
  ship_id: number;
  price_credit: number;
  modules: IWarshipModules;
  modules_tree: { [moduleId: string]: IWarshipModuleTree };
  default_profile: IShipParameters;
  upgrades: number[];
  tier: number;
  next_ships: {};
  mod_slots: number;
  type: string;
  name: string;
}

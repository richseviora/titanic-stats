export interface IWarshipCollection {
  [warshipId: string]: IWarship;
}

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
  default_profile: IWarshipProfile;
  upgrades: number[];
  tier: number;
  next_ships: {};
  mod_slots: number;
  type: string;
  name: string;
}

export interface IWarshipProfile {
  engine: {
    engine_id_str: string;
    max_speed: number;
    engine_id: number;
  };
  torpedo_bomber: null | IWarshipTorpedoBomber;
  anti_aircraft: {
    slots: { [slotId: string]: IAntiAircraftSlot };
    defense: number;
  } | null;
  mobility: IWarshipMobility;
  hull: IWarshipHull;
  atbas: {
    distance: number;
    slots: { [slotId: string]: IWarshipSecondaryBatterySlot };
  } | null;
  artillery: {
    max_dispersion: number;
    shells: { [typeId: string]: IArtilleryShell };
    shot_delay: number;
    rotation_time: number;
    distance: number;
    artillery_id: number;
    artillery_id_str: string;
    slots: {
      [slotId: string]: {
        barrels: number;
        name: string;
        guns: number;
      };
    };
    gun_rate: number;
  } | null;
  torpedoes: null | IWarshipTorpedoes;
  fighters: null | IWarshipFighters;
  dive_bomber: null | IDiveBombers;
  fire_control: null | IWarshipFireControl;
  weaponry: {
    anti_aircraft: number;
    aircraft: number;
    artillery: number;
    torpedoes: number;
  };
  battle_level_range_max: number;
  battle_level_range_min: number;
  flight_control: null | IFlightControl;
  concealment: IWarshipConcealment;
  armour: IWarshipArmour;
}

export interface IFlightControl {
  flight_control_id: number;
  flight_control_id_str: string;
  bomber_squadrons: number;
  torpedo_squadrons: number;
  fighter_squadrons: number;
}

export interface IPlane {
  squadrons: number;
  prepare_time: number;
  name: string;
  cruise_speed: number;
  gunner_damage: number;
  count_in_squadron: {max: number; min: number};
  plane_level: number;
  max_health: number;
}

export interface IDiveBombers extends IPlane {
  dive_bomber_id: number;
  dive_bomber_id_str: string;
  bomb_damage: number;
  bomb_bullet_mass: number;
  bomb_name: string;
  bomb_burn_probability: number;
  max_damage: number;
  accuracy: {max: number; min: number};
}

export interface IWarshipFighters extends IPlane {
  fighters_id: number;
  fighters_id_str: string;
  max_ammo: number;
  avg_damage: number;
}

export interface IWarshipTorpedoes {
  visibility_dist: number;
  distance: number;
  torpedoes_id: number;
  torpedo_name: string;
  reload_time: number;
  torpedo_speed: number;
  rotation_time: number;
  torpedoes_id_str: string;
  max_damage: number;
  slots: { [slotId: string]: IWarshipTorpedoSlot };
}

export interface IWarshipTorpedoSlot {
  barrels: number;
  caliber: number;
  name: string;
  guns: number;
}

export interface IWarshipArmorValues {
  max: number;
  min: number;
}

export interface IWarshipArmour {
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

export interface IWarshipConcealment {
  total: number;
  detect_distance_by_plane: number;
  detect_distance_by_ship: number;
}

export interface IWarshipFireControl {
  fire_control_id: number;
  distance: number;
  distance_increase: number;
  fire_control_id_str: string;
}

export interface IArtilleryShell {
  type: "AP" | "HE";
  burn_probability: number | null;
  bullet_speed: number;
  name: string;
  damage: number;
  bullet_mass: number;
}

export interface IWarshipHull {
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

export interface IWarshipTorpedoBomber extends IPlane {
  torpedo_distance: number;
  torpedo_damage: number;
  torpedo_max_speed: number;
  torpedo_bomber_id_str: string;
  torpedo_bomber_id: number;
  gunner_damage: number;
  max_damage: number;
  torpedo_name: string;
}

export interface IWarshipSecondaryBatterySlot {
  burn_probability: number | null;
  bullet_speed: number;
  name: string;
  shot_delay: number;
  damage: number;
  bullet_mass: number;
  type: "HE" | "AP";
  gun_rate: number;
}

export interface IWarshipMobility {
  rudder_time: number;
  total: number;
  turning_radius: number;
  max_speed: number;
}

export interface IAntiAircraftSlot {
  distance: number;
  avg_damage: number;
  caliber: number;
  name: string;
  guns: number;
}

export enum ShipTypes {
  Cruiser = "Cruiser",
  Carrier = "AirCarrier",
  Battleship = "Battleship",
  Destroyer = "Destroyer"
}

export enum ModuleTypes {
  Engine = "Engine",
  Hull = "Hull",
  Artillery = "Artillery",
  Torpedoes = "Torpedoes"
}

export interface IWarshipModuleTree {
  name: string;
  next_modules: number[] | null;
  is_default: boolean;
  price_xp: number;
  price_credit: number;
  next_ships: number[] | null;
  type: string;
  module_id: number;
  module_id_str: string;
}

export interface IWarshipModules {
  engine: number[];
  torpedo_bomber: number[];
  hull: number[];
  artillery: number[];
  torpedoes: number[];
  fire_control: number[];
  fighter: number[];
  flight_control: number[];
  dive_bomber: number[];
}

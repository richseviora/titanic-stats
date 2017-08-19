import { IEncyclopedia } from "../definitions/IEncyclopedia";
import { IResponse } from "../definitions/IResponse";

// Result from URL: https://api.worldofwarships.com/wows/encyclopedia/info/?application_id=133f74982efd62f7181de390d26e2e62

const result: IResponse<IEncyclopedia> = {
  status: "ok",
  meta: { count: 8 },
  data: {
    ships_updated_at: 1502283968,
    ship_types: {
      Destroyer: "Destroyer",
      AirCarrier: "Aircraft Carrier",
      Battleship: "Battleship",
      Cruiser: "Cruiser"
    },
    languages: {
      ru: "Русский",
      fr: "Français",
      en: "English",
      "zh-tw": "繁體中文",
      de: "Deutsch",
      tr: "Türkçe",
      "es-mx": "Español (México)",
      "zh-cn": "中文",
      "pt-br": "Português do Brasil",
      pl: "Polski",
      th: "ไทย",
      cs: "Čeština",
      ja: "日本語",
      es: "Español"
    },
    ship_modifications: {
      PCM005_SecondaryGun_Mod_I: "Secondary Battery Modification 1",
      PCM019_SecondaryGun_Mod_III: "Secondary Battery Modification 3",
      PCM006_MainGun_Mod_II: "Main Battery Modification 2",
      PCM026_LookoutStation_Mod_I: "Target Acquisition System Modification 1",
      PCM042_RLSSearch_Mod_I: "Surveillance Radar Modification 1",
      PCM036_SpeedBooster_Mod_I: "Engine Boost Modification 1",
      PCM021_Engine_Mod_I: "Propulsion Modification 1",
      PCM030_MainWeapon_Mod_I: "Main Armaments Modification 1",
      PCM027_ConcealmentMeasures_Mod_I: "Concealment System Modification 1",
      PCM010_Airplanes_Mod_II: "Air Groups Modification 2",
      PCM001_MainGun_Mod_I: "Main Battery Modification 1",
      PCM039_CrashCrew_Mod_I: "Damage Control Party Modification 1",
      PCM028_FireControl_Mod_I_US: "Artillery Plotting Room Modification 1",
      PCM020_DamageControl_Mod_I: "Damage Control System Modification 1",
      PCM035_SteeringGear_Mod_III: "Steering Gears Modification 3",
      PCM017_Airplanes_Mod_III: "Air Groups Modification 3",
      PCM024_Engine_Mod_II: "Propulsion Modification 2",
      PCM032_PowderMagazine_Mod_I: "Magazine Modification 1",
      PCM031_SecondaryWeapon_Mod_I: "Auxiliary Armaments Modification 1",
      PCM014_Torpedo_Mod_III: "Torpedo Tubes Modification 3",
      PCM003_Airplanes_Mod_I: "Air Groups Modification 1",
      PCM007_Torpedo_Mod_II: "Torpedo Tubes Modification 2",
      PCM023_DamageControl_Mod_II: "Damage Control System Modification 2",
      PCM022_SteeringGear_Mod_I: "Steering Gears Modification 1",
      PCM038_Spotter_Mod_I: "Spotting Aircraft Modification 1",
      PCM011_AirDefense_Mod_II: "AA Guns Modification 2",
      PCM016_FlightControl_Mod_II: "Flight Control Modification 2",
      PCM008_FireControl_Mod_I: "Gun Fire Control System Modification 1",
      PCM004_AirDefense_Mod_I: "AA Guns Modification 1",
      PCM025_SteeringGear_Mod_II: "Steering Gears Modification 2",
      PCM009_FlightControl_Mod_I: "Flight Control Modification 1",
      PCM037_SmokeGenerator_Mod_I: "Smoke Generator Modification 1",
      PCM034_Guidance_Mod_0: "Aiming Systems Modification 0",
      PCM012_SecondaryGun_Mod_II: "Secondary Battery Modification 2",
      PCM041_SonarSearch_Mod_I: "Hydroacoustic Search Modification 1",
      PCM040_AirDefenseDisp_Mod_I: "Defensive AA Fire Modification 1",
      PCM015_FireControl_Mod_II: "Gun Fire Control System Modification 2",
      PCM018_AirDefense_Mod_III: "AA Guns Modification 3",
      PCM002_Torpedo_Mod_I: "Torpedo Tubes Modification 1",
      PCM029_FireControl_Mod_II_US: "Artillery Plotting Room Modification 2",
      PCM033_Guidance_Mod_I: "Aiming Systems Modification 1",
      PCM013_MainGun_Mod_III: "Main Battery Modification 3"
    },
    ship_modules: {
      Engine: "Engine",
      FlightControl: "Flight Control",
      Suo: "Gun Fire Control System",
      Hull: "Hull",
      Artillery: "Main Battery",
      Torpedoes: "Torpedoes",
      TorpedoBomber: "Torpedo Bombers",
      DiveBomber: "Dive Bombers",
      Fighter: "Fighters"
    },
    ship_type_images: {
      Destroyer: {
        image_premium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/Destroyer/premium.png",
        image:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/Destroyer/normal.png",
        image_elite:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/Destroyer/elite.png"
      },
      AirCarrier: {
        image_premium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/AirCarrier/premium.png",
        image:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/AirCarrier/normal.png",
        image_elite:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/AirCarrier/elite.png"
      },
      Battleship: {
        image_premium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/Battleship/premium.png",
        image:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/Battleship/normal.png",
        image_elite:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/Battleship/elite.png"
      },
      Cruiser: {
        image_premium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/Cruiser/premium.png",
        image:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/Cruiser/normal.png",
        image_elite:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/types/Cruiser/elite.png"
      }
    },
    ship_nations: {
      commonwealth: "Commonwealth",
      italy: "Italy",
      usa: "U.S.A.",
      pan_asia: "Pan-Asia",
      france: "France",
      ussr: "U.S.S.R.",
      germany: "Germany",
      uk: "U.K.",
      japan: "Japan",
      poland: "Poland"
    },
    game_version: "0.6.9.0"
  }
};

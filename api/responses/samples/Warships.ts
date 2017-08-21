import { IResponse } from "../definitions/IResponse";
import { IWarship} from "../definitions/IWarship";
import {IWarshipCollection} from "../definitions/IWarshipCollection";
// URL from https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=133f74982efd62f7181de390d26e2e62
const result: IResponse<IWarshipCollection> = {
  status: "ok",
  meta: { count: 20, page_total: 12, total: 229, limit: 20, page: 1 },
  data: {
    "3555636944": {
      description:
        'A Heavy Cruiser of the "Fleet of Fog". Modelled after the lead ship of the Imperial Japanese Navy\'s Myoko-class cruiser, Myoko. Her Mental Model "Myoko" acts as the "Student Council Vice President" in Hiei\'s "Student Council of the Fog", and acts as a mediator between other Myoko-class Mental Models.\nThis warship has been specially designed for World of Warships, and is modelled after Myoko as she appears in "ARPEGGIO OF BLUE STEEL -ARS NOVA- Cadenza".',
      price_gold: 0,
      ship_id_str: "PJSC705",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSC705.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSC705.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSC705.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSC705.png"
      },
      modules: {
        engine: [3464343248],
        torpedo_bomber: [],
        fighter: [],
        hull: [3461099216],
        artillery: [3675238096],
        torpedoes: [3566612176],
        fire_control: [3464933072],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3464343248": {
          name: "Propulsion: 132,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3464343248,
          type: "Engine",
          module_id_str: "PJUE792"
        },
        "3461099216": {
          name: "ARP Myoko",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3461099216,
          type: "Hull",
          module_id_str: "PJUH795"
        },
        "3675238096": {
          name: "203 mm/50 Type3",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3675238096,
          type: "Artillery",
          module_id_str: "PJUA591"
        },
        "3566612176": {
          name: "Type90 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3566612176,
          type: "Torpedoes",
          module_id_str: "PJUT694"
        },
        "3464933072": {
          name: "Type7 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3464933072,
          type: "Torpedoes",
          module_id_str: "PJUS791"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3555636944,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE792",
          max_speed: 35.0,
          engine_id: 3464343248
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 40,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 8
            },
            "1": {
              distance: 3.1,
              avg_damage: 24,
              caliber: 25,
              name: "25 mm/60 Type96 Triple mod. 1",
              guns: 4
            },
            "2": {
              distance: 3.1,
              avg_damage: 46,
              caliber: 25,
              name: "25 mm/60 Type96 mod. 1",
              guns: 26
            },
            "3": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 mod. A1",
              guns: 4
            }
          },
          defense: 42
        },
        mobility: {
          rudder_time: 7.1,
          total: 71,
          turning_radius: 780,
          max_speed: 35.0
        },
        hull: {
          hull_id: 3461099216,
          hull_id_str: "PJUH795",
          torpedoes_barrels: 4,
          anti_aircraft_barrels: 42,
          range: { max: 102, min: 6 },
          health: 39200,
          planes_amount: 0,
          artillery_barrels: 5,
          atba_barrels: 4
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 7.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 8.0
            }
          }
        },
        artillery: {
          max_dispersion: 140,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 840,
              name: "203 mm AP Type91",
              damage: 4700,
              bullet_mass: 126,
              type: "AP"
            },
            HE: {
              burn_probability: 17.0,
              bullet_speed: 840,
              name: "203 mm HE Type0",
              damage: 3300,
              bullet_mass: 126,
              type: "HE"
            }
          },
          shot_delay: 14.0,
          rotation_time: 45.0,
          distance: 15.6,
          artillery_id: 3675238096,
          artillery_id_str: "PJUA591",
          slots: {
            "0": {
              barrels: 2,
              name: "203 mm/50 3rd Year Type 2 GO mod. C",
              guns: 5
            }
          },
          gun_rate: 4.3
        },
        torpedoes: {
          visibility_dist: 1.6,
          distance: 10.0,
          torpedoes_id: 3566612176,
          torpedo_name: "Type90 mod. 1",
          reload_time: 82,
          torpedo_speed: 62,
          rotation_time: 7.2,
          torpedoes_id_str: "PJUT694",
          slots: {
            "0": { barrels: 3, caliber: 610, name: "610 mm Triple", guns: 4 }
          },
          max_damage: 17233
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3464933072,
          distance: 15.6,
          distance_increase: 0,
          fire_control_id_str: "PJUS791"
        },
        weaponry: {
          anti_aircraft: 42,
          aircraft: 0,
          artillery: 62,
          torpedoes: 41
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: null,
        concealment: {
          total: 51,
          detect_distance_by_plane: 8.2,
          detect_distance_by_ship: 13.1
        },
        armour: {
          casemate: { max: 25, min: 25 },
          flood_prob: 13,
          deck: { max: 35, min: 32 },
          flood_damage: 67,
          range: { max: 102, min: 6 },
          health: 39200,
          extremities: { max: 16, min: 16 },
          total: 51,
          citadel: { max: 102, min: 57 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4261597104,
        4259499952,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4273131440,
        4281520048,
        4282568624
      ],
      tier: 7,
      next_ships: {},
      mod_slots: 4,
      type: "Cruiser",
      name: "ARP Myoko"
    },
    "3522082512": {
      description:
        'A heavy cruiser of the "Fleet of Fog". Modelled after the Imperial Japanese Navy\'s 2nd Myoko-class cruiser, Nachi. Harnessing an exceptional reconnaissance ability, she can track I-401 even during her silent runs. In combat, she acts as a spotter; calculating data for Myoko\'s long-range engagements. Her Mental Model "Nachi" acts as "Treasurer" under Hiei\'s "Student Council of the Fog". Having a rather placid personality, she is often swayed by her energetic colleague, Ashigara.\nThis warship has been specially designed for World of Warships, and is modelled after Nachi as she appears in "ARPEGGIO OF BLUE STEEL -ARS NOVA- Cadenza".',
      price_gold: 0,
      ship_id_str: "PJSC737",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSC737.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSC737.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSC737.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSC737.png"
      },
      modules: {
        engine: [3459100368],
        torpedo_bomber: [],
        fighter: [],
        hull: [3462147792],
        artillery: [3669995216],
        torpedoes: [3561369296],
        fire_control: [3459690192],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3459100368": {
          name: "Propulsion: 132,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3459100368,
          type: "Engine",
          module_id_str: "PJUE797"
        },
        "3462147792": {
          name: "ARP Nachi",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3462147792,
          type: "Hull",
          module_id_str: "PJUH794"
        },
        "3669995216": {
          name: "203 mm/50 Type3",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3669995216,
          type: "Artillery",
          module_id_str: "PJUA596"
        },
        "3561369296": {
          name: "Type90 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3561369296,
          type: "Torpedoes",
          module_id_str: "PJUT699"
        },
        "3459690192": {
          name: "Type7 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3459690192,
          type: "Suo",
          module_id_str: "PJUS796"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3522082512,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE797",
          max_speed: 35.0,
          engine_id: 3459100368
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 40,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 8
            },
            "1": {
              distance: 3.1,
              avg_damage: 24,
              caliber: 25,
              name: "25 mm/60 Type96 Triple mod. 1",
              guns: 4
            },
            "2": {
              distance: 3.1,
              avg_damage: 46,
              caliber: 25,
              name: "25 mm/60 Type96 mod. 1",
              guns: 26
            },
            "3": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 mod. A1",
              guns: 4
            }
          },
          defense: 42
        },
        mobility: {
          rudder_time: 7.1,
          total: 71,
          turning_radius: 780,
          max_speed: 35.0
        },
        hull: {
          hull_id: 3462147792,
          hull_id_str: "PJUH794",
          torpedoes_barrels: 4,
          anti_aircraft_barrels: 42,
          range: { max: 102, min: 6 },
          health: 39200,
          planes_amount: 0,
          artillery_barrels: 5,
          atba_barrels: 4
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 7.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 8.0
            }
          }
        },
        artillery: {
          max_dispersion: 140,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 840,
              name: "203 mm AP Type91",
              damage: 4700,
              bullet_mass: 126,
              type: "AP"
            },
            HE: {
              burn_probability: 17.0,
              bullet_speed: 840,
              name: "203 mm HE Type0",
              damage: 3300,
              bullet_mass: 126,
              type: "HE"
            }
          },
          shot_delay: 14.0,
          rotation_time: 45.0,
          distance: 15.6,
          artillery_id: 3669995216,
          artillery_id_str: "PJUA596",
          slots: {
            "0": {
              barrels: 2,
              name: "203 mm/50 3rd Year Type 2 GO mod. C",
              guns: 5
            }
          },
          gun_rate: 4.3
        },
        torpedoes: {
          visibility_dist: 1.6,
          distance: 10.0,
          torpedoes_id: 3561369296,
          torpedo_name: "Type90 mod. 1",
          reload_time: 82,
          torpedo_speed: 62,
          rotation_time: 7.2,
          torpedoes_id_str: "PJUT699",
          slots: {
            "0": { barrels: 3, caliber: 610, name: "610 mm Triple", guns: 4 }
          },
          max_damage: 17233
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3459690192,
          distance: 15.6,
          distance_increase: 0,
          fire_control_id_str: "PJUS796"
        },
        weaponry: {
          anti_aircraft: 42,
          aircraft: 0,
          artillery: 62,
          torpedoes: 41
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: null,
        concealment: {
          total: 51,
          detect_distance_by_plane: 8.2,
          detect_distance_by_ship: 13.1
        },
        armour: {
          casemate: { max: 25, min: 25 },
          flood_prob: 13,
          deck: { max: 35, min: 32 },
          flood_damage: 67,
          range: { max: 102, min: 6 },
          health: 39200,
          extremities: { max: 16, min: 16 },
          total: 51,
          citadel: { max: 102, min: 57 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4261597104,
        4259499952,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4273131440,
        4281520048,
        4282568624
      ],
      tier: 7,
      next_ships: {},
      mod_slots: 4,
      type: "Cruiser",
      name: "ARP Nachi"
    },
    "3552524272": {
      description:
        "One of a series of the South Dakota-class battleships. Boasted powerful AA defenses and sophisticated surveillance systems. Had a sensible armor layout including an internal main armor belt and a solid horizontal protection.",
      price_gold: 12200,
      ship_id_str: "PASB708",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASB708.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASB708.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASB708.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASB708.png"
      },
      modules: {
        engine: [3515723760],
        torpedo_bomber: [],
        fighter: [],
        hull: [3516674032],
        artillery: [3516903408],
        torpedoes: [],
        fire_control: [3525750768],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3525750768": {
          name: "Mk8 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3525750768,
          type: "Suo",
          module_id_str: "PAUS733"
        },
        "3516674032": {
          name: "Alabama ST",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3516674032,
          type: "Hull",
          module_id_str: "PAUH742"
        },
        "3515723760": {
          name: "Propulsion: 130,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3515723760,
          type: "Engine",
          module_id_str: "PAUE743"
        },
        "3516903408": {
          name: "406 mm/45 Mk6",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3516903408,
          type: "Artillery",
          module_id_str: "PAUA742"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 3552524272,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PAUE743",
          max_speed: 27.5,
          engine_id: 3515723760
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 190,
              caliber: 40,
              name: "40 mm Bofors Mk2",
              guns: 12
            },
            "1": {
              distance: 2.0,
              avg_damage: 187,
              caliber: 20,
              name: "20 mm Oerlikon Mk4",
              guns: 52
            },
            "2": {
              distance: 5.0,
              avg_damage: 151,
              caliber: 127,
              name: "127 mm/38 Mk32",
              guns: 10
            }
          },
          defense: 75
        },
        mobility: {
          rudder_time: 15.3,
          total: 37,
          turning_radius: 710,
          max_speed: 27.5
        },
        hull: {
          hull_id: 3516674032,
          hull_id_str: "PAUH742",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 74,
          range: { max: 457, min: 6 },
          health: 63300,
          planes_amount: 0,
          artillery_barrels: 3,
          atba_barrels: 10
        },
        atbas: {
          distance: 5.0,
          slots: {
            "0": {
              burn_probability: 5.0,
              bullet_speed: 792,
              name: "127 mm HE Mk32",
              shot_delay: 6.0,
              damage: 1800,
              bullet_mass: 25,
              type: "HE",
              gun_rate: 10.0
            }
          }
        },
        artillery: {
          max_dispersion: 271,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 701,
              name: "406 mm AP Mk8",
              damage: 13100,
              bullet_mass: 1225,
              type: "AP"
            },
            HE: {
              burn_probability: 36.0,
              bullet_speed: 803,
              name: "406 mm HE/HC Mk13",
              damage: 5700,
              bullet_mass: 862,
              type: "HE"
            }
          },
          shot_delay: 30.0,
          rotation_time: 40.0,
          distance: 21.1,
          artillery_id: 3516903408,
          artillery_id_str: "PAUA742",
          slots: { "0": { barrels: 3, name: "406 mm/45 Mk6", guns: 3 } },
          gun_rate: 2.0
        },
        torpedoes: null,
        fighters: null,
        fire_control: {
          fire_control_id: 3525750768,
          distance: 21.1,
          distance_increase: 0,
          fire_control_id_str: "PAUS733"
        },
        weaponry: {
          anti_aircraft: 75,
          aircraft: 0,
          artillery: 91,
          torpedoes: 0
        },
        battle_level_range_max: 10,
        battle_level_range_min: 8,
        flight_control: null,
        concealment: {
          total: 28,
          detect_distance_by_plane: 12.1,
          detect_distance_by_ship: 16.2
        },
        armour: {
          casemate: { max: 32, min: 32 },
          flood_prob: 49,
          deck: { max: 154, min: 16 },
          flood_damage: 67,
          range: { max: 457, min: 6 },
          health: 63300,
          extremities: { max: 32, min: 32 },
          total: 79,
          citadel: { max: 310, min: 184 }
        },
        dive_bomber: null
      },
      upgrades: [
        4265791408,
        4282568624,
        4273131440,
        4261597104,
        4262645680,
        4264742832,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4260548528,
        4266839984,
        4281520048
      ],
      tier: 8,
      next_ships: {},
      mod_slots: 5,
      type: "Battleship",
      name: "Alabama ST"
    },
    "3553540080": {
      description:
        "This ship belonged to a series of cruisers with very powerful dual-purpose guns. The major difference from the lead ship was her short-range AA armament, which had been improved at the expense of fewer main guns.",
      price_gold: 10000,
      ship_id_str: "PASC707",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASC707.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASC707.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASC707.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASC707.png"
      },
      modules: {
        engine: [3633164272],
        torpedo_bomber: [],
        fighter: [],
        hull: [3612094448],
        artillery: [3612323824],
        torpedoes: [3765841904],
        fire_control: [3611734000],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3633164272": {
          name: "Propulsion: 75,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3633164272,
          type: "Engine",
          module_id_str: "PAUE631"
        },
        "3612094448": {
          name: "Flint",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3612094448,
          type: "Hull",
          module_id_str: "PAUH651"
        },
        "3612323824": {
          name: "127 mm/38 Mk32",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3612323824,
          type: "Artillery",
          module_id_str: "PAUA651"
        },
        "3765841904": {
          name: "Mk15 mod. 3",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3765841904,
          type: "Torpedoes",
          module_id_str: "PAUT504"
        },
        "3611734000": {
          name: "Mk7 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3611734000,
          type: "Suo",
          module_id_str: "PAUS651"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 3553540080,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PAUE631",
          max_speed: 32.5,
          engine_id: 3633164272
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 90,
              caliber: 40,
              name: "40 mm Bofors Mk1",
              guns: 8
            },
            "1": {
              distance: 2.0,
              avg_damage: 43,
              caliber: 20,
              name: "20 mm Oerlikon Mk4",
              guns: 12
            },
            "2": {
              distance: 5.0,
              avg_damage: 90,
              caliber: 127,
              name: "127 mm/38 Mk32 mod. 12",
              guns: 6
            }
          },
          defense: 55
        },
        mobility: {
          rudder_time: 8.4,
          total: 65,
          turning_radius: 610,
          max_speed: 32.5
        },
        hull: {
          hull_id: 3612094448,
          hull_id_str: "PAUH651",
          torpedoes_barrels: 2,
          anti_aircraft_barrels: 26,
          range: { max: 89, min: 6 },
          health: 26600,
          planes_amount: 0,
          artillery_barrels: 6,
          atba_barrels: 0
        },
        atbas: null,
        artillery: {
          max_dispersion: 98,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 792,
              name: "127 mm AP/SC Mk38",
              damage: 2100,
              bullet_mass: 25,
              type: "AP"
            },
            HE: {
              burn_probability: 5.0,
              bullet_speed: 792,
              name: "127 mm HE Mk32",
              damage: 1800,
              bullet_mass: 25,
              type: "HE"
            }
          },
          shot_delay: 5.0,
          rotation_time: 7.2,
          distance: 11.1,
          artillery_id: 3612323824,
          artillery_id_str: "PAUA651",
          slots: {
            "0": { barrels: 2, name: "127 mm/38 Mk32 mod. 12", guns: 6 }
          },
          gun_rate: 12.0
        },
        torpedoes: {
          visibility_dist: 1.1,
          distance: 9.2,
          torpedoes_id: 3765841904,
          torpedo_name: "Mk15 mod. 3",
          reload_time: 98,
          torpedo_speed: 55,
          rotation_time: 7.2,
          torpedoes_id_str: "PAUT504",
          slots: {
            "0": { barrels: 4, caliber: 533, name: "533 mm Quad", guns: 2 }
          },
          max_damage: 16633
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3611734000,
          distance: 11.1,
          distance_increase: 0,
          fire_control_id_str: "PAUS651"
        },
        weaponry: {
          anti_aircraft: 55,
          aircraft: 0,
          artillery: 30,
          torpedoes: 20
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: null,
        concealment: {
          total: 65,
          detect_distance_by_plane: 6.4,
          detect_distance_by_ship: 11.0
        },
        armour: {
          casemate: { max: -1, min: -1 },
          flood_prob: 0,
          deck: { max: -1, min: -1 },
          flood_damage: 0,
          range: { max: 89, min: 6 },
          health: 26600,
          extremities: { max: -1, min: -1 },
          total: 38,
          citadel: { max: -1, min: -1 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4259499952,
        4261597104,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4273131440,
        4282568624
      ],
      tier: 7,
      next_ships: {},
      mod_slots: 4,
      type: "Cruiser",
      name: "Flint"
    },
    "3551410160": {
      description:
        "One of the numerous and very successful Fletcher-class destroyers which boasted a sufficiently high speed, powerful dual-purpose artillery, efficient AA defenses, and decent torpedo armament.",
      price_gold: 0,
      ship_id_str: "PASD709",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASD709.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASD709.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASD709.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASD709.png"
      },
      modules: {
        engine: [3412963312],
        torpedo_bomber: [],
        fighter: [],
        hull: [3412865008],
        artillery: [3413094384],
        torpedoes: [3450220528],
        fire_control: [3422990320],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3412963312": {
          name: "Propulsion: 60,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3412963312,
          type: "Engine",
          module_id_str: "PAUE841"
        },
        "3412865008": {
          name: "Black",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3412865008,
          type: "Hull",
          module_id_str: "PAUH841"
        },
        "3413094384": {
          name: "127 mm/38 Mk30",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3413094384,
          type: "Artillery",
          module_id_str: "PAUA841"
        },
        "3450220528": {
          name: "Mk16 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3450220528,
          type: "Torpedoes",
          module_id_str: "PAUT805"
        },
        "3422990320": {
          name: "Mk9 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3422990320,
          type: "Suo",
          module_id_str: "PAUS831"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 3551410160,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PAUE841",
          max_speed: 35.0,
          engine_id: 3412963312
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 33,
              caliber: 40,
              name: "40 mm Bofors Mk1",
              guns: 3
            },
            "1": {
              distance: 2.0,
              avg_damage: 25,
              caliber: 20,
              name: "20 mm Oerlikon Mk4",
              guns: 7
            },
            "2": {
              distance: 2.0,
              avg_damage: 12,
              caliber: 20,
              name: "20 mm Oerlikon Mk20",
              guns: 2
            },
            "3": {
              distance: 5.0,
              avg_damage: 53,
              caliber: 127,
              name: "127 mm/38 Mk30 mod. 0",
              guns: 5
            }
          },
          defense: 41
        },
        mobility: {
          rudder_time: 3.0,
          total: 81,
          turning_radius: 560,
          max_speed: 35.0
        },
        hull: {
          hull_id: 3412865008,
          hull_id_str: "PAUH841",
          torpedoes_barrels: 2,
          anti_aircraft_barrels: 17,
          range: { max: 20, min: 6 },
          health: 17100,
          planes_amount: 0,
          artillery_barrels: 5,
          atba_barrels: 0
        },
        atbas: null,
        artillery: {
          max_dispersion: 111,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 792,
              name: "127 mm AP/SC Mk38",
              damage: 2100,
              bullet_mass: 25,
              type: "AP"
            },
            HE: {
              burn_probability: 5.0,
              bullet_speed: 792,
              name: "127 mm HE Mk32",
              damage: 1800,
              bullet_mass: 25,
              type: "HE"
            }
          },
          shot_delay: 3.0,
          rotation_time: 5.29,
          distance: 12.8,
          artillery_id: 3413094384,
          artillery_id_str: "PAUA841",
          slots: {
            "0": { barrels: 1, name: "127 mm/38 Mk30 mod. 0", guns: 5 }
          },
          gun_rate: 18.0
        },
        torpedoes: {
          visibility_dist: 0.9,
          distance: 13.7,
          torpedoes_id: 3450220528,
          torpedo_name: "Mk29",
          reload_time: 96,
          torpedo_speed: 43,
          rotation_time: 7.2,
          torpedoes_id_str: "PAUT805",
          slots: {
            "0": { barrels: 5, caliber: 533, name: "533 mm Mk15", guns: 2 }
          },
          max_damage: 21600
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3422990320,
          distance: 12.8,
          distance_increase: 0,
          fire_control_id_str: "PAUS831"
        },
        weaponry: {
          anti_aircraft: 41,
          aircraft: 0,
          artillery: 28,
          torpedoes: 34
        },
        battle_level_range_max: 10,
        battle_level_range_min: 9,
        flight_control: null,
        concealment: {
          total: 87,
          detect_distance_by_plane: 4.0,
          detect_distance_by_ship: 7.4
        },
        armour: {
          casemate: { max: -1, min: -1 },
          flood_prob: 0,
          deck: { max: -1, min: -1 },
          flood_damage: 0,
          range: { max: 20, min: 6 },
          health: 17100,
          extremities: { max: -1, min: -1 },
          total: 31,
          citadel: { max: -1, min: -1 }
        },
        dive_bomber: null
      },
      upgrades: [
        4268937136,
        4266839984,
        4265791408,
        4261597104,
        4278374320,
        4269985712,
        4267888560,
        4282568624,
        4262645680,
        4271034288,
        4260548528,
        4275228592,
        4279422896,
        4259499952,
        4273131440,
        4287811504,
        4272082864,
        4257402800,
        4280471472
      ],
      tier: 9,
      next_ships: {},
      mod_slots: 6,
      type: "Destroyer",
      name: "Black"
    },
    "3553572560": {
      description:
        'A Battleship of the "Fleet of Fog". Modelled after the Imperial Japanese Navy\'s 3rd Kongo-class battleship, Haruna. First seen engaging I-401 in combat alongside Kirishima, she was defeated by the superior tactics of Gunzo Chihaya, commander of I-401. Her Mental Model "Haruna" always wears a large overcoat and has a keen interest in the human language, "collecting" word samples as she hears them.\nThis warship has been specially designed for World of Warships, and is modelled after Haruna as she appears in "ARPEGGIO OF BLUE STEEL -ARS NOVA-".',
      price_gold: 0,
      ship_id_str: "PJSB707",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSB707.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSB707.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSB707.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSB707.png"
      },
      modules: {
        engine: [3773673168],
        torpedo_bomber: [],
        fighter: [],
        hull: [3773574864],
        artillery: [3773804240],
        torpedoes: [],
        fire_control: [3773214416],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3773214416": {
          name: "Type5 mod. 2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3773214416,
          type: "Suo",
          module_id_str: "PJUS497"
        },
        "3773673168": {
          name: "Propulsion: 136,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3773673168,
          type: "Engine",
          module_id_str: "PJUE497"
        },
        "3773804240": {
          name: "356 mm/45 Type41",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3773804240,
          type: "Artillery",
          module_id_str: "PJUA497"
        },
        "3773574864": {
          name: "ARP Haruna",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3773574864,
          type: "Hull",
          module_id_str: "PJUH497"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3553572560,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE497",
          max_speed: 30.0,
          engine_id: 3773673168
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 30,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 6
            },
            "1": {
              distance: 1.2,
              avg_damage: 9,
              caliber: 13,
              name: "13 mm/76 Type93 Quad",
              guns: 2
            },
            "2": {
              distance: 1.2,
              avg_damage: 14,
              caliber: 13,
              name: "13 mm/76 Type93 Twin",
              guns: 4
            },
            "3": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 A1",
              guns: 4
            }
          },
          defense: 34
        },
        mobility: {
          rudder_time: 14.9,
          total: 45,
          turning_radius: 770,
          max_speed: 30.0
        },
        hull: {
          hull_id: 3773574864,
          hull_id_str: "PJUH497",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 16,
          range: { max: 254, min: 6 },
          health: 54100,
          planes_amount: 0,
          artillery_barrels: 4,
          atba_barrels: 18
        },
        atbas: {
          distance: 4.0,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 5.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 12.0
            },
            "1": {
              burn_probability: null,
              bullet_speed: 855,
              name: "152 mm AP Type4",
              shot_delay: 10.0,
              damage: 2900,
              bullet_mass: 45,
              type: "AP",
              gun_rate: 6.0
            }
          }
        },
        artillery: {
          max_dispersion: 236,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 775,
              name: "356 mm AP Type91",
              damage: 10200,
              bullet_mass: 674,
              type: "AP"
            },
            HE: {
              burn_probability: 25.0,
              bullet_speed: 805,
              name: "356 mm HE Type0",
              damage: 5700,
              bullet_mass: 625,
              type: "HE"
            }
          },
          shot_delay: 30.0,
          rotation_time: 54.55,
          distance: 21.2,
          artillery_id: 3773804240,
          artillery_id_str: "PJUA497",
          slots: {
            "0": { barrels: 2, name: "356 mm/45 41st Year Type", guns: 4 }
          },
          gun_rate: 2.0
        },
        torpedoes: null,
        fighters: null,
        fire_control: {
          fire_control_id: 3773214416,
          distance: 21.2,
          distance_increase: 10,
          fire_control_id_str: "PJUS497"
        },
        weaponry: {
          anti_aircraft: 34,
          aircraft: 0,
          artillery: 79,
          torpedoes: 0
        },
        battle_level_range_max: 7,
        battle_level_range_min: 5,
        flight_control: null,
        concealment: {
          total: 29,
          detect_distance_by_plane: 11.7,
          detect_distance_by_ship: 16.2
        },
        armour: {
          casemate: { max: 152, min: 152 },
          flood_prob: 25,
          deck: { max: 120, min: 38 },
          flood_damage: 67,
          range: { max: 254, min: 6 },
          health: 54100,
          extremities: { max: 76, min: 25 },
          total: 64,
          citadel: { max: 203, min: 102 }
        },
        dive_bomber: null
      },
      upgrades: [
        4273131440,
        4261597104,
        4259499952,
        4262645680,
        4287811504,
        4260548528,
        4271034288,
        4272082864,
        4282568624,
        4281520048
      ],
      tier: 5,
      next_ships: {},
      mod_slots: 3,
      type: "Battleship",
      name: "ARP Haruna"
    },
    "3555670000": {
      description:
        "The first super-dreadnought in the U.S. Navy. She underwent extensive retrofitting to reinforce her torpedo protection and horizontal armor. During World War II, she received powerful AA armament.",
      price_gold: 5150,
      ship_id_str: "PASB705",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASB705.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASB705.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASB705.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASB705.png"
      },
      modules: {
        engine: [3821907952],
        torpedo_bomber: [],
        fighter: [],
        hull: [3800838128],
        artillery: [3832524784],
        torpedoes: [],
        fire_control: [3831934960],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3831934960": {
          name: "Mk5 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3831934960,
          type: "Suo",
          module_id_str: "PAUS441"
        },
        "3800838128": {
          name: "Texas",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3800838128,
          type: "Hull",
          module_id_str: "PAUH471"
        },
        "3832524784": {
          name: "356 mm/45 Mk8",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3832524784,
          type: "Artillery",
          module_id_str: "PAUA441"
        },
        "3821907952": {
          name: "Propulsion: 28,100 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3821907952,
          type: "Engine",
          module_id_str: "PAUE451"
        }
      },
      nation: "usa",
      is_premium: true,
      ship_id: 3555670000,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PAUE451",
          max_speed: 20.5,
          engine_id: 3821907952
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 159,
              caliber: 40,
              name: "40 mm Bofors Mk2",
              guns: 10
            },
            "1": {
              distance: 2.0,
              avg_damage: 158,
              caliber: 20,
              name: "20 mm Oerlikon Mk4",
              guns: 44
            },
            "2": {
              distance: 3.5,
              avg_damage: 28,
              caliber: 76,
              name: "76.2 mm/50 Mk22 mod. 2",
              guns: 10
            }
          },
          defense: 50
        },
        mobility: {
          rudder_time: 14.0,
          total: 18,
          turning_radius: 600,
          max_speed: 20.5
        },
        hull: {
          hull_id: 3800838128,
          hull_id_str: "PAUH471",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 64,
          range: { max: 356, min: 13 },
          health: 49100,
          planes_amount: 0,
          artillery_barrels: 5,
          atba_barrels: 6
        },
        atbas: {
          distance: 4.0,
          slots: {
            "0": {
              burn_probability: 6.0,
              bullet_speed: 960,
              name: "127 mm HE/HC Mk39",
              shot_delay: 7.0,
              damage: 1800,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 8.6
            }
          }
        },
        artillery: {
          max_dispersion: 224,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 792,
              name: "356 mm AP Mk16",
              damage: 10300,
              bullet_mass: 680,
              type: "AP"
            },
            HE: {
              burn_probability: 30.0,
              bullet_speed: 834,
              name: "356 mm HE/HC Mk22",
              damage: 5000,
              bullet_mass: 578,
              type: "HE"
            }
          },
          shot_delay: 34.0,
          rotation_time: 60.0,
          distance: 16.4,
          artillery_id: 3832524784,
          artillery_id_str: "PAUA441",
          slots: { "0": { barrels: 2, name: "356 mm/45 Mk8", guns: 5 } },
          gun_rate: 1.8
        },
        torpedoes: null,
        fighters: null,
        fire_control: {
          fire_control_id: 3831934960,
          distance: 16.4,
          distance_increase: 0,
          fire_control_id_str: "PAUS441"
        },
        weaponry: {
          anti_aircraft: 50,
          aircraft: 0,
          artillery: 74,
          torpedoes: 0
        },
        battle_level_range_max: 7,
        battle_level_range_min: 5,
        flight_control: null,
        concealment: {
          total: 32,
          detect_distance_by_plane: 10.7,
          detect_distance_by_ship: 16.0
        },
        armour: {
          casemate: { max: -1, min: -1 },
          flood_prob: 31,
          deck: { max: -1, min: -1 },
          flood_damage: 67,
          range: { max: 356, min: 13 },
          health: 49100,
          extremities: { max: -1, min: -1 },
          total: 58,
          citadel: { max: -1, min: -1 }
        },
        dive_bomber: null
      },
      upgrades: [
        4264742832,
        4261597104,
        4262645680,
        4287811504,
        4260548528,
        4271034288,
        4272082864,
        4273131440,
        4281520048,
        4282568624
      ],
      tier: 5,
      next_ships: {},
      mod_slots: 3,
      type: "Battleship",
      name: "Texas"
    },
    "3552523984": {
      description:
        'A Battleship of the "Fleet of Fog". Modelled after the Imperial Japanese Navy\'s 2nd Kongo-class battleship, Hiei. Equipped with the "Mirroring System" bestowed by Musashi, she acts as the new flagship of the "First Oriental Fleet" after Kongō\'s departure. Repurposing the Fleet as the "Student Council of the Fog", she maintains strict order within the Fleet of Fog as the "Student Council President".\nThis warship has been specially designed for World of Warships, and is modelled after Hiei as she appears in "ARPEGGIO OF BLUE STEEL -ARS NOVA- DC".',
      price_gold: 0,
      ship_id_str: "PJSB708",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSB708.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSB708.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSB708.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSB708.png"
      },
      modules: {
        engine: [3772624592],
        torpedo_bomber: [],
        fighter: [],
        hull: [3772526288],
        artillery: [3772755664],
        torpedoes: [],
        fire_control: [3772165840],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3772624592": {
          name: "Propulsion: 136,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3772624592,
          type: "Engine",
          module_id_str: "PJUE498"
        },
        "3772526288": {
          name: "ARP Hiei",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3772526288,
          type: "Hull",
          module_id_str: "PJUH498"
        },
        "3772165840": {
          name: "Type5 mod. 2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3772165840,
          type: "Suo",
          module_id_str: "PJUS498"
        },
        "3772755664": {
          name: "356 mm/45 Type41",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3772755664,
          type: "Artillery",
          module_id_str: "PJUA498"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3552523984,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE498",
          max_speed: 30.0,
          engine_id: 3772624592
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 30,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 6
            },
            "1": {
              distance: 1.2,
              avg_damage: 9,
              caliber: 13,
              name: "13 mm/76 Type93 Quad",
              guns: 2
            },
            "2": {
              distance: 1.2,
              avg_damage: 14,
              caliber: 13,
              name: "13 mm/76 Type93 Twin",
              guns: 4
            },
            "3": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 A1",
              guns: 4
            }
          },
          defense: 34
        },
        mobility: {
          rudder_time: 14.9,
          total: 45,
          turning_radius: 770,
          max_speed: 30.0
        },
        hull: {
          hull_id: 3772526288,
          hull_id_str: "PJUH498",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 16,
          range: { max: 254, min: 6 },
          health: 54100,
          planes_amount: 0,
          artillery_barrels: 4,
          atba_barrels: 18
        },
        atbas: {
          distance: 4.0,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 5.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 12.0
            },
            "1": {
              burn_probability: null,
              bullet_speed: 855,
              name: "152 mm AP Type4",
              shot_delay: 10.0,
              damage: 2900,
              bullet_mass: 45,
              type: "AP",
              gun_rate: 6.0
            }
          }
        },
        artillery: {
          max_dispersion: 236,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 775,
              name: "356 mm AP Type91",
              damage: 10200,
              bullet_mass: 674,
              type: "AP"
            },
            HE: {
              burn_probability: 25.0,
              bullet_speed: 805,
              name: "356 mm HE Type0",
              damage: 5700,
              bullet_mass: 625,
              type: "HE"
            }
          },
          shot_delay: 30.0,
          rotation_time: 54.55,
          distance: 21.2,
          artillery_id: 3772755664,
          artillery_id_str: "PJUA498",
          slots: {
            "0": { barrels: 2, name: "356 mm/45 41st Year Type", guns: 4 }
          },
          gun_rate: 2.0
        },
        torpedoes: null,
        fighters: null,
        fire_control: {
          fire_control_id: 3772165840,
          distance: 21.2,
          distance_increase: 10,
          fire_control_id_str: "PJUS498"
        },
        weaponry: {
          anti_aircraft: 34,
          aircraft: 0,
          artillery: 79,
          torpedoes: 0
        },
        battle_level_range_max: 7,
        battle_level_range_min: 5,
        flight_control: null,
        concealment: {
          total: 29,
          detect_distance_by_plane: 11.7,
          detect_distance_by_ship: 16.2
        },
        armour: {
          casemate: { max: 152, min: 152 },
          flood_prob: 25,
          deck: { max: 120, min: 38 },
          flood_damage: 67,
          range: { max: 254, min: 6 },
          health: 54100,
          extremities: { max: 76, min: 25 },
          total: 64,
          citadel: { max: 203, min: 102 }
        },
        dive_bomber: null
      },
      upgrades: [
        4273131440,
        4261597104,
        4259499952,
        4262645680,
        4287811504,
        4260548528,
        4271034288,
        4272082864,
        4282568624,
        4281520048
      ],
      tier: 5,
      next_ships: {},
      mod_slots: 3,
      type: "Battleship",
      name: "ARP Hiei"
    },
    "3532568272": {
      description: " ",
      price_gold: 0,
      ship_id_str: "PJSC727",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSC727.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSC727.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSC727.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSC727.png"
      },
      modules: {
        engine: [3460148944],
        torpedo_bomber: [],
        fighter: [],
        hull: [3456904912],
        artillery: [3671043792],
        torpedoes: [3562417872],
        fire_control: [3460738768],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3460738768": {
          name: "Type7 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3460738768,
          type: "Suo",
          module_id_str: "PJUS795"
        },
        "3460148944": {
          name: "Propulsion: 132,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3460148944,
          type: "Engine",
          module_id_str: "PJUE796"
        },
        "3671043792": {
          name: "203 mm/50 Type3",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3671043792,
          type: "Artillery",
          module_id_str: "PJUA595"
        },
        "3562417872": {
          name: "Type90 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3562417872,
          type: "Torpedoes",
          module_id_str: "PJUT698"
        },
        "3456904912": {
          name: "Eastern Dragon",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3456904912,
          type: "Hull",
          module_id_str: "PJUH799"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3532568272,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE796",
          max_speed: 35.0,
          engine_id: 3460148944
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 40,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 8
            },
            "1": {
              distance: 3.1,
              avg_damage: 24,
              caliber: 25,
              name: "25 mm/60 Type96 Triple mod. 1",
              guns: 4
            },
            "2": {
              distance: 3.1,
              avg_damage: 46,
              caliber: 25,
              name: "25 mm/60 Type96 mod. 1",
              guns: 26
            },
            "3": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 mod. A1",
              guns: 4
            }
          },
          defense: 42
        },
        mobility: {
          rudder_time: 7.1,
          total: 71,
          turning_radius: 780,
          max_speed: 35.0
        },
        hull: {
          hull_id: 3456904912,
          hull_id_str: "PJUH799",
          torpedoes_barrels: 4,
          anti_aircraft_barrels: 42,
          range: { max: 102, min: 6 },
          health: 39200,
          planes_amount: 0,
          artillery_barrels: 5,
          atba_barrels: 4
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 7.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 8.0
            }
          }
        },
        artillery: {
          max_dispersion: 140,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 840,
              name: "203 mm AP Type91",
              damage: 4700,
              bullet_mass: 126,
              type: "AP"
            },
            HE: {
              burn_probability: 17.0,
              bullet_speed: 840,
              name: "203 mm HE Type0",
              damage: 3300,
              bullet_mass: 126,
              type: "HE"
            }
          },
          shot_delay: 14.0,
          rotation_time: 45.0,
          distance: 15.6,
          artillery_id: 3671043792,
          artillery_id_str: "PJUA595",
          slots: {
            "0": {
              barrels: 2,
              name: "203 mm/50 3rd Year Type 2 GO mod. C",
              guns: 5
            }
          },
          gun_rate: 4.3
        },
        torpedoes: {
          visibility_dist: 1.6,
          distance: 10.0,
          torpedoes_id: 3562417872,
          torpedo_name: "Type90 mod. 1",
          reload_time: 82,
          torpedo_speed: 62,
          rotation_time: 7.2,
          torpedoes_id_str: "PJUT698",
          slots: {
            "0": { barrels: 3, caliber: 610, name: "610 mm Triple", guns: 4 }
          },
          max_damage: 17233
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3460738768,
          distance: 15.6,
          distance_increase: 0,
          fire_control_id_str: "PJUS795"
        },
        weaponry: {
          anti_aircraft: 42,
          aircraft: 0,
          artillery: 62,
          torpedoes: 41
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: null,
        concealment: {
          total: 51,
          detect_distance_by_plane: 8.2,
          detect_distance_by_ship: 13.1
        },
        armour: {
          casemate: { max: 25, min: 25 },
          flood_prob: 13,
          deck: { max: 35, min: 32 },
          flood_damage: 67,
          range: { max: 102, min: 6 },
          health: 39200,
          extremities: { max: 16, min: 16 },
          total: 51,
          citadel: { max: 102, min: 57 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4261597104,
        4259499952,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4273131440,
        4281520048,
        4282568624
      ],
      tier: 7,
      next_ships: {},
      mod_slots: 4,
      type: "Cruiser",
      name: "Eastern Dragon"
    },
    "3659445712": {
      description:
        "In 1945, the German cruiser Nürnberg was ceded to the Soviet Union as war reparations. Subsequently, she was renamed and partially rearmed. During an upgrade that followed, the ship's automatic AA guns and other equipment were changed, but her rapid-fire main guns, which were quite powerful for a ship of her size, were retained.",
      price_gold: 5100,
      ship_id_str: "PRSC606",
      has_demo_profile: true,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PRSC606.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PRSC606.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PRSC606.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PRSC606.png"
      },
      modules: {
        engine: [3736972752],
        torpedo_bomber: [],
        fighter: [],
        hull: [3736874448],
        artillery: [3737103824],
        torpedoes: [3735432656],
        fire_control: [3736514000],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3736972752": {
          name: "Propulsion: 60,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3736972752,
          type: "Engine",
          module_id_str: "PRUE532"
        },
        "3736874448": {
          name: "Admiral Makarov",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3736874448,
          type: "Hull",
          module_id_str: "PRUH532"
        },
        "3736514000": {
          name: "GFCS VI mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3736514000,
          type: "Suo",
          module_id_str: "PRUS532"
        },
        "3735432656": {
          name: "G7a T1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3735432656,
          type: "Torpedoes",
          module_id_str: "PRUT533"
        },
        "3737103824": {
          name: "150 mm L/60 SK C/25",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3737103824,
          type: "Artillery",
          module_id_str: "PRUA532"
        }
      },
      nation: "ussr",
      is_premium: false,
      ship_id: 3659445712,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PRUE532",
          max_speed: 32.0,
          engine_id: 3736972752
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 91,
              caliber: 37,
              name: "37 mm V-11",
              guns: 10
            },
            "1": {
              distance: 2.0,
              avg_damage: 12,
              caliber: 20,
              name: "20 mm Flakvierling 38",
              guns: 2
            },
            "2": {
              distance: 4.0,
              avg_damage: 32,
              caliber: 88,
              name: "88 mm L/76 Dop. L. C/32",
              guns: 4
            }
          },
          defense: 38
        },
        mobility: {
          rudder_time: 7.6,
          total: 62,
          turning_radius: 720,
          max_speed: 32.0
        },
        hull: {
          hull_id: 3736874448,
          hull_id_str: "PRUH532",
          torpedoes_barrels: 2,
          anti_aircraft_barrels: 16,
          range: { max: 100, min: 13 },
          health: 27000,
          planes_amount: 0,
          artillery_barrels: 3,
          atba_barrels: 4
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 7.0,
              bullet_speed: 950,
              name: "88 mm Spr.Gr.",
              shot_delay: 4.0,
              damage: 1100,
              bullet_mass: 9,
              type: "HE",
              gun_rate: 15.0
            }
          }
        },
        artillery: {
          max_dispersion: 145,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 960,
              name: "150 mm P.Spr.Gr. L/3.7",
              damage: 3900,
              bullet_mass: 46,
              type: "AP"
            },
            HE: {
              burn_probability: 8.0,
              bullet_speed: 960,
              name: "150 mm Spr.Gr. L/4.4 Kz.",
              damage: 1700,
              bullet_mass: 46,
              type: "HE"
            }
          },
          shot_delay: 6.0,
          rotation_time: 23.68,
          distance: 16.3,
          artillery_id: 3737103824,
          artillery_id_str: "PRUA532",
          slots: { "0": { barrels: 3, name: "150 mm L/60 SK C/25", guns: 3 } },
          gun_rate: 10.0
        },
        torpedoes: {
          visibility_dist: 1.3,
          distance: 6.0,
          torpedoes_id: 3735432656,
          torpedo_name: "G7a T1",
          reload_time: 68,
          torpedo_speed: 64,
          rotation_time: 7.2,
          torpedoes_id_str: "PRUT533",
          slots: {
            "0": { barrels: 3, caliber: 533, name: "533 mm Triple", guns: 2 }
          },
          max_damage: 13700
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3736514000,
          distance: 16.3,
          distance_increase: 0,
          fire_control_id_str: "PRUS532"
        },
        weaponry: {
          anti_aircraft: 38,
          aircraft: 0,
          artillery: 46,
          torpedoes: 14
        },
        battle_level_range_max: 8,
        battle_level_range_min: 6,
        flight_control: null,
        concealment: {
          total: 57,
          detect_distance_by_plane: 6.9,
          detect_distance_by_ship: 12.4
        },
        armour: {
          casemate: { max: -1, min: -1 },
          flood_prob: 7,
          deck: { max: -1, min: -1 },
          flood_damage: 67,
          range: { max: 100, min: 13 },
          health: 27000,
          extremities: { max: -1, min: -1 },
          total: 36,
          citadel: { max: -1, min: -1 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4259499952,
        4261597104,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4273131440,
        4281520048,
        4282568624
      ],
      tier: 6,
      next_ships: {},
      mod_slots: 4,
      type: "Cruiser",
      name: "Admiral Makarov"
    },
    "3543054032": {
      description: " ",
      price_gold: 0,
      ship_id_str: "PJSC717",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSC717.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSC717.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSC717.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSC717.png"
      },
      modules: {
        engine: [3461197520],
        torpedo_bomber: [],
        fighter: [],
        hull: [3457953488],
        artillery: [3672092368],
        torpedoes: [3563466448],
        fire_control: [3461787344],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3461787344": {
          name: "Type7 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3461787344,
          type: "Suo",
          module_id_str: "PJUS794"
        },
        "3457953488": {
          name: "Southern Dragon",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3457953488,
          type: "Hull",
          module_id_str: "PJUH798"
        },
        "3461197520": {
          name: "Propulsion: 132,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3461197520,
          type: "Engine",
          module_id_str: "PJUE795"
        },
        "3563466448": {
          name: "Type90 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3563466448,
          type: "Torpedoes",
          module_id_str: "PJUT697"
        },
        "3672092368": {
          name: "203 mm/50 Type3",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3672092368,
          type: "Artillery",
          module_id_str: "PJUA594"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3543054032,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE795",
          max_speed: 35.0,
          engine_id: 3461197520
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 40,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 8
            },
            "1": {
              distance: 3.1,
              avg_damage: 24,
              caliber: 25,
              name: "25 mm/60 Type96 Triple mod. 1",
              guns: 4
            },
            "2": {
              distance: 3.1,
              avg_damage: 46,
              caliber: 25,
              name: "25 mm/60 Type96 mod. 1",
              guns: 26
            },
            "3": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 mod. A1",
              guns: 4
            }
          },
          defense: 42
        },
        mobility: {
          rudder_time: 7.1,
          total: 71,
          turning_radius: 780,
          max_speed: 35.0
        },
        hull: {
          hull_id: 3457953488,
          hull_id_str: "PJUH798",
          torpedoes_barrels: 4,
          anti_aircraft_barrels: 42,
          range: { max: 102, min: 6 },
          health: 39200,
          planes_amount: 0,
          artillery_barrels: 5,
          atba_barrels: 4
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 7.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 8.0
            }
          }
        },
        artillery: {
          max_dispersion: 140,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 840,
              name: "203 mm AP Type91",
              damage: 4700,
              bullet_mass: 126,
              type: "AP"
            },
            HE: {
              burn_probability: 17.0,
              bullet_speed: 840,
              name: "203 mm HE Type0",
              damage: 3300,
              bullet_mass: 126,
              type: "HE"
            }
          },
          shot_delay: 14.0,
          rotation_time: 45.0,
          distance: 15.6,
          artillery_id: 3672092368,
          artillery_id_str: "PJUA594",
          slots: {
            "0": {
              barrels: 2,
              name: "203 mm/50 3rd Year Type 2 GO mod. C",
              guns: 5
            }
          },
          gun_rate: 4.3
        },
        torpedoes: {
          visibility_dist: 1.6,
          distance: 10.0,
          torpedoes_id: 3563466448,
          torpedo_name: "Type90 mod. 1",
          reload_time: 82,
          torpedo_speed: 62,
          rotation_time: 7.2,
          torpedoes_id_str: "PJUT697",
          slots: {
            "0": { barrels: 3, caliber: 610, name: "610 mm Triple", guns: 4 }
          },
          max_damage: 17233
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3461787344,
          distance: 15.6,
          distance_increase: 0,
          fire_control_id_str: "PJUS794"
        },
        weaponry: {
          anti_aircraft: 42,
          aircraft: 0,
          artillery: 62,
          torpedoes: 41
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: null,
        concealment: {
          total: 51,
          detect_distance_by_plane: 8.2,
          detect_distance_by_ship: 13.1
        },
        armour: {
          casemate: { max: 25, min: 25 },
          flood_prob: 13,
          deck: { max: 35, min: 32 },
          flood_damage: 67,
          range: { max: 102, min: 6 },
          health: 39200,
          extremities: { max: 16, min: 16 },
          total: 51,
          citadel: { max: 102, min: 57 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4261597104,
        4259499952,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4273131440,
        4281520048,
        4282568624
      ],
      tier: 7,
      next_ships: {},
      mod_slots: 4,
      type: "Cruiser",
      name: "Southern Dragon"
    },
    "3247355344": {
      description:
        "A ship for testing maps. She has a high speed, but her main guns and torpedo armament have minimum damage-dealing capabilities. This ship is designed to deliver fire on islands and coastlines.",
      price_gold: 2250,
      ship_id_str: "PRSC999",
      has_demo_profile: true,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PRSC999.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PRSC999.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PRSC999.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PRSC999.png"
      },
      modules: {
        engine: [3256724944],
        torpedo_bomber: [],
        fighter: [],
        hull: [3256626640],
        artillery: [3256856016],
        torpedoes: [3256233424],
        fire_control: [3256266192],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3256724944": {
          name: "Nocknockneo",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3256724944,
          type: "Engine",
          module_id_str: "PRUE990"
        },
        "3256266192": {
          name: "Iamassist",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3256266192,
          type: "Suo",
          module_id_str: "PRUS990"
        },
        "3256856016": {
          name: "Pewpew",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3256856016,
          type: "Artillery",
          module_id_str: "PRUA990"
        },
        "3256233424": {
          name: "Plopplop",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3256233424,
          type: "Torpedoes",
          module_id_str: "PRUT990"
        },
        "3256626640": {
          name: "Test Ship",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3256626640,
          type: "Hull",
          module_id_str: "PRUH990"
        }
      },
      nation: "ussr",
      is_premium: false,
      ship_id: 3247355344,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PRUE990",
          max_speed: 80.0,
          engine_id: 3256724944
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.2,
              avg_damage: 0,
              caliber: 37,
              name: "Flipflop",
              guns: 3
            },
            "1": {
              distance: 3.0,
              avg_damage: 0,
              caliber: 76,
              name: "Pompom",
              guns: 2
            }
          },
          defense: 2
        },
        mobility: {
          rudder_time: 4.6,
          total: 97,
          turning_radius: 560,
          max_speed: 80.0
        },
        hull: {
          hull_id: 3256626640,
          hull_id_str: "PRUH990",
          torpedoes_barrels: 1,
          anti_aircraft_barrels: 5,
          range: { max: 88, min: 6 },
          health: 1,
          planes_amount: 0,
          artillery_barrels: 2,
          atba_barrels: 0
        },
        atbas: null,
        artillery: {
          max_dispersion: 111,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 1500,
              name: "Useless AP",
              damage: 1,
              bullet_mass: 38,
              type: "AP"
            },
            HE: {
              burn_probability: 0.0,
              bullet_speed: 1500,
              name: "Useless HE",
              damage: 1,
              bullet_mass: 38,
              type: "HE"
            }
          },
          shot_delay: 0.0,
          rotation_time: 2.0,
          distance: 12.8,
          artillery_id: 3256856016,
          artillery_id_str: "PRUA990",
          slots: { "0": { barrels: 2, name: "Pewpew", guns: 2 } },
          gun_rate: 120.0
        },
        torpedoes: {
          visibility_dist: 5.0,
          distance: 9.0,
          torpedoes_id: 3256233424,
          torpedo_name: "Useless",
          reload_time: 2,
          torpedo_speed: 100,
          rotation_time: 2.0,
          torpedoes_id_str: "PRUT990",
          slots: {
            "0": { barrels: 1, caliber: 457, name: "450 mm Mk5", guns: 1 }
          },
          max_damage: 0
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3256266192,
          distance: 12.8,
          distance_increase: 0,
          fire_control_id_str: "PRUS990"
        },
        weaponry: { anti_aircraft: 2, aircraft: 0, artillery: 1, torpedoes: 0 },
        battle_level_range_max: 10,
        battle_level_range_min: 10,
        flight_control: null,
        concealment: {
          total: 0,
          detect_distance_by_plane: 20.0,
          detect_distance_by_ship: 20.0
        },
        armour: {
          casemate: { max: 88, min: 6 },
          flood_prob: 0,
          deck: { max: 6, min: 6 },
          flood_damage: 0,
          range: { max: 88, min: 6 },
          health: 1,
          extremities: { max: 10, min: 6 },
          total: 15,
          citadel: { max: 0, min: 0 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4268937136,
        4273131440,
        4281520048,
        4278374320,
        4261597104,
        4269985712,
        4267888560,
        4274180016,
        4282568624,
        4262645680,
        4266839984,
        4271034288,
        4275228592,
        4265791408,
        4259499952,
        4287811504,
        4272082864,
        4257402800,
        4280471472
      ],
      tier: 10,
      next_ships: {},
      mod_slots: 6,
      type: "Cruiser",
      name: "Test Ship"
    },
    "3552491216": {
      description:
        'A Heavy Cruiser of the "Fleet of Fog". Modelled after Takao, the lead ship of the Imperial Japanese Navy\'s Takao-class cruisers. She loses a duel against I-401 while patrolling the Kumano Sea area. After her defeat, she decides to leave the "Fleet of Fog" to join the "Blue Steel" led by Gunzo Chihaya. Takao’s Mental Model has a great deal of curiosity, which led her to unwittingly collect a lot of information about humanity.\nThis warship has been specially designed for World of Warships, and is modelled after Takao as she appears in "ARPEGGIO OF BLUE STEEL -ARS NOVA-".',
      price_gold: 0,
      ship_id_str: "PJSC708",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSC708.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSC708.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSC708.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSC708.png"
      },
      modules: {
        engine: [3465391824],
        torpedo_bomber: [],
        fighter: [],
        hull: [3463196368],
        artillery: [3465522896],
        torpedoes: [3464900304],
        fire_control: [3458641616],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3458641616": {
          name: "Type8 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3458641616,
          type: "Suo",
          module_id_str: "PJUS797"
        },
        "3465391824": {
          name: "Propulsion: 130,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3465391824,
          type: "Engine",
          module_id_str: "PJUE791"
        },
        "3465522896": {
          name: "203 mm/50 3rd Year Type",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3465522896,
          type: "Artillery",
          module_id_str: "PJUA791"
        },
        "3464900304": {
          name: "Type90 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3464900304,
          type: "Torpedoes",
          module_id_str: "PJUT791"
        },
        "3463196368": {
          name: "ARP Takao",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3463196368,
          type: "Hull",
          module_id_str: "PJUH793"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3552491216,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE791",
          max_speed: 35.5,
          engine_id: 3465391824
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 50,
              caliber: 25,
              name: "25 mm/60 Type96 mod. 1",
              guns: 28
            },
            "1": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 A1",
              guns: 4
            }
          },
          defense: 36
        },
        mobility: {
          rudder_time: 8.1,
          total: 71,
          turning_radius: 790,
          max_speed: 35.5
        },
        hull: {
          hull_id: 3463196368,
          hull_id_str: "PJUH793",
          torpedoes_barrels: 4,
          anti_aircraft_barrels: 32,
          range: { max: 127, min: 6 },
          health: 40100,
          planes_amount: 0,
          artillery_barrels: 5,
          atba_barrels: 4
        },
        atbas: {
          distance: 5.5,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 5.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 12.0
            }
          }
        },
        artillery: {
          max_dispersion: 141,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 840,
              name: "203 mm AP Type91",
              damage: 4700,
              bullet_mass: 126,
              type: "AP"
            },
            HE: {
              burn_probability: 17.0,
              bullet_speed: 840,
              name: "203 mm HE Type0",
              damage: 3300,
              bullet_mass: 126,
              type: "HE"
            }
          },
          shot_delay: 16.0,
          rotation_time: 29.03,
          distance: 15.8,
          artillery_id: 3465522896,
          artillery_id_str: "PJUA791",
          slots: {
            "0": { barrels: 2, name: "203 mm/50 3rd Year Type mod. E", guns: 5 }
          },
          gun_rate: 3.8
        },
        torpedoes: {
          visibility_dist: 1.6,
          distance: 10.0,
          torpedoes_id: 3464900304,
          torpedo_name: "Type90 mod. 1",
          reload_time: 109,
          torpedo_speed: 62,
          rotation_time: 7.2,
          torpedoes_id_str: "PJUT791",
          slots: {
            "0": { barrels: 4, caliber: 610, name: "610 mm Quad", guns: 4 }
          },
          max_damage: 17233
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3458641616,
          distance: 15.8,
          distance_increase: 0,
          fire_control_id_str: "PJUS797"
        },
        weaponry: {
          anti_aircraft: 36,
          aircraft: 0,
          artillery: 63,
          torpedoes: 47
        },
        battle_level_range_max: 10,
        battle_level_range_min: 8,
        flight_control: null,
        concealment: {
          total: 56,
          detect_distance_by_plane: 8.7,
          detect_distance_by_ship: 11.9
        },
        armour: {
          casemate: { max: 25, min: 25 },
          flood_prob: 16,
          deck: { max: 47, min: 35 },
          flood_damage: 67,
          range: { max: 127, min: 6 },
          health: 40100,
          extremities: { max: 25, min: 25 },
          total: 54,
          citadel: { max: 127, min: 58 }
        },
        dive_bomber: null
      },
      upgrades: [
        4265791408,
        4260548528,
        4257402800,
        4259499952,
        4273131440,
        4261597104,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4266839984,
        4281520048,
        4282568624
      ],
      tier: 8,
      next_ships: {},
      mod_slots: 5,
      type: "Cruiser",
      name: "ARP Takao"
    },
    "3552458448": {
      description:
        'Kagero-class training ship of the Yokosuka Girls Maritime High School. She is operated by the main character Akeno Misaki. The ship mounts experimental modules that allow her to travel at higher speeds than her sister ships at the cost of stability. In the series, reduced personnel by automation allows for a single class of 30 students to operate the ship.\nFrom the series "High School Fleet".',
      price_gold: 9700,
      ship_id_str: "PJSD708",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSD708.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSD708.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSD708.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSD708.png"
      },
      modules: {
        engine: [3475877584],
        torpedo_bomber: [],
        fighter: [],
        hull: [3473682128, 3474730704, 3475779280],
        artillery: [3476008656],
        torpedoes: [3475386064],
        fire_control: [3475418832],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3475386064": {
          name: "Type90 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3475386064,
          type: "Torpedoes",
          module_id_str: "PJUT781"
        },
        "3475418832": {
          name: "Type8 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3475418832,
          type: "Suo",
          module_id_str: "PJUS781"
        },
        "3473682128": {
          name: "Harekaze 11-12",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3473682128,
          type: "Hull",
          module_id_str: "PJUH783"
        },
        "3474730704": {
          name: "Harekaze 4-10",
          next_modules: [3473682128],
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3474730704,
          type: "Hull",
          module_id_str: "PJUH782"
        },
        "3475877584": {
          name: "Propulsion: 52,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3475877584,
          type: "Engine",
          module_id_str: "PJUE781"
        },
        "3475779280": {
          name: "Harekaze 1-4",
          next_modules: [3474730704],
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3475779280,
          type: "Hull",
          module_id_str: "PJUH781"
        },
        "3476008656": {
          name: "127/50 or 100/65 or 127/54",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3476008656,
          type: "Artillery",
          module_id_str: "PJUA781"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3552458448,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE781",
          max_speed: 35.5,
          engine_id: 3475877584
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 7,
              caliber: 25,
              name: "25 mm/60 Type96 mod. 1",
              guns: 4
            }
          },
          defense: 8
        },
        mobility: {
          rudder_time: 4.0,
          total: 80,
          turning_radius: 640,
          max_speed: 35.5
        },
        hull: {
          hull_id: 3475779280,
          hull_id_str: "PJUH781",
          torpedoes_barrels: 2,
          anti_aircraft_barrels: 4,
          range: { max: 21, min: 6 },
          health: 13300,
          planes_amount: 0,
          artillery_barrels: 3,
          atba_barrels: 0
        },
        atbas: null,
        artillery: {
          max_dispersion: 85,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 915,
              name: "127 mm AP Type0",
              damage: 2200,
              bullet_mass: 23,
              type: "AP"
            },
            HE: {
              burn_probability: 7.0,
              bullet_speed: 915,
              name: "127 mm HE Type1",
              damage: 1800,
              bullet_mass: 23,
              type: "HE"
            }
          },
          shot_delay: 7.0,
          rotation_time: 30.0,
          distance: 9.4,
          artillery_id: 3476008656,
          artillery_id_str: "PJUA781",
          slots: {
            "0": { barrels: 2, name: "127 mm/50 3rd Year Type", guns: 3 }
          },
          gun_rate: 8.5
        },
        torpedoes: {
          visibility_dist: 1.6,
          distance: 10.0,
          torpedoes_id: 3475386064,
          torpedo_name: "Type90 mod. 1",
          reload_time: 112,
          torpedo_speed: 62,
          rotation_time: 7.2,
          torpedoes_id_str: "PJUT781",
          slots: {
            "0": { barrels: 4, caliber: 610, name: "610 mm Quad", guns: 2 }
          },
          max_damage: 17233
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3475418832,
          distance: 9.4,
          distance_increase: 0,
          fire_control_id_str: "PJUS781"
        },
        weaponry: {
          anti_aircraft: 8,
          aircraft: 0,
          artillery: 24,
          torpedoes: 23
        },
        battle_level_range_max: 10,
        battle_level_range_min: 8,
        flight_control: null,
        concealment: {
          total: 90,
          detect_distance_by_plane: 3.8,
          detect_distance_by_ship: 6.8
        },
        armour: {
          casemate: { max: 19, min: 6 },
          flood_prob: 0,
          deck: { max: 15, min: 15 },
          flood_damage: 0,
          range: { max: 21, min: 6 },
          health: 13300,
          extremities: { max: 19, min: 19 },
          total: 25,
          citadel: { max: 0, min: 0 }
        },
        dive_bomber: null
      },
      upgrades: [
        4265791408,
        4282568624,
        4257402800,
        4259499952,
        4260548528,
        4261597104,
        4262645680,
        4268937136,
        4287811504,
        4267888560,
        4273131440,
        4269985712,
        4271034288,
        4272082864,
        4266839984
      ],
      tier: 8,
      next_ships: {},
      mod_slots: 5,
      type: "Destroyer",
      name: "HSF Harekaze"
    },
    "3554555600": {
      description:
        "One of the first Fubuki-class destroyers, with an incredible striking power from her three 610 mm torpedo launchers. The ship significantly surpassed preceding-class destroyers in terms of artillery firepower. However, her AA defenses were weak, which was characteristic of all Japanese destroyers.",
      price_gold: 4000,
      ship_id_str: "PJSD706",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSD706.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSD706.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSD706.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSD706.png"
      },
      modules: {
        engine: [3733827280],
        torpedo_bomber: [],
        fighter: [],
        hull: [3743166160],
        artillery: [3720326864],
        torpedoes: [3762695888],
        fire_control: [3756437200],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3733827280": {
          name: "Propulsion: 50,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3733827280,
          type: "Engine",
          module_id_str: "PJUE535"
        },
        "3743166160": {
          name: "Shinonome",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3743166160,
          type: "Hull",
          module_id_str: "PJUH526"
        },
        "3720326864": {
          name: "127 mm/50 Type3",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3720326864,
          type: "Artillery",
          module_id_str: "PJUA548"
        },
        "3762695888": {
          name: "Type8 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3762695888,
          type: "Torpedoes",
          module_id_str: "PJUT507"
        },
        "3756437200": {
          name: "Type6 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3756437200,
          type: "Suo",
          module_id_str: "PJUS513"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3554555600,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE535",
          max_speed: 35.0,
          engine_id: 3733827280
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 1.2,
              avg_damage: 3,
              caliber: 13,
              name: "13 mm/76 Type93 Twin",
              guns: 1
            }
          },
          defense: 2
        },
        mobility: {
          rudder_time: 3.2,
          total: 79,
          turning_radius: 640,
          max_speed: 35.0
        },
        hull: {
          hull_id: 3743166160,
          hull_id_str: "PJUH526",
          torpedoes_barrels: 3,
          anti_aircraft_barrels: 1,
          range: { max: 20, min: 6 },
          health: 12900,
          planes_amount: 0,
          artillery_barrels: 3,
          atba_barrels: 0
        },
        atbas: null,
        artillery: {
          max_dispersion: 82,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 915,
              name: "127 mm AP Type0",
              damage: 2200,
              bullet_mass: 23,
              type: "AP"
            },
            HE: {
              burn_probability: 7.0,
              bullet_speed: 915,
              name: "127 mm HE Type1",
              damage: 1800,
              bullet_mass: 23,
              type: "HE"
            }
          },
          shot_delay: 9.0,
          rotation_time: 30.0,
          distance: 9.0,
          artillery_id: 3720326864,
          artillery_id_str: "PJUA548",
          slots: {
            "0": { barrels: 2, name: "127 mm/50 3rd Year Type mod. A", guns: 3 }
          },
          gun_rate: 6.7
        },
        torpedoes: {
          visibility_dist: 1.6,
          distance: 8.0,
          torpedoes_id: 3762695888,
          torpedo_name: "Type8",
          reload_time: 73,
          torpedo_speed: 63,
          rotation_time: 7.2,
          torpedoes_id_str: "PJUT507",
          slots: {
            "0": { barrels: 3, caliber: 610, name: "610 mm Triple", guns: 3 }
          },
          max_damage: 14600
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3756437200,
          distance: 9.0,
          distance_increase: 0,
          fire_control_id_str: "PJUS513"
        },
        weaponry: {
          anti_aircraft: 2,
          aircraft: 0,
          artillery: 23,
          torpedoes: 25
        },
        battle_level_range_max: 8,
        battle_level_range_min: 6,
        flight_control: null,
        concealment: {
          total: 89,
          detect_distance_by_plane: 3.8,
          detect_distance_by_ship: 7.0
        },
        armour: {
          casemate: { max: -1, min: -1 },
          flood_prob: 0,
          deck: { max: -1, min: -1 },
          flood_damage: 0,
          range: { max: 20, min: 6 },
          health: 12900,
          extremities: { max: -1, min: -1 },
          total: 21,
          citadel: { max: -1, min: -1 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4259499952,
        4273131440,
        4261597104,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4282568624
      ],
      tier: 6,
      next_ships: {},
      mod_slots: 4,
      type: "Destroyer",
      name: "Shinonome"
    },
    "3554621136": {
      description:
        'A Battleship of the "Fleet of Fog". Modelled after the Imperial Japanese Navy\'s 4th Kongo-class battleship, Kirishima. She was first seen engaging I-401, along with Haruna, at the battle in Yokosuka Bay. She was eventually defeated by I-401 due to her "trump card" backfiring under her rival\'s tactics.\nThis warship has been specially designed for World of Warships, and is modelled after Kirishima as she appears in "ARPEGGIO OF BLUE STEEL -ARS NOVA-".',
      price_gold: 0,
      ship_id_str: "PJSB706",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSB706.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSB706.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSB706.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSB706.png"
      },
      modules: {
        engine: [3774721744],
        torpedo_bomber: [],
        fighter: [],
        hull: [3774623440],
        artillery: [3774852816],
        torpedoes: [],
        fire_control: [3774262992],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3774721744": {
          name: "Propulsion: 136,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3774721744,
          type: "Engine",
          module_id_str: "PJUE496"
        },
        "3774623440": {
          name: "ARP Kirishima",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3774623440,
          type: "Hull",
          module_id_str: "PJUH496"
        },
        "3774262992": {
          name: "Type5 mod. 2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3774262992,
          type: "Suo",
          module_id_str: "PJUS496"
        },
        "3774852816": {
          name: "356 mm/45 Type41",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3774852816,
          type: "Artillery",
          module_id_str: "PJUA496"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3554621136,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE496",
          max_speed: 30.0,
          engine_id: 3774721744
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 30,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 6
            },
            "1": {
              distance: 1.2,
              avg_damage: 9,
              caliber: 13,
              name: "13 mm/76 Type93 Quad",
              guns: 2
            },
            "2": {
              distance: 1.2,
              avg_damage: 14,
              caliber: 13,
              name: "13 mm/76 Type93 Twin",
              guns: 4
            },
            "3": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 A1",
              guns: 4
            }
          },
          defense: 34
        },
        mobility: {
          rudder_time: 14.9,
          total: 45,
          turning_radius: 770,
          max_speed: 30.0
        },
        hull: {
          hull_id: 3774623440,
          hull_id_str: "PJUH496",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 16,
          range: { max: 254, min: 6 },
          health: 54100,
          planes_amount: 0,
          artillery_barrels: 4,
          atba_barrels: 18
        },
        atbas: {
          distance: 4.0,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 5.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 12.0
            },
            "1": {
              burn_probability: null,
              bullet_speed: 855,
              name: "152 mm AP Type4",
              shot_delay: 10.0,
              damage: 2900,
              bullet_mass: 45,
              type: "AP",
              gun_rate: 6.0
            }
          }
        },
        artillery: {
          max_dispersion: 236,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 775,
              name: "356 mm AP Type91",
              damage: 10200,
              bullet_mass: 674,
              type: "AP"
            },
            HE: {
              burn_probability: 25.0,
              bullet_speed: 805,
              name: "356 mm HE Type0",
              damage: 5700,
              bullet_mass: 625,
              type: "HE"
            }
          },
          shot_delay: 30.0,
          rotation_time: 54.55,
          distance: 21.2,
          artillery_id: 3774852816,
          artillery_id_str: "PJUA496",
          slots: {
            "0": { barrels: 2, name: "356 mm/45 41st Year Type", guns: 4 }
          },
          gun_rate: 2.0
        },
        torpedoes: null,
        fighters: null,
        fire_control: {
          fire_control_id: 3774262992,
          distance: 21.2,
          distance_increase: 10,
          fire_control_id_str: "PJUS496"
        },
        weaponry: {
          anti_aircraft: 34,
          aircraft: 0,
          artillery: 79,
          torpedoes: 0
        },
        battle_level_range_max: 7,
        battle_level_range_min: 5,
        flight_control: null,
        concealment: {
          total: 29,
          detect_distance_by_plane: 11.7,
          detect_distance_by_ship: 16.2
        },
        armour: {
          casemate: { max: 152, min: 152 },
          flood_prob: 25,
          deck: { max: 120, min: 38 },
          flood_damage: 67,
          range: { max: 254, min: 6 },
          health: 54100,
          extremities: { max: 76, min: 25 },
          total: 64,
          citadel: { max: 203, min: 102 }
        },
        dive_bomber: null
      },
      upgrades: [
        4273131440,
        4261597104,
        4259499952,
        4262645680,
        4287811504,
        4260548528,
        4271034288,
        4272082864,
        4282568624,
        4281520048
      ],
      tier: 5,
      next_ships: {},
      mod_slots: 3,
      type: "Battleship",
      name: "ARP Kirishima"
    },
    "3551442640": {
      description:
        'A Heavy Cruiser of the "Fleet of Fog". Modelled after the Imperial Japanese Navy\'s 4th Myoko-class cruiser, Haguro. Equipped with multiple thruster modules, she uses exceptional speed and agility to overwhelm her opponents. Her Mental Model "Haguro" is known for her sharp tongue and lazy personality. Haguro acts as one of the "Secretaries" in the "Student Council of the Fog", along with Ashigara.\nThis warship has been specially designed for World of Warships, and is modelled after Haguro as she appears in "ARPEGGIO OF BLUE STEEL -ARS NOVA- Cadenza".',
      price_gold: 0,
      ship_id_str: "PJSC709",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSC709.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSC709.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSC709.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSC709.png"
      },
      modules: {
        engine: [3463294672],
        torpedo_bomber: [],
        fighter: [],
        hull: [3460050640],
        artillery: [3674189520],
        torpedoes: [3565563600],
        fire_control: [3463884496],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3463294672": {
          name: "Propulsion: 132,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3463294672,
          type: "Engine",
          module_id_str: "PJUE793"
        },
        "3460050640": {
          name: "ARP Haguro",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3460050640,
          type: "Hull",
          module_id_str: "PJUH796"
        },
        "3463884496": {
          name: "Type7 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3463884496,
          type: "Suo",
          module_id_str: "PJUS792"
        },
        "3565563600": {
          name: "Type90 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3565563600,
          type: "Torpedoes",
          module_id_str: "PJUT695"
        },
        "3674189520": {
          name: "203 mm/50 Type3",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3674189520,
          type: "Artillery",
          module_id_str: "PJUA592"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3551442640,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE793",
          max_speed: 35.0,
          engine_id: 3463294672
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 40,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 8
            },
            "1": {
              distance: 3.1,
              avg_damage: 24,
              caliber: 25,
              name: "25 mm/60 Type96 Triple mod. 1",
              guns: 4
            },
            "2": {
              distance: 3.1,
              avg_damage: 46,
              caliber: 25,
              name: "25 mm/60 Type96 mod. 1",
              guns: 26
            },
            "3": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 mod. A1",
              guns: 4
            }
          },
          defense: 42
        },
        mobility: {
          rudder_time: 7.1,
          total: 71,
          turning_radius: 780,
          max_speed: 35.0
        },
        hull: {
          hull_id: 3460050640,
          hull_id_str: "PJUH796",
          torpedoes_barrels: 4,
          anti_aircraft_barrels: 42,
          range: { max: 102, min: 6 },
          health: 39200,
          planes_amount: 0,
          artillery_barrels: 5,
          atba_barrels: 4
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 7.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 8.0
            }
          }
        },
        artillery: {
          max_dispersion: 140,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 840,
              name: "203 mm AP Type91",
              damage: 4700,
              bullet_mass: 126,
              type: "AP"
            },
            HE: {
              burn_probability: 17.0,
              bullet_speed: 840,
              name: "203 mm HE Type0",
              damage: 3300,
              bullet_mass: 126,
              type: "HE"
            }
          },
          shot_delay: 14.0,
          rotation_time: 45.0,
          distance: 15.6,
          artillery_id: 3674189520,
          artillery_id_str: "PJUA592",
          slots: {
            "0": {
              barrels: 2,
              name: "203 mm/50 3rd Year Type 2 GO mod. C",
              guns: 5
            }
          },
          gun_rate: 4.3
        },
        torpedoes: {
          visibility_dist: 1.6,
          distance: 10.0,
          torpedoes_id: 3565563600,
          torpedo_name: "Type90 mod. 1",
          reload_time: 82,
          torpedo_speed: 62,
          rotation_time: 7.2,
          torpedoes_id_str: "PJUT695",
          slots: {
            "0": { barrels: 3, caliber: 610, name: "610 mm Triple", guns: 4 }
          },
          max_damage: 17233
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3463884496,
          distance: 15.6,
          distance_increase: 0,
          fire_control_id_str: "PJUS792"
        },
        weaponry: {
          anti_aircraft: 42,
          aircraft: 0,
          artillery: 62,
          torpedoes: 41
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: null,
        concealment: {
          total: 51,
          detect_distance_by_plane: 8.2,
          detect_distance_by_ship: 13.1
        },
        armour: {
          casemate: { max: 25, min: 25 },
          flood_prob: 13,
          deck: { max: 35, min: 32 },
          flood_damage: 67,
          range: { max: 102, min: 6 },
          health: 39200,
          extremities: { max: 16, min: 16 },
          total: 51,
          citadel: { max: 102, min: 57 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4261597104,
        4259499952,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4273131440,
        4281520048,
        4282568624
      ],
      tier: 7,
      next_ships: {},
      mod_slots: 4,
      type: "Cruiser",
      name: "ARP Haguro"
    },
    "3555669712": {
      description:
        'A Battleship of the "Fleet of Fog". Modelled after the lead ship of the Imperial Japanese Navy\'s Kongo-class, Kongo. As the flagship of the "First Oriental Fleet", her Mental Model "Kongō" honors the Admiralty Code above all else. She seeks to eliminate the submarine I-401, who chose to deviate from the Code.\nThis warship has been specially designed for World of Warships, and is modelled after Kongō as she appears in "ARPEGGIO OF BLUE STEEL -ARS NOVA-".',
      price_gold: 0,
      ship_id_str: "PJSB705",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSB705.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSB705.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSB705.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSB705.png"
      },
      modules: {
        engine: [3775770320],
        torpedo_bomber: [],
        fighter: [],
        hull: [3775672016],
        artillery: [3775901392],
        torpedoes: [],
        fire_control: [3775311568],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3775311568": {
          name: "Type5 mod. 2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3775311568,
          type: "Suo",
          module_id_str: "PJUS495"
        },
        "3775672016": {
          name: "ARP Kongō",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3775672016,
          type: "Hull",
          module_id_str: "PJUH495"
        },
        "3775901392": {
          name: "356 mm/45 Type41",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3775901392,
          type: "Artillery",
          module_id_str: "PJUA495"
        },
        "3775770320": {
          name: "Propulsion: 136,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3775770320,
          type: "Engine",
          module_id_str: "PJUE495"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3555669712,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE495",
          max_speed: 30.0,
          engine_id: 3775770320
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 30,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 6
            },
            "1": {
              distance: 1.2,
              avg_damage: 9,
              caliber: 13,
              name: "13 mm/76 Type93 Quad",
              guns: 2
            },
            "2": {
              distance: 1.2,
              avg_damage: 14,
              caliber: 13,
              name: "13 mm/76 Type93 Twin",
              guns: 4
            },
            "3": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 A1",
              guns: 4
            }
          },
          defense: 34
        },
        mobility: {
          rudder_time: 14.9,
          total: 45,
          turning_radius: 770,
          max_speed: 30.0
        },
        hull: {
          hull_id: 3775672016,
          hull_id_str: "PJUH495",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 16,
          range: { max: 254, min: 6 },
          health: 54100,
          planes_amount: 0,
          artillery_barrels: 4,
          atba_barrels: 18
        },
        atbas: {
          distance: 4.0,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 5.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 12.0
            },
            "1": {
              burn_probability: null,
              bullet_speed: 855,
              name: "152 mm AP Type4",
              shot_delay: 10.0,
              damage: 2900,
              bullet_mass: 45,
              type: "AP",
              gun_rate: 6.0
            }
          }
        },
        artillery: {
          max_dispersion: 236,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 775,
              name: "356 mm AP Type91",
              damage: 10200,
              bullet_mass: 674,
              type: "AP"
            },
            HE: {
              burn_probability: 25.0,
              bullet_speed: 805,
              name: "356 mm HE Type0",
              damage: 5700,
              bullet_mass: 625,
              type: "HE"
            }
          },
          shot_delay: 30.0,
          rotation_time: 54.55,
          distance: 21.2,
          artillery_id: 3775901392,
          artillery_id_str: "PJUA495",
          slots: {
            "0": { barrels: 2, name: "356 mm/45 41st Year Type", guns: 4 }
          },
          gun_rate: 2.0
        },
        torpedoes: null,
        fighters: null,
        fire_control: {
          fire_control_id: 3775311568,
          distance: 21.2,
          distance_increase: 10,
          fire_control_id_str: "PJUS495"
        },
        weaponry: {
          anti_aircraft: 34,
          aircraft: 0,
          artillery: 79,
          torpedoes: 0
        },
        battle_level_range_max: 7,
        battle_level_range_min: 5,
        flight_control: null,
        concealment: {
          total: 29,
          detect_distance_by_plane: 11.7,
          detect_distance_by_ship: 16.2
        },
        armour: {
          casemate: { max: 152, min: 152 },
          flood_prob: 25,
          deck: { max: 120, min: 38 },
          flood_damage: 67,
          range: { max: 254, min: 6 },
          health: 54100,
          extremities: { max: 76, min: 25 },
          total: 64,
          citadel: { max: 203, min: 102 }
        },
        dive_bomber: null
      },
      upgrades: [
        4273131440,
        4261597104,
        4259499952,
        4262645680,
        4287811504,
        4260548528,
        4271034288,
        4272082864,
        4282568624,
        4281520048
      ],
      tier: 5,
      next_ships: {},
      mod_slots: 3,
      type: "Battleship",
      name: "ARP Kongō"
    },
    "3553539792": {
      description:
        'A Heavy Cruiser of the "Fleet of Fog". Modelled after the Imperial Japanese Navy\'s 3rd Myoko-class cruiser, Ashigara. She is equipped with a specialized harpoon-cannon, replacing the Super-Graviton Cannon unit. Her Mental Model "Ashigara" has a warlike personality and does not think matters over carefully. Ashigara acts as one of the "Secretaries" in the "Student Council of the Fog", along with Haguro.\nThis warship has been specially designed for World of Warships, and is modelled after Ashigara as she appears in "ARPEGGIO OF BLUE STEEL -ARS NOVA- Cadenza".',
      price_gold: 0,
      ship_id_str: "PJSC707",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSC707.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSC707.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSC707.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSC707.png"
      },
      modules: {
        engine: [3462246096],
        torpedo_bomber: [],
        fighter: [],
        hull: [3459002064],
        artillery: [3673140944],
        torpedoes: [3564515024],
        fire_control: [3462835920],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3462246096": {
          name: "Propulsion: 132,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3462246096,
          type: "Engine",
          module_id_str: "PJUE794"
        },
        "3459002064": {
          name: "ARP Ashigara",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3459002064,
          type: "Hull",
          module_id_str: "PJUH797"
        },
        "3462835920": {
          name: "Type7 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3462835920,
          type: "Suo",
          module_id_str: "PJUS793"
        },
        "3564515024": {
          name: "Type90 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3564515024,
          type: "Torpedoes",
          module_id_str: "PJUT696"
        },
        "3673140944": {
          name: "203 mm/50 Type3",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3673140944,
          type: "Artillery",
          module_id_str: "PJUA593"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3553539792,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE794",
          max_speed: 35.0,
          engine_id: 3462246096
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 40,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 8
            },
            "1": {
              distance: 3.1,
              avg_damage: 24,
              caliber: 25,
              name: "25 mm/60 Type96 Triple mod. 1",
              guns: 4
            },
            "2": {
              distance: 3.1,
              avg_damage: 46,
              caliber: 25,
              name: "25 mm/60 Type96 mod. 1",
              guns: 26
            },
            "3": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 mod. A1",
              guns: 4
            }
          },
          defense: 42
        },
        mobility: {
          rudder_time: 7.1,
          total: 71,
          turning_radius: 780,
          max_speed: 35.0
        },
        hull: {
          hull_id: 3459002064,
          hull_id_str: "PJUH797",
          torpedoes_barrels: 4,
          anti_aircraft_barrels: 42,
          range: { max: 102, min: 6 },
          health: 39200,
          planes_amount: 0,
          artillery_barrels: 5,
          atba_barrels: 4
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 7.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 8.0
            }
          }
        },
        artillery: {
          max_dispersion: 140,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 840,
              name: "203 mm AP Type91",
              damage: 4700,
              bullet_mass: 126,
              type: "AP"
            },
            HE: {
              burn_probability: 17.0,
              bullet_speed: 840,
              name: "203 mm HE Type0",
              damage: 3300,
              bullet_mass: 126,
              type: "HE"
            }
          },
          shot_delay: 14.0,
          rotation_time: 45.0,
          distance: 15.6,
          artillery_id: 3673140944,
          artillery_id_str: "PJUA593",
          slots: {
            "0": {
              barrels: 2,
              name: "203 mm/50 3rd Year Type 2 GO mod. C",
              guns: 5
            }
          },
          gun_rate: 4.3
        },
        torpedoes: {
          visibility_dist: 1.6,
          distance: 10.0,
          torpedoes_id: 3564515024,
          torpedo_name: "Type90 mod. 1",
          reload_time: 82,
          torpedo_speed: 62,
          rotation_time: 7.2,
          torpedoes_id_str: "PJUT696",
          slots: {
            "0": { barrels: 3, caliber: 610, name: "610 mm Triple", guns: 4 }
          },
          max_damage: 17233
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3462835920,
          distance: 15.6,
          distance_increase: 0,
          fire_control_id_str: "PJUS793"
        },
        weaponry: {
          anti_aircraft: 42,
          aircraft: 0,
          artillery: 62,
          torpedoes: 41
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: null,
        concealment: {
          total: 51,
          detect_distance_by_plane: 8.2,
          detect_distance_by_ship: 13.1
        },
        armour: {
          casemate: { max: 25, min: 25 },
          flood_prob: 13,
          deck: { max: 35, min: 32 },
          flood_damage: 67,
          range: { max: 102, min: 6 },
          health: 39200,
          extremities: { max: 16, min: 16 },
          total: 51,
          citadel: { max: 102, min: 57 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4261597104,
        4259499952,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4273131440,
        4281520048,
        4282568624
      ],
      tier: 7,
      next_ships: {},
      mod_slots: 4,
      type: "Cruiser",
      name: "ARP Ashigara"
    },
    "3554588464": {
      description:
        'Deutschland-class training ship of the Wilhelmshaven Maritime High School. The commander of the ship is Thea Kreutzer and the vice commander is Wilhelmina. She has 28 cm guns mounted on a hull with a displacement equivalent to that of a training cruiser, and her diesel propulsion gives her an extensive cruising range. She is valued on distance voyages for her long cruising range. From the series "High School Fleet". In the series, her long range is utilized in the foreign exchange voyage.',
      price_gold: 5100,
      ship_id_str: "PGSC706",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PGSC706.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PGSC706.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PGSC706.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PGSC706.png"
      },
      modules: {
        engine: [3661475632],
        torpedo_bomber: [],
        fighter: [],
        hull: [3659280176],
        artillery: [3661606704],
        torpedoes: [3658886960],
        fire_control: [3658919728],
        flight_control: [],
        dive_bomber: []
      },
      modules_tree: {
        "3661475632": {
          name: "Propulsion: 54,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3661475632,
          type: "Engine",
          module_id_str: "PGUE604"
        },
        "3659280176": {
          name: "HSF Admiral Graf Spee",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3659280176,
          type: "Hull",
          module_id_str: "PGUH606"
        },
        "3661606704": {
          name: "283 mm L/52 Drh LC/28",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3661606704,
          type: "Artillery",
          module_id_str: "PGUA604"
        },
        "3658919728": {
          name: "FKS Typ 6 Mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3658919728,
          type: "Suo",
          module_id_str: "PGUS606"
        },
        "3658886960": {
          name: "G7 Steinbutt",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3658886960,
          type: "Torpedoes",
          module_id_str: "PGUT606"
        }
      },
      nation: "germany",
      is_premium: false,
      ship_id: 3554588464,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PGUE604",
          max_speed: 28.5,
          engine_id: 3661475632
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 10,
              caliber: 37,
              name: "37 mm Flakzwilling 30",
              guns: 4
            },
            "1": {
              distance: 2.0,
              avg_damage: 30,
              caliber: 20,
              name: "20 mm Flak 38",
              guns: 10
            },
            "2": {
              distance: 4.5,
              avg_damage: 49,
              caliber: 105,
              name: "105 mm L/65 Dop. L. C/31",
              guns: 3
            }
          },
          defense: 33
        },
        mobility: {
          rudder_time: 10.3,
          total: 48,
          turning_radius: 680,
          max_speed: 28.5
        },
        hull: {
          hull_id: 3659280176,
          hull_id_str: "PGUH606",
          torpedoes_barrels: 2,
          anti_aircraft_barrels: 17,
          range: { max: 170, min: 13 },
          health: 39400,
          planes_amount: 0,
          artillery_barrels: 2,
          atba_barrels: 11
        },
        atbas: {
          distance: 4.0,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 875,
              name: "150 mm Spr.Gr. L/4.5",
              shot_delay: 7.0,
              damage: 1700,
              bullet_mass: 45,
              type: "HE",
              gun_rate: 8.0
            },
            "1": {
              burn_probability: 5.0,
              bullet_speed: 900,
              name: "105 mm Spr.Gr. Kz.",
              shot_delay: 3.0,
              damage: 1200,
              bullet_mass: 15,
              type: "HE",
              gun_rate: 17.9
            }
          }
        },
        artillery: {
          max_dispersion: 182,
          shells: {
            AP: {
              burn_probability: null,
              bullet_speed: 910,
              name: "283 mm P.Spr.Gr. L/3.7",
              damage: 8400,
              bullet_mass: 300,
              type: "AP"
            },
            HE: {
              burn_probability: 20.0,
              bullet_speed: 910,
              name: "283 mm Spr.Gr. L/4.2 Kz.",
              damage: 3200,
              bullet_mass: 300,
              type: "HE"
            }
          },
          shot_delay: 20.0,
          rotation_time: 25.0,
          distance: 16.0,
          artillery_id: 3661606704,
          artillery_id_str: "PGUA604",
          slots: {
            "0": { barrels: 3, name: "283 mm L/52 Drh LC/28", guns: 2 }
          },
          gun_rate: 3.0
        },
        torpedoes: {
          visibility_dist: 1.3,
          distance: 8.0,
          torpedoes_id: 3658886960,
          torpedo_name: "G7 Steinbutt",
          reload_time: 90,
          torpedo_speed: 65,
          rotation_time: 7.2,
          torpedoes_id_str: "PGUT606",
          slots: {
            "0": { barrels: 4, caliber: 533, name: "533 mm Vierling", guns: 2 }
          },
          max_damage: 13700
        },
        fighters: null,
        fire_control: {
          fire_control_id: 3658919728,
          distance: 16.0,
          distance_increase: 0,
          fire_control_id_str: "PGUS606"
        },
        weaponry: {
          anti_aircraft: 33,
          aircraft: 0,
          artillery: 74,
          torpedoes: 19
        },
        battle_level_range_max: 8,
        battle_level_range_min: 6,
        flight_control: null,
        concealment: {
          total: 50,
          detect_distance_by_plane: 8.5,
          detect_distance_by_ship: 13.1
        },
        armour: {
          casemate: { max: 19, min: 19 },
          flood_prob: 22,
          deck: { max: 70, min: 19 },
          flood_damage: 67,
          range: { max: 170, min: 13 },
          health: 39400,
          extremities: { max: 50, min: 19 },
          total: 50,
          citadel: { max: 100, min: 40 }
        },
        dive_bomber: null
      },
      upgrades: [
        4260548528,
        4259499952,
        4261597104,
        4262645680,
        4287811504,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4273131440,
        4281520048,
        4282568624
      ],
      tier: 6,
      next_ships: {},
      mod_slots: 4,
      type: "Cruiser",
      name: "HSF Admiral Graf Spee"
    }
  }
};

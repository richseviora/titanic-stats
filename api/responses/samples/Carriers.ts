import { IResponse } from "../definitions/IResponse";
import { IWarshipCollection } from "../definitions/IWarship";
const carriers: IResponse<IWarshipCollection> = {
  status: "ok",
  meta: { count: 18, page_total: 1, total: 18, limit: 20, page: 1 },
  data: {
    "3763320528": {
      description:
        "Until the early 1940s, she was one of the biggest aircraft carriers of the Imperial Japanese Navy. Initially laid down as a battleship, she was redesigned during construction to become a carrier. The ship had good armor protection for her type, carried quite numerous air group and powerful secondary battery guns.",
      price_gold: 9700,
      ship_id_str: "PJSA507",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSA507.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSA507.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSA507.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSA507.png"
      },
      modules: {
        engine: [3765284560],
        torpedo_bomber: [4282330832],
        fighter: [4271615696],
        hull: [3724291792],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3765251792, 3766300368],
        dive_bomber: [4283313872]
      },
      modules_tree: {
        "3765284560": {
          name: "Propulsion: 125,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3765284560,
          type: "Engine",
          module_id_str: "PJUE505"
        },
        "3765251792": {
          name: "Type7 mod. 2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3765251792,
          type: "FlightControl",
          module_id_str: "PJUF505"
        },
        "3724291792": {
          name: "Kaga",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3724291792,
          type: "Hull",
          module_id_str: "PJUH544"
        },
        "3766300368": {
          name: "Type7 mod. 1",
          next_modules: [3765251792],
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3766300368,
          type: "FlightControl",
          module_id_str: "PJUF504"
        },
        "4282330832": {
          name: "Nakajima B5N2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 4282330832,
          type: "TorpedoBomber",
          module_id_str: "PJUB012"
        },
        "4283313872": {
          name: "Aichi D3A1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 4283313872,
          type: "DiveBomber",
          module_id_str: "PJUD011"
        },
        "4271615696": {
          name: "Mitsubishi A6M2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 4271615696,
          type: "Fighter",
          module_id_str: "PJUI022"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 3763320528,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PJUE505",
          max_speed: 28.0,
          engine_id: 3765284560
        },
        torpedo_bomber: {
          torpedo_distance: 3.0,
          plane_level: 6,
          squadrons: 1,
          name: "Nakajima B5N2",
          cruise_speed: 129,
          prepare_time: 29,
          torpedo_damage: 8567,
          count_in_squadron: { max: 4, min: 4 },
          torpedo_max_speed: 48,
          torpedo_bomber_id_str: "PJUB012",
          gunner_damage: 10,
          max_damage: 8567,
          max_health: 1210,
          torpedo_bomber_id: 4282330832,
          torpedo_name: "Type94 mod. 2A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 70,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 14
            },
            "1": {
              distance: 5.0,
              avg_damage: 60,
              caliber: 127,
              name: "127 mm/40 Type89 A1",
              guns: 6
            },
            "2": {
              distance: 5.0,
              avg_damage: 20,
              caliber: 127,
              name: "127 mm/40 Type89 A1 mod. 2",
              guns: 2
            }
          },
          defense: 48
        },
        mobility: {
          rudder_time: 14.4,
          total: 35,
          turning_radius: 1080,
          max_speed: 28.0
        },
        hull: {
          hull_id: 3724291792,
          hull_id_str: "PJUH544",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 22,
          range: { max: 152, min: 1 },
          health: 51000,
          planes_amount: 85,
          artillery_barrels: 0,
          atba_barrels: 18
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 6.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 10.0
            },
            "1": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 5.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 12.0
            },
            "2": {
              burn_probability: null,
              bullet_speed: 870,
              name: "200 mm AP Type5",
              shot_delay: 15.0,
              damage: 4500,
              bullet_mass: 110,
              type: "AP",
              gun_rate: 4.0
            }
          }
        },
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 4271615696,
          squadrons: 1,
          name: "Mitsubishi A6M2",
          cruise_speed: 162,
          prepare_time: 16,
          gunner_damage: 0,
          fighters_id_str: "PJUI022",
          count_in_squadron: { max: 4, min: 4 },
          max_ammo: 60,
          plane_level: 6,
          avg_damage: 44,
          max_health: 1210
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 48,
          aircraft: 51,
          artillery: 6,
          torpedoes: 0
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: {
          flight_control_id_str: "PJUF504",
          bomber_squadrons: 3,
          torpedo_squadrons: 1,
          flight_control_id: 3766300368,
          fighter_squadrons: 1
        },
        concealment: {
          total: 41,
          detect_distance_by_plane: 13.6,
          detect_distance_by_ship: 12.6
        },
        armour: {
          casemate: { max: 16, min: 16 },
          flood_prob: 22,
          deck: { max: 21, min: 21 },
          flood_damage: 67,
          range: { max: 152, min: 1 },
          health: 51000,
          extremities: { max: 16, min: 16 },
          total: 64,
          citadel: { max: 152, min: 95 }
        },
        dive_bomber: {
          squadrons: 3,
          name: "Aichi D3A1",
          cruise_speed: 129,
          dive_bomber_id: 4283313872,
          prepare_time: 31,
          gunner_damage: 10,
          bomb_damage: 2600,
          count_in_squadron: { max: 4, min: 4 },
          bomb_name: "HE Type99 N6 mod. 1",
          bomb_bullet_mass: 126,
          plane_level: 6,
          bomb_burn_probability: 1.0,
          max_damage: 2600,
          max_health: 1210,
          dive_bomber_id_str: "PJUD011",
          accuracy: { max: 177.0, min: 71.0 }
        }
      },
      upgrades: [
        4284665776,
        4273131440,
        4290957232,
        4261597104,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4282568624,
        4281520048,
        4283617200
      ],
      tier: 7,
      next_ships: {},
      mod_slots: 4,
      type: "AirCarrier",
      name: "Kaga"
    },
    "4279219920": {
      description:
        "The mightiest aircraft carrier with the most advanced design, among ships of her type, built for the Imperial Japanese Navy. She featured an armored flight deck to provide protection from bomb hits. New dual-purpose artillery mounts significantly improved the ship's AA capabilities.",
      price_gold: 0,
      ship_id_str: "PJSA015",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSA015.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSA015.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSA015.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSA015.png"
      },
      modules: {
        engine: [3444420304],
        torpedo_bomber: [3453955792, 3455004368],
        fighter: [3453726416, 3454774992],
        hull: [3433836240, 3432787664],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3453824720, 3454873296, 3452776144],
        dive_bomber: [3453890256, 3454938832]
      },
      modules_tree: {
        "3452776144": {
          name: "Type9 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 25000,
          price_credit: 2100000,
          next_ships: null,
          module_id: 3452776144,
          type: "FlightControl",
          module_id_str: "PJUF803"
        },
        "3454774992": {
          name: "Kawanishi N1K5-A",
          next_modules: [3453726416],
          is_default: true,
          price_xp: 0,
          price_credit: 440000,
          next_ships: null,
          module_id: 3454774992,
          type: "Fighter",
          module_id_str: "PJUI801"
        },
        "3453726416": {
          name: "Mitsubishi A7M1",
          next_modules: null,
          is_default: false,
          price_xp: 15000,
          price_credit: 1180000,
          next_ships: null,
          module_id: 3453726416,
          type: "Fighter",
          module_id_str: "PJUI802"
        },
        "3433836240": {
          name: "Taiho (A)",
          next_modules: [3432787664],
          is_default: true,
          price_xp: 0,
          price_credit: 1000000,
          next_ships: null,
          module_id: 3433836240,
          type: "Hull",
          module_id_str: "PJUH821"
        },
        "3454873296": {
          name: "Type9 mod. 1",
          next_modules: [3452776144, 3453824720],
          is_default: true,
          price_xp: 0,
          price_credit: 950000,
          next_ships: null,
          module_id: 3454873296,
          type: "FlightControl",
          module_id_str: "PJUF801"
        },
        "3444420304": {
          name: "Propulsion: 160,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 800000,
          next_ships: null,
          module_id: 3444420304,
          type: "Engine",
          module_id_str: "PJUE811"
        },
        "3453890256": {
          name: "Aichi B7A2",
          next_modules: null,
          is_default: false,
          price_xp: 20500,
          price_credit: 1700000,
          next_ships: null,
          module_id: 3453890256,
          type: "DiveBomber",
          module_id_str: "PJUD802"
        },
        "3453955792": {
          name: "Aichi B7A2",
          next_modules: null,
          is_default: false,
          price_xp: 20500,
          price_credit: 1700000,
          next_ships: null,
          module_id: 3453955792,
          type: "TorpedoBomber",
          module_id_str: "PJUB802"
        },
        "3454938832": {
          name: "Yokosuka D4Y2",
          next_modules: [3453890256],
          is_default: true,
          price_xp: 0,
          price_credit: 630000,
          next_ships: null,
          module_id: 3454938832,
          type: "DiveBomber",
          module_id_str: "PJUD801"
        },
        "3455004368": {
          name: "Nakajima B6N",
          next_modules: [3453955792],
          is_default: true,
          price_xp: 0,
          price_credit: 630000,
          next_ships: null,
          module_id: 3455004368,
          type: "TorpedoBomber",
          module_id_str: "PJUB801"
        },
        "3453824720": {
          name: "Type9 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 25000,
          price_credit: 2100000,
          next_ships: null,
          module_id: 3453824720,
          type: "FlightControl",
          module_id_str: "PJUF802"
        },
        "3432787664": {
          name: "Taiho (B)",
          next_modules: null,
          is_default: false,
          price_xp: 31000,
          price_credit: 2000000,
          next_ships: [4277122768],
          module_id: 3432787664,
          type: "Hull",
          module_id_str: "PJUH822"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 4279219920,
      price_credit: 15320000,
      default_profile: {
        engine: {
          engine_id_str: "PJUE811",
          max_speed: 33.5,
          engine_id: 3444420304
        },
        torpedo_bomber: {
          torpedo_distance: 3.4,
          plane_level: 8,
          squadrons: 2,
          name: "Nakajima B6N",
          cruise_speed: 148,
          prepare_time: 25,
          torpedo_damage: 8567,
          count_in_squadron: { max: 4, min: 4 },
          torpedo_max_speed: 35,
          torpedo_bomber_id_str: "PJUB801",
          gunner_damage: 14,
          max_damage: 8567,
          max_health: 1720,
          torpedo_bomber_id: 3455004368,
          torpedo_name: "Type91 mod. 1A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 103,
              caliber: 25,
              name: "25 mm/60 Type96 Triple mod. 1",
              guns: 17
            },
            "1": {
              distance: 5.0,
              avg_damage: 124,
              caliber: 100,
              name: "100 mm/65 Type98",
              guns: 6
            }
          },
          defense: 59
        },
        mobility: {
          rudder_time: 20.1,
          total: 53,
          turning_radius: 1140,
          max_speed: 33.5
        },
        hull: {
          hull_id: 3433836240,
          hull_id_str: "PJUH821",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 23,
          range: { max: 165, min: 6 },
          health: 56100,
          planes_amount: 83,
          artillery_barrels: 0,
          atba_barrels: 6
        },
        atbas: {
          distance: 5.0,
          slots: {
            "0": {
              burn_probability: 6.0,
              bullet_speed: 1000,
              name: "100 mm HE Type98",
              shot_delay: 2.0,
              damage: 1700,
              bullet_mass: 13,
              type: "HE",
              gun_rate: 21.0
            }
          }
        },
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3454774992,
          squadrons: 2,
          name: "Kawanishi N1K5-A",
          cruise_speed: 171,
          prepare_time: 24,
          gunner_damage: 0,
          fighters_id_str: "PJUI801",
          count_in_squadron: { max: 4, min: 4 },
          max_ammo: 38,
          plane_level: 8,
          avg_damage: 70,
          max_health: 1660
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 59,
          aircraft: 52,
          artillery: 6,
          torpedoes: 0
        },
        battle_level_range_max: 10,
        battle_level_range_min: 9,
        flight_control: {
          flight_control_id_str: "PJUF801",
          bomber_squadrons: 2,
          torpedo_squadrons: 2,
          flight_control_id: 3454873296,
          fighter_squadrons: 2
        },
        concealment: {
          total: 35,
          detect_distance_by_plane: 12.6,
          detect_distance_by_ship: 14.6
        },
        armour: {
          casemate: { max: 25, min: 6 },
          flood_prob: 16,
          deck: { max: 95, min: 13 },
          flood_damage: 67,
          range: { max: 165, min: 6 },
          health: 56100,
          extremities: { max: 21, min: 21 },
          total: 73,
          citadel: { max: 165, min: 57 }
        },
        dive_bomber: {
          squadrons: 2,
          name: "Yokosuka D4Y2",
          cruise_speed: 161,
          dive_bomber_id: 3454938832,
          prepare_time: 20,
          gunner_damage: 14,
          bomb_damage: 4600,
          count_in_squadron: { max: 4, min: 4 },
          bomb_name: "HE Type99 N25 mod. 1",
          bomb_bullet_mass: 502,
          plane_level: 8,
          bomb_burn_probability: 1.0,
          max_damage: 4600,
          max_health: 1610,
          dive_bomber_id_str: "PJUD801",
          accuracy: { max: 335.0, min: 134.0 }
        }
      },
      upgrades: [
        4284665776,
        4277325744,
        4282568624,
        4290957232,
        4273131440,
        4261597104,
        4266839984,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4265791408,
        4274180016,
        4275228592,
        4276277168,
        4281520048,
        4283617200
      ],
      tier: 9,
      next_ships: { "4277122768": 248000 },
      mod_slots: 6,
      type: "AirCarrier",
      name: "Taiho"
    },
    "3763320816": {
      description:
        "A high-speed light aircraft carrier based on the Baltimore-class cruiser. Despite relatively small dimensions, the ship carried a rather powerful air group and was armed with numerous AA artillery. The ship boasted very good armor comparable with the protection of far larger attack aircraft carriers.",
      price_gold: 9500,
      ship_id_str: "PASA507",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASA507.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASA507.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASA507.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASA507.png"
      },
      modules: {
        engine: [3507335152],
        torpedo_bomber: [3761188848],
        fighter: [3757813744],
        hull: [3507236848],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3538759664, 3643617264],
        dive_bomber: [4286459888]
      },
      modules_tree: {
        "3507236848": {
          name: "Saipan",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3507236848,
          type: "Hull",
          module_id_str: "PAUH751"
        },
        "3538759664": {
          name: "Mk8 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 1,
          next_ships: null,
          module_id: 3538759664,
          type: "FlightControl",
          module_id_str: "PAUF721"
        },
        "3757813744": {
          name: "Vought F4U-4",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3757813744,
          type: "Fighter",
          module_id_str: "PAUI512"
        },
        "3643617264": {
          name: "Mk7 mod. 1",
          next_modules: [3538759664],
          is_default: true,
          price_xp: 0,
          price_credit: 1,
          next_ships: null,
          module_id: 3643617264,
          type: "FlightControl",
          module_id_str: "PAUF621"
        },
        "3507335152": {
          name: "Propulsion: 120,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3507335152,
          type: "Engine",
          module_id_str: "PAUE751"
        },
        "4286459888": {
          name: "Douglas AD2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 4286459888,
          type: "DiveBomber",
          module_id_str: "PAUD008"
        },
        "3761188848": {
          name: "Douglas AD1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3761188848,
          type: "TorpedoBomber",
          module_id_str: "PAUB509"
        }
      },
      nation: "usa",
      is_premium: true,
      ship_id: 3763320816,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PAUE751",
          max_speed: 33.0,
          engine_id: 3507335152
        },
        torpedo_bomber: {
          torpedo_distance: 3.7,
          plane_level: 9,
          squadrons: 0,
          name: "Douglas AD1",
          cruise_speed: 155,
          prepare_time: 0,
          torpedo_damage: 9867,
          count_in_squadron: { max: 8, min: 8 },
          torpedo_max_speed: 34,
          torpedo_bomber_id_str: "PAUB509",
          gunner_damage: 17,
          max_damage: 9867,
          max_health: 1960,
          torpedo_bomber_id: 3761188848,
          torpedo_name: "Mk13 mod. 0A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 124,
              caliber: 40,
              name: "40 mm Bofors Mk1",
              guns: 11
            },
            "1": {
              distance: 3.5,
              avg_damage: 63,
              caliber: 40,
              name: "40 mm Bofors Mk2",
              guns: 4
            },
            "2": {
              distance: 2.0,
              avg_damage: 91,
              caliber: 20,
              name: "20 mm Oerlikon Mk20",
              guns: 15
            }
          },
          defense: 48
        },
        mobility: {
          rudder_time: 15.9,
          total: 51,
          turning_radius: 920,
          max_speed: 33.0
        },
        hull: {
          hull_id: 3507236848,
          hull_id_str: "PAUH751",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 30,
          range: { max: 152, min: 6 },
          health: 44600,
          planes_amount: 48,
          artillery_barrels: 0,
          atba_barrels: 0
        },
        atbas: null,
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3757813744,
          squadrons: 3,
          name: "Vought F4U-4",
          cruise_speed: 178,
          prepare_time: 19,
          gunner_damage: 0,
          fighters_id_str: "PAUI512",
          count_in_squadron: { max: 8, min: 8 },
          max_ammo: 54,
          plane_level: 9,
          avg_damage: 70,
          max_health: 1910
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 48,
          aircraft: 49,
          artillery: 0,
          torpedoes: 0
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: {
          flight_control_id_str: "PAUF621",
          bomber_squadrons: 1,
          torpedo_squadrons: 0,
          flight_control_id: 3643617264,
          fighter_squadrons: 3
        },
        concealment: {
          total: 45,
          detect_distance_by_plane: 12.7,
          detect_distance_by_ship: 12.2
        },
        armour: {
          casemate: { max: 25, min: 6 },
          flood_prob: 4,
          deck: { max: 65, min: 10 },
          flood_damage: 67,
          range: { max: 152, min: 6 },
          health: 44600,
          extremities: { max: 16, min: 16 },
          total: 57,
          citadel: { max: 152, min: 13 }
        },
        dive_bomber: {
          squadrons: 1,
          name: "Douglas AD2",
          cruise_speed: 155,
          dive_bomber_id: 4286459888,
          prepare_time: 28,
          gunner_damage: 17,
          bomb_damage: 10800,
          count_in_squadron: { max: 8, min: 8 },
          bomb_name: "HE 1000 lb ANM65",
          bomb_bullet_mass: 454,
          plane_level: 9,
          bomb_burn_probability: 1.0,
          max_damage: 10800,
          max_health: 1960,
          dive_bomber_id_str: "PAUD008",
          accuracy: { max: 355.0, min: 142.0 }
        }
      },
      upgrades: [
        4284665776,
        4273131440,
        4290957232,
        4261597104,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4282568624,
        4283617200
      ],
      tier: 7,
      next_ships: {},
      mod_slots: 4,
      type: "AirCarrier",
      name: "Saipan"
    },
    "4279220208": {
      description:
        "The largest U.S. Navy warship laid down during World War II. The huge size of this aircraft carrier allowed her to carry the largest air group, compared to her contemporary counterparts. Excellent torpedo protection, well-armored flight deck and powerful AA defenses made Midway-class ships virtually invulnerable to attacks from enemy aircraft.",
      price_gold: 0,
      ship_id_str: "PASA015",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASA015.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASA015.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASA015.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASA015.png"
      },
      modules: {
        engine: [3339562992],
        torpedo_bomber: [3349098480, 3347001328],
        fighter: [3347820528, 3349917680],
        hull: [3308007408],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3338481648, 3337433072, 3339530224],
        dive_bomber: [3346935792, 3347984368]
      },
      modules_tree: {
        "3308007408": {
          name: "Midway (A)",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 3000000,
          next_ships: null,
          module_id: 3308007408,
          type: "Hull",
          module_id_str: "PAUH941"
        },
        "3339562992": {
          name: "Propulsion: 212,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 1400000,
          next_ships: null,
          module_id: 3339562992,
          type: "Engine",
          module_id_str: "PAUE911"
        },
        "3346935792": {
          name: "Douglas BTD-1",
          next_modules: [3347984368],
          is_default: true,
          price_xp: 0,
          price_credit: 980000,
          next_ships: null,
          module_id: 3346935792,
          type: "DiveBomber",
          module_id_str: "PAUD904"
        },
        "3347820528": {
          name: "Grumman F8F",
          next_modules: null,
          is_default: false,
          price_xp: 18000,
          price_credit: 1400000,
          next_ships: null,
          module_id: 3347820528,
          type: "Fighter",
          module_id_str: "PAUI903"
        },
        "3338481648": {
          name: "Mk10 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 30000,
          price_credit: 2400000,
          next_ships: null,
          module_id: 3338481648,
          type: "FlightControl",
          module_id_str: "PAUF912"
        },
        "3349917680": {
          name: "Vought F4U-4",
          next_modules: [3347820528],
          is_default: true,
          price_xp: 0,
          price_credit: 680000,
          next_ships: null,
          module_id: 3349917680,
          type: "Fighter",
          module_id_str: "PAUI901"
        },
        "3349098480": {
          name: "Douglas XSB2D",
          next_modules: null,
          is_default: false,
          price_xp: 24000,
          price_credit: 2000000,
          next_ships: null,
          module_id: 3349098480,
          type: "TorpedoBomber",
          module_id_str: "PAUB902"
        },
        "3337433072": {
          name: "Mk10 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 30000,
          price_credit: 2400000,
          next_ships: null,
          module_id: 3337433072,
          type: "FlightControl",
          module_id_str: "PAUF913"
        },
        "3339530224": {
          name: "Mk10 mod. 1",
          next_modules: [3337433072, 3338481648],
          is_default: true,
          price_xp: 0,
          price_credit: 1150000,
          next_ships: null,
          module_id: 3339530224,
          type: "FlightControl",
          module_id_str: "PAUF911"
        },
        "3347984368": {
          name: "Kaiser XBTK-1",
          next_modules: null,
          is_default: false,
          price_xp: 24000,
          price_credit: 2000000,
          next_ships: null,
          module_id: 3347984368,
          type: "DiveBomber",
          module_id_str: "PAUD903"
        },
        "3347001328": {
          name: "Douglas BTD-1",
          next_modules: [3349098480],
          is_default: true,
          price_xp: 0,
          price_credit: 980000,
          next_ships: null,
          module_id: 3347001328,
          type: "TorpedoBomber",
          module_id_str: "PAUB904"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 4279220208,
      price_credit: 21000000,
      default_profile: {
        engine: {
          engine_id_str: "PAUE911",
          max_speed: 33.0,
          engine_id: 3339562992
        },
        torpedo_bomber: {
          torpedo_distance: 3.7,
          plane_level: 9,
          squadrons: 1,
          name: "Douglas BTD-1",
          cruise_speed: 150,
          prepare_time: 40,
          torpedo_damage: 9867,
          count_in_squadron: { max: 6, min: 6 },
          torpedo_max_speed: 34,
          torpedo_bomber_id_str: "PAUB904",
          gunner_damage: 17,
          max_damage: 9867,
          max_health: 1939,
          torpedo_bomber_id: 3347001328,
          torpedo_name: "Mk13 mod. 0A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 124,
              caliber: 40,
              name: "40 mm Bofors Mk1",
              guns: 11
            },
            "1": {
              distance: 3.5,
              avg_damage: 159,
              caliber: 40,
              name: "40 mm Bofors Mk2",
              guns: 10
            },
            "2": {
              distance: 2.0,
              avg_damage: 170,
              caliber: 20,
              name: "20 mm Oerlikon Mk20",
              guns: 28
            },
            "3": {
              distance: 5.2,
              avg_damage: 199,
              caliber: 127,
              name: "127 mm/54 Mk39",
              guns: 18
            }
          },
          defense: 86
        },
        mobility: {
          rudder_time: 18.2,
          total: 51,
          turning_radius: 1230,
          max_speed: 33.0
        },
        hull: {
          hull_id: 3308007408,
          hull_id_str: "PAUH941",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 67,
          range: { max: 193, min: 13 },
          health: 67600,
          planes_amount: 136,
          artillery_barrels: 0,
          atba_barrels: 18
        },
        atbas: {
          distance: 5.0,
          slots: {
            "0": {
              burn_probability: 9.0,
              bullet_speed: 808,
              name: "127 mm HE Mk41",
              shot_delay: 4.0,
              damage: 1800,
              bullet_mass: 32,
              type: "HE",
              gun_rate: 15.0
            }
          }
        },
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3349917680,
          squadrons: 2,
          name: "Vought F4U-4",
          cruise_speed: 178,
          prepare_time: 37,
          gunner_damage: 0,
          fighters_id_str: "PAUI901",
          count_in_squadron: { max: 6, min: 6 },
          max_ammo: 54,
          plane_level: 9,
          avg_damage: 70,
          max_health: 1910
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 86,
          aircraft: 79,
          artillery: 7,
          torpedoes: 0
        },
        battle_level_range_max: 10,
        battle_level_range_min: 10,
        flight_control: {
          flight_control_id_str: "PAUF911",
          bomber_squadrons: 2,
          torpedo_squadrons: 1,
          flight_control_id: 3339530224,
          fighter_squadrons: 2
        },
        concealment: {
          total: 5,
          detect_distance_by_plane: 18.1,
          detect_distance_by_ship: 18.4
        },
        armour: {
          casemate: { max: 19, min: 19 },
          flood_prob: 25,
          deck: { max: 87, min: 50 },
          flood_damage: 67,
          range: { max: 193, min: 13 },
          health: 67600,
          extremities: { max: 21, min: 21 },
          total: 87,
          citadel: { max: 193, min: 74 }
        },
        dive_bomber: {
          squadrons: 2,
          name: "Douglas BTD-1",
          cruise_speed: 151,
          dive_bomber_id: 3346935792,
          prepare_time: 40,
          gunner_damage: 15,
          bomb_damage: 10800,
          count_in_squadron: { max: 6, min: 6 },
          bomb_name: "HE 1000 lb ANM65",
          bomb_bullet_mass: 454,
          plane_level: 9,
          bomb_burn_probability: 1.0,
          max_damage: 10800,
          max_health: 1910,
          dive_bomber_id_str: "PAUD904",
          accuracy: { max: 355.0, min: 142.0 }
        }
      },
      upgrades: [
        4284665776,
        4277325744,
        4282568624,
        4290957232,
        4273131440,
        4261597104,
        4266839984,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4265791408,
        4274180016,
        4275228592,
        4276277168,
        4281520048,
        4283617200
      ],
      tier: 10,
      next_ships: {},
      mod_slots: 6,
      type: "AirCarrier",
      name: "Midway"
    },
    "4281317360": {
      description:
        "The largest class of attack aircraft carriers. The ship featured a strong air group, powerful AA armament and good torpedo protection. The successful design of aircraft elevators ensured fast takeoff and landing for the aircraft. The unarmored flight deck, also characteristic of her predecessors, made her and her sister ships vulnerable to air strikes.",
      price_gold: 0,
      ship_id_str: "PASA013",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASA013.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASA013.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASA013.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASA013.png"
      },
      modules: {
        engine: [3453857776],
        torpedo_bomber: [3453956080, 3455004656],
        fighter: [3453726704, 3454775280],
        hull: [3444322288, 3443273712],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3443339248, 3444387824, 3442290672],
        dive_bomber: [3453890544, 3454939120]
      },
      modules_tree: {
        "3443339248": {
          name: "Mk9 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 26000,
          price_credit: 2150000,
          next_ships: null,
          module_id: 3443339248,
          type: "FlightControl",
          module_id_str: "PAUF812"
        },
        "3443273712": {
          name: "Essex (B)",
          next_modules: null,
          is_default: false,
          price_xp: 31000,
          price_credit: 2600000,
          next_ships: [4279220208],
          module_id: 3443273712,
          type: "Hull",
          module_id_str: "PAUH812"
        },
        "3453890544": {
          name: "Douglas BTD-1",
          next_modules: null,
          is_default: false,
          price_xp: 21000,
          price_credit: 1720000,
          next_ships: null,
          module_id: 3453890544,
          type: "DiveBomber",
          module_id_str: "PAUD802"
        },
        "3453726704": {
          name: "Vought F4U-4",
          next_modules: null,
          is_default: false,
          price_xp: 15500,
          price_credit: 1300000,
          next_ships: null,
          module_id: 3453726704,
          type: "Fighter",
          module_id_str: "PAUI802"
        },
        "3454775280": {
          name: "Vought F4U-1",
          next_modules: [3453726704],
          is_default: true,
          price_xp: 0,
          price_credit: 500000,
          next_ships: null,
          module_id: 3454775280,
          type: "Fighter",
          module_id_str: "PAUI801"
        },
        "3444322288": {
          name: "Essex (A)",
          next_modules: [3443273712],
          is_default: true,
          price_xp: 0,
          price_credit: 1200000,
          next_ships: null,
          module_id: 3444322288,
          type: "Hull",
          module_id_str: "PAUH811"
        },
        "3444387824": {
          name: "Mk9 mod. 1",
          next_modules: [3443339248, 3442290672],
          is_default: true,
          price_xp: 0,
          price_credit: 980000,
          next_ships: null,
          module_id: 3444387824,
          type: "FlightControl",
          module_id_str: "PAUF811"
        },
        "3453857776": {
          name: "Propulsion: 150,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 810000,
          next_ships: null,
          module_id: 3453857776,
          type: "Engine",
          module_id_str: "PAUE802"
        },
        "3454939120": {
          name: "Curtiss SB2C",
          next_modules: [3453890544],
          is_default: true,
          price_xp: 0,
          price_credit: 640000,
          next_ships: null,
          module_id: 3454939120,
          type: "DiveBomber",
          module_id_str: "PAUD801"
        },
        "3442290672": {
          name: "Mk9 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 26000,
          price_credit: 2150000,
          next_ships: null,
          module_id: 3442290672,
          type: "FlightControl",
          module_id_str: "PAUF813"
        },
        "3453956080": {
          name: "Douglas BTD-1",
          next_modules: null,
          is_default: false,
          price_xp: 21000,
          price_credit: 1720000,
          next_ships: null,
          module_id: 3453956080,
          type: "TorpedoBomber",
          module_id_str: "PAUB802"
        },
        "3455004656": {
          name: "Grumman TBM-3",
          next_modules: [3453956080],
          is_default: true,
          price_xp: 0,
          price_credit: 640000,
          next_ships: null,
          module_id: 3455004656,
          type: "TorpedoBomber",
          module_id_str: "PAUB801"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 4281317360,
      price_credit: 14500000,
      default_profile: {
        engine: {
          engine_id_str: "PAUE802",
          max_speed: 33.0,
          engine_id: 3453857776
        },
        torpedo_bomber: {
          torpedo_distance: 3.7,
          plane_level: 8,
          squadrons: 1,
          name: "Grumman TBM-3",
          cruise_speed: 136,
          prepare_time: 44,
          torpedo_damage: 9867,
          count_in_squadron: { max: 6, min: 6 },
          torpedo_max_speed: 34,
          torpedo_bomber_id_str: "PAUB801",
          gunner_damage: 15,
          max_damage: 9867,
          max_health: 1710,
          torpedo_bomber_id: 3455004656,
          torpedo_name: "Mk13 mod. 0A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 127,
              caliber: 40,
              name: "40 mm Bofors Mk2",
              guns: 8
            },
            "1": {
              distance: 2.0,
              avg_damage: 165,
              caliber: 20,
              name: "20 mm Oerlikon Mk4",
              guns: 46
            },
            "2": {
              distance: 5.0,
              avg_damage: 32,
              caliber: 127,
              name: "127 mm/38 Mk24",
              guns: 4
            },
            "3": {
              distance: 5.0,
              avg_damage: 60,
              caliber: 127,
              name: "127 mm/38 Mk32",
              guns: 4
            }
          },
          defense: 62
        },
        mobility: {
          rudder_time: 19.5,
          total: 51,
          turning_radius: 1120,
          max_speed: 33.0
        },
        hull: {
          hull_id: 3444322288,
          hull_id_str: "PAUH811",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 62,
          range: { max: 102, min: 6 },
          health: 53600,
          planes_amount: 75,
          artillery_barrels: 0,
          atba_barrels: 8
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
            },
            "1": {
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
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3454775280,
          squadrons: 2,
          name: "Vought F4U-1",
          cruise_speed: 169,
          prepare_time: 35,
          gunner_damage: 0,
          fighters_id_str: "PAUI801",
          count_in_squadron: { max: 6, min: 6 },
          max_ammo: 61,
          plane_level: 8,
          avg_damage: 63,
          max_health: 1700
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 62,
          aircraft: 49,
          artillery: 6,
          torpedoes: 0
        },
        battle_level_range_max: 10,
        battle_level_range_min: 9,
        flight_control: {
          flight_control_id_str: "PAUF811",
          bomber_squadrons: 1,
          torpedo_squadrons: 1,
          flight_control_id: 3444387824,
          fighter_squadrons: 2
        },
        concealment: {
          total: 29,
          detect_distance_by_plane: 14.4,
          detect_distance_by_ship: 14.9
        },
        armour: {
          casemate: { max: 19, min: 19 },
          flood_prob: 34,
          deck: { max: 64, min: 13 },
          flood_damage: 67,
          range: { max: 102, min: 6 },
          health: 53600,
          extremities: { max: 21, min: 21 },
          total: 70,
          citadel: { max: 102, min: 89 }
        },
        dive_bomber: {
          squadrons: 1,
          name: "Curtiss SB2C",
          cruise_speed: 140,
          dive_bomber_id: 3454939120,
          prepare_time: 40,
          gunner_damage: 15,
          bomb_damage: 10800,
          count_in_squadron: { max: 6, min: 6 },
          bomb_name: "HE 1000 lb ANM65",
          bomb_bullet_mass: 454,
          plane_level: 8,
          bomb_burn_probability: 1.0,
          max_damage: 10800,
          max_health: 1680,
          dive_bomber_id_str: "PAUD801",
          accuracy: { max: 355.0, min: 142.0 }
        }
      },
      upgrades: [
        4284665776,
        4277325744,
        4282568624,
        4290957232,
        4273131440,
        4261597104,
        4266839984,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4265791408,
        4274180016,
        4275228592,
        4276277168,
        4281520048,
        4283617200
      ],
      tier: 9,
      next_ships: { "4279220208": 254000 },
      mod_slots: 6,
      type: "AirCarrier",
      name: "Essex"
    },
    "4288657392": {
      description:
        "A successful light aircraft carrier based on the Cleveland-class cruiser. The ship was well-armored, had a high speed and carried numerous AA artillery. Small displacement limited the aircraft carrier's hangar capacity.",
      price_gold: 0,
      ship_id_str: "PASA006",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASA006.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASA006.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASA006.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASA006.png"
      },
      modules: {
        engine: [3769479152],
        torpedo_bomber: [3769577456],
        fighter: [3769348080, 3768299504],
        hull: [3862704112, 3863752688],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3758960624, 3757912048, 3756863472],
        dive_bomber: [3769511920]
      },
      modules_tree: {
        "3757912048": {
          name: "Mk6 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 6500,
          price_credit: 530000,
          next_ships: null,
          module_id: 3757912048,
          type: "FlightControl",
          module_id_str: "PAUF512"
        },
        "3863752688": {
          name: "Independence (A)",
          next_modules: [3862704112],
          is_default: true,
          price_xp: 0,
          price_credit: 225000,
          next_ships: null,
          module_id: 3863752688,
          type: "Hull",
          module_id_str: "PAUH411"
        },
        "3758960624": {
          name: "Mk6 mod. 1",
          next_modules: [3756863472, 3757912048],
          is_default: true,
          price_xp: 0,
          price_credit: 205000,
          next_ships: null,
          module_id: 3758960624,
          type: "FlightControl",
          module_id_str: "PAUF511"
        },
        "3769348080": {
          name: "Grumman F4F-4",
          next_modules: [3768299504],
          is_default: true,
          price_xp: 0,
          price_credit: 140000,
          next_ships: null,
          module_id: 3769348080,
          type: "Fighter",
          module_id_str: "PAUI501"
        },
        "3862704112": {
          name: "Independence (B)",
          next_modules: null,
          is_default: false,
          price_xp: 8000,
          price_credit: 640000,
          next_ships: [4284463088],
          module_id: 3862704112,
          type: "Hull",
          module_id_str: "PAUH412"
        },
        "3756863472": {
          name: "Mk6 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 6500,
          price_credit: 530000,
          next_ships: null,
          module_id: 3756863472,
          type: "FlightControl",
          module_id_str: "PAUF513"
        },
        "3769479152": {
          name: "Propulsion: 100,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 190000,
          next_ships: null,
          module_id: 3769479152,
          type: "Engine",
          module_id_str: "PAUE501"
        },
        "3769511920": {
          name: "Douglas SBD-3",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 146000,
          next_ships: null,
          module_id: 3769511920,
          type: "DiveBomber",
          module_id_str: "PAUD501"
        },
        "3769577456": {
          name: "Douglas TBD",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 140000,
          next_ships: null,
          module_id: 3769577456,
          type: "TorpedoBomber",
          module_id_str: "PAUB501"
        },
        "3768299504": {
          name: "Grumman F6F-3",
          next_modules: null,
          is_default: false,
          price_xp: 3800,
          price_credit: 320000,
          next_ships: null,
          module_id: 3768299504,
          type: "Fighter",
          module_id_str: "PAUI502"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 4288657392,
      price_credit: 3450000,
      default_profile: {
        engine: {
          engine_id_str: "PAUE501",
          max_speed: 31.5,
          engine_id: 3769479152
        },
        torpedo_bomber: {
          torpedo_distance: 3.7,
          plane_level: 6,
          squadrons: 1,
          name: "Douglas TBD",
          cruise_speed: 121,
          prepare_time: 32,
          torpedo_damage: 9867,
          count_in_squadron: { max: 6, min: 6 },
          torpedo_max_speed: 34,
          torpedo_bomber_id_str: "PAUB501",
          gunner_damage: 11,
          max_damage: 9867,
          max_health: 1210,
          torpedo_bomber_id: 3769577456,
          torpedo_name: "Mk13 mod. 0A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 11,
              caliber: 40,
              name: "40 mm Bofors Mk1",
              guns: 1
            },
            "1": {
              distance: 2.0,
              avg_damage: 50,
              caliber: 20,
              name: "20 mm Oerlikon Mk4",
              guns: 14
            },
            "2": {
              distance: 3.5,
              avg_damage: 60,
              caliber: 40,
              name: "40 mm Bofors Mk3",
              guns: 8
            },
            "3": {
              distance: 5.0,
              avg_damage: 16,
              caliber: 127,
              name: "127 mm/38 Mk24",
              guns: 2
            }
          },
          defense: 36
        },
        mobility: {
          rudder_time: 15.9,
          total: 48,
          turning_radius: 820,
          max_speed: 31.5
        },
        hull: {
          hull_id: 3863752688,
          hull_id_str: "PAUH411",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 25,
          range: { max: 127, min: 6 },
          health: 35300,
          planes_amount: 30,
          artillery_barrels: 0,
          atba_barrels: 2
        },
        atbas: {
          distance: 4.0,
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
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3769348080,
          squadrons: 1,
          name: "Grumman F4F-4",
          cruise_speed: 156,
          prepare_time: 27,
          gunner_damage: 0,
          fighters_id_str: "PAUI501",
          count_in_squadron: { max: 6, min: 6 },
          max_ammo: 111,
          plane_level: 5,
          avg_damage: 43,
          max_health: 1090
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 36,
          aircraft: 23,
          artillery: 3,
          torpedoes: 0
        },
        battle_level_range_max: 8,
        battle_level_range_min: 6,
        flight_control: {
          flight_control_id_str: "PAUF511",
          bomber_squadrons: 1,
          torpedo_squadrons: 1,
          flight_control_id: 3758960624,
          fighter_squadrons: 1
        },
        concealment: {
          total: 57,
          detect_distance_by_plane: 11.5,
          detect_distance_by_ship: 10.3
        },
        armour: {
          casemate: { max: 13, min: 13 },
          flood_prob: 0,
          deck: { max: 51, min: 6 },
          flood_damage: 0,
          range: { max: 127, min: 6 },
          health: 35300,
          extremities: { max: 16, min: 16 },
          total: 45,
          citadel: { max: 127, min: 13 }
        },
        dive_bomber: {
          squadrons: 1,
          name: "Douglas SBD-3",
          cruise_speed: 134,
          dive_bomber_id: 3769511920,
          prepare_time: 32,
          gunner_damage: 11,
          bomb_damage: 7500,
          count_in_squadron: { max: 6, min: 6 },
          bomb_name: "HE 500 lb ANM64",
          bomb_bullet_mass: 227,
          plane_level: 6,
          bomb_burn_probability: 1.0,
          max_damage: 7500,
          max_health: 1240,
          dive_bomber_id_str: "PAUD501",
          accuracy: { max: 355.0, min: 142.0 }
        }
      },
      upgrades: [
        4284665776,
        4273131440,
        4290957232,
        4261597104,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4282568624,
        4283617200
      ],
      tier: 6,
      next_ships: { "4284463088": 74000 },
      mod_slots: 4,
      type: "AirCarrier",
      name: "Independence"
    },
    "4290754544": {
      description:
        "The first U.S. Navy aircraft carrier, Langley was converted from a collier. She had low speed and was used as an experimental ship for testing various technical innovations as well as for training navy pilots. The carrier was equipped with secondary armament to repel attacks from enemy destroyers.",
      price_gold: 0,
      ship_id_str: "PASA004",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASA004.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASA004.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASA004.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASA004.png"
      },
      modules: {
        engine: [3979194352],
        torpedo_bomber: [3979292656, 3978244080],
        fighter: [3978014704, 3979063280],
        hull: [3968610288, 3967561712],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3968675824],
        dive_bomber: [3979227120, 3978178544]
      },
      modules_tree: {
        "3978014704": {
          name: "Grumman F3F",
          next_modules: null,
          is_default: false,
          price_xp: 1500,
          price_credit: 126000,
          next_ships: null,
          module_id: 3978014704,
          type: "Fighter",
          module_id_str: "PAUI302"
        },
        "3967561712": {
          name: "Langley (B)",
          next_modules: null,
          is_default: false,
          price_xp: 2900,
          price_credit: 233000,
          next_ships: [4292851696],
          module_id: 3967561712,
          type: "Hull",
          module_id_str: "PAUH312"
        },
        "3978244080": {
          name: "Martin T4M",
          next_modules: null,
          is_default: false,
          price_xp: 2000,
          price_credit: 160000,
          next_ships: null,
          module_id: 3978244080,
          type: "TorpedoBomber",
          module_id_str: "PAUB302"
        },
        "3978178544": {
          name: "Vought SBU",
          next_modules: null,
          is_default: false,
          price_xp: 2000,
          price_credit: 160000,
          next_ships: null,
          module_id: 3978178544,
          type: "DiveBomber",
          module_id_str: "PAUD302"
        },
        "3979063280": {
          name: "Boeing F4B",
          next_modules: [3978014704],
          is_default: true,
          price_xp: 0,
          price_credit: 58000,
          next_ships: null,
          module_id: 3979063280,
          type: "Fighter",
          module_id_str: "PAUI301"
        },
        "3968610288": {
          name: "Langley (A)",
          next_modules: [3967561712],
          is_default: true,
          price_xp: 0,
          price_credit: 90000,
          next_ships: null,
          module_id: 3968610288,
          type: "Hull",
          module_id_str: "PAUH311"
        },
        "3968675824": {
          name: "Mk4 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 40000,
          next_ships: null,
          module_id: 3968675824,
          type: "FlightControl",
          module_id_str: "PAUF311"
        },
        "3979194352": {
          name: "Propulsion: 8,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 20000,
          next_ships: null,
          module_id: 3979194352,
          type: "Engine",
          module_id_str: "PAUE301"
        },
        "3979227120": {
          name: "Martin BM2",
          next_modules: [3978178544],
          is_default: true,
          price_xp: 0,
          price_credit: 72000,
          next_ships: null,
          module_id: 3979227120,
          type: "DiveBomber",
          module_id_str: "PAUD301"
        },
        "3979292656": {
          name: "Martin T3M",
          next_modules: [3978244080],
          is_default: true,
          price_xp: 0,
          price_credit: 70000,
          next_ships: null,
          module_id: 3979292656,
          type: "TorpedoBomber",
          module_id_str: "PAUB301"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 4290754544,
      price_credit: 914000,
      default_profile: {
        engine: {
          engine_id_str: "PAUE301",
          max_speed: 15.0,
          engine_id: 3979194352
        },
        torpedo_bomber: {
          torpedo_distance: 3.2,
          plane_level: 3,
          squadrons: 1,
          name: "Martin T3M",
          cruise_speed: 94,
          prepare_time: 31,
          torpedo_damage: 8500,
          count_in_squadron: { max: 6, min: 6 },
          torpedo_max_speed: 35,
          torpedo_bomber_id_str: "PAUB301",
          gunner_damage: 5,
          max_damage: 8500,
          max_health: 630,
          torpedo_bomber_id: 3979292656,
          torpedo_name: "Bliss Leavitt Mk7 mod. 5A"
        },
        anti_aircraft: null,
        mobility: {
          rudder_time: 12.9,
          total: 7,
          turning_radius: 730,
          max_speed: 15.0
        },
        hull: {
          hull_id: 3968610288,
          hull_id_str: "PAUH311",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 0,
          range: { max: 20, min: 6 },
          health: 33300,
          planes_amount: 24,
          artillery_barrels: 0,
          atba_barrels: 4
        },
        atbas: {
          distance: 3.5,
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
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3979063280,
          squadrons: 1,
          name: "Boeing F4B",
          cruise_speed: 132,
          prepare_time: 14,
          gunner_damage: 0,
          fighters_id_str: "PAUI301",
          count_in_squadron: { max: 6, min: 6 },
          max_ammo: 227,
          plane_level: 3,
          avg_damage: 21,
          max_health: 600
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 0,
          aircraft: 16,
          artillery: 4,
          torpedoes: 0
        },
        battle_level_range_max: 5,
        battle_level_range_min: 4,
        flight_control: {
          flight_control_id_str: "PAUF311",
          bomber_squadrons: 1,
          torpedo_squadrons: 1,
          flight_control_id: 3968675824,
          fighter_squadrons: 1
        },
        concealment: {
          total: 67,
          detect_distance_by_plane: 7.4,
          detect_distance_by_ship: 10.1
        },
        armour: {
          casemate: { max: 10, min: 10 },
          flood_prob: 0,
          deck: { max: 20, min: 10 },
          flood_damage: 0,
          range: { max: 20, min: 6 },
          health: 33300,
          extremities: { max: 13, min: 13 },
          total: 40,
          citadel: { max: 20, min: 20 }
        },
        dive_bomber: {
          squadrons: 1,
          name: "Martin BM2",
          cruise_speed: 110,
          dive_bomber_id: 3979227120,
          prepare_time: 26,
          gunner_damage: 5,
          bomb_damage: 5400,
          count_in_squadron: { max: 6, min: 6 },
          bomb_name: "HE 250 lb ANM57",
          bomb_bullet_mass: 113,
          plane_level: 3,
          bomb_burn_probability: 1.0,
          max_damage: 5400,
          max_health: 640,
          dive_bomber_id_str: "PAUD301",
          accuracy: { max: 243.0, min: 97.0 }
        }
      },
      upgrades: [4273131440, 4272082864, 4261597104, 4290957232, 4271034288],
      tier: 4,
      next_ships: { "4292851696": 22500 },
      mod_slots: 2,
      type: "AirCarrier",
      name: "Langley"
    },
    "4292851696": {
      description:
        "A low-speed escort aircraft carrier built from a transport ship. Due to her modest size, the ship carried a relatively small air group. Soon after being commissioned, the aircraft carrier was rearmed with dual-purpose artillery and received reinforced AA defenses.",
      price_gold: 0,
      ship_id_str: "PASA002",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASA002.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASA002.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASA002.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASA002.png"
      },
      modules: {
        engine: [3853365232],
        torpedo_bomber: [3874435056],
        fighter: [3872108528, 3874205680, 3873157104],
        hull: [3842781168, 3841732592],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3861721072, 3862769648, 3863818224],
        dive_bomber: [3874369520]
      },
      modules_tree: {
        "3873157104": {
          name: "GM FM-2",
          next_modules: [3872108528],
          is_default: false,
          price_xp: 2100,
          price_credit: 175000,
          next_ships: null,
          module_id: 3873157104,
          type: "Fighter",
          module_id_str: "PAUI402"
        },
        "3841732592": {
          name: "Bogue (B)",
          next_modules: null,
          is_default: false,
          price_xp: 4200,
          price_credit: 350000,
          next_ships: [4288657392],
          module_id: 3841732592,
          type: "Hull",
          module_id_str: "PAUH432"
        },
        "3861721072": {
          name: "Mk5 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 3500,
          price_credit: 290000,
          next_ships: null,
          module_id: 3861721072,
          type: "FlightControl",
          module_id_str: "PAUF413"
        },
        "3862769648": {
          name: "Mk5 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 3500,
          price_credit: 290000,
          next_ships: null,
          module_id: 3862769648,
          type: "FlightControl",
          module_id_str: "PAUF412"
        },
        "3872108528": {
          name: "Grumman F4F-4",
          next_modules: null,
          is_default: false,
          price_xp: 2800,
          price_credit: 230000,
          next_ships: null,
          module_id: 3872108528,
          type: "Fighter",
          module_id_str: "PAUI403"
        },
        "3874205680": {
          name: "Grumman F4F-3",
          next_modules: [3873157104],
          is_default: true,
          price_xp: 0,
          price_credit: 85000,
          next_ships: null,
          module_id: 3874205680,
          type: "Fighter",
          module_id_str: "PAUI401"
        },
        "3842781168": {
          name: "Bogue (A)",
          next_modules: [3841732592],
          is_default: true,
          price_xp: 0,
          price_credit: 105000,
          next_ships: null,
          module_id: 3842781168,
          type: "Hull",
          module_id_str: "PAUH431"
        },
        "3863818224": {
          name: "Mk5 mod. 1",
          next_modules: [3862769648, 3861721072],
          is_default: true,
          price_xp: 0,
          price_credit: 115000,
          next_ships: null,
          module_id: 3863818224,
          type: "FlightControl",
          module_id_str: "PAUF411"
        },
        "3853365232": {
          name: "Propulsion: 8,500 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 66000,
          next_ships: null,
          module_id: 3853365232,
          type: "Engine",
          module_id_str: "PAUE421"
        },
        "3874369520": {
          name: "Douglas SBD-2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 128000,
          next_ships: null,
          module_id: 3874369520,
          type: "DiveBomber",
          module_id_str: "PAUD401"
        },
        "3874435056": {
          name: "Douglas TBD",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 140000,
          next_ships: null,
          module_id: 3874435056,
          type: "TorpedoBomber",
          module_id_str: "PAUB401"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 4292851696,
      price_credit: 2060000,
      default_profile: {
        engine: {
          engine_id_str: "PAUE421",
          max_speed: 16.5,
          engine_id: 3853365232
        },
        torpedo_bomber: {
          torpedo_distance: 3.7,
          plane_level: 6,
          squadrons: 1,
          name: "Douglas TBD",
          cruise_speed: 121,
          prepare_time: 32,
          torpedo_damage: 9867,
          count_in_squadron: { max: 6, min: 6 },
          torpedo_max_speed: 34,
          torpedo_bomber_id_str: "PAUB401",
          gunner_damage: 11,
          max_damage: 9867,
          max_health: 1210,
          torpedo_bomber_id: 3874435056,
          torpedo_name: "Mk13 mod. 0A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 45,
              caliber: 40,
              name: "40 mm Bofors Mk1",
              guns: 4
            },
            "1": {
              distance: 2.0,
              avg_damage: 35,
              caliber: 20,
              name: "20 mm Oerlikon Mk4",
              guns: 10
            }
          },
          defense: 25
        },
        mobility: {
          rudder_time: 13.5,
          total: 9,
          turning_radius: 640,
          max_speed: 16.5
        },
        hull: {
          hull_id: 3842781168,
          hull_id_str: "PAUH431",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 14,
          range: { max: 16, min: 6 },
          health: 34900,
          planes_amount: 24,
          artillery_barrels: 0,
          atba_barrels: 2
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
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3874205680,
          squadrons: 1,
          name: "Grumman F4F-3",
          cruise_speed: 157,
          prepare_time: 26,
          gunner_damage: 0,
          fighters_id_str: "PAUI401",
          count_in_squadron: { max: 6, min: 6 },
          max_ammo: 152,
          plane_level: 4,
          avg_damage: 33,
          max_health: 900
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 25,
          aircraft: 16,
          artillery: 3,
          torpedoes: 0
        },
        battle_level_range_max: 6,
        battle_level_range_min: 5,
        flight_control: {
          flight_control_id_str: "PAUF411",
          bomber_squadrons: 0,
          torpedo_squadrons: 1,
          flight_control_id: 3863818224,
          fighter_squadrons: 1
        },
        concealment: {
          total: 59,
          detect_distance_by_plane: 7.0,
          detect_distance_by_ship: 11.9
        },
        armour: {
          casemate: { max: 10, min: 10 },
          flood_prob: 0,
          deck: { max: 13, min: 6 },
          flood_damage: 0,
          range: { max: 16, min: 6 },
          health: 34900,
          extremities: { max: 13, min: 13 },
          total: 43,
          citadel: { max: 16, min: 13 }
        },
        dive_bomber: {
          squadrons: 0,
          name: "Douglas SBD2",
          cruise_speed: 133,
          dive_bomber_id: 3874369520,
          prepare_time: 0,
          gunner_damage: 9,
          bomb_damage: 7500,
          count_in_squadron: { max: 6, min: 6 },
          bomb_name: "HE 500 lb ANM64",
          bomb_bullet_mass: 227,
          plane_level: 5,
          bomb_burn_probability: 1.0,
          max_damage: 7500,
          max_health: 1070,
          dive_bomber_id_str: "PAUD401",
          accuracy: { max: 355.0, min: 142.0 }
        }
      },
      upgrades: [
        4284665776,
        4282568624,
        4261597104,
        4290957232,
        4273131440,
        4271034288,
        4272082864,
        4283617200
      ],
      tier: 5,
      next_ships: { "4288657392": 42000 },
      mod_slots: 3,
      type: "AirCarrier",
      name: "Bogue"
    },
    "4282365936": {
      description:
        "When commissioned, Lexington was one of the largest aircraft carriers in existence. She was converted from an unfinished battlecruiser. The ship had good armor and advanced torpedo protection. Owing to her dimensions, the aircraft carrier was equipped with a very spacious hangar and was armed with numerous AA and dual-purpose artillery. The ship's powerful propulsion created very high speeds.",
      price_gold: 0,
      ship_id_str: "PASA012",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASA012.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASA012.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASA012.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASA012.png"
      },
      modules: {
        engine: [3559763952],
        torpedo_bomber: [3559862256, 3558813680],
        fighter: [3559632880, 3558584304],
        hull: [3548131312, 3549179888],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3547148272, 3549245424, 3548196848],
        dive_bomber: [3557699568, 3558748144]
      },
      modules_tree: {
        "3548131312": {
          name: "Lexington (B)",
          next_modules: null,
          is_default: false,
          price_xp: 21000,
          price_credit: 1700000,
          next_ships: [4281317360],
          module_id: 3548131312,
          type: "Hull",
          module_id_str: "PAUH712"
        },
        "3549179888": {
          name: "Lexington (A)",
          next_modules: [3548131312],
          is_default: true,
          price_xp: 0,
          price_credit: 800000,
          next_ships: null,
          module_id: 3549179888,
          type: "Hull",
          module_id_str: "PAUH711"
        },
        "3559632880": {
          name: "Grumman F6F-5",
          next_modules: [3558584304],
          is_default: true,
          price_xp: 0,
          price_credit: 320000,
          next_ships: null,
          module_id: 3559632880,
          type: "Fighter",
          module_id_str: "PAUI701"
        },
        "3558584304": {
          name: "Vought F4U-1",
          next_modules: null,
          is_default: false,
          price_xp: 10000,
          price_credit: 850000,
          next_ships: null,
          module_id: 3558584304,
          type: "Fighter",
          module_id_str: "PAUI702"
        },
        "3547148272": {
          name: "Mk8 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 17500,
          price_credit: 1420000,
          next_ships: null,
          module_id: 3547148272,
          type: "FlightControl",
          module_id_str: "PAUF713"
        },
        "3559763952": {
          name: "Propulsion: 180,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 560000,
          next_ships: null,
          module_id: 3559763952,
          type: "Engine",
          module_id_str: "PAUE701"
        },
        "3557699568": {
          name: "Douglas SBD-5",
          next_modules: [3558748144],
          is_default: true,
          price_xp: 0,
          price_credit: 240000,
          next_ships: null,
          module_id: 3557699568,
          type: "DiveBomber",
          module_id_str: "PAUD703"
        },
        "3559862256": {
          name: "Grumman TBF",
          next_modules: [3558813680],
          is_default: true,
          price_xp: 0,
          price_credit: 240000,
          next_ships: null,
          module_id: 3559862256,
          type: "TorpedoBomber",
          module_id_str: "PAUB701"
        },
        "3558813680": {
          name: "Grumman TBM-3",
          next_modules: null,
          is_default: false,
          price_xp: 14000,
          price_credit: 1150000,
          next_ships: null,
          module_id: 3558813680,
          type: "TorpedoBomber",
          module_id_str: "PAUB702"
        },
        "3558748144": {
          name: "Curtiss SB2C",
          next_modules: null,
          is_default: false,
          price_xp: 14000,
          price_credit: 1150000,
          next_ships: null,
          module_id: 3558748144,
          type: "DiveBomber",
          module_id_str: "PAUD702"
        },
        "3548196848": {
          name: "Mk8 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 17500,
          price_credit: 1420000,
          next_ships: null,
          module_id: 3548196848,
          type: "FlightControl",
          module_id_str: "PAUF712"
        },
        "3549245424": {
          name: "Mk8 mod. 1",
          next_modules: [3547148272, 3548196848],
          is_default: true,
          price_xp: 0,
          price_credit: 660000,
          next_ships: null,
          module_id: 3549245424,
          type: "FlightControl",
          module_id_str: "PAUF711"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 4282365936,
      price_credit: 9600000,
      default_profile: {
        engine: {
          engine_id_str: "PAUE701",
          max_speed: 33.0,
          engine_id: 3559763952
        },
        torpedo_bomber: {
          torpedo_distance: 3.7,
          plane_level: 7,
          squadrons: 1,
          name: "Grumman TBF",
          cruise_speed: 133,
          prepare_time: 41,
          torpedo_damage: 9867,
          count_in_squadron: { max: 6, min: 6 },
          torpedo_max_speed: 34,
          torpedo_bomber_id_str: "PAUB701",
          gunner_damage: 13,
          max_damage: 9867,
          max_health: 1510,
          torpedo_bomber_id: 3559862256,
          torpedo_name: "Mk13 mod. 0A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 143,
              caliber: 40,
              name: "40 mm Bofors Mk2",
              guns: 9
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
              avg_damage: 64,
              caliber: 127,
              name: "127 mm/38 Mk24",
              guns: 8
            },
            "3": {
              distance: 5.0,
              avg_damage: 60,
              caliber: 127,
              name: "127 mm/38 Mk32",
              guns: 4
            }
          },
          defense: 69
        },
        mobility: {
          rudder_time: 21.9,
          total: 51,
          turning_radius: 1180,
          max_speed: 33.0
        },
        hull: {
          hull_id: 3549179888,
          hull_id_str: "PAUH711",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 73,
          range: { max: 178, min: 6 },
          health: 54300,
          planes_amount: 72,
          artillery_barrels: 0,
          atba_barrels: 12
        },
        atbas: {
          distance: 4.5,
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
            },
            "1": {
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
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3559632880,
          squadrons: 1,
          name: "Grumman F6F-5",
          cruise_speed: 166,
          prepare_time: 40,
          gunner_damage: 0,
          fighters_id_str: "PAUI701",
          count_in_squadron: { max: 6, min: 6 },
          max_ammo: 72,
          plane_level: 7,
          avg_damage: 56,
          max_health: 1560
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 69,
          aircraft: 39,
          artillery: 7,
          torpedoes: 0
        },
        battle_level_range_max: 10,
        battle_level_range_min: 8,
        flight_control: {
          flight_control_id_str: "PAUF711",
          bomber_squadrons: 1,
          torpedo_squadrons: 1,
          flight_control_id: 3549245424,
          fighter_squadrons: 1
        },
        concealment: {
          total: 16,
          detect_distance_by_plane: 15.0,
          detect_distance_by_ship: 17.5
        },
        armour: {
          casemate: { max: 25, min: 19 },
          flood_prob: 16,
          deck: { max: 19, min: 13 },
          flood_damage: 67,
          range: { max: 178, min: 6 },
          health: 54300,
          extremities: { max: 21, min: 21 },
          total: 69,
          citadel: { max: 178, min: 25 }
        },
        dive_bomber: {
          squadrons: 1,
          name: "Douglas SBD-5",
          cruise_speed: 137,
          dive_bomber_id: 3557699568,
          prepare_time: 32,
          gunner_damage: 13,
          bomb_damage: 7500,
          count_in_squadron: { max: 6, min: 6 },
          bomb_name: "HE 500 lb ANM64",
          bomb_bullet_mass: 227,
          plane_level: 7,
          bomb_burn_probability: 1.0,
          max_damage: 7500,
          max_health: 1430,
          dive_bomber_id_str: "PAUD703",
          accuracy: { max: 355.0, min: 142.0 }
        }
      },
      upgrades: [
        4284665776,
        4265791408,
        4290957232,
        4273131440,
        4261597104,
        4266839984,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4281520048,
        4282568624,
        4283617200
      ],
      tier: 8,
      next_ships: { "4281317360": 179000 },
      mod_slots: 5,
      type: "AirCarrier",
      name: "Lexington"
    },
    "3762272240": {
      description:
        "A Yorktown-class strike aircraft carrier that combined a number of key characteristics typical for this type of ship: a large air group, superbly assembled take-off and landing equipment that allowed it to launch a large number of squadrons, good speed, and powerful AA defenses.",
      price_gold: 14000,
      ship_id_str: "PASA508",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASA508.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASA508.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASA508.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASA508.png"
      },
      modules: {
        engine: [3557666800],
        torpedo_bomber: [3557765104],
        fighter: [3557535728],
        hull: [3556519920],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3555536880],
        dive_bomber: [3556650992, 3555602416]
      },
      modules_tree: {
        "3556519920": {
          name: "Enterprise",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3556519920,
          type: "Hull",
          module_id_str: "PAUH704"
        },
        "3557666800": {
          name: "Propulsion: 120,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3557666800,
          type: "Engine",
          module_id_str: "PAUE703"
        },
        "3556650992": {
          name: "Douglas SBD-5",
          next_modules: [3555602416],
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3556650992,
          type: "DiveBomber",
          module_id_str: "PAUD704"
        },
        "3557535728": {
          name: "Grumman F6F-5",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3557535728,
          type: "Fighter",
          module_id_str: "PAUI703"
        },
        "3555536880": {
          name: "Mk8 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3555536880,
          type: "FlightControl",
          module_id_str: "PAUF705"
        },
        "3555602416": {
          name: "Douglas SBD-5",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3555602416,
          type: "DiveBomber",
          module_id_str: "PAUD705"
        },
        "3557765104": {
          name: "Grumman TBF",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3557765104,
          type: "TorpedoBomber",
          module_id_str: "PAUB703"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 3762272240,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PAUE703",
          max_speed: 32.5,
          engine_id: 3557666800
        },
        torpedo_bomber: {
          torpedo_distance: 3.7,
          plane_level: 7,
          squadrons: 2,
          name: "Grumman TBF",
          cruise_speed: 133,
          prepare_time: 35,
          torpedo_damage: 9867,
          count_in_squadron: { max: 5, min: 5 },
          torpedo_max_speed: 34,
          torpedo_bomber_id_str: "PAUB703",
          gunner_damage: 13,
          max_damage: 9867,
          max_health: 1510,
          torpedo_bomber_id: 3557765104,
          torpedo_name: "Mk13 mod. 0A"
        },
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
              distance: 3.5,
              avg_damage: 95,
              caliber: 40,
              name: "40 mm Bofors Mk2",
              guns: 6
            },
            "2": {
              distance: 2.0,
              avg_damage: 180,
              caliber: 20,
              name: "20 mm Oerlikon Mk4",
              guns: 50
            },
            "3": {
              distance: 5.0,
              avg_damage: 64,
              caliber: 127,
              name: "127 mm/38 Mk24",
              guns: 8
            }
          },
          defense: 63
        },
        mobility: {
          rudder_time: 13.1,
          total: 52,
          turning_radius: 1070,
          max_speed: 32.5
        },
        hull: {
          hull_id: 3556519920,
          hull_id_str: "PAUH704",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 72,
          range: { max: 102, min: 13 },
          health: 51400,
          planes_amount: 96,
          artillery_barrels: 0,
          atba_barrels: 8
        },
        atbas: {
          distance: 4.5,
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
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3557535728,
          squadrons: 2,
          name: "Grumman F6F-5",
          cruise_speed: 166,
          prepare_time: 33,
          gunner_damage: 0,
          fighters_id_str: "PAUI703",
          count_in_squadron: { max: 5, min: 5 },
          max_ammo: 72,
          plane_level: 7,
          avg_damage: 56,
          max_health: 1560
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 63,
          aircraft: 60,
          artillery: 5,
          torpedoes: 0
        },
        battle_level_range_max: 10,
        battle_level_range_min: 8,
        flight_control: {
          flight_control_id_str: "PAUF705",
          bomber_squadrons: 2,
          torpedo_squadrons: 2,
          flight_control_id: 3555536880,
          fighter_squadrons: 2
        },
        concealment: {
          total: 32,
          detect_distance_by_plane: 13.8,
          detect_distance_by_ship: 14.6
        },
        armour: {
          casemate: { max: -1, min: -1 },
          flood_prob: 28,
          deck: { max: -1, min: -1 },
          flood_damage: 67,
          range: { max: 102, min: 13 },
          health: 51400,
          extremities: { max: -1, min: -1 },
          total: 66,
          citadel: { max: -1, min: -1 }
        },
        dive_bomber: {
          squadrons: 2,
          name: "Douglas SBD-5",
          cruise_speed: 137,
          dive_bomber_id: 3556650992,
          prepare_time: 27,
          gunner_damage: 13,
          bomb_damage: 7500,
          count_in_squadron: { max: 5, min: 5 },
          bomb_name: "HE 500 lb ANM64",
          bomb_bullet_mass: 227,
          plane_level: 7,
          bomb_burn_probability: 1.0,
          max_damage: 7500,
          max_health: 1430,
          dive_bomber_id_str: "PAUD704",
          accuracy: { max: 355.0, min: 142.0 }
        }
      },
      upgrades: [
        4284665776,
        4277325744,
        4282568624,
        4290957232,
        4273131440,
        4261597104,
        4266839984,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4265791408,
        4274180016,
        4275228592,
        4276277168,
        4281520048,
        4283617200
      ],
      tier: 8,
      next_ships: {},
      mod_slots: 6,
      type: "AirCarrier",
      name: "Enterprise"
    },
    "4285511376": {
      description:
        "An aircraft carrier built under the restrictions of the Washington Naval Treaty of 1922. Owing to a double-deck hangar, she could carry an impressive air group despite her limited displacement. Her drawbacks were low survivability and the small size of her flight deck, which hampered takeoff and landing for squadrons.",
      price_gold: 0,
      ship_id_str: "PJSA009",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSA009.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSA009.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSA009.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSA009.png"
      },
      modules: {
        engine: [3748507344],
        torpedo_bomber: [3769577168],
        fighter: [3768299216, 3769347792],
        hull: [3726388944, 3727437520, 3725340368],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3768397520, 3767348944, 3769446096],
        dive_bomber: [3768463056, 3769511632]
      },
      modules_tree: {
        "3748507344": {
          name: "Propulsion: 65,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 170000,
          next_ships: null,
          module_id: 3748507344,
          type: "Engine",
          module_id_str: "PJUE521"
        },
        "3769446096": {
          name: "Type6 mod. 1",
          next_modules: [3768397520, 3767348944],
          is_default: true,
          price_xp: 0,
          price_credit: 190000,
          next_ships: null,
          module_id: 3769446096,
          type: "FlightControl",
          module_id_str: "PJUF501"
        },
        "3768397520": {
          name: "Type6 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 4800,
          price_credit: 420000,
          next_ships: null,
          module_id: 3768397520,
          type: "FlightControl",
          module_id_str: "PJUF502"
        },
        "3725340368": {
          name: "Ryujo (C)",
          next_modules: null,
          is_default: false,
          price_xp: 8000,
          price_credit: 580000,
          next_ships: [4283414224],
          module_id: 3725340368,
          type: "Hull",
          module_id_str: "PJUH543"
        },
        "3767348944": {
          name: "Type6 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 4800,
          price_credit: 420000,
          next_ships: null,
          module_id: 3767348944,
          type: "FlightControl",
          module_id_str: "PJUF503"
        },
        "3769511632": {
          name: "Aichi D1A2",
          next_modules: [3768463056],
          is_default: true,
          price_xp: 0,
          price_credit: 150000,
          next_ships: null,
          module_id: 3769511632,
          type: "DiveBomber",
          module_id_str: "PJUD501"
        },
        "3726388944": {
          name: "Ryujo (B)",
          next_modules: [3725340368],
          is_default: false,
          price_xp: 5800,
          price_credit: 460000,
          next_ships: null,
          module_id: 3726388944,
          type: "Hull",
          module_id_str: "PJUH542"
        },
        "3727437520": {
          name: "Ryujo (A)",
          next_modules: [3726388944],
          is_default: true,
          price_xp: 0,
          price_credit: 220000,
          next_ships: null,
          module_id: 3727437520,
          type: "Hull",
          module_id_str: "PJUH541"
        },
        "3768299216": {
          name: "Mitsubishi A6M2",
          next_modules: null,
          is_default: false,
          price_xp: 2000,
          price_credit: 150000,
          next_ships: null,
          module_id: 3768299216,
          type: "Fighter",
          module_id_str: "PJUI502"
        },
        "3769347792": {
          name: "Mitsubishi A5M4",
          next_modules: [3768299216],
          is_default: true,
          price_xp: 0,
          price_credit: 70000,
          next_ships: null,
          module_id: 3769347792,
          type: "Fighter",
          module_id_str: "PJUI501"
        },
        "3768463056": {
          name: "Aichi D3A1",
          next_modules: null,
          is_default: false,
          price_xp: 4200,
          price_credit: 350000,
          next_ships: null,
          module_id: 3768463056,
          type: "DiveBomber",
          module_id_str: "PJUD502"
        },
        "3769577168": {
          name: "Nakajima B5N2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 150000,
          next_ships: null,
          module_id: 3769577168,
          type: "TorpedoBomber",
          module_id_str: "PJUB501"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 4285511376,
      price_credit: 3650000,
      default_profile: {
        engine: {
          engine_id_str: "PJUE521",
          max_speed: 28.0,
          engine_id: 3748507344
        },
        torpedo_bomber: {
          torpedo_distance: 3.4,
          plane_level: 6,
          squadrons: 1,
          name: "Nakajima B5N2",
          cruise_speed: 129,
          prepare_time: 20,
          torpedo_damage: 8567,
          count_in_squadron: { max: 4, min: 4 },
          torpedo_max_speed: 35,
          torpedo_bomber_id_str: "PJUB501",
          gunner_damage: 10,
          max_damage: 8567,
          max_health: 1210,
          torpedo_bomber_id: 3769577168,
          torpedo_name: "Type91 mod. 1A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 1.2,
              avg_damage: 29,
              caliber: 13,
              name: "13 mm/76 Type93 Quad",
              guns: 6
            },
            "1": {
              distance: 5.0,
              avg_damage: 60,
              caliber: 127,
              name: "127 mm/40 Type89 A1",
              guns: 6
            }
          },
          defense: 37
        },
        mobility: {
          rudder_time: 13.4,
          total: 40,
          turning_radius: 770,
          max_speed: 28.0
        },
        hull: {
          hull_id: 3727437520,
          hull_id_str: "PJUH541",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 12,
          range: { max: 30, min: 6 },
          health: 38400,
          planes_amount: 48,
          artillery_barrels: 0,
          atba_barrels: 6
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
            }
          }
        },
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3769347792,
          squadrons: 1,
          name: "Mitsubishi A5M4",
          cruise_speed: 154,
          prepare_time: 12,
          gunner_damage: 0,
          fighters_id_str: "PJUI501",
          count_in_squadron: { max: 4, min: 4 },
          max_ammo: 78,
          plane_level: 5,
          avg_damage: 35,
          max_health: 990
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 37,
          aircraft: 26,
          artillery: 6,
          torpedoes: 0
        },
        battle_level_range_max: 8,
        battle_level_range_min: 6,
        flight_control: {
          flight_control_id_str: "PJUF501",
          bomber_squadrons: 2,
          torpedo_squadrons: 1,
          flight_control_id: 3769446096,
          fighter_squadrons: 1
        },
        concealment: {
          total: 67,
          detect_distance_by_plane: 7.9,
          detect_distance_by_ship: 9.9
        },
        armour: {
          casemate: { max: 13, min: 13 },
          flood_prob: 0,
          deck: { max: 13, min: 13 },
          flood_damage: 0,
          range: { max: 30, min: 6 },
          health: 38400,
          extremities: { max: 16, min: 16 },
          total: 49,
          citadel: { max: 25, min: 16 }
        },
        dive_bomber: {
          squadrons: 2,
          name: "Aichi D1A2",
          cruise_speed: 120,
          dive_bomber_id: 3769511632,
          prepare_time: 16,
          gunner_damage: 9,
          bomb_damage: 4600,
          count_in_squadron: { max: 4, min: 4 },
          bomb_name: "HE Type99 N25 mod. 1",
          bomb_bullet_mass: 502,
          plane_level: 5,
          bomb_burn_probability: 1.0,
          max_damage: 4600,
          max_health: 990,
          dive_bomber_id_str: "PJUD501",
          accuracy: { max: 335.0, min: 134.0 }
        }
      },
      upgrades: [
        4284665776,
        4273131440,
        4290957232,
        4261597104,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4282568624,
        4283617200
      ],
      tier: 6,
      next_ships: { "4283414224": 75000 },
      mod_slots: 4,
      type: "AirCarrier",
      name: "Ryujo"
    },
    "4284463088": {
      description:
        "The first U.S. aircraft carrier of special construction. The ship carried a large air group. The carrier's speed was quite high for her type. Her drawbacks included a lack of torpedo protection and impractical arrangement of aircraft elevators, which slowed down the handling of air groups.",
      price_gold: 0,
      ship_id_str: "PASA010",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PASA010.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PASA010.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PASA010.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PASA010.png"
      },
      modules: {
        engine: [3663572976],
        torpedo_bomber: [3664719856],
        fighter: [3663441904, 3664490480],
        hull: [3654037488, 3652988912],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3653054448, 3654103024, 3652005872],
        dive_bomber: [3664654320]
      },
      modules_tree: {
        "3654037488": {
          name: "Ranger (A)",
          next_modules: [3652988912],
          is_default: true,
          price_xp: 0,
          price_credit: 420000,
          next_ships: null,
          module_id: 3654037488,
          type: "Hull",
          module_id_str: "PAUH611"
        },
        "3652988912": {
          name: "Ranger (B)",
          next_modules: null,
          is_default: false,
          price_xp: 13500,
          price_credit: 1070000,
          next_ships: [4282365936],
          module_id: 3652988912,
          type: "Hull",
          module_id_str: "PAUH612"
        },
        "3663441904": {
          name: "Grumman F6F-5",
          next_modules: null,
          is_default: false,
          price_xp: 6500,
          price_credit: 535000,
          next_ships: null,
          module_id: 3663441904,
          type: "Fighter",
          module_id_str: "PAUI602"
        },
        "3664490480": {
          name: "Grumman F6F-3",
          next_modules: [3663441904],
          is_default: true,
          price_xp: 0,
          price_credit: 220000,
          next_ships: null,
          module_id: 3664490480,
          type: "Fighter",
          module_id_str: "PAUI601"
        },
        "3654103024": {
          name: "Mk7 mod. 1",
          next_modules: [3653054448, 3652005872],
          is_default: true,
          price_xp: 0,
          price_credit: 405000,
          next_ships: null,
          module_id: 3654103024,
          type: "FlightControl",
          module_id_str: "PAUF611"
        },
        "3653054448": {
          name: "Mk7 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 11500,
          price_credit: 890000,
          next_ships: null,
          module_id: 3653054448,
          type: "FlightControl",
          module_id_str: "PAUF612"
        },
        "3663572976": {
          name: "Propulsion: 53,500 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 340000,
          next_ships: null,
          module_id: 3663572976,
          type: "Engine",
          module_id_str: "PAUE602"
        },
        "3664654320": {
          name: "Douglas SBD-5",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 240000,
          next_ships: null,
          module_id: 3664654320,
          type: "DiveBomber",
          module_id_str: "PAUD601"
        },
        "3664719856": {
          name: "Grumman TBF",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 240000,
          next_ships: null,
          module_id: 3664719856,
          type: "TorpedoBomber",
          module_id_str: "PAUB601"
        },
        "3652005872": {
          name: "Mk7 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 11500,
          price_credit: 890000,
          next_ships: null,
          module_id: 3652005872,
          type: "FlightControl",
          module_id_str: "PAUF613"
        }
      },
      nation: "usa",
      is_premium: false,
      ship_id: 4284463088,
      price_credit: 6000000,
      default_profile: {
        engine: {
          engine_id_str: "PAUE602",
          max_speed: 29.5,
          engine_id: 3663572976
        },
        torpedo_bomber: {
          torpedo_distance: 3.7,
          plane_level: 7,
          squadrons: 1,
          name: "Grumman TBF",
          cruise_speed: 133,
          prepare_time: 41,
          torpedo_damage: 9867,
          count_in_squadron: { max: 6, min: 6 },
          torpedo_max_speed: 34,
          torpedo_bomber_id_str: "PAUB601",
          gunner_damage: 13,
          max_damage: 9867,
          max_health: 1510,
          torpedo_bomber_id: 3664719856,
          torpedo_name: "Mk13 mod. 0A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 40,
              caliber: 28,
              name: "28 mm/75 Mk2 mod. 2",
              guns: 6
            },
            "1": {
              distance: 1.2,
              avg_damage: 91,
              caliber: 12,
              name: "12.7 mm Browning M2 mod. 2",
              guns: 24
            },
            "2": {
              distance: 4.2,
              avg_damage: 58,
              caliber: 127,
              name: "127 mm/25 Mk19 mod. 6",
              guns: 8
            }
          },
          defense: 37
        },
        mobility: {
          rudder_time: 15.9,
          total: 39,
          turning_radius: 1010,
          max_speed: 29.5
        },
        hull: {
          hull_id: 3654037488,
          hull_id_str: "PAUH611",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 38,
          range: { max: 51, min: 6 },
          health: 43700,
          planes_amount: 58,
          artillery_barrels: 0,
          atba_barrels: 8
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 9.0,
              bullet_speed: 657,
              name: "127 mm HE/HC Mk36",
              shot_delay: 4.0,
              damage: 1800,
              bullet_mass: 24,
              type: "HE",
              gun_rate: 13.3
            }
          }
        },
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3664490480,
          squadrons: 1,
          name: "Grumman F6F-3",
          cruise_speed: 164,
          prepare_time: 40,
          gunner_damage: 0,
          fighters_id_str: "PAUI601",
          count_in_squadron: { max: 6, min: 6 },
          max_ammo: 87,
          plane_level: 6,
          avg_damage: 50,
          max_health: 1380
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 37,
          aircraft: 35,
          artillery: 5,
          torpedoes: 0
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: {
          flight_control_id_str: "PAUF611",
          bomber_squadrons: 1,
          torpedo_squadrons: 1,
          flight_control_id: 3654103024,
          fighter_squadrons: 1
        },
        concealment: {
          total: 35,
          detect_distance_by_plane: 13.3,
          detect_distance_by_ship: 14.2
        },
        armour: {
          casemate: { max: 13, min: 13 },
          flood_prob: 0,
          deck: { max: 25, min: 19 },
          flood_damage: 0,
          range: { max: 51, min: 6 },
          health: 43700,
          extremities: { max: 16, min: 16 },
          total: 56,
          citadel: { max: 19, min: 19 }
        },
        dive_bomber: {
          squadrons: 1,
          name: "Douglas SBD-5",
          cruise_speed: 137,
          dive_bomber_id: 3664654320,
          prepare_time: 32,
          gunner_damage: 13,
          bomb_damage: 7500,
          count_in_squadron: { max: 6, min: 6 },
          bomb_name: "HE 500 lb ANM64",
          bomb_bullet_mass: 227,
          plane_level: 7,
          bomb_burn_probability: 1.0,
          max_damage: 7500,
          max_health: 1430,
          dive_bomber_id_str: "PAUD601",
          accuracy: { max: 355.0, min: 142.0 }
        }
      },
      upgrades: [
        4284665776,
        4273131440,
        4290957232,
        4261597104,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4282568624,
        4281520048,
        4283617200
      ],
      tier: 7,
      next_ships: { "4282365936": 118000 },
      mod_slots: 4,
      type: "AirCarrier",
      name: "Ranger"
    },
    "4292851408": {
      description:
        "The first ship in the world to be specifically designed and completed as an aircraft carrier. This ship was moderately sized and could carry a small air group. She had a decent speed and was only slightly inferior to a light cruiser in terms of armament.",
      price_gold: 0,
      ship_id_str: "PJSA002",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSA002.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSA002.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSA002.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSA002.png"
      },
      modules: {
        engine: [3926765264],
        torpedo_bomber: [3979292368, 3978243792],
        fighter: [3979062992, 3978014416],
        hull: [3925618384, 3924569808],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3979161296],
        dive_bomber: []
      },
      modules_tree: {
        "3978243792": {
          name: "Yokosuka B4Y",
          next_modules: null,
          is_default: false,
          price_xp: 1900,
          price_credit: 155000,
          next_ships: null,
          module_id: 3978243792,
          type: "TorpedoBomber",
          module_id_str: "PJUB302"
        },
        "3978014416": {
          name: "Mitsubishi A5M4",
          next_modules: null,
          is_default: false,
          price_xp: 1350,
          price_credit: 115000,
          next_ships: null,
          module_id: 3978014416,
          type: "Fighter",
          module_id_str: "PJUI302"
        },
        "3979062992": {
          name: "Nakajima A4N",
          next_modules: [3978014416],
          is_default: true,
          price_xp: 0,
          price_credit: 51000,
          next_ships: null,
          module_id: 3979062992,
          type: "Fighter",
          module_id_str: "PJUI301"
        },
        "3925618384": {
          name: "Hosho (A)",
          next_modules: [3924569808],
          is_default: true,
          price_xp: 0,
          price_credit: 100000,
          next_ships: null,
          module_id: 3925618384,
          type: "Hull",
          module_id_str: "PJUH352"
        },
        "3924569808": {
          name: "Hosho (B)",
          next_modules: null,
          is_default: false,
          price_xp: 3050,
          price_credit: 240000,
          next_ships: [4288657104],
          module_id: 3924569808,
          type: "Hull",
          module_id_str: "PJUH353"
        },
        "3979292368": {
          name: "Mitsubishi B1M",
          next_modules: [3978243792],
          is_default: true,
          price_xp: 0,
          price_credit: 68000,
          next_ships: null,
          module_id: 3979292368,
          type: "TorpedoBomber",
          module_id_str: "PJUB301"
        },
        "3926765264": {
          name: "Propulsion: 30,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 33000,
          next_ships: null,
          module_id: 3926765264,
          type: "Engine",
          module_id_str: "PJUE351"
        },
        "3979161296": {
          name: "Type4 mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 32000,
          next_ships: null,
          module_id: 3979161296,
          type: "FlightControl",
          module_id_str: "PJUF301"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 4292851408,
      price_credit: 900000,
      default_profile: {
        engine: {
          engine_id_str: "PJUE351",
          max_speed: 25.0,
          engine_id: 3926765264
        },
        torpedo_bomber: {
          torpedo_distance: 3.4,
          plane_level: 3,
          squadrons: 2,
          name: "Mitsubishi B1M",
          cruise_speed: 101,
          prepare_time: 18,
          torpedo_damage: 8567,
          count_in_squadron: { max: 4, min: 4 },
          torpedo_max_speed: 35,
          torpedo_bomber_id_str: "PJUB301",
          gunner_damage: 5,
          max_damage: 8567,
          max_health: 610,
          torpedo_bomber_id: 3979292368,
          torpedo_name: "Type91 mod. 1A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 1.2,
              avg_damage: 21,
              caliber: 13,
              name: "13 mm/76 Type93 Twin",
              guns: 6
            }
          },
          defense: 5
        },
        mobility: {
          rudder_time: 11.1,
          total: 33,
          turning_radius: 740,
          max_speed: 25.0
        },
        hull: {
          hull_id: 3925618384,
          hull_id_str: "PJUH352",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 6,
          range: { max: 20, min: 6 },
          health: 31000,
          planes_amount: 24,
          artillery_barrels: 0,
          atba_barrels: 4
        },
        atbas: {
          distance: 3.5,
          slots: {
            "0": {
              burn_probability: 10.0,
              bullet_speed: 850,
              name: "140 mm HE Type0",
              shot_delay: 8.0,
              damage: 2400,
              bullet_mass: 38,
              type: "HE",
              gun_rate: 7.5
            }
          }
        },
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3979062992,
          squadrons: 1,
          name: "Nakajima A4N",
          cruise_speed: 139,
          prepare_time: 12,
          gunner_damage: 0,
          fighters_id_str: "PJUI301",
          count_in_squadron: { max: 4, min: 4 },
          max_ammo: 148,
          plane_level: 3,
          avg_damage: 21,
          max_health: 640
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 5,
          aircraft: 13,
          artillery: 4,
          torpedoes: 0
        },
        battle_level_range_max: 5,
        battle_level_range_min: 4,
        flight_control: {
          flight_control_id_str: "PJUF301",
          bomber_squadrons: 0,
          torpedo_squadrons: 2,
          flight_control_id: 3979161296,
          fighter_squadrons: 1
        },
        concealment: {
          total: 71,
          detect_distance_by_plane: 8.1,
          detect_distance_by_ship: 8.8
        },
        armour: {
          casemate: { max: 13, min: 13 },
          flood_prob: 0,
          deck: { max: 13, min: 13 },
          flood_damage: 0,
          range: { max: 20, min: 6 },
          health: 31000,
          extremities: { max: 13, min: 13 },
          total: 37,
          citadel: { max: 20, min: 15 }
        },
        dive_bomber: null
      },
      upgrades: [4273131440, 4272082864, 4261597104, 4290957232, 4271034288],
      tier: 4,
      next_ships: { "4288657104": 22700 },
      mod_slots: 2,
      type: "AirCarrier",
      name: "Hosho"
    },
    "4283414224": {
      description:
        "An aircraft carrier that had a prominent effect on the development of this type of ship in the Imperial Japanese Navy. It was a highly successful project that featured a high speed, reasonably good AA defense and a sizable air group. Poor armor protection reduced the aircraft carrier's resistance to damage.",
      price_gold: 0,
      ship_id_str: "PJSA011",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSA011.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSA011.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSA011.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSA011.png"
      },
      modules: {
        engine: [3633163984],
        torpedo_bomber: [3664719568],
        fighter: [3663441616, 3664490192],
        hull: [3630968528, 3632017104],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3662491344, 3664588496, 3663539920],
        dive_bomber: [3663605456, 3664654032]
      },
      modules_tree: {
        "3664588496": {
          name: "Type7 mod. 1",
          next_modules: [3662491344, 3663539920],
          is_default: true,
          price_xp: 0,
          price_credit: 340000,
          next_ships: null,
          module_id: 3664588496,
          type: "FlightControl",
          module_id_str: "PJUF601"
        },
        "3664490192": {
          name: "Mitsubishi A6M2",
          next_modules: [3663441616],
          is_default: true,
          price_xp: 0,
          price_credit: 200000,
          next_ships: null,
          module_id: 3664490192,
          type: "Fighter",
          module_id_str: "PJUI601"
        },
        "3663441616": {
          name: "Mitsubishi A6M5c",
          next_modules: null,
          is_default: false,
          price_xp: 6400,
          price_credit: 430000,
          next_ships: null,
          module_id: 3663441616,
          type: "Fighter",
          module_id_str: "PJUI602"
        },
        "3630968528": {
          name: "Hiryu (B)",
          next_modules: null,
          is_default: false,
          price_xp: 12000,
          price_credit: 860000,
          next_ships: [4282365648],
          module_id: 3630968528,
          type: "Hull",
          module_id_str: "PJUH633"
        },
        "3662491344": {
          name: "Type7 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 10000,
          price_credit: 720000,
          next_ships: null,
          module_id: 3662491344,
          type: "FlightControl",
          module_id_str: "PJUF603"
        },
        "3663605456": {
          name: "Aichi D3A2",
          next_modules: null,
          is_default: false,
          price_xp: 8800,
          price_credit: 580000,
          next_ships: null,
          module_id: 3663605456,
          type: "DiveBomber",
          module_id_str: "PJUD602"
        },
        "3664719568": {
          name: "Nakajima B5N2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 230000,
          next_ships: null,
          module_id: 3664719568,
          type: "TorpedoBomber",
          module_id_str: "PJUB601"
        },
        "3633163984": {
          name: "Propulsion: 152,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 420000,
          next_ships: null,
          module_id: 3633163984,
          type: "Engine",
          module_id_str: "PJUE631"
        },
        "3663539920": {
          name: "Type7 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 10000,
          price_credit: 720000,
          next_ships: null,
          module_id: 3663539920,
          type: "FlightControl",
          module_id_str: "PJUF602"
        },
        "3632017104": {
          name: "Hiryu (A)",
          next_modules: [3630968528],
          is_default: true,
          price_xp: 0,
          price_credit: 390000,
          next_ships: null,
          module_id: 3632017104,
          type: "Hull",
          module_id_str: "PJUH632"
        },
        "3664654032": {
          name: "Aichi D3A1",
          next_modules: [3663605456],
          is_default: true,
          price_xp: 0,
          price_credit: 230000,
          next_ships: null,
          module_id: 3664654032,
          type: "DiveBomber",
          module_id_str: "PJUD601"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 4283414224,
      price_credit: 6000000,
      default_profile: {
        engine: {
          engine_id_str: "PJUE631",
          max_speed: 34.0,
          engine_id: 3633163984
        },
        torpedo_bomber: {
          torpedo_distance: 3.4,
          plane_level: 6,
          squadrons: 2,
          name: "Nakajima B5N2",
          cruise_speed: 129,
          prepare_time: 20,
          torpedo_damage: 8567,
          count_in_squadron: { max: 4, min: 4 },
          torpedo_max_speed: 35,
          torpedo_bomber_id_str: "PJUB601",
          gunner_damage: 10,
          max_damage: 8567,
          max_health: 1210,
          torpedo_bomber_id: 3664719568,
          torpedo_name: "Type91 mod. 1A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 25,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 5
            },
            "1": {
              distance: 3.1,
              avg_damage: 42,
              caliber: 25,
              name: "25 mm/60 Type96 Triple mod. 1",
              guns: 7
            },
            "2": {
              distance: 5.0,
              avg_damage: 50,
              caliber: 127,
              name: "127 mm/40 Type89 A1",
              guns: 5
            },
            "3": {
              distance: 5.0,
              avg_damage: 10,
              caliber: 127,
              name: "127 mm/40 Type89 A1 mod. 2",
              guns: 1
            }
          },
          defense: 43
        },
        mobility: {
          rudder_time: 16.2,
          total: 55,
          turning_radius: 1000,
          max_speed: 34.0
        },
        hull: {
          hull_id: 3632017104,
          hull_id_str: "PJUH632",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 18,
          range: { max: 110, min: 6 },
          health: 45600,
          planes_amount: 72,
          artillery_barrels: 0,
          atba_barrels: 6
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 6.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 10.0
            },
            "1": {
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
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3664490192,
          squadrons: 1,
          name: "Mitsubishi A6M2",
          cruise_speed: 162,
          prepare_time: 16,
          gunner_damage: 0,
          fighters_id_str: "PJUI601",
          count_in_squadron: { max: 4, min: 4 },
          max_ammo: 60,
          plane_level: 6,
          avg_damage: 44,
          max_health: 1210
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 43,
          aircraft: 38,
          artillery: 7,
          torpedoes: 0
        },
        battle_level_range_max: 9,
        battle_level_range_min: 7,
        flight_control: {
          flight_control_id_str: "PJUF601",
          bomber_squadrons: 2,
          torpedo_squadrons: 2,
          flight_control_id: 3664588496,
          fighter_squadrons: 1
        },
        concealment: {
          total: 53,
          detect_distance_by_plane: 9.9,
          detect_distance_by_ship: 11.9
        },
        armour: {
          casemate: { max: 40, min: 18 },
          flood_prob: 19,
          deck: { max: 67, min: 18 },
          flood_damage: 67,
          range: { max: 110, min: 6 },
          health: 45600,
          extremities: { max: 19, min: 19 },
          total: 58,
          citadel: { max: 110, min: 20 }
        },
        dive_bomber: {
          squadrons: 2,
          name: "Aichi D3A1",
          cruise_speed: 129,
          dive_bomber_id: 3664654032,
          prepare_time: 21,
          gunner_damage: 10,
          bomb_damage: 4600,
          count_in_squadron: { max: 4, min: 4 },
          bomb_name: "HE Type99 N25 mod. 1",
          bomb_bullet_mass: 502,
          plane_level: 6,
          bomb_burn_probability: 1.0,
          max_damage: 4600,
          max_health: 1210,
          dive_bomber_id_str: "PJUD601",
          accuracy: { max: 335.0, min: 134.0 }
        }
      },
      upgrades: [
        4284665776,
        4273131440,
        4290957232,
        4261597104,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4282568624,
        4281520048,
        4283617200
      ],
      tier: 7,
      next_ships: { "4282365648": 124000 },
      mod_slots: 4,
      type: "AirCarrier",
      name: "Hiryu"
    },
    "4288657104": {
      description:
        "A small and reasonably fast aircraft carrier originally built as a submarine tender then subsequently converted into a carrier. Despite her small size, that did not allow her to carry a large air group, Zuiho was equipped with good torpedo protection and a sufficiently powerful artillery for her type.",
      price_gold: 0,
      ship_id_str: "PJSA006",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSA006.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSA006.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSA006.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSA006.png"
      },
      modules: {
        engine: [3853364944],
        torpedo_bomber: [3874434768, 3873386192],
        fighter: [3873156816, 3874205392],
        hull: [3830197968, 3831246544, 3832295120],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3873255120, 3874303696],
        dive_bomber: [3874369232]
      },
      modules_tree: {
        "3853364944": {
          name: "Propulsion: 52,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 100000,
          next_ships: null,
          module_id: 3853364944,
          type: "Engine",
          module_id_str: "PJUE421"
        },
        "3873255120": {
          name: "Type5 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 3100,
          price_credit: 250000,
          next_ships: null,
          module_id: 3873255120,
          type: "FlightControl",
          module_id_str: "PJUF402"
        },
        "3831246544": {
          name: "Zuiho (B)",
          next_modules: [3830197968],
          is_default: false,
          price_xp: 3200,
          price_credit: 250000,
          next_ships: null,
          module_id: 3831246544,
          type: "Hull",
          module_id_str: "PJUH442"
        },
        "3874369232": {
          name: "Aichi D1A2",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 85000,
          next_ships: null,
          module_id: 3874369232,
          type: "DiveBomber",
          module_id_str: "PJUD401"
        },
        "3874434768": {
          name: "Yokosuka B4Y",
          next_modules: [3873386192],
          is_default: true,
          price_xp: 0,
          price_credit: 90000,
          next_ships: null,
          module_id: 3874434768,
          type: "TorpedoBomber",
          module_id_str: "PJUB401"
        },
        "3832295120": {
          name: "Zuiho (A)",
          next_modules: [3831246544],
          is_default: true,
          price_xp: 0,
          price_credit: 118000,
          next_ships: null,
          module_id: 3832295120,
          type: "Hull",
          module_id_str: "PJUH441"
        },
        "3873386192": {
          name: "Nakajima B5N2",
          next_modules: null,
          is_default: false,
          price_xp: 2600,
          price_credit: 200000,
          next_ships: null,
          module_id: 3873386192,
          type: "TorpedoBomber",
          module_id_str: "PJUB402"
        },
        "3830197968": {
          name: "Zuiho (C)",
          next_modules: null,
          is_default: false,
          price_xp: 4000,
          price_credit: 320000,
          next_ships: [4285511376],
          module_id: 3830197968,
          type: "Hull",
          module_id_str: "PJUH443"
        },
        "3874303696": {
          name: "Type5 mod. 1",
          next_modules: [3873255120],
          is_default: true,
          price_xp: 0,
          price_credit: 110000,
          next_ships: null,
          module_id: 3874303696,
          type: "FlightControl",
          module_id_str: "PJUF401"
        },
        "3873156816": {
          name: "Mitsubishi A6M2",
          next_modules: null,
          is_default: false,
          price_xp: 2000,
          price_credit: 150000,
          next_ships: null,
          module_id: 3873156816,
          type: "Fighter",
          module_id_str: "PJUI402"
        },
        "3874205392": {
          name: "Mitsubishi A5M4",
          next_modules: [3873156816],
          is_default: true,
          price_xp: 0,
          price_credit: 70000,
          next_ships: null,
          module_id: 3874205392,
          type: "Fighter",
          module_id_str: "PJUI401"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 4288657104,
      price_credit: 2070000,
      default_profile: {
        engine: {
          engine_id_str: "PJUE421",
          max_speed: 28.0,
          engine_id: 3853364944
        },
        torpedo_bomber: {
          torpedo_distance: 3.4,
          plane_level: 4,
          squadrons: 1,
          name: "Yokosuka B4Y",
          cruise_speed: 115,
          prepare_time: 20,
          torpedo_damage: 8567,
          count_in_squadron: { max: 4, min: 4 },
          torpedo_max_speed: 35,
          torpedo_bomber_id_str: "PJUB401",
          gunner_damage: 7,
          max_damage: 8567,
          max_health: 840,
          torpedo_bomber_id: 3874434768,
          torpedo_name: "Type91 mod. 1A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 20,
              caliber: 25,
              name: "25 mm/60 Type96 Twin mod. 1",
              guns: 4
            },
            "1": {
              distance: 5.0,
              avg_damage: 40,
              caliber: 127,
              name: "127 mm/40 Type89 A1",
              guns: 4
            }
          },
          defense: 32
        },
        mobility: {
          rudder_time: 13.5,
          total: 36,
          turning_radius: 910,
          max_speed: 28.0
        },
        hull: {
          hull_id: 3832295120,
          hull_id_str: "PJUH441",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 8,
          range: { max: 20, min: 6 },
          health: 35500,
          planes_amount: 30,
          artillery_barrels: 0,
          atba_barrels: 4
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
            }
          }
        },
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3874205392,
          squadrons: 1,
          name: "Mitsubishi A5M4",
          cruise_speed: 154,
          prepare_time: 12,
          gunner_damage: 0,
          fighters_id_str: "PJUI401",
          count_in_squadron: { max: 4, min: 4 },
          max_ammo: 78,
          plane_level: 5,
          avg_damage: 35,
          max_health: 990
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 32,
          aircraft: 20,
          artillery: 6,
          torpedoes: 0
        },
        battle_level_range_max: 6,
        battle_level_range_min: 5,
        flight_control: {
          flight_control_id_str: "PJUF401",
          bomber_squadrons: 2,
          torpedo_squadrons: 1,
          flight_control_id: 3874303696,
          fighter_squadrons: 1
        },
        concealment: {
          total: 70,
          detect_distance_by_plane: 8.0,
          detect_distance_by_ship: 9.2
        },
        armour: {
          casemate: { max: 10, min: 10 },
          flood_prob: 4,
          deck: { max: 15, min: 15 },
          flood_damage: 67,
          range: { max: 20, min: 6 },
          health: 35500,
          extremities: { max: 13, min: 13 },
          total: 44,
          citadel: { max: 20, min: 15 }
        },
        dive_bomber: {
          squadrons: 2,
          name: "Aichi D1A2",
          cruise_speed: 120,
          dive_bomber_id: 3874369232,
          prepare_time: 16,
          gunner_damage: 9,
          bomb_damage: 4600,
          count_in_squadron: { max: 4, min: 4 },
          bomb_name: "HE Type99 N25 mod. 1",
          bomb_bullet_mass: 502,
          plane_level: 5,
          bomb_burn_probability: 1.0,
          max_damage: 4600,
          max_health: 990,
          dive_bomber_id_str: "PJUD401",
          accuracy: { max: 335.0, min: 134.0 }
        }
      },
      upgrades: [
        4284665776,
        4282568624,
        4261597104,
        4290957232,
        4273131440,
        4271034288,
        4272082864,
        4283617200
      ],
      tier: 5,
      next_ships: { "4285511376": 43500 },
      mod_slots: 3,
      type: "AirCarrier",
      name: "Zuiho"
    },
    "4277122768": {
      description:
        "An aircraft carrier designed to be an enlarged and enhanced version of the Taiho class. Hakuryu was superior to her predecessor in size, armor and artillery power. Owing to an increased hangar, she could carry the largest air group among all Japanese aircraft carriers.",
      price_gold: 0,
      ship_id_str: "PJSA017",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSA017.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSA017.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSA017.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSA017.png"
      },
      modules: {
        engine: [3329076944],
        torpedo_bomber: [3350146768, 3349098192],
        fighter: [3349917392, 3348868816],
        hull: [3318492880],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3347918544, 3350015696, 3348967120],
        dive_bomber: [3350081232, 3349032656]
      },
      modules_tree: {
        "3349032656": {
          name: "Wakusei",
          next_modules: null,
          is_default: false,
          price_xp: 24000,
          price_credit: 2000000,
          next_ships: null,
          module_id: 3349032656,
          type: "DiveBomber",
          module_id_str: "PJUD902"
        },
        "3350146768": {
          name: "Aichi B7A2",
          next_modules: [3349098192],
          is_default: true,
          price_xp: 0,
          price_credit: 990000,
          next_ships: null,
          module_id: 3350146768,
          type: "TorpedoBomber",
          module_id_str: "PJUB901"
        },
        "3347918544": {
          name: "Type10 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 30000,
          price_credit: 2400000,
          next_ships: null,
          module_id: 3347918544,
          type: "FlightControl",
          module_id_str: "PJUF903"
        },
        "3318492880": {
          name: "Hakuryu (A)",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 2850000,
          next_ships: null,
          module_id: 3318492880,
          type: "Hull",
          module_id_str: "PJUH931"
        },
        "3350015696": {
          name: "Type10 mod. 1",
          next_modules: [3347918544, 3348967120],
          is_default: true,
          price_xp: 0,
          price_credit: 1100000,
          next_ships: null,
          module_id: 3350015696,
          type: "FlightControl",
          module_id_str: "PJUF901"
        },
        "3329076944": {
          name: "Propulsion: 240,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 1200000,
          next_ships: null,
          module_id: 3329076944,
          type: "Engine",
          module_id_str: "PJUE921"
        },
        "3350081232": {
          name: "Aichi B7A2",
          next_modules: [3349032656],
          is_default: true,
          price_xp: 0,
          price_credit: 990000,
          next_ships: null,
          module_id: 3350081232,
          type: "DiveBomber",
          module_id_str: "PJUD901"
        },
        "3349098192": {
          name: "Nakajima C6N1-B",
          next_modules: null,
          is_default: false,
          price_xp: 24000,
          price_credit: 2000000,
          next_ships: null,
          module_id: 3349098192,
          type: "TorpedoBomber",
          module_id_str: "PJUB902"
        },
        "3348868816": {
          name: "Mitsubishi A8M",
          next_modules: null,
          is_default: false,
          price_xp: 18000,
          price_credit: 1400000,
          next_ships: null,
          module_id: 3348868816,
          type: "Fighter",
          module_id_str: "PJUI902"
        },
        "3348967120": {
          name: "Type10 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 30000,
          price_credit: 2400000,
          next_ships: null,
          module_id: 3348967120,
          type: "FlightControl",
          module_id_str: "PJUF902"
        },
        "3349917392": {
          name: "Mitsubishi A7M1",
          next_modules: [3348868816],
          is_default: true,
          price_xp: 0,
          price_credit: 690000,
          next_ships: null,
          module_id: 3349917392,
          type: "Fighter",
          module_id_str: "PJUI901"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 4277122768,
      price_credit: 21800000,
      default_profile: {
        engine: {
          engine_id_str: "PJUE921",
          max_speed: 34.5,
          engine_id: 3329076944
        },
        torpedo_bomber: {
          torpedo_distance: 3.4,
          plane_level: 9,
          squadrons: 3,
          name: "Aichi B7A2",
          cruise_speed: 156,
          prepare_time: 26,
          torpedo_damage: 8567,
          count_in_squadron: { max: 4, min: 4 },
          torpedo_max_speed: 35,
          torpedo_bomber_id_str: "PJUB901",
          gunner_damage: 17,
          max_damage: 8567,
          max_health: 1950,
          torpedo_bomber_id: 3350146768,
          torpedo_name: "Type91 mod. 1A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 242,
              caliber: 40,
              name: '40 mm Bofors "Chi" Type98',
              guns: 22
            },
            "1": {
              distance: 5.0,
              avg_damage: 249,
              caliber: 100,
              name: "100 mm/65 Type98",
              guns: 12
            }
          },
          defense: 85
        },
        mobility: {
          rudder_time: 17.1,
          total: 56,
          turning_radius: 1250,
          max_speed: 34.5
        },
        hull: {
          hull_id: 3318492880,
          hull_id_str: "PJUH931",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 34,
          range: { max: 165, min: 6 },
          health: 63100,
          planes_amount: 100,
          artillery_barrels: 0,
          atba_barrels: 12
        },
        atbas: {
          distance: 5.0,
          slots: {
            "0": {
              burn_probability: 6.0,
              bullet_speed: 1000,
              name: "100 mm HE Type98",
              shot_delay: 2.0,
              damage: 1700,
              bullet_mass: 13,
              type: "HE",
              gun_rate: 21.0
            }
          }
        },
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3349917392,
          squadrons: 2,
          name: "Mitsubishi A7M1",
          cruise_speed: 176,
          prepare_time: 19,
          gunner_damage: 0,
          fighters_id_str: "PJUI901",
          count_in_squadron: { max: 4, min: 4 },
          max_ammo: 35,
          plane_level: 9,
          avg_damage: 73,
          max_health: 1830
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 85,
          aircraft: 64,
          artillery: 8,
          torpedoes: 0
        },
        battle_level_range_max: 10,
        battle_level_range_min: 10,
        flight_control: {
          flight_control_id_str: "PJUF901",
          bomber_squadrons: 2,
          torpedo_squadrons: 3,
          flight_control_id: 3350015696,
          fighter_squadrons: 2
        },
        concealment: {
          total: 26,
          detect_distance_by_plane: 14.3,
          detect_distance_by_ship: 15.7
        },
        armour: {
          casemate: { max: 25, min: 16 },
          flood_prob: 16,
          deck: { max: 95, min: 13 },
          flood_damage: 67,
          range: { max: 165, min: 6 },
          health: 63100,
          extremities: { max: 21, min: 21 },
          total: 82,
          citadel: { max: 130, min: 44 }
        },
        dive_bomber: {
          squadrons: 2,
          name: "Aichi B7A2",
          cruise_speed: 156,
          dive_bomber_id: 3350081232,
          prepare_time: 26,
          gunner_damage: 17,
          bomb_damage: 4600,
          count_in_squadron: { max: 4, min: 4 },
          bomb_name: "HE Type99 N25 mod. 1",
          bomb_bullet_mass: 502,
          plane_level: 9,
          bomb_burn_probability: 1.0,
          max_damage: 4600,
          max_health: 1860,
          dive_bomber_id_str: "PJUD901",
          accuracy: { max: 335.0, min: 134.0 }
        }
      },
      upgrades: [
        4284665776,
        4277325744,
        4282568624,
        4290957232,
        4273131440,
        4261597104,
        4266839984,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4265791408,
        4274180016,
        4275228592,
        4276277168,
        4281520048,
        4283617200
      ],
      tier: 10,
      next_ships: {},
      mod_slots: 6,
      type: "AirCarrier",
      name: "Hakuryu"
    },
    "4282365648": {
      description:
        "This heavy aircraft carrier was designed on the basis of the Hiryu class using the experience gained in building ships of the same type. Compared to her predecessor, she was larger and boasted superior armor and AA armament. During World War II, the ship's AA capabilities were significantly enhanced.",
      price_gold: 0,
      ship_id_str: "PJSA012",
      has_demo_profile: false,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PJSA012.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PJSA012.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PJSA012.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PJSA012.png"
      },
      modules: {
        engine: [3507334864],
        torpedo_bomber: [3559861968, 3558813392],
        fighter: [3558584016, 3559632592],
        hull: [3507236560, 3505139408, 3506187984],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3558682320, 3557633744, 3559730896],
        dive_bomber: [3558747856, 3559796432]
      },
      modules_tree: {
        "3558584016": {
          name: "Kawanishi N1K5-A",
          next_modules: null,
          is_default: false,
          price_xp: 10500,
          price_credit: 620000,
          next_ships: null,
          module_id: 3558584016,
          type: "Fighter",
          module_id_str: "PJUI702"
        },
        "3505139408": {
          name: "Shokaku (C)",
          next_modules: null,
          is_default: false,
          price_xp: 22000,
          price_credit: 1400000,
          next_ships: [4279219920],
          module_id: 3505139408,
          type: "Hull",
          module_id_str: "PJUH753"
        },
        "3506187984": {
          name: "Shokaku (B)",
          next_modules: [3505139408],
          is_default: false,
          price_xp: 18000,
          price_credit: 1100000,
          next_ships: null,
          module_id: 3506187984,
          type: "Hull",
          module_id_str: "PJUH752"
        },
        "3559632592": {
          name: "Mitsubishi A6M5c",
          next_modules: [3558584016],
          is_default: true,
          price_xp: 0,
          price_credit: 280000,
          next_ships: null,
          module_id: 3559632592,
          type: "Fighter",
          module_id_str: "PJUI701"
        },
        "3557633744": {
          name: "Type8 mod. 3",
          next_modules: null,
          is_default: false,
          price_xp: 11000,
          price_credit: 1000000,
          next_ships: null,
          module_id: 3557633744,
          type: "FlightControl",
          module_id_str: "PJUF703"
        },
        "3507236560": {
          name: "Shokaku (A)",
          next_modules: [3506187984],
          is_default: true,
          price_xp: 0,
          price_credit: 580000,
          next_ships: null,
          module_id: 3507236560,
          type: "Hull",
          module_id_str: "PJUH751"
        },
        "3558682320": {
          name: "Type8 mod. 2",
          next_modules: null,
          is_default: false,
          price_xp: 11000,
          price_credit: 1000000,
          next_ships: null,
          module_id: 3558682320,
          type: "FlightControl",
          module_id_str: "PJUF702"
        },
        "3507334864": {
          name: "Propulsion: 160,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 540000,
          next_ships: null,
          module_id: 3507334864,
          type: "Engine",
          module_id_str: "PJUE751"
        },
        "3559796432": {
          name: "Aichi D3A2",
          next_modules: [3558747856],
          is_default: true,
          price_xp: 0,
          price_credit: 320000,
          next_ships: null,
          module_id: 3559796432,
          type: "DiveBomber",
          module_id_str: "PJUD701"
        },
        "3559861968": {
          name: "Nakajima B5N2",
          next_modules: [3558813392],
          is_default: true,
          price_xp: 0,
          price_credit: 320000,
          next_ships: null,
          module_id: 3559861968,
          type: "TorpedoBomber",
          module_id_str: "PJUB701"
        },
        "3558813392": {
          name: "Nakajima B6N",
          next_modules: null,
          is_default: false,
          price_xp: 14000,
          price_credit: 880000,
          next_ships: null,
          module_id: 3558813392,
          type: "TorpedoBomber",
          module_id_str: "PJUB702"
        },
        "3558747856": {
          name: "Yokosuka D4Y2",
          next_modules: null,
          is_default: false,
          price_xp: 14000,
          price_credit: 880000,
          next_ships: null,
          module_id: 3558747856,
          type: "DiveBomber",
          module_id_str: "PJUD702"
        },
        "3559730896": {
          name: "Type8 mod. 1",
          next_modules: [3557633744, 3558682320],
          is_default: true,
          price_xp: 0,
          price_credit: 495000,
          next_ships: null,
          module_id: 3559730896,
          type: "FlightControl",
          module_id_str: "PJUF701"
        }
      },
      nation: "japan",
      is_premium: false,
      ship_id: 4282365648,
      price_credit: 10080000,
      default_profile: {
        engine: {
          engine_id_str: "PJUE751",
          max_speed: 34.0,
          engine_id: 3507334864
        },
        torpedo_bomber: {
          torpedo_distance: 3.4,
          plane_level: 6,
          squadrons: 2,
          name: "Nakajima B5N2",
          cruise_speed: 129,
          prepare_time: 20,
          torpedo_damage: 8567,
          count_in_squadron: { max: 4, min: 4 },
          torpedo_max_speed: 35,
          torpedo_bomber_id_str: "PJUB701",
          gunner_damage: 10,
          max_damage: 8567,
          max_health: 1210,
          torpedo_bomber_id: 3559861968,
          torpedo_name: "Type91 mod. 1A"
        },
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.1,
              avg_damage: 64,
              caliber: 25,
              name: "25 mm/60 Type96 mod. 1",
              guns: 36
            },
            "1": {
              distance: 5.0,
              avg_damage: 60,
              caliber: 127,
              name: "127 mm/40 Type89 A1",
              guns: 6
            },
            "2": {
              distance: 5.0,
              avg_damage: 20,
              caliber: 127,
              name: "127 mm/40 Type89 A1 mod. 2",
              guns: 2
            }
          },
          defense: 48
        },
        mobility: {
          rudder_time: 18.3,
          total: 55,
          turning_radius: 1130,
          max_speed: 34.0
        },
        hull: {
          hull_id: 3507236560,
          hull_id_str: "PJUH751",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 44,
          range: { max: 215, min: 6 },
          health: 50100,
          planes_amount: 72,
          artillery_barrels: 0,
          atba_barrels: 8
        },
        atbas: {
          distance: 4.5,
          slots: {
            "0": {
              burn_probability: 8.0,
              bullet_speed: 725,
              name: "127 mm HE Type0",
              shot_delay: 6.0,
              damage: 2100,
              bullet_mass: 23,
              type: "HE",
              gun_rate: 10.0
            },
            "1": {
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
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3559632592,
          squadrons: 1,
          name: "Mitsubishi A6M5c",
          cruise_speed: 162,
          prepare_time: 18,
          gunner_damage: 0,
          fighters_id_str: "PJUI701",
          count_in_squadron: { max: 4, min: 4 },
          max_ammo: 46,
          plane_level: 7,
          avg_damage: 57,
          max_health: 1410
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 48,
          aircraft: 40,
          artillery: 7,
          torpedoes: 0
        },
        battle_level_range_max: 10,
        battle_level_range_min: 8,
        flight_control: {
          flight_control_id_str: "PJUF701",
          bomber_squadrons: 2,
          torpedo_squadrons: 2,
          flight_control_id: 3559730896,
          fighter_squadrons: 1
        },
        concealment: {
          total: 46,
          detect_distance_by_plane: 12.0,
          detect_distance_by_ship: 12.4
        },
        armour: {
          casemate: { max: 19, min: 19 },
          flood_prob: 25,
          deck: { max: 127, min: 19 },
          flood_damage: 67,
          range: { max: 215, min: 6 },
          health: 50100,
          extremities: { max: 21, min: 21 },
          total: 64,
          citadel: { max: 215, min: 19 }
        },
        dive_bomber: {
          squadrons: 2,
          name: "Aichi D3A2",
          cruise_speed: 139,
          dive_bomber_id: 3559796432,
          prepare_time: 19,
          gunner_damage: 12,
          bomb_damage: 4600,
          count_in_squadron: { max: 4, min: 4 },
          bomb_name: "HE Type99 N25 mod. 1",
          bomb_bullet_mass: 502,
          plane_level: 7,
          bomb_burn_probability: 1.0,
          max_damage: 4600,
          max_health: 1400,
          dive_bomber_id_str: "PJUD701",
          accuracy: { max: 335.0, min: 134.0 }
        }
      },
      upgrades: [
        4284665776,
        4265791408,
        4290957232,
        4273131440,
        4261597104,
        4266839984,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4281520048,
        4282568624,
        4283617200
      ],
      tier: 8,
      next_ships: { "4279219920": 174000 },
      mod_slots: 5,
      type: "AirCarrier",
      name: "Shokaku"
    },
    "3762272048": {
      description:
        "A high-speed aircraft carrier armed with numerous secondary guns and dual-purpose guns. She had the most powerful propulsion among all German Navy ships. The carrier was never completed because Germany's shipbuilding program priorities changed in the course of World War II.",
      price_gold: 13500,
      ship_id_str: "PGSA508",
      has_demo_profile: true,
      images: {
        small:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/small/PGSA508.png",
        large:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/large/PGSA508.png",
        medium:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/medium/PGSA508.png",
        contour:
          "http://glossary-na-static.gcdn.co/icons/wows/current/vehicle/contour/PGSA508.png"
      },
      modules: {
        engine: [3555569456],
        torpedo_bomber: [],
        fighter: [3559632688],
        hull: [3555471152],
        artillery: [],
        torpedoes: [],
        fire_control: [],
        flight_control: [3559730992],
        dive_bomber: [3559796528, 3558747952]
      },
      modules_tree: {
        "3559796528": {
          name: "Junkers Ju.87 C",
          next_modules: [3558747952],
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3559796528,
          type: "DiveBomber",
          module_id_str: "PGUD701"
        },
        "3559632688": {
          name: "Messerschmitt Bf.109 T",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3559632688,
          type: "Fighter",
          module_id_str: "PGUI701"
        },
        "3558747952": {
          name: "Junkers Ju.87 C",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3558747952,
          type: "DiveBomber",
          module_id_str: "PGUD702"
        },
        "3555471152": {
          name: "Graf Zeppelin",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3555471152,
          type: "Hull",
          module_id_str: "PGUH705"
        },
        "3559730992": {
          name: "FID Typ 8 Mod. 1",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3559730992,
          type: "FlightControl",
          module_id_str: "PGUF701"
        },
        "3555569456": {
          name: "Propulsion: 200,000 hp",
          next_modules: null,
          is_default: true,
          price_xp: 0,
          price_credit: 0,
          next_ships: null,
          module_id: 3555569456,
          type: "Engine",
          module_id_str: "PGUE705"
        }
      },
      nation: "germany",
      is_premium: false,
      ship_id: 3762272048,
      price_credit: 0,
      default_profile: {
        engine: {
          engine_id_str: "PGUE705",
          max_speed: 32.0,
          engine_id: 3555569456
        },
        torpedo_bomber: null,
        anti_aircraft: {
          slots: {
            "0": {
              distance: 3.5,
              avg_damage: 113,
              caliber: 37,
              name: "37 mm Flak LM/42",
              guns: 11
            },
            "1": {
              distance: 2.0,
              avg_damage: 44,
              caliber: 20,
              name: "20 mm Flakvierling 38",
              guns: 7
            },
            "2": {
              distance: 4.5,
              avg_damage: 99,
              caliber: 105,
              name: "105 mm L/65 Dop. L. C/31",
              guns: 6
            }
          },
          defense: 56
        },
        mobility: {
          rudder_time: 13.7,
          total: 50,
          turning_radius: 1140,
          max_speed: 32.0
        },
        hull: {
          hull_id: 3555471152,
          hull_id_str: "PGUH705",
          torpedoes_barrels: 0,
          anti_aircraft_barrels: 24,
          range: { max: 100, min: 9 },
          health: 52600,
          planes_amount: 72,
          artillery_barrels: 0,
          atba_barrels: 14
        },
        atbas: {
          distance: 7.5,
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
        artillery: null,
        torpedoes: null,
        fighters: {
          fighters_id: 3559632688,
          squadrons: 2,
          name: "Messerschmitt Bf.109 T",
          cruise_speed: 175,
          prepare_time: 16,
          gunner_damage: 0,
          fighters_id_str: "PGUI701",
          count_in_squadron: { max: 5, min: 5 },
          max_ammo: 41,
          plane_level: 8,
          avg_damage: 61,
          max_health: 1580
        },
        fire_control: null,
        weaponry: {
          anti_aircraft: 56,
          aircraft: 50,
          artillery: 9,
          torpedoes: 0
        },
        battle_level_range_max: 10,
        battle_level_range_min: 8,
        flight_control: {
          flight_control_id_str: "PGUF701",
          bomber_squadrons: 3,
          torpedo_squadrons: 0,
          flight_control_id: 3559730992,
          fighter_squadrons: 2
        },
        concealment: {
          total: 24,
          detect_distance_by_plane: 13.8,
          detect_distance_by_ship: 16.2
        },
        armour: {
          casemate: { max: -1, min: -1 },
          flood_prob: 16,
          deck: { max: -1, min: -1 },
          flood_damage: 67,
          range: { max: 100, min: 9 },
          health: 52600,
          extremities: { max: -1, min: -1 },
          total: 67,
          citadel: { max: -1, min: -1 }
        },
        dive_bomber: {
          squadrons: 3,
          name: "Junkers Ju.87 C",
          cruise_speed: 135,
          dive_bomber_id: 3559796528,
          prepare_time: 25,
          gunner_damage: 14,
          bomb_damage: 11100,
          count_in_squadron: { max: 5, min: 5 },
          bomb_name: "HE SC-500",
          bomb_bullet_mass: 500,
          plane_level: 8,
          bomb_burn_probability: 1.0,
          max_damage: 11100,
          max_health: 1580,
          dive_bomber_id_str: "PGUD701",
          accuracy: { max: 337.0, min: 135.0 }
        }
      },
      upgrades: [
        4284665776,
        4265791408,
        4290957232,
        4273131440,
        4261597104,
        4266839984,
        4267888560,
        4268937136,
        4269985712,
        4271034288,
        4272082864,
        4281520048,
        4282568624,
        4283617200
      ],
      tier: 8,
      next_ships: {},
      mod_slots: 5,
      type: "AirCarrier",
      name: "Graf Zeppelin"
    }
  }
};

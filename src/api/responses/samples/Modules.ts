import {IResponse} from "../IResponse";
import {IModuleResponse} from "../IModuleResponse";

// noinspection JSUnusedLocalSymbols
const response: IResponse<IModuleResponse> = {
    status: "ok",
    meta: { count: 100, page_total: 16, total: 1576, limit: 100, page: 1 },
    data: {
        "3347001328": {
            profile: {
                torpedo_bomber: {
                    distance: 3.7,
                    torpedo_name: "IDS_PAPT010_MK_13_MOD0A",
                    cruise_speed: 150,
                    torpedo_damage: 9866,
                    torpedo_max_speed: 34,
                    max_damage: 9866,
                    max_health: 1939
                }
            },
            name: "Douglas BTD-1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_torpedo.png",
            tag: "PAUB904_CV10_TB_STOCK",
            module_id_str: "PAUB904",
            module_id: 3347001328,
            type: "TorpedoBomber",
            price_credit: 980000
        },
        "3349589840": {
            profile: { fire_control: { distance: 19.1, distance_increase: 0 } },
            name: "PCA n° 10 Mle 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PFUS901_C10_SUO_STOCK",
            module_id_str: "PFUS901",
            module_id: 3349589840,
            type: "Suo",
            price_credit: 1800000
        },
        "3349556944": {
            profile: {
                torpedoes: {
                    torpedo_speed: 62,
                    shot_speed: 0.4,
                    max_damage: 20966,
                    distance: 20.0
                }
            },
            name: "Type93",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PJUT901_D10_TORP_STOCK",
            module_id_str: "PJUT901",
            module_id: 3349556944,
            type: "Torpedoes",
            price_credit: 2500000
        },
        "3339103696": {
            profile: { fire_control: { distance: 19.4, distance_increase: 0 } },
            name: "GFCS X mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PRUS911_SUO",
            module_id_str: "PRUS911",
            module_id: 3339103696,
            type: "Suo",
            price_credit: 1900000
        },
        "3349131216": {
            profile: {
                artillery: {
                    rotation_time: 45.0,
                    max_damage_AP: 13000,
                    max_damage_HE: 7200,
                    gun_rate: 2.0
                }
            },
            name: "457 mm/45 Mk II",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PBUA902_ART_CONQUEROR",
            module_id_str: "PBUA902",
            module_id: 3349131216,
            type: "Artillery",
            price_credit: 2000000
        },
        "3318722544": {
            profile: {
                artillery: {
                    rotation_time: 45.0,
                    max_damage_AP: 13500,
                    max_damage_HE: 5700,
                    gun_rate: 2.0
                }
            },
            name: "406 mm/50 Mk7",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PAUA931_B10_ART_STOCK",
            module_id_str: "PAUA931",
            module_id: 3318722544,
            type: "Artillery",
            price_credit: 2200000
        },
        "3349589712": {
            profile: { fire_control: { distance: 11.4, distance_increase: 0 } },
            name: "Type10 mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PJUS901_Suo",
            module_id_str: "PJUS901",
            module_id: 3349589712,
            type: "Suo",
            price_credit: 1100000
        },
        "3348901328": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 9,
                    torpedoes_barrels: 2,
                    range: { max: 25, min: 10 },
                    health: 20900,
                    planes_amount: 0,
                    artillery_barrels: 3,
                    atba_barrels: 0
                }
            },
            name: "Grozovoi (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PRUH902_D10_HULL_STOCK_2",
            module_id_str: "PRUH902",
            module_id: 3348901328,
            type: "Hull",
            price_credit: 2500000
        },
        "3256626640": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 5,
                    torpedoes_barrels: 1,
                    range: { max: 88, min: 6 },
                    health: 1,
                    planes_amount: 0,
                    artillery_barrels: 2,
                    atba_barrels: 0
                }
            },
            name: "Test Ship",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PRUH990_TEST",
            module_id_str: "PRUH990",
            module_id: 3256626640,
            type: "Hull",
            price_credit: 0
        },
        "3348967120": {
            profile: {
                flight_control: {
                    fighter_squadrons: 2,
                    bomber_squadrons: 3,
                    torpedo_squadrons: 3
                }
            },
            name: "Type10 mod. 2",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_flightcontrol.png",
            tag: "PJUF902_FlightControl_2_A",
            module_id_str: "PJUF902",
            module_id: 3348967120,
            type: "FlightControl",
            price_credit: 2400000
        },
        "3348868816": {
            profile: {
                fighter: {
                    cruise_speed: 180,
                    avg_damage: 87,
                    max_ammo: 30,
                    max_health: 2030
                }
            },
            name: "Mitsubishi A8M",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_fighter.png",
            tag: "PJUI902_CV10_F_TOP",
            module_id_str: "PJUI902",
            module_id: 3348868816,
            type: "Fighter",
            price_credit: 1400000
        },
        "3256266192": {
            profile: { fire_control: { distance: 12.8, distance_increase: 0 } },
            name: "Iamassist",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PRUS990_SUO_TEST",
            module_id_str: "PRUS990",
            module_id: 3256266192,
            type: "Suo",
            price_credit: 0
        },
        "3350179792": {
            profile: {
                artillery: {
                    rotation_time: 4.74,
                    max_damage_AP: 3200,
                    max_damage_HE: null,
                    gun_rate: 18.8
                }
            },
            name: "152 mm/50 Mk XXVI",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PBUA901_C10_ART_STOCK",
            module_id_str: "PBUA901",
            module_id: 3350179792,
            type: "Artillery",
            price_credit: 1900000
        },
        "3349949904": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 14,
                    torpedoes_barrels: 2,
                    range: { max: 50, min: 12 },
                    health: 22500,
                    planes_amount: 0,
                    artillery_barrels: 4,
                    atba_barrels: 0
                }
            },
            name: "Khabarovsk (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PRUH901_KHABAROVSK_A",
            module_id_str: "PRUH901",
            module_id: 3349949904,
            type: "Hull",
            price_credit: 2500000
        },
        "3350015696": {
            profile: {
                flight_control: {
                    fighter_squadrons: 2,
                    bomber_squadrons: 2,
                    torpedo_squadrons: 3
                }
            },
            name: "Type10 mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_flightcontrol.png",
            tag: "PJUF901_FlightControl_1",
            module_id_str: "PJUF901",
            module_id: 3350015696,
            type: "FlightControl",
            price_credit: 1100000
        },
        "3339562992": {
            profile: { engine: { max_speed: 33.0 } },
            name: "Propulsion: 212,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PAUE911_CV10_ENG_STOCK",
            module_id_str: "PAUE911",
            module_id: 3339562992,
            type: "Engine",
            price_credit: 1400000
        },
        "3328978640": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 46,
                    torpedoes_barrels: 4,
                    range: { max: 203, min: 6 },
                    health: 40800,
                    planes_amount: 0,
                    artillery_barrels: 4,
                    atba_barrels: 6
                }
            },
            name: "Zao (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PJUH921_TENGU_1944",
            module_id_str: "PJUH921",
            module_id: 3328978640,
            type: "Hull",
            price_credit: 2800000
        },
        "3346410960": {
            profile: {
                torpedoes: {
                    torpedo_speed: 65,
                    shot_speed: 0.5,
                    max_damage: 14600,
                    distance: 10.0
                }
            },
            name: "53-50",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PRUT904_D10_TORP_TOP_2",
            module_id_str: "PRUT904",
            module_id: 3346410960,
            type: "Torpedoes",
            price_credit: 2200000
        },
        "3348999984": {
            profile: { engine: { max_speed: 37.5 } },
            name: "Propulsion: 76,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PGUE902_D10_ENG_STOCK",
            module_id_str: "PGUE902",
            module_id: 3348999984,
            type: "Engine",
            price_credit: 1800000
        },
        "3350081232": {
            profile: {
                dive_bomber: {
                    bomb_burn_probability: 1.0,
                    accuracy: { max: 335.0, min: 134.0 },
                    max_damage: 4600,
                    max_health: 1860,
                    cruise_speed: 156
                }
            },
            name: "Aichi B7A2",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_bomber.png",
            tag: "PJUD901_CV10_DB_STOCK",
            module_id_str: "PJUD901",
            module_id: 3350081232,
            type: "DiveBomber",
            price_credit: 990000
        },
        "3349917392": {
            profile: {
                fighter: {
                    cruise_speed: 176,
                    avg_damage: 73,
                    max_ammo: 35,
                    max_health: 1830
                }
            },
            name: "Mitsubishi A7M1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_fighter.png",
            tag: "PJUI901_CV10_F_STOCK",
            module_id_str: "PJUI901",
            module_id: 3349917392,
            type: "Fighter",
            price_credit: 690000
        },
        "3329076944": {
            profile: { engine: { max_speed: 34.5 } },
            name: "Propulsion: 240,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PJUE921_CV10_ENG_STOCK",
            module_id_str: "PJUE921",
            module_id: 3329076944,
            type: "Engine",
            price_credit: 1200000
        },
        "3347459536": {
            profile: {
                torpedoes: {
                    torpedo_speed: 66,
                    shot_speed: 0.5,
                    max_damage: 14600,
                    distance: 8.0
                }
            },
            name: "53-49M",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PRUT903_D10_TORP_STOCK_2",
            module_id_str: "PRUT903",
            module_id: 3347459536,
            type: "Torpedoes",
            price_credit: 1100000
        },
        "3349950416": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 23,
                    torpedoes_barrels: 4,
                    range: { max: 127, min: 6 },
                    health: 43300,
                    planes_amount: 0,
                    artillery_barrels: 5,
                    atba_barrels: 0
                }
            },
            name: "Minotaur (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PBUH901_C10_HULL_A",
            module_id_str: "PBUH901",
            module_id: 3349950416,
            type: "Hull",
            price_credit: 2450000
        },
        "3350048208": {
            profile: { engine: { max_speed: 43.0 } },
            name: "Propulsion: 130,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PRUE901_D10_ENG_STOCK",
            module_id_str: "PRUE901",
            module_id: 3350048208,
            type: "Engine",
            price_credit: 1800000
        },
        "3347918544": {
            profile: {
                flight_control: {
                    fighter_squadrons: 4,
                    bomber_squadrons: 2,
                    torpedo_squadrons: 2
                }
            },
            name: "Type10 mod. 3",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_flightcontrol.png",
            tag: "PJUF903_FlightControl_2_U",
            module_id_str: "PJUF903",
            module_id: 3347918544,
            type: "FlightControl",
            price_credit: 2400000
        },
        "3348901680": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 13,
                    torpedoes_barrels: 2,
                    range: { max: 20, min: 13 },
                    health: 20300,
                    planes_amount: 0,
                    artillery_barrels: 3,
                    atba_barrels: 0
                }
            },
            name: "Z-52 (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PGUH902_D10_HULL_STOCK",
            module_id_str: "PGUH902",
            module_id: 3348901680,
            type: "Hull",
            price_credit: 2350000
        },
        "3348508112": {
            profile: {
                torpedoes: {
                    torpedo_speed: 53,
                    shot_speed: 0.5,
                    max_damage: 19500,
                    distance: 6.0
                }
            },
            name: "ET-46",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PRUT902_D10_TORP_TOP",
            module_id_str: "PRUT902",
            module_id: 3348508112,
            type: "Torpedoes",
            price_credit: 1100000
        },
        "3308007408": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 67,
                    torpedoes_barrels: 0,
                    range: { max: 193, min: 13 },
                    health: 67600,
                    planes_amount: 136,
                    artillery_barrels: 0,
                    atba_barrels: 18
                }
            },
            name: "Midway (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PAUH941_MIDWAY_1945",
            module_id_str: "PAUH941",
            module_id: 3308007408,
            type: "Hull",
            price_credit: 3000000
        },
        "3308105424": {
            profile: { engine: { max_speed: 39.0 } },
            name: "Propulsion: 75,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PJUE941_D10_ENG_STOCK",
            module_id_str: "PJUE941",
            module_id: 3308105424,
            type: "Engine",
            price_credit: 1650000
        },
        "3345362640": {
            profile: {
                torpedoes: {
                    torpedo_speed: 76,
                    shot_speed: 0.5,
                    max_damage: 21366,
                    distance: 8.0
                }
            },
            name: "Type F3",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PJUT905_D10_TORP_TOP",
            module_id_str: "PJUT905",
            module_id: 3345362640,
            type: "Torpedoes",
            price_credit: 2500000
        },
        "3350146768": {
            profile: {
                torpedo_bomber: {
                    distance: 3.4,
                    torpedo_name: "IDS_PJPT022_TYPE_91_MOD_1A",
                    cruise_speed: 156,
                    torpedo_damage: 8566,
                    torpedo_max_speed: 35,
                    max_damage: 8566,
                    max_health: 1950
                }
            },
            name: "Aichi B7A2",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_torpedo.png",
            tag: "PJUB901_CV10_TB_STOCK",
            module_id_str: "PJUB901",
            module_id: 3350146768,
            type: "TorpedoBomber",
            price_credit: 990000
        },
        "3346411216": {
            profile: {
                torpedoes: {
                    torpedo_speed: 67,
                    shot_speed: 0.4,
                    max_damage: 23766,
                    distance: 12.0
                }
            },
            name: "Type93 mod. 3",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PJUT904_D10_TORP_MED",
            module_id_str: "PJUT904",
            module_id: 3346411216,
            type: "Torpedoes",
            price_credit: 2500000
        },
        "3350048720": {
            profile: { engine: { max_speed: 33.5 } },
            name: "Propulsion: 110,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PBUE901_C10_ENG_STOCK",
            module_id_str: "PBUE901",
            module_id: 3350048720,
            type: "Engine",
            price_credit: 1300000
        },
        "3339693520": {
            profile: {
                artillery: {
                    rotation_time: 9.0,
                    max_damage_AP: 2600,
                    max_damage_HE: 1900,
                    gun_rate: 12.0
                }
            },
            name: "130 mm/55 B-2-U",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PRUA911_D10_ART_STOCK",
            module_id_str: "PRUA911",
            module_id: 3339693520,
            type: "Artillery",
            price_credit: 1800000
        },
        "3349131056": {
            profile: {
                artillery: {
                    rotation_time: 10.0,
                    max_damage_AP: 3000,
                    max_damage_HE: 1500,
                    gun_rate: 15.0
                }
            },
            name: "128 mm L/45 Drh LC/41",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PGUA902_D10_ART_STOCK",
            module_id_str: "PGUA902",
            module_id: 3349131056,
            type: "Artillery",
            price_credit: 2000000
        },
        "3339103952": {
            profile: { fire_control: { distance: 26.6, distance_increase: 0 } },
            name: "Type10 mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PJUS911_Suo",
            module_id_str: "PJUS911",
            module_id: 3339103952,
            type: "Suo",
            price_credit: 2100000
        },
        "3339562448": {
            profile: { engine: { max_speed: 34.5 } },
            name: "Propulsion: 210,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PRUE911_C10_ENG_STOCK",
            module_id_str: "PRUE911",
            module_id: 3339562448,
            type: "Engine",
            price_credit: 1500000
        },
        "3348508464": {
            profile: {
                torpedoes: {
                    torpedo_speed: 67,
                    shot_speed: 0.7,
                    max_damage: 14400,
                    distance: 10.0
                }
            },
            name: "G7 Wolfsbarsch",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PGUT902_D10_TORP_STOCK",
            module_id_str: "PGUT902",
            module_id: 3348508464,
            type: "Torpedoes",
            price_credit: 1500000
        },
        "3328618192": {
            profile: { fire_control: { distance: 16.2, distance_increase: 0 } },
            name: "Type10 mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PJUS921_Suo",
            module_id_str: "PJUS921",
            module_id: 3328618192,
            type: "Suo",
            price_credit: 1600000
        },
        "3349557200": {
            profile: {
                torpedoes: {
                    torpedo_speed: 62,
                    shot_speed: 0.6,
                    max_damage: 16766,
                    distance: 10.0
                }
            },
            name: "533 mm Mk IXM",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PBUT901_C10_TORP_STOCK",
            module_id_str: "PBUT901",
            module_id: 3349557200,
            type: "Torpedoes",
            price_credit: 1800000
        },
        "3339562800": {
            profile: { engine: { max_speed: 30.0 } },
            name: "Propulsion: 167,600 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PGUE911_B10_ENG_STOCK",
            module_id_str: "PGUE911",
            module_id: 3339562800,
            type: "Engine",
            price_credit: 1500000
        },
        "3339464144": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 16,
                    torpedoes_barrels: 0,
                    range: { max: 300, min: 6 },
                    health: 65400,
                    planes_amount: 0,
                    artillery_barrels: 3,
                    atba_barrels: 4
                }
            },
            name: "Moskva (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PRUH911_MOSKVA_A",
            module_id_str: "PRUH911",
            module_id: 3339464144,
            type: "Hull",
            price_credit: 2550000
        },
        "3256724944": {
            profile: { engine: { max_speed: 80.0 } },
            name: "Nocknockneo",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PRUE990_ENG_TEST",
            module_id_str: "PRUE990",
            module_id: 3256724944,
            type: "Engine",
            price_credit: 0
        },
        "3256856016": {
            profile: {
                artillery: {
                    rotation_time: 2.0,
                    max_damage_AP: 1,
                    max_damage_HE: 1,
                    gun_rate: 120.0
                }
            },
            name: "Pewpew",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PRUA990_TEST",
            module_id_str: "PRUA990",
            module_id: 3256856016,
            type: "Artillery",
            price_credit: 0
        },
        "3349098192": {
            profile: {
                torpedo_bomber: {
                    distance: 3.4,
                    torpedo_name: "IDS_PJPT022_TYPE_91_MOD_1A",
                    cruise_speed: 164,
                    torpedo_damage: 8566,
                    torpedo_max_speed: 35,
                    max_damage: 8566,
                    max_health: 2110
                }
            },
            name: "Nakajima C6N1-B",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_torpedo.png",
            tag: "PJUB902_CV10_TB_TOP",
            module_id_str: "PJUB902",
            module_id: 3349098192,
            type: "TorpedoBomber",
            price_credit: 2000000
        },
        "3349950256": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 30,
                    torpedoes_barrels: 4,
                    range: { max: 150, min: 13 },
                    health: 51900,
                    planes_amount: 0,
                    artillery_barrels: 4,
                    atba_barrels: 8
                }
            },
            name: "Hindenburg (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PGUH901_HINDENBURG_A",
            module_id_str: "PGUH901",
            module_id: 3349950256,
            type: "Hull",
            price_credit: 2200000
        },
        "3348541392": {
            profile: { fire_control: { distance: 24.3, distance_increase: 0 } },
            name: "Mk X mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PBUS902_SUO_CONQUEROR",
            module_id_str: "PBUS902",
            module_id: 3348541392,
            type: "Suo",
            price_credit: 2000000
        },
        "3350048560": {
            profile: { engine: { max_speed: 31.5 } },
            name: "Propulsion: 155,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PGUE901_C10_ENG_STOCK",
            module_id_str: "PGUE901",
            module_id: 3350048560,
            type: "Engine",
            price_credit: 1400000
        },
        "3349917680": {
            profile: {
                fighter: {
                    cruise_speed: 178,
                    avg_damage: 70,
                    max_ammo: 54,
                    max_health: 1910
                }
            },
            name: "Vought F4U-4",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_fighter.png",
            tag: "PAUI901_CV10_F_STOCK",
            module_id_str: "PAUI901",
            module_id: 3349917680,
            type: "Fighter",
            price_credit: 680000
        },
        "3347459888": {
            profile: {
                torpedoes: {
                    torpedo_speed: 69,
                    shot_speed: 0.7,
                    max_damage: 14400,
                    distance: 10.5
                }
            },
            name: "G7 Steinwal",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PGUT903_D10_TORP_TOP",
            module_id_str: "PGUT903",
            module_id: 3347459888,
            type: "Torpedoes",
            price_credit: 2200000
        },
        "3350179632": {
            profile: {
                artillery: {
                    rotation_time: 22.5,
                    max_damage_AP: 5900,
                    max_damage_HE: 2500,
                    gun_rate: 6.0
                }
            },
            name: "203 mm L/60 Drh LC/34",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PGUA901_C10_ART_STOCK",
            module_id_str: "PGUA901",
            module_id: 3350179632,
            type: "Artillery",
            price_credit: 1800000
        },
        "3318591184": {
            profile: { engine: { max_speed: 27.0 } },
            name: "Propulsion: 150,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PJUE931_B10_ENG_STOCK",
            module_id_str: "PJUE931",
            module_id: 3318591184,
            type: "Engine",
            price_credit: 590000
        },
        "3318722256": {
            profile: {
                artillery: {
                    rotation_time: 22.78,
                    max_damage_AP: 2200,
                    max_damage_HE: 1800,
                    gun_rate: 10.5
                }
            },
            name: "127 mm/50 Type3",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PJUA931_D10_ART_STOCK",
            module_id_str: "PJUA931",
            module_id: 3318722256,
            type: "Artillery",
            price_credit: 1700000
        },
        "3339464688": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 19,
                    torpedoes_barrels: 2,
                    range: { max: 21, min: 6 },
                    health: 19400,
                    planes_amount: 0,
                    artillery_barrels: 3,
                    atba_barrels: 0
                }
            },
            name: "Gearing (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PAUH911_Gearing_1945",
            module_id_str: "PAUH911",
            module_id: 3339464688,
            type: "Hull",
            price_credit: 2650000
        },
        "3339104048": {
            profile: { fire_control: { distance: 20.6, distance_increase: 0 } },
            name: "FKS Typ 10 Mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PGUS911_SUO",
            module_id_str: "PGUS911",
            module_id: 3339104048,
            type: "Suo",
            price_credit: 2000000
        },
        "3349950288": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 14,
                    torpedoes_barrels: 2,
                    range: { max: 220, min: 6 },
                    health: 53300,
                    planes_amount: 0,
                    artillery_barrels: 3,
                    atba_barrels: 6
                }
            },
            name: "Henri IV (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PFUH901_C10_HULL_A",
            module_id_str: "PFUH901",
            module_id: 3349950288,
            type: "Hull",
            price_credit: 2900000
        },
        "3318492880": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 34,
                    torpedoes_barrels: 0,
                    range: { max: 165, min: 6 },
                    health: 63100,
                    planes_amount: 100,
                    artillery_barrels: 0,
                    atba_barrels: 12
                }
            },
            name: "Hakuryu (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PJUH931_Hakuryu_1942",
            module_id_str: "PJUH931",
            module_id: 3318492880,
            type: "Hull",
            price_credit: 2850000
        },
        "3347951600": {
            profile: { engine: { max_speed: 36.0 } },
            name: "Propulsion: 60,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PAUE903_D10_ENG_STOCK",
            module_id_str: "PAUE903",
            module_id: 3347951600,
            type: "Engine",
            price_credit: 1750000
        },
        "3349098480": {
            profile: {
                torpedo_bomber: {
                    distance: 3.7,
                    torpedo_name: "IDS_PAPT010_MK_13_MOD0A",
                    cruise_speed: 151,
                    torpedo_damage: 9866,
                    torpedo_max_speed: 34,
                    max_damage: 9866,
                    max_health: 2120
                }
            },
            name: "Douglas XSB2D",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_torpedo.png",
            tag: "PAUB902_CV10_TB_TOP",
            module_id_str: "PAUB902",
            module_id: 3349098480,
            type: "TorpedoBomber",
            price_credit: 2000000
        },
        "3339464496": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 28,
                    torpedoes_barrels: 0,
                    range: { max: 400, min: 19 },
                    health: 105800,
                    planes_amount: 0,
                    artillery_barrels: 4,
                    atba_barrels: 14
                }
            },
            name: "Großer Kurfürst (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PGUH911_GROSSDEUTSCHLAND_A",
            module_id_str: "PGUH911",
            module_id: 3339464496,
            type: "Hull",
            price_credit: 3500000
        },
        "3349589456": {
            profile: { fire_control: { distance: 11.2, distance_increase: 0 } },
            name: "GFCS X mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PRUS901_Suo",
            module_id_str: "PRUS901",
            module_id: 3349589456,
            type: "Suo",
            price_credit: 1500000
        },
        "3348082640": {
            profile: {
                artillery: {
                    rotation_time: 45.0,
                    max_damage_AP: 14900,
                    max_damage_HE: 8200,
                    gun_rate: 2.0
                }
            },
            name: "457 mm/45 Mk II",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PBUA903_B10_ART_TOP",
            module_id_str: "PBUA903",
            module_id: 3348082640,
            type: "Artillery",
            price_credit: 2500000
        },
        "3338644944": {
            profile: {
                artillery: {
                    rotation_time: 10.0,
                    max_damage_AP: 2600,
                    max_damage_HE: 1800,
                    gun_rate: 15.0
                }
            },
            name: "130 mm/58 SM-2-1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PRUA912_D10_ART_STOCK_2",
            module_id_str: "PRUA912",
            module_id: 3338644944,
            type: "Artillery",
            price_credit: 1700000
        },
        "3348508368": {
            profile: {
                torpedoes: {
                    torpedo_speed: 76,
                    shot_speed: 0.4,
                    max_damage: 21366,
                    distance: 8.0
                }
            },
            name: "Type F3",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PJUT902_C10_TORP_STOCK",
            module_id_str: "PJUT902",
            module_id: 3348508368,
            type: "Torpedoes",
            price_credit: 2500000
        },
        "3337433072": {
            profile: {
                flight_control: {
                    fighter_squadrons: 3,
                    bomber_squadrons: 2,
                    torpedo_squadrons: 0
                }
            },
            name: "Mk10 mod. 3",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_flightcontrol.png",
            tag: "PAUF913_FlightControl_2_F",
            module_id_str: "PAUF913",
            module_id: 3337433072,
            type: "FlightControl",
            price_credit: 2400000
        },
        "3349000176": {
            profile: { engine: { max_speed: 33.0 } },
            name: "Propulsion: 120,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PAUE902_C10_ENG_STOCK",
            module_id_str: "PAUE902",
            module_id: 3349000176,
            type: "Engine",
            price_credit: 1600000
        },
        "3318132720": {
            profile: { fire_control: { distance: 23.6, distance_increase: 0 } },
            name: "Mk10 mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PAUS931_Suo",
            module_id_str: "PAUS931",
            module_id: 3318132720,
            type: "Suo",
            price_credit: 2100000
        },
        "3337596720": {
            profile: {
                artillery: {
                    rotation_time: 40.0,
                    max_damage_AP: 13500,
                    max_damage_HE: 5000,
                    gun_rate: 1.9
                }
            },
            name: "420 mm L/48 Drh LC/40",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PGUA913_B10_ART_TOP",
            module_id_str: "PGUA913",
            module_id: 3337596720,
            type: "Artillery",
            price_credit: 2500000
        },
        "3339530224": {
            profile: {
                flight_control: {
                    fighter_squadrons: 2,
                    bomber_squadrons: 2,
                    torpedo_squadrons: 1
                }
            },
            name: "Mk10 mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_flightcontrol.png",
            tag: "PAUF911_FlightControl_1",
            module_id_str: "PAUF911",
            module_id: 3339530224,
            type: "FlightControl",
            price_credit: 1150000
        },
        "3336548144": {
            profile: {
                artillery: {
                    rotation_time: 40.0,
                    max_damage_AP: 12700,
                    max_damage_HE: 4800,
                    gun_rate: 2.1
                }
            },
            name: "406 mm L/52 Drh C/34",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PGUA914_B10_ART_STOCK",
            module_id_str: "PGUA914",
            module_id: 3336548144,
            type: "Artillery",
            price_credit: 2000000
        },
        "3339693776": {
            profile: {
                artillery: {
                    rotation_time: 72.0,
                    max_damage_AP: 14800,
                    max_damage_HE: 7300,
                    gun_rate: 2.0
                }
            },
            name: "460 mm/45 Type94",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PJUA911_B10_ART_STOCK",
            module_id_str: "PJUA911",
            module_id: 3339693776,
            type: "Artillery",
            price_credit: 2300000
        },
        "3348541232": {
            profile: { fire_control: { distance: 12.1, distance_increase: 0 } },
            name: "FKS Typ 10 Mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PGUS902_D10_SUO_STOCK",
            module_id_str: "PGUS902",
            module_id: 3348541232,
            type: "Suo",
            price_credit: 1700000
        },
        "3350048752": {
            profile: { engine: { max_speed: 30.0 } },
            name: "Propulsion: 172,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PAUE901_B10_ENG_STOCK",
            module_id_str: "PAUE901",
            module_id: 3350048752,
            type: "Engine",
            price_credit: 550000
        },
        "3349000144": {
            profile: { engine: { max_speed: 29.5 } },
            name: "Propulsion: 135,650 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PBUE902_ENG_CONQUEROR",
            module_id_str: "PBUE902",
            module_id: 3349000144,
            type: "Engine",
            price_credit: 1500000
        },
        "3256233424": {
            profile: {
                torpedoes: {
                    torpedo_speed: 100,
                    shot_speed: 30.0,
                    max_damage: 0,
                    distance: 9.0
                }
            },
            name: "Plopplop",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PRUT990_TEST",
            module_id_str: "PRUT990",
            module_id: 3256233424,
            type: "Torpedoes",
            price_credit: 0
        },
        "3347820528": {
            profile: {
                fighter: {
                    cruise_speed: 181,
                    avg_damage: 80,
                    max_ammo: 48,
                    max_health: 2060
                }
            },
            name: "Grumman F8F",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_fighter.png",
            tag: "PAUI903_CV10_F_TOP",
            module_id_str: "PAUI903",
            module_id: 3347820528,
            type: "Fighter",
            price_credit: 1400000
        },
        "3339104240": {
            profile: { fire_control: { distance: 11.1, distance_increase: 0 } },
            name: "Mk10 mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PAUS911_Suo",
            module_id_str: "PAUS911",
            module_id: 3339104240,
            type: "Suo",
            price_credit: 1600000
        },
        "3349589808": {
            profile: { fire_control: { distance: 17.8, distance_increase: 0 } },
            name: "FKS Typ 10 Mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PGUS901_SUO",
            module_id_str: "PGUS901",
            module_id: 3349589808,
            type: "Suo",
            price_credit: 1700000
        },
        "3349950448": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 30,
                    torpedoes_barrels: 0,
                    range: { max: 203, min: 6 },
                    health: 50600,
                    planes_amount: 0,
                    artillery_barrels: 3,
                    atba_barrels: 6
                }
            },
            name: "Des Moines (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PAUH901_Des_Moines_1948",
            module_id_str: "PAUH901",
            module_id: 3349950448,
            type: "Hull",
            price_credit: 2900000
        },
        "3339562704": {
            profile: { engine: { max_speed: 34.5 } },
            name: "Propulsion: 159,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PJUE911_C10_ENG_STOCK",
            module_id_str: "PJUE911",
            module_id: 3339562704,
            type: "Engine",
            price_credit: 1400000
        },
        "3349032656": {
            profile: {
                dive_bomber: {
                    bomb_burn_probability: 1.0,
                    accuracy: { max: 335.0, min: 134.0 },
                    max_damage: 4600,
                    max_health: 2030,
                    cruise_speed: 161
                }
            },
            name: "Wakusei",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_bomber.png",
            tag: "PJUD902_CV10_DB_TOP",
            module_id_str: "PJUD902",
            module_id: 3349032656,
            type: "DiveBomber",
            price_credit: 2000000
        },
        "3349557232": {
            profile: {
                torpedoes: {
                    torpedo_speed: 66,
                    shot_speed: 0.4,
                    max_damage: 17900,
                    distance: 16.5
                }
            },
            name: "Mark 17",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PAUT901_D10_TORP_STOCK",
            module_id_str: "PAUT901",
            module_id: 3349557232,
            type: "Torpedoes",
            price_credit: 2500000
        },
        "3349557040": {
            profile: {
                torpedoes: {
                    torpedo_speed: 64,
                    shot_speed: 0.7,
                    max_damage: 13700,
                    distance: 6.0
                }
            },
            name: "G7a T1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PGUT901_C10_TORP_STOCK",
            module_id_str: "PGUT901",
            module_id: 3349557040,
            type: "Torpedoes",
            price_credit: 260000
        },
        "3350048592": {
            profile: { engine: { max_speed: 35.0 } },
            name: "Propulsion: 220,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PFUE901_C10_ENG_STOCK",
            module_id_str: "PFUE901",
            module_id: 3350048592,
            type: "Engine",
            price_credit: 1600000
        },
        "3348901840": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 35,
                    torpedoes_barrels: 0,
                    range: { max: 416, min: 19 },
                    health: 82900,
                    planes_amount: 0,
                    artillery_barrels: 4,
                    atba_barrels: 8
                }
            },
            name: "Conqueror (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PBUH902_CONQUEROR",
            module_id_str: "PBUH902",
            module_id: 3348901840,
            type: "Hull",
            price_credit: 3500000
        },
        "3339464400": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 58,
                    torpedoes_barrels: 0,
                    range: { max: 650, min: 16 },
                    health: 97200,
                    planes_amount: 0,
                    artillery_barrels: 3,
                    atba_barrels: 14
                }
            },
            name: "Yamato (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PJUH911_Yamato_1944",
            module_id_str: "PJUH911",
            module_id: 3339464400,
            type: "Hull",
            price_credit: 3300000
        },
        "3348999632": {
            profile: { engine: { max_speed: 39.5 } },
            name: "Propulsion: 73,000 hp",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_engine.png",
            tag: "PRUE902_D10_ENG_STOCK_2",
            module_id_str: "PRUE902",
            module_id: 3348999632,
            type: "Engine",
            price_credit: 1800000
        },
        "3346935792": {
            profile: {
                dive_bomber: {
                    bomb_burn_probability: 1.0,
                    accuracy: { max: 355.0, min: 142.0 },
                    max_damage: 10800,
                    max_health: 1910,
                    cruise_speed: 151
                }
            },
            name: "Douglas BTD-1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_bomber.png",
            tag: "PAUD904_CV10_DB_STOCK",
            module_id_str: "PAUD904",
            module_id: 3346935792,
            type: "DiveBomber",
            price_credit: 980000
        },
        "3348082672": {
            profile: {
                artillery: {
                    rotation_time: 7.2,
                    max_damage_AP: 2100,
                    max_damage_HE: 1800,
                    gun_rate: 20.0
                }
            },
            name: "127 mm/38 Mk38",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PAUA903_D10_ART_STOCK",
            module_id_str: "PAUA903",
            module_id: 3348082672,
            type: "Artillery",
            price_credit: 1900000
        },
        "3329208016": {
            profile: {
                artillery: {
                    rotation_time: 36.0,
                    max_damage_AP: 5400,
                    max_damage_HE: 3400,
                    gun_rate: 4.4
                }
            },
            name: "203 mm/50 Type18",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PJUA921_C10_ART_STOCK",
            module_id_str: "PJUA921",
            module_id: 3329208016,
            type: "Artillery",
            price_credit: 2100000
        },
        "3350179664": {
            profile: {
                artillery: {
                    rotation_time: 32.73,
                    max_damage_AP: 6200,
                    max_damage_HE: 3400,
                    gun_rate: 4.9
                }
            },
            name: "240 mm/55 Mle 1939",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PFUA901_C10_ART_STOCK",
            module_id_str: "PFUA901",
            module_id: 3350179664,
            type: "Artillery",
            price_credit: 2000000
        },
        "3349589968": {
            profile: { fire_control: { distance: 15.8, distance_increase: 0 } },
            name: "Mk X mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PBUS901_C10_SUO_STOCK",
            module_id_str: "PBUS901",
            module_id: 3349589968,
            type: "Suo",
            price_credit: 1450000
        },
        "3349590000": {
            profile: { fire_control: { distance: 15.8, distance_increase: 0 } },
            name: "Mk10 mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PAUS901_Suo",
            module_id_str: "PAUS901",
            module_id: 3349590000,
            type: "Suo",
            price_credit: 1800000
        },
        "3350179280": {
            profile: {
                artillery: {
                    rotation_time: 32.73,
                    max_damage_AP: 5800,
                    max_damage_HE: 3100,
                    gun_rate: 5.8
                }
            },
            name: "220 mm/65 SM-6",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_maingun.png",
            tag: "PRUA901_C10_ART_STOCK",
            module_id_str: "PRUA901",
            module_id: 3350179280,
            type: "Artillery",
            price_credit: 2350000
        },
        "3349557072": {
            profile: {
                torpedoes: {
                    torpedo_speed: 60,
                    shot_speed: 0.7,
                    max_damage: 14833,
                    distance: 9.0
                }
            },
            name: "550 mm 23DT",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_torpedoes.png",
            tag: "PFUT901_C10_TORP_STOCK",
            module_id_str: "PFUT901",
            module_id: 3349557072,
            type: "Torpedoes",
            price_credit: 1600000
        },
        "3338481648": {
            profile: {
                flight_control: {
                    fighter_squadrons: 1,
                    bomber_squadrons: 3,
                    torpedo_squadrons: 1
                }
            },
            name: "Mk10 mod. 2",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_flightcontrol.png",
            tag: "PAUF912_FlightControl_2_A",
            module_id_str: "PAUF912",
            module_id: 3338481648,
            type: "FlightControl",
            price_credit: 2400000
        },
        "3318493168": {
            profile: {
                hull: {
                    anti_aircraft_barrels: 70,
                    torpedoes_barrels: 0,
                    range: { max: 541, min: 6 },
                    health: 96300,
                    planes_amount: 0,
                    artillery_barrels: 4,
                    atba_barrels: 10
                }
            },
            name: "Montana (A)",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_hull.png",
            tag: "PAUH931_Montana_1945",
            module_id_str: "PAUH931",
            module_id: 3318493168,
            type: "Hull",
            price_credit: 3400000
        },
        "3347984368": {
            profile: {
                dive_bomber: {
                    bomb_burn_probability: 1.0,
                    accuracy: { max: 355.0, min: 142.0 },
                    max_damage: 10800,
                    max_health: 2070,
                    cruise_speed: 156
                }
            },
            name: "Kaiser XBTK-1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_avia_bomber.png",
            tag: "PAUD903_CV10_DB_TOP",
            module_id_str: "PAUD903",
            module_id: 3347984368,
            type: "DiveBomber",
            price_credit: 2000000
        },
        "3338055120": {
            profile: { fire_control: { distance: 11.0, distance_increase: 0 } },
            name: "GFCS X mod. 1",
            image:
                "http://glossary-na-static.gcdn.co/icons/wows/current/module/icon_module_radar.png",
            tag: "PRUS912_D10_SUO_STOCK_2",
            module_id_str: "PRUS912",
            module_id: 3338055120,
            type: "Suo",
            price_credit: 1600000
        }
    }
};

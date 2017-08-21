export interface IPlane {
    squadrons: number;
    prepare_time: number;
    name: string;
    cruise_speed: number;
    gunner_damage: number;
    count_in_squadron: { max: number; min: number };
    plane_level: number;
    max_health: number;
}

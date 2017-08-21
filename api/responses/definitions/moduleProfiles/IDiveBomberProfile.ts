export interface IDiveBomberProfile {
    bomb_burn_probability: number;
    accuracy: { max: number, min: number };
    max_damage: number;
    max_health: number;
    cruise_speed: number;
}
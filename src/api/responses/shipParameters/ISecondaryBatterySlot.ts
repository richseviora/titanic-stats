export interface ISecondaryBatterySlot {
    burn_probability: number | null;
    bullet_speed: number;
    name: string;
    shot_delay: number;
    damage: number;
    bullet_mass: number;
    type: "HE" | "AP";
    gun_rate: number;
}
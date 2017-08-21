export interface IArtilleryShell {
    type: "AP" | "HE";
    burn_probability: number | null;
    bullet_speed: number;
    name: string;
    damage: number;
    bullet_mass: number;
}
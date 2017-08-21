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
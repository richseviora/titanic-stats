export interface IEncyclopedia {
    ships_updated_at: number;
    ship_types: { [shipTypeId: string]: string };
    languages: { [languageCode: string]: string };
    ship_modifications: { [modificationCode: string]: string };
    ship_modules: { [moduleCode: string]: string };
    ship_type_images: IShipImageUrls;
    ship_nations: { [nationCode: string]: string };
    game_version: string;
}

export interface IShipImageUrls {
    [shipTypeId: string]: {
        image_premium: string;
        image: string;
        image_elite: string;
    };
}

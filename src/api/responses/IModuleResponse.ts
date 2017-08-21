import {IModule} from "./IModule";

export interface IModuleResponse {
    [moduleId: string]: IModule;
}
import {IClientRequest} from "./IClientRequest";
import {IPaginatedRequest} from "./IPaginatedRequest";
import {ModuleType} from "../ModuleType";

export interface IModuleRequest extends IClientRequest, IPaginatedRequest {
    module_id: number|number[];
    type: ModuleType|ModuleType[];
}
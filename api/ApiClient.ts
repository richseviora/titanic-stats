import {IWarshipRequest} from "./requests/IWarshipRequest";

export interface IApiClient {

}

const BASE_URL = 'https://api.worldofwarships.com/wows';


export class ApiClient {
    public warshipRequest(config: IWarshipRequest): Promise<any> {

    }
}
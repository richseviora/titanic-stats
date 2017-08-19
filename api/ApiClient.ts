import {IWarshipRequest} from "./requests/IWarshipRequest";
import {URL, URLSearchParams} from "url";

export interface IApiClient {
    warshipRequest(config: IWarshipRequest): URL
}

const BASE_URL = 'https://api.worldofwarships.com/wows/encyclopedia/';


export class ApiClient {
    public warshipRequest(config: IWarshipRequest): URL {
        const url = new URL('ships/', BASE_URL);
        const searchParams = new URLSearchParams(config);
        url.search = searchParams.toString();
        return url;
    }
}
import {IWarshipRequest} from "./requests/IWarshipRequest";
import {URL, URLSearchParams} from "url";

export interface IApiClient {
    warshipRequest(config: Partial<IWarshipRequest>): URL
}

const BASE_URL = 'https://api.worldofwarships.com/wows/encyclopedia/';


export class ApiClient implements IApiClient {
    private applicationId: string;

    public constructor(applicationId: string) {
        this.applicationId = applicationId;
    }

    public warshipRequest(config: Partial<IWarshipRequest>): URL {
        const url = new URL('ships/', BASE_URL);
        const searchParams = new URLSearchParams(Object.assign({}, config, {application_id: this.applicationId}));
        url.search = searchParams.toString();
        return url;
    }
}
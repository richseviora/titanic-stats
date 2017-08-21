import { IWarshipRequest } from "../api/requests/IWarshipRequest";
import { URL, URLSearchParams } from "url";
import { ServerRealm } from "../api/ServerRealm";
import { IClientRequest } from "../api/requests/IClientRequest";

export interface IURLGenerator {
    warshipRequest(config?: Partial<IWarshipRequest>): URL;
}

export class URLGenerator implements IURLGenerator {
    private applicationId: string;
    private realm: ServerRealm;

    public constructor(applicationId: string, realm: ServerRealm) {
        this.applicationId = applicationId;
        this.realm = realm;
    }

    public warshipRequest(config: Partial<IWarshipRequest>): URL {
        return this.clientRequest("ships/", config);
    }

    /**
     * Generates the URL for the desired endpoint and request objects.
     * @param {string} endPoint - Endpoint. Must end with a '/'.
     * @param {Partial<T extends IClientRequest>} config - Configuration object for the request.
     * @returns {"url".URL} The URL for the request.
     */
    public clientRequest<T extends IClientRequest>(endPoint: string, config: Partial<T>): URL {
        const url = new URL(endPoint, this.baseUrl());
        const options = Object.assign({}, config, {
            application_id: this.applicationId
        });
        const searchParams = new URLSearchParams(options);
        url.search = searchParams.toString();
        return url;
    }

    private baseUrl(): URL {
        return new URL(`http://api.worldofwarships.${this.realm}/wows/encyclopedia/`);
    }
}

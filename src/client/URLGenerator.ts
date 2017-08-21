import { IWarshipRequest } from "../api/requests/IWarshipRequest";
import { URL, URLSearchParams } from "url";
import {ServerRealm} from "../api/ServerRealm";

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
        const url = new URL("ships/", this.baseUrl());
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

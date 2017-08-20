import { IWarshipRequest } from "./requests/IWarshipRequest";
import { URL, URLSearchParams } from "url";

export interface IURLGenerator {
    warshipRequest(config?: Partial<IWarshipRequest>): URL;
}

const BASE_URL = "http://api.worldofwarships.com/wows/encyclopedia/";

export class URLGenerator implements IURLGenerator {
    private applicationId: string;

    public constructor(applicationId: string) {
        this.applicationId = applicationId;
    }

    public warshipRequest(config: Partial<IWarshipRequest>): URL {
        const url = new URL("ships/", BASE_URL);
        const options = Object.assign({}, config, {
            application_id: this.applicationId
        });
        const searchParams = new URLSearchParams(options);
        url.search = searchParams.toString();
        return url;
    }
}

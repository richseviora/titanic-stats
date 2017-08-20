import * as HTTP from "http";
import { IURLGenerator, URLGenerator } from "./URLGenerator";
import { Configuration } from "../Configuration";
import { IWarship } from "./responses/definitions/IWarship";
import { IResponse } from "./responses/definitions/IResponse";

export interface IDownloader {
    downloadShips(): Promise<IResponse<IWarship>>;
    downloadModules(): Promise<any>;
}

export class Downloader implements IDownloader {
    urlGenerator: IURLGenerator = new URLGenerator(Configuration.appId);

    downloadShips(): Promise<IResponse<IWarship>> {
        return new Promise((resolve, reject) => {
            HTTP.get(
                this.urlGenerator.warshipRequest({ limit: 1 }),
                response => {
                    const body: any[] = [];
                    response.on("data", data => {
                        console.log(data);
                        body.push(data);
                    });
                    response.on("error", reject);
                    response.on("end", () => {
                        const result = body.join("");
                        const resultObj = JSON.parse(result);
                        resolve(resultObj);
                    });
                }
            );
        });
    }

    downloadModules(): Promise<any> {
        throw new Error();
    }
}

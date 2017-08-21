import * as HTTP from "http";
import { IURLGenerator, URLGenerator } from "./URLGenerator";
import { Configuration } from "../../Configuration";
import { IWarship } from "../api/responses/IWarship";
import { IResponse } from "../api/responses/IResponse";
import { IWarshipCollection } from "../api/responses/IWarshipCollection";
import * as _ from "underscore";
import {ServerRealm} from "../api/ServerRealm";

export interface IDownloader {
    downloadShips(): Promise<IWarship[]>;

    downloadModules(): Promise<any>;
}

export class Downloader implements IDownloader {
    private urlGenerator: IURLGenerator = new URLGenerator(Configuration.appId, ServerRealm.NorthAmerica);

    public downloadShips(): Promise<IWarship[]> {
        return new Promise((resolve, reject) => {
            let result: IWarship[] = [];
            const initialPromise = this.downloadShipPage(1);
            let promise = this.recursivePromise(result, 1, resolve, reject);
            initialPromise.then(promise);
        });
    }

    public downloadModules(): Promise<any> {
        throw new Error();
    }

    /**
     * Returns a promise handler that will generate another ship page request and concatenate the results.
     * @param {IWarship[]} result The result collection to use.
     * @param {number} pageNumber The current page number of the request.
     * @param resolve - Resolve
     * @param reject
     * @returns {(response: IResponse<IWarshipCollection>) => void}
     */
    private recursivePromise(
        result: IWarship[],
        pageNumber: number,
        resolve: any,
        reject: any
    ): (response: IResponse<IWarshipCollection>) => void {
        return (response: IResponse<IWarshipCollection>) => {
            let values = _.values(response.data);
            result.push.apply(result, values);
            if (response.meta.page === response.meta.page_total) {
                console.log("Resolving Result");
                resolve(result);
            } else {
                let nextPageNumber = pageNumber + 1;
                console.log(`Requesting Next Page: ${nextPageNumber}`);
                const nextPagePromise = this.downloadShipPage(nextPageNumber);
                const nextPageHandler = this.recursivePromise(result, nextPageNumber, resolve, reject);
                nextPagePromise.then(nextPageHandler);
            }
        };
    }

    private downloadShipPage(pageNumber: number): Promise<IResponse<IWarshipCollection>> {
        return new Promise((resolve, reject) => {
            HTTP.get(
                this.urlGenerator.warshipRequest({
                    limit: 100,
                    page_no: pageNumber
                }),
                response => {
                    const body: any[] = [];
                    response.on("data", data => {
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
}

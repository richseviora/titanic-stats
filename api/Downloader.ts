import * as HTTP from 'http';

export interface IDownloader {
    downloadShips(): Promise<any>;
    downloadModules(): Promise<any>;
}

export class Downloader implements IDownloader {
    downloadShips(): Promise<any> {
        throw new Error;
    }

    downloadModules(): Promise<any> {
        throw new Error;
    }
}
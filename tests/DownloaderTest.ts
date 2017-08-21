import { Downloader, IDownloader } from "../src/client/Downloader";

describe("Downloader", () => {
  let downloader: IDownloader;
  beforeEach(() => {
    downloader = new Downloader();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
  });
  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;
  });
  describe("#downloadShips", () => {
    it("returns correct result", () => {
      let promise = downloader.downloadShips();
      return expect(promise).resolves.toHaveLength(229);
    });
  });
});

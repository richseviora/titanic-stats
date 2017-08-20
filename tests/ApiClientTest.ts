import { URLGenerator, IURLGenerator } from "../api/URLGenerator";
import { ShipNation } from "../api/ShipNation";

describe("URLGenerator", () => {
    const applicationId = "133f74982efd62f7181de390d26e2e62";
    let client: IURLGenerator;
    beforeEach(() => {
        client = new URLGenerator(applicationId);
    });
    describe("#warshipRequest", () => {
        it("generates basic URL correctly", () => {
            // Arrange
            const expectedUrl =
                "http://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=133f74982efd62f7181de390d26e2e62";
            // Act
            const result = client.warshipRequest({
                application_id: applicationId
            });
            expect(result.toString()).toEqual(expectedUrl);
        });

        it("generates Search URL correctly", () => {
            const expectedUrl =
                "http://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=133f74982efd62f7181de390d26e2e62&nation=USA%2CGermany";
            const result = client.warshipRequest({
                application_id: applicationId,
                nation: [ShipNation.USA, ShipNation.Germany]
            });
            expect(result.toString()).toEqual(expectedUrl);
        });
    });
});

import {ApiClient, IApiClient} from "../api/ApiClient";

describe('ApiClient', () => {
    let client: IApiClient;
    beforeEach(() => {
        client = new ApiClient();
    })
    it('behaves correctly', () => {
        // Arrange
        const applicationId = '133f74982efd62f7181de390d26e2e62';
        const expectedUrl = "https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=133f74982efd62f7181de390d26e2e62";
        // Act
        const result = client.warshipRequest({application_id: applicationId});
        expect(result.toString()).toEqual(expectedUrl);
    })
})
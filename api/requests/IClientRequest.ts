/**
 * Base inteface for all requests made to the Wargaming.net client.
 */
export interface IClientRequest {
    [key: string]: any;
    application_id: string;
}
import Foriio, { AuthenticationError, Rejecter, Resolver } from '../index';

/** Function to asynchronously get Works in Foriio
 * 
 * If an invalid API access key is passed, reject AuthenticationError.
 * 
 * @param token API access key.
 * @returns 
 */
export const requestWorks = (token: string): Foriio.ResusltRequest<Foriio.ResponseWorks, AuthenticationError> => {
    return new Promise(async (res, rej) => {

        const response = await fetch('https://api.foriio.com/api/v1/developer/works', {
            headers: {
                "Content-Type": "application/json",
                token: token
            }
        });

        if (response.ok) {
            const json = await response.json() as Foriio.ResponseWorks;

            res(new Resolver(json));
        }

        else if (!response.ok) {
            const json = await response.json() as Foriio.ResponseFailed;

            const error = new AuthenticationError(json.exception.message);

            rej(new Rejecter(error));
        }
    });
};
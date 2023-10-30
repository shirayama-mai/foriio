import { AuthenticationError } from '@src/authentication-error';

/** Function to asynchronously get Works in Foriio
 * 
 * If an invalid API access key is passed, reject AuthenticationError.
 * 
 * @param token API access key.
 * @returns 
 */
export const requestWorks: Foriio.RequestWorks = (token: string) => {
    return new Promise(async (res, rej) => {

        const response = await fetch('https://api.foriio.com/api/v1/developer/users', {
            headers: {
                "Content-Type": "application/json",
                token: token
            }
        });

        if (response.ok) {
            const json = await response.json() as Foriio.Works;

            res(json);
        }

        else if (!response.ok) {
            const json = await response.json() as Foriio.AuthenticationError;

            const error = new AuthenticationError(json.exception.message);

            rej(error);
        }
    });
};
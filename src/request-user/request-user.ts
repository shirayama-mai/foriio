import { Foriio } from '../@types/foriio';
import { AuthenticationError } from '../index';

/** Function to asynchronously get User`s info in Foriio
 * 
 * If an invalid API access key is passed, reject AuthenticationError.
 * 
 * @param token API access key.
 * @returns 
 */
export const requestUser = (token: string): Promise<Foriio.User | AuthenticationError> => {
    return new Promise(async (res, rej) => {

        const response = await fetch('https://api.foriio.com/api/v1/developer/users', {
            headers: {
                "Content-Type": "application/json",
                token: token
            }
        });

        if (response.ok) {
            const json = await response.json() as Foriio.User;

            res(json);
        }

        else if (!response.ok) {
            const json = await response.json() as Foriio.AuthenticationError;

            const error = new AuthenticationError(json.exception.message);

            rej(error);
        }
    });
}
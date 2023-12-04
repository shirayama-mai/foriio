import Foriio from '../index';

/** Function to asynchronously get User`s info in Foriio
 * 
 * If an invalid API access key is passed, return AuthenticationError.
 * 
 * @param token API access key.
 * @returns 
 */
export async function requestUser (token: string): Promise<Foriio.Response.User> {
    const res = await fetch('https://api.foriio.com/api/v1/developer/users', {
        headers: {
            "Content-Type": "application/json",
            token: token
        }
    });

    const json = await res.json();

    if (json.user === undefined) {
        const e = json as Foriio.Response.AuthenticationError;

        console.error(e);

        throw (new Error(e.exception.message));
    }

    return json as Foriio.Response.User;
};
import Foriio from '../index';

/** Function to asynchronously get Works in Foriio
 * 
 * If an invalid API access key is passed, reject AuthenticationError.
 * 
 * @param token API access key.
 * @returns 
 */
export async function requestWorks (token: string): Promise<Foriio.Response.Works> {
    const res = await fetch('https://api.foriio.com/api/v1/developer/works', {
        headers: {
            "Content-Type": "application/json",
            token: token
        }
    });

    const json = await res.json();

    if (json.works === undefined) {
        const e = json as Foriio.Response.AuthenticationError;

        console.error(e);

        throw (new Error(e.exception.message));
    }

    return json;
};
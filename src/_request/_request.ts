import { AuthenticationError, ParameterTypeError } from "@/error/index";

export async function _request<T> (apiKey: string, endpoint: string) {
    if (typeof endpoint !== 'string') {
        throw new ParameterTypeError(`endpoint required type 'string' but was given '${ typeof endpoint }`);
    }

    const url = 'https://api.foriio.com' + endpoint;

    const res = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            token: apiKey
        }
    });

    const json = await res.json();

    if (json.status === 401) {
        throw (new AuthenticationError(json.exception.message));
    }

    return json as T;
};

import type { Foriio } from '@/index';
import { _request } from "@/_request";

export function getForiioUser (apiKey: string) {
    return _request<Foriio.Response.User>(apiKey, '/api/v1/developer/users');
};

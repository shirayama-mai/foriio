import type { Foriio } from '@/index';
import { _request } from "@/_request";

export function getForiioWorks (apiKey: string) {
    return _request<Foriio.Response.Works>(apiKey, '/api/v1/developer/works');
};

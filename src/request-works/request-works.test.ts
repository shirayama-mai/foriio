import Foriio from "src/index";
import { requestWorks } from './request-works';

describe('test function requestWorks', () => {
    const BLANK_KEY = process.env.BLANK_KEY || '';
    const INVALID_KEY = process.env.INVALID_KEY || '';
    const CORRECT_KEY = process.env.CORRECT_KEY || '';

    it('blank key', async () => {
        const res = requestWorks(BLANK_KEY);

        await expect(res).rejects.toThrow('Authentication error');
    });

    it('invalid key', async () => {
        const res = requestWorks(INVALID_KEY);

        await expect(res).rejects.toThrow('Authentication error');
    });

    it('correct key', async () => {
        const res = await requestWorks(CORRECT_KEY);

        const error = (res as any) as Foriio.Response.AuthenticationError;

        expect(error.error).toBe(undefined);
    });
});
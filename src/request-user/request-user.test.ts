import Foriio from "src/index";
import { requestUser } from "./request-user";

describe('test function requestUser', () => {
    const BLANK_KEY = process.env.BLANK_KEY || '';
    const INVALID_KEY = process.env.INVALID_KEY || '';
    const CORRECT_KEY = process.env.CORRECT_KEY || '';

    it('blank key', async () => {
        const res = requestUser(BLANK_KEY);

        await expect(res).rejects.toThrow('Authentication error');
    });

    it('invalid key', async () => {
        const res = requestUser(INVALID_KEY);

        await expect(res).rejects.toThrow('Authentication error');
    });

    it('correct key', async () => {
        const res = await requestUser(CORRECT_KEY);

        const error = (res as any) as Foriio.Response.AuthenticationError;

        expect(error.error).toBe(undefined);
    });
});
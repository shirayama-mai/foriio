import Foriio from "src/index";
import { requestUser } from "./request-user";

describe('test function requestUser', () => {
    const BLANK_KEY = process.env.BLANK_KEY || '';
    const INVALID_KEY = process.env.INVALID_KEY || '';
    const CORRECT_KEY = process.env.CORRECT_KEY || '';

    it('blank key', async () => {
        const res = await requestUser(BLANK_KEY) as Foriio.Response.AuthenticationError;

       expect(res.status).toBe(401);
       expect(res.error).toBe('Unauthorized');
    });

    it('invalid key', async () => {
        const res = await requestUser(INVALID_KEY) as Foriio.Response.AuthenticationError;

        expect(res.status).toBe(401);
        expect(res.error).toBe('Unauthorized');
    });

    // it('correct key', async () => {

    // });
});
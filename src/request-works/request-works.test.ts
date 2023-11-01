import { requestWorks } from './request-works';
import Foriio, { AuthenticationError, Rejecter } from '../index';

describe('requestWorks', () => {
    const rejecter = new Rejecter<AuthenticationError>(new AuthenticationError('Authentication error'));

    test('Usingapi api blank key', () => {
        expect(requestWorks(process.env.JEST_API_BLANK_KEY || '')).rejects.toStrictEqual(rejecter);
    });

    test('Using api invalid key', () => {
        expect(requestWorks(process.env.JEST_API_INVALID_KEY || 'This is invalid api access key')).rejects.toStrictEqual(rejecter);
    });

    test ('Using api valid key', () => {
        expect(requestWorks(process.env.JEST_API_VALID_KEY || '')).resolves.toBeTruthy();
    });

});
import { requestWorks } from './request-works';
import { AuthenticationError } from '@src/authentication-error'

describe('requestWorks', () => {

    test('Usingapi api blank key', () => {
        expect(requestWorks(process.env.JEST_API_BLANK_KEY || '')).rejects.toThrow(new AuthenticationError('Authentication error'));
    });

    test('Using api invalid key', () => {
        expect(requestWorks(process.env.JEST_API_INVALID_KEY || 'This is invalid api access key')).rejects.toThrow(new AuthenticationError('Authentication error'));
    });

    test ('Using api valid key', () => {
        expect(requestWorks(process.env.JEST_API_VALID_KEY || '')).resolves.toBeTruthy();
    });

});
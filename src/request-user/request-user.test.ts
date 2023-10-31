import { requestUser } from './request-user';
import { AuthenticationError } from '../index'

describe('requestUser', () => {

    test('Usingapi api blank key', () => {
        expect(requestUser(process.env.JEST_API_BLANK_KEY || '')).rejects.toThrow(new AuthenticationError('Authentication error'));
    });

    test('Using api invalid key', () => {
        expect(requestUser(process.env.JEST_API_INVALID_KEY || 'This is invalid api access key')).rejects.toThrow(new AuthenticationError('Authentication error'));
    });

    test ('Using api valid key', () => {
        expect(requestUser(process.env.JEST_API_VALID_KEY || '')).resolves.toBeTruthy();
    });

});
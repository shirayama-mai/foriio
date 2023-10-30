export class AuthenticationError extends Error {
    public readonly name: string = "Unauthorized";

    constructor (message: Foriio.AuthenticationErrorMessage) {
        super(message);
    }
}
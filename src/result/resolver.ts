export class Resolver<T> {
    public readonly result: T;

    constructor (result: T) {
        this.result = result;
    }
}
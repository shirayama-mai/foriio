export class Rejecter<E> {
    public readonly result: E;

    constructor (result: E) {
        this.result = result;
    }
}

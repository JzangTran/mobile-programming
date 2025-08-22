export class Repository<T> {
    private data: T[]

    constructor(data: T[]) {
        this.data = data;
    }

    add(data: T) {

    }

    getAll(): T[] {
        return this.data;
    }
}
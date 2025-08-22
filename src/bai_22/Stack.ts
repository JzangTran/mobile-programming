export class Stack<T> {
    private list: T[];

    constructor(list?: T[]) {
        this.list = list ?? []; // nếu list undefined thì dùng mảng rỗng
    }

    push(item: T): void {
        this.list.push(item);
    }

    pop(): T | undefined {
        return this.list.pop();
    }

    peek(): T | undefined {
        return this.list[this.list.length - 1];
    }

    isEmpty(): boolean {
        return this.list.length === 0;
    }

    size(): number {
        return this.list.length;
    }

    clear(): void {
        this.list = [];
    }
}
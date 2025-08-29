"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor(list) {
        this.list = list !== null && list !== void 0 ? list : []; // nếu list undefined thì dùng mảng rỗng
    }
    push(item) {
        this.list.push(item);
    }
    pop() {
        return this.list.pop();
    }
    peek() {
        return this.list[this.list.length - 1];
    }
    isEmpty() {
        return this.list.length === 0;
    }
    size() {
        return this.list.length;
    }
    clear() {
        this.list = [];
    }
}
exports.Stack = Stack;

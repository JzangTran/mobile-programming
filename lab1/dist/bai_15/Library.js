"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
const Book_1 = require("./Book");
class Library {
    constructor(books, users) {
        this.books = books;
        this.users = users;
    }
    addBook(title, author, year) {
        let newBook = new Book_1.Book(title, author, year);
        if (this.books.find(book => book === newBook))
            return false;
        this.books.push(newBook);
        return true;
    }
}
exports.Library = Library;

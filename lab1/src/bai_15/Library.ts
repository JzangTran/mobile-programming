import { Book } from "./Book";
import { User } from "./User";

export class Library {
    books: Book[];
    users: User[];

    constructor(books?: Book[], users?: User[]) {
        this.books = books!;
        this.users = users!;
    }

    addBook(title: string, author: string, year: number): boolean {
        let newBook = new Book(title, author, year);
        if(this.books.find(book => book === newBook))
            return false
        this.books.push(newBook);
        return true;
    }
}
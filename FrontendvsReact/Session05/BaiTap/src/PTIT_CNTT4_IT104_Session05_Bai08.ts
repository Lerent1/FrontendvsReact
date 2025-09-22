class book {
    private title: string;
    private author: string;
    private id: number;

    constructor(title: string, author: string, id: number) {
        this.title = title;
        this.author = author;
        this.id = id;
    }

    public getInfo(): string {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`;
    }

    public updateInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }

    public getID(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }
}

class Libraryyy {
    private books: book[];

    constructor() {
        this.books = [];
    }

    public addBook(book: book): void {
        this.books.push(book);
    }

    public showBook(): void {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const bok = this.books.find(b => b.getID() === id);
        if (bok) {
            bok.updateInfo(newTitle, newAuthor);
            console.log(`Da duoc cap nhat`);
        } else {
            console.log(`ko tim thay}`);
        }
    }

    public findBookByTitle(title: string): void {
        const foundBooks = this.books.filter(b => b.getTitle().toLowerCase().includes(title.toLowerCase()));

        if (foundBooks.length > 0) {
            foundBooks.forEach(book => {
                console.log(`${book.getID()}: ${book.getTitle()}, ${book.getAuthor()}`);
            });
        } else {
            console.log(`ko tim thay`);
        }
    }
}

const book6 = new book("book1", "author", 2);
const myLibraryyy = new Libraryyy();
myLibraryyy.addBook(book6);
myLibraryyy.showBook();
myLibraryyy.updateBookById(1, "book2", "author2");
console.log("\n Sau khi cap nhat:");
myLibraryyy.showBook();
myLibraryyy.findBookByTitle("Clean");
class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    public getInfo(): string {
        return `Title: ${this.title}, author: ${this.author}`;
    }
}

class Library {
    editBookId(arg0: number, arg1: string, arg2: string) {
        throw new Error("Method not implemented.");
    }
    private books: Book[] = [];
    public addBook(book: Book): void {
        this.books.push(book);
    }

    public showBooks(): void {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
}

const book1 = new Book("De men phuu luu ky", "To Hoai");
const book2 = new Book("Lao Hac", "Nam Cao");
const book3 = new Book("Truyen Kieu", "Nguyen Du");
const book4 = new Book("Tat den", "Ngo Tat TO");
const book5 = new Book("Lang le Sapa", "Nguyen Thanh Long");

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.showBooks();
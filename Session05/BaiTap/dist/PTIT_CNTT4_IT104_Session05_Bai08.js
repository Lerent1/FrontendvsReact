class book {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
    getInfo() {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
    getID() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Libraryyy {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBook() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const bok = this.books.find(b => b.getID() === id);
        if (bok) {
            bok.updateInfo(newTitle, newAuthor);
            console.log(`Da duoc cap nhat`);
        }
        else {
            console.log(`ko tim thay}`);
        }
    }
    findBookByTitle(title) {
        const foundBooks = this.books.filter(b => b.getTitle().toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length > 0) {
            foundBooks.forEach(book => {
                console.log(`${book.getID()}: ${book.getTitle()}, ${book.getAuthor()}`);
            });
        }
        else {
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

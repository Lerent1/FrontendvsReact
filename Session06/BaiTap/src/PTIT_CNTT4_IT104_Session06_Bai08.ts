class Book {
    private id: number;
    private title: string;
    private author: string;
    private stock: number;
    private status: string;
    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId(): number {
        return this.id;
    }
    getTitle(): string {
        return this.title;
    }
    getAuthor(): string {
        return this.author;
    }
    getStock(): number {
        return this.stock;
    }
    getStatus(): string {
        return this.status;
    }
    setStock(stock: number): void {
        this.stock = stock;
    }
    setStatus(status: string): void {
        this.status = status;
    }
}

class Member {
    private id: number;
    private name: string;
    private contact: string;
    private lendedBooks: LendedBook[] = [];
    private status: string;
    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getContact(): string {
        return this.contact;
    }
    getLendedBooks(): LendedBook[] {
        return this.lendedBooks;
    }
    getStatus(): string {
        return this.status;
    }
    addLendedBook(lendedBook: LendedBook): void {
        this.lendedBooks.push(lendedBook);
    }
    setStatus(status: string): void {
        this.status = status;
    }
}

class LendedBook {
    private memberId: number;
    private bookId: number;
    private dueDate: Date;
    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId(): number {
        return this.memberId;
    }
    getBookId(): number {
        return this.bookId;
    }
    getDueDate(): Date {
        return this.dueDate;
    }
}

class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    addBook(book: Book): void {
        const exists = this.books.some(b => b.getId() === book.getId());
        if (exists) {
            console.log(`ID ${book.getId()} da ton tai`);
            return;
        }
        this.books.push(book);
        console.log(`Da them: ${book.getTitle()}`);
    }

    showBooks(): void {
        if (this.books.length === 0) {
            console.log("Thu vien chua co sach");
            return;
        }
        this.books.forEach(book => {
        console.log(`ID: ${book.getId()}, Title: ${book.getTitle()}, Author: ${book.getAuthor()}, Stock: ${book.getStock()}, Status: ${book.getStatus()}`);
        });
    }
}

const library = new Library();
const book1 = new Book(1, "Hai van dam duoi bien", "A", 10, "Co");
const book2 = new Book(2, "Nhung nguoi khon kho", "B", 5, "Co");
const book3 = new Book(3, "Khong gia dinh", "C", 0, "Het");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book2);
library.showBooks();
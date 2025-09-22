class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
    setStock(stock) {
        this.stock = stock;
    }
    setStatus(status) {
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.lendedBooks = [];
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getLendedBooks() {
        return this.lendedBooks;
    }
    getStatus() {
        return this.status;
    }
    addLendedBook(lendedBook) {
        this.lendedBooks.push(lendedBook);
    }
    setStatus(status) {
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() {
        return this.memberId;
    }
    getBookId() {
        return this.bookId;
    }
    getDueDate() {
        return this.dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        const exists = this.books.some(b => b.getId() === book.getId());
        if (exists) {
            console.log(`ID ${book.getId()} da ton tai`);
            return;
        }
        this.books.push(book);
        console.log(`Da them: ${book.getTitle()}`);
    }
    showBooks() {
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

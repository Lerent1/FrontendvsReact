class books {
    constructor(bookId, bookTitle, bookAuthor, publishYear) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.publishYear = publishYear;
    }
    getId() {
        return this.bookId;
    }
    getInfo() {
        return `ID: ${this.bookId} - Title: ${this.bookTitle} - Author: ${this.bookAuthor} - Year: ${this.publishYear}`;
    }
    updateInfo(newTitle, newAuthor, newYear) {
        this.bookTitle = newTitle;
        this.bookAuthor = newAuthor;
        this.publishYear = newYear;
    }
}
class librarys {
    constructor() {
        this.bookList = [];
    }
    addNewBook(book) {
        this.bookList.push(book);
    }
    displayBooks() {
        this.bookList.forEach((book, idx) => {
            console.log(`Position ${idx + 1} - ${book.getInfo()}`);
        });
    }
    removeBookById(bookId) {
        const index = this.bookList.findIndex(book => book.getId() === bookId);
        if (index !== -1) {
            this.bookList.splice(index, 1);
            return true;
        }
        return false;
    }
    editBookById(bookId, newTitle, newAuthor, newYear) {
        const book = this.bookList.find(book => book.getId() === bookId);
        if (book) {
            book.updateInfo(newTitle, newAuthor, newYear);
            return true;
        }
        return false;
    }
}
const publicLibrary = new librarys();
publicLibrary.addNewBook(new books(1, "Conan", "Author1", 2000));
publicLibrary.addNewBook(new books(2, "Doraemon", "Author2", 1995));
publicLibrary.addNewBook(new books(3, "Shin", "Author3", 2005));
publicLibrary.displayBooks();
if (publicLibrary.editBookById(2, "Doraemon", "Author", 2023)) {
    console.log("Update thanh cong");
}
else {
    console.log("ko tim thay");
}
publicLibrary.displayBooks();
console.log("\nXoa book id1:");
if (publicLibrary.removeBookById(1)) {
    console.log("Xoa thanh cong");
}
else {
    console.log("ko tim thay");
}
publicLibrary.displayBooks();

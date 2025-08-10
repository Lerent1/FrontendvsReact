class books {
    private bookId: number;
    private bookTitle: string;
    private bookAuthor: string;
    private publishYear: number;

    constructor(bookId: number, bookTitle: string, bookAuthor: string, publishYear: number) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.publishYear = publishYear;
    }
    public getId(): number {
        return this.bookId;
    }
    public getInfo(): string {
        return `ID: ${this.bookId} - Title: ${this.bookTitle} - Author: ${this.bookAuthor} - Year: ${this.publishYear}`;
    }
    public updateInfo(newTitle: string, newAuthor: string, newYear: number): void {
        this.bookTitle = newTitle;
        this.bookAuthor = newAuthor;
        this.publishYear = newYear;
    }
}

class librarys {
    private bookList: books[] = [];
    public addNewBook(book: books): void {
        this.bookList.push(book);
    }
    public displayBooks(): void {
        this.bookList.forEach((book, idx) => {
            console.log(`Position ${idx + 1} - ${book.getInfo()}`);
        });
    }
    public removeBookById(bookId: number): boolean {
        const index = this.bookList.findIndex(book => book.getId() === bookId);
        if (index !== -1) {
            this.bookList.splice(index, 1);
            return true;
        }
        return false;
    }
    public editBookById(bookId: number, newTitle: string, newAuthor: string, newYear: number): boolean {
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
} else {
    console.log("ko tim thay");
}
publicLibrary.displayBooks();
console.log("\nXoa book id1:");
if (publicLibrary.removeBookById(1)) {
    console.log("Xoa thanh cong");
} else {
    console.log("ko tim thay");
}
publicLibrary.displayBooks();
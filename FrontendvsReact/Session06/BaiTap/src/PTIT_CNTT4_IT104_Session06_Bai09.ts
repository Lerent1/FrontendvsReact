class LibraryBook {
    private bookId: number;
    private bookTitle: string;
    private bookAuthor: string;
    private quantity: number;
    private availability: string;
    constructor(bookId: number, bookTitle: string, bookAuthor: string, quantity: number, availability: string) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.quantity = quantity;
        this.availability = availability;
    }
    getId(): number {
        return this.bookId;
    }
    getTitle(): string {
        return this.bookTitle;
    }
    getAuthor(): string {
        return this.bookAuthor;
    }
    getQuantity(): number {
        return this.quantity;
    }
    getAvailability(): string {
        return this.availability;
    }
    setQuantity(quantity: number): void {
        this.quantity = quantity;
    }
    setAvailability(status: string): void {
        this.availability = status;
    }
}

class LibraryUser {
    private userId: number;
    private userName: string;
    private userContact: string;
    private borrowedBooks: BorrowedBook[] = [];
    private userStatus: string;
    constructor(userId: number, userName: string, userContact: string, userStatus: string) {
        this.userId = userId;
        this.userName = userName;
        this.userContact = userContact;
        this.userStatus = userStatus;
    }
    getId(): number {
        return this.userId;
    }
    getName(): string {
        return this.userName;
    }
    getContact(): string {
        return this.userContact;
    }
    getBorrowedBooks(): BorrowedBook[] {
        return this.borrowedBooks;
    }
    getStatus(): string {
        return this.userStatus;
    }
    addBorrowedBook(book: BorrowedBook): void {
        this.borrowedBooks.push(book);
    }
    setStatus(status: string): void {
        this.userStatus = status;
    }
}

class BorrowedBook {
    private borrowerId: number;
    private borrowedBookId: number;
    private returnDueDate: Date;
    constructor(borrowerId: number, borrowedBookId: number, returnDueDate: Date) {
        this.borrowerId = borrowerId;
        this.borrowedBookId = borrowedBookId;
        this.returnDueDate = returnDueDate;
    }
    getBorrowerId(): number {
        return this.borrowerId;
    }
    getBorrowedBookId(): number {
        return this.borrowedBookId;
    }
    getReturnDueDate(): Date {
        return this.returnDueDate;
    }
}

class LibrarySystem {
    private bookList: LibraryBook[] = [];
    private userList: LibraryUser[] = [];
    addBook(book: LibraryBook): void {
        const exists = this.bookList.some(b => b.getId() === book.getId());
        if (exists) {
            console.log(`ID ${book.getId()} da ton tai`);
            return;
        }
        this.bookList.push(book);
        console.log(`Da them: ${book.getTitle()}`);
    }

    showBooks(): void {
        if (this.bookList.length === 0) {
            console.log("chua co sach");
            return;
        }
        this.bookList.forEach(book => {
            console.log(`ID: ${book.getId()}, title: ${book.getTitle()}, author: ${book.getAuthor()}, stock: ${book.getQuantity()}, status: ${book.getAvailability()}`);
        });
    }

    registerUser(id: number, name: string, contact: string): void {
        if (this.userList.some(u => u.getId() === id)) {
            console.log(`ID ${id} da ton tai`);
            return;
        }
        const newUser = new LibraryUser(id, name, contact, "active");
        this.userList.push(newUser);
        console.log(`Da dang ky`);
    }

    blockUser(id: number): void {
        const user = this.userList.find(u => u.getId() === id);
        if (!user) {
            console.log(`KO tim thay`);
            return;
        }
        user.setStatus("blocked");
        console.log(`Da khoa: ${user.getName()}`);
    }

    showUsers(): void {
        if (this.userList.length === 0) {
            console.log("Chua co thanh vien");
            return;
        }
        this.userList.forEach(user => {
            console.log(`ID: ${user.getId()}, name: ${user.getName()}, lien he: ${user.getContact()}, trang thai: ${user.getStatus()}`);
        });
    }
}

const libSys = new LibrarySystem();
const libBook1 = new LibraryBook(1, "Hai van dam duoi bien", "A", 10, "Có");
const libBook2 = new LibraryBook(2, "Nhung nguoi khon kho", "B", 5, "Có");
const libBook3 = new LibraryBook(3, "Khong gia dinh", "C", 0, "Hết");

libSys.addBook(libBook1);
libSys.addBook(libBook2);
libSys.addBook(libBook3);
libSys.addBook(libBook2);
libSys.showBooks();

libSys.registerUser(1, "A", "a@gmail.com");
libSys.registerUser(2, "B", "b@gmail.com");
libSys.registerUser(1, "C", "c@gmail.com");
libSys.showUsers();

libSys.blockUser(2);
libSys.showUsers();
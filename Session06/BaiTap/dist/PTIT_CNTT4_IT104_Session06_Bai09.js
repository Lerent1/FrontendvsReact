class LibraryBook {
    constructor(bookId, bookTitle, bookAuthor, quantity, availability) {
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.quantity = quantity;
        this.availability = availability;
    }
    getId() {
        return this.bookId;
    }
    getTitle() {
        return this.bookTitle;
    }
    getAuthor() {
        return this.bookAuthor;
    }
    getQuantity() {
        return this.quantity;
    }
    getAvailability() {
        return this.availability;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    setAvailability(status) {
        this.availability = status;
    }
}
class LibraryUser {
    constructor(userId, userName, userContact, userStatus) {
        this.borrowedBooks = [];
        this.userId = userId;
        this.userName = userName;
        this.userContact = userContact;
        this.userStatus = userStatus;
    }
    getId() {
        return this.userId;
    }
    getName() {
        return this.userName;
    }
    getContact() {
        return this.userContact;
    }
    getBorrowedBooks() {
        return this.borrowedBooks;
    }
    getStatus() {
        return this.userStatus;
    }
    addBorrowedBook(book) {
        this.borrowedBooks.push(book);
    }
    setStatus(status) {
        this.userStatus = status;
    }
}
class BorrowedBook {
    constructor(borrowerId, borrowedBookId, returnDueDate) {
        this.borrowerId = borrowerId;
        this.borrowedBookId = borrowedBookId;
        this.returnDueDate = returnDueDate;
    }
    getBorrowerId() {
        return this.borrowerId;
    }
    getBorrowedBookId() {
        return this.borrowedBookId;
    }
    getReturnDueDate() {
        return this.returnDueDate;
    }
}
class LibrarySystem {
    constructor() {
        this.bookList = [];
        this.userList = [];
    }
    addBook(book) {
        const exists = this.bookList.some(b => b.getId() === book.getId());
        if (exists) {
            console.log(`ID ${book.getId()} da ton tai`);
            return;
        }
        this.bookList.push(book);
        console.log(`Da them: ${book.getTitle()}`);
    }
    showBooks() {
        if (this.bookList.length === 0) {
            console.log("chua co sach");
            return;
        }
        this.bookList.forEach(book => {
            console.log(`ID: ${book.getId()}, title: ${book.getTitle()}, author: ${book.getAuthor()}, stock: ${book.getQuantity()}, status: ${book.getAvailability()}`);
        });
    }
    registerUser(id, name, contact) {
        if (this.userList.some(u => u.getId() === id)) {
            console.log(`ID ${id} da ton tai`);
            return;
        }
        const newUser = new LibraryUser(id, name, contact, "active");
        this.userList.push(newUser);
        console.log(`Da dang ky`);
    }
    blockUser(id) {
        const user = this.userList.find(u => u.getId() === id);
        if (!user) {
            console.log(`KO tim thay`);
            return;
        }
        user.setStatus("blocked");
        console.log(`Da khoa: ${user.getName()}`);
    }
    showUsers() {
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

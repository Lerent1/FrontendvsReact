class Books {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    layId() {
        return this.id;
    }
    layThongTin() {
        return `ID: ${this.id}, title: ${this.title}, author: ${this.author}`;
    }
    capNhatThongTin(newtitle, newAuthor) {
        this.title = newtitle;
        this.author = newAuthor;
    }
}
class libray {
    constructor() {
        this.danhSachSach = [];
    }
    addBook(sach) {
        this.danhSachSach.push(sach);
    }
    showBook() {
        if (this.danhSachSach.length === 0) {
            console.log("chua co sach");
        }
        else {
            this.danhSachSach.forEach((sach, i) => {
                console.log(`${i + 1}. ${sach.layThongTin()}`);
            });
        }
    }
    editId(id, newtitle, newAuthor) {
        const sachCanSua = this.danhSachSach.find((sach) => sach.layId() === id);
        if (sachCanSua) {
            sachCanSua.capNhatThongTin(newtitle, newAuthor);
            console.log(`Da sua`);
        }
        else {
            console.log(`ko tim thay`);
        }
    }
}
const thuVien = new libray();
const sach1 = new Books(1, "book1", "NgA");
const sach2 = new Books(2, "book2", "TranB");
thuVien.addBook(sach1);
thuVien.addBook(sach2);
thuVien.editId(2, "addBok", "TranC");
thuVien.showBook();

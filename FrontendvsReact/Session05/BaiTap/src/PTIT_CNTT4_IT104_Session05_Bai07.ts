class Books {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    public layId(): number {
        return this.id;
    }
    public layThongTin(): string {
        return `ID: ${this.id}, title: ${this.title}, author: ${this.author}`;
    }
    public capNhatThongTin(newtitle: string, newAuthor: string): void {
        this.title = newtitle;
        this.author = newAuthor;
    }
}

class libray {
    private danhSachSach: Books[] = [];
    public addBook(sach: Books): void {
        this.danhSachSach.push(sach);
    }
    public showBook(): void {
        if (this.danhSachSach.length === 0) {
        console.log("chua co sach");
        } else {
            this.danhSachSach.forEach((sach, i) => {
                console.log(`${i + 1}. ${sach.layThongTin()}`);
            });
        }
  }

  public editId(id: number, newtitle: string, newAuthor: string): void {
    const sachCanSua = this.danhSachSach.find((sach) => sach.layId() === id);

    if (sachCanSua) {
      sachCanSua.capNhatThongTin(newtitle, newAuthor);
      console.log(`Da sua`);
    } else {
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
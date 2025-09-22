class Book{
    id: number
    title: string
    author: string
    year: number
    constructor(id: number, title: string, author: string, year: number){
        this. id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

class Library <T extends {id: number, name: string}> {
    books: T[] = [];
    addBook(book: T): void {
        this.books.push(book);
    }
    getbookbyid(id: number): T | undefined{
        return this.books.find(item => item.id === id);
    }
    removeBookbyId(id: number): void {
        let index = this.books.findIndex(item => item.id === id);
        if(index == -1){
            console.log("khong co");
        } else {
            let confirmDelete = confirm(`Ban co muon xoa sach: ${this.books[index].name}`);
            if(confirmDelete){
                this.books.splice(index, 1);
            }
        }
    }
    updateBook(id: number, newBook: T): void {
        const search = this.books.findIndex(item => item.id == id);
        if(search == -1){
            console.log("Ko tim thay");
        } else {
            let update = confirm("Ban co muon cap nhat");
            if(update){
                this.books[search] = newBook;
                console.log("Sua thanh cong");
            }
        }
    }
}
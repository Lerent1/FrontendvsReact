class Member {
    constructor(name, contact) {
        this.borrowedItems = [];
        this.memberId = Member.upId++;
        this.name = name;
        this.contact = contact;
    }
    getDetails() {
        return `Id: ${this.memberId}, Name: ${this.name}, Contact: ${this.contact}, BorrowedItems: ${this.borrowedItems.map(i => i.title).join(", ")}`;
    }
}
Member.upId = 1;
class LibraryItem {
    constructor(title) {
        this.id = LibraryItem.upid++;
        this.title = title;
        this.isAvailable = true;
    }
    borrowItem() {
        return this.isAvailable = false;
    }
    returnItem() {
        return this.isAvailable = true;
    }
}
LibraryItem.upid = 1;
class Book extends LibraryItem {
    constructor(title, author) {
        super(title);
        this.author = author;
    }
    getLoanPeriod() {
        return 30;
    }
    calculateLateFee(daysOverdue) {
        return daysOverdue * 10000;
    }
    getItemType() {
        return "Book";
    }
}
class Magazine extends LibraryItem {
    constructor(title, issueNumber) {
        super(title);
        this.issueNumber = issueNumber;
    }
    getLoanPeriod() {
        return 7;
    }
    calculateLateFee(daysOverdue) {
        return daysOverdue * 5000;
    }
    getItemType() {
        return "Magazine";
    }
}
class Loan {
    constructor(member, item) {
        this.loanId = Loan.loanid++;
        this.member = member;
        this.item = item;
        this.isReturned = false;
        this.dueDate = new Date();
        this.dueDate.setDate(this.dueDate.getDate() + item.getLoanPeriod());
    }
    getDetails() {
        return `Member: ${this.member.name}, LoanId: ${this.loanId}, Item: ${this.item.title}, DueDate: ${this.dueDate.toLocaleDateString()}, IsReturned: ${this.isReturned}`;
    }
}
Loan.loanid = 1;
class Library {
    constructor() {
        this.items = [];
        this.members = [];
        this.loans = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    addMember(name, contact) {
        const newMember = new Member(name, contact);
        this.members.push(newMember);
    }
    borrowItem(memberId, itemId) {
        const member = this.members.find(m => m.memberId === memberId);
        const item = this.items.find(i => i.id === itemId);
        if (!member) {
            console.log("Member không tồn tại");
            return null;
        }
        if (!item || !item.isAvailable) {
            console.log("Item không khả dụng");
            return null;
        }
        item.borrowItem();
        member.borrowedItems.push(item);
        const loan = new Loan(member, item);
        this.loans.push(loan);
        return loan;
    }
    returnItem(itemId) {
        const loan = this.loans.find(l => l.item.id === itemId && !l.isReturned);
        if (!loan) {
            console.log("Không hợp lệ");
            return 0;
        }
        loan.isReturned = true;
        loan.item.returnItem();
        const today = new Date();
        const overdueDays = Math.max(Math.ceil((today.getTime() - loan.dueDate.getTime()) / (1000 * 60 * 60 * 24)), 0);
        const fee = loan.item.calculateLateFee(overdueDays);
        loan.member.borrowedItems = loan.member.borrowedItems.filter(i => i.id !== itemId);
        return fee;
    }
    listAvailableItems() {
        this.items.filter(i => i.isAvailable).forEach(i => console.log(`${i.id} - ${i.title} (${i.getItemType()})`));
    }
    listMemberLoans(memberId) {
        const member = this.members.find(m => m.memberId === memberId);
        if (!member)
            return;
        member.borrowedItems.forEach(i => console.log(`${i.id} - ${i.title} (${i.getItemType()})`));
    }
    calculateTotalLateFees() {
        return this.loans.reduce((sum, loan) => {
            if (loan.isReturned) {
                const overdueDays = Math.max(Math.ceil((new Date().getTime() - loan.dueDate.getTime()) / (1000 * 60 * 60 * 24)), 0);
                return sum + loan.item.calculateLateFee(overdueDays);
            }
            return sum;
        }, 0);
    }
    updateItemTitle(itemId, newTitle) {
        const index = this.items.findIndex(i => i.id === itemId);
        if (index !== -1)
            this.items[index].title = newTitle;
    }
    findEntityById(collection, id) {
        return collection.find(item => item.id === id || item.memberId === id);
    }
    getItemTypeCount() {
        const count = this.items.reduce((acc, item) => {
            acc[item.getItemType()] = (acc[item.getItemType()] || 0) + 1;
            return acc;
        }, {});
        console.log(count);
    }
}
const library = new Library();
library.addItem(new Book("Lập trình Java", "Nguyễn A"));
library.addItem(new Book("TypeScript Nâng Cao", "thi B"));
library.addItem(new Magazine("chill", 202));
library.addMember("Minh", "0123456789");
library.listAvailableItems();
console.log("\nMuon sach");
const loan1 = library.borrowItem(1, 1);
console.log(loan1);
const loan2 = library.borrowItem(2, 4);
console.log(loan2);
library.listAvailableItems();
library.listMemberLoans(2);
const fee1 = library.returnItem(1);
console.log(`Phi tra tre: ${fee1} VND`);
console.log(`${library.calculateTotalLateFees()} VND`);
library.getItemTypeCount();

class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.role = role;
        this.isLogin = false;
    }
    login(password) {
        if (password === this.password) {
            this.isLogin = true;
            console.log("Dang nhap thanh cong");
        }
        else {
            console.log("Sai mat khau");
        }
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log("Dang xuat thanh cong");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login(password) {
        if (this.status === "active") {
            super.login(password);
        }
        else if (this.status === "banned") {
            console.log("Tai khoan da bi khoa");
        }
    }
}
const acc1 = new userAcc(1, "nguyenvana", "123456", "user", "active");
const acc2 = new userAcc(2, "tranthib", "654321", "user", "banned");
acc1.login("123456");
acc1.logout();
acc2.login("654321");

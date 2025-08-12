class Accounts {
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
class userAccs extends Accounts {
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
class AdminAcc extends Accounts {
    constructor(id, userName, password, role) {
        super(id, userName, password, role);
    }
    banUser(user) {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị khóa`);
    }
}
const user1 = new userAccs(1, "Minh", "123", "user", "active");
const user2 = new userAccs(2, "Thang", "456", "user", "active");
const admin = new AdminAcc(99, "admin", "admin123", "admin");
user1.login("123");
admin.banUser(user2);
user2.login("456");

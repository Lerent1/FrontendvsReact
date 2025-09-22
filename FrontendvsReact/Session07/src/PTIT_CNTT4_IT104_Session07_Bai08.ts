class BankAcc {
    public id: number;
    protected bal: number;
    protected his: string[];
    protected status: string;
    constructor(id: number, bal = 0) {
        this.id = id;
        this.bal = bal;
        this.his = [];
        this.status = "Active";
    }
    deposit(a: number) { 
        this.bal += a; 
        this.his.push(`+${a}`); 
    }
    withdraw(a: number) { 
        this.bal -= a; 
        this.his.push(`-${a}`); 
    }
    showHistory() { 
        console.log(this.his); 
    }
}

class CheckingAcc extends BankAcc {
    overdraft: number;
    constructor(id: number, bal = 0, overdraft = 0) {
        super(id, bal);
        this.overdraft = overdraft;
    }
    withdraw(a: number) {
        if (this.bal - a >= -this.overdraft) {
            this.bal -= a;
            this.his.push(`-${a}`);
        } else {
            console.log("Qua han muc");
        }
    }
}

const tk1 = new CheckingAcc(1, 1000, 500);
tk1.deposit(200);
tk1.withdraw(1300);
tk1.withdraw(500);
tk1.showHistory();
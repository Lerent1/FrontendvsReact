class Acc {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;
    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "Active";
    }
    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nap: +${amount} | So du: ${this.balance}`);
        } else {
            console.log("Ko hop le");
        }
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rut: -${amount} | so du: ${this.balance}`);
        } else {
            console.log("KO hop le");
        }
    }
    showHistory(): void {
        console.log(`Lich su giao dich ${this.accountNumber}:`);
        this.history.forEach(h => console.log(h));
    }
}

class SavingAcc extends Acc {
    private interestRate: number;
    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rut: -${amount} | so du: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Ko the rut");
        } else {
            console.log("KO hop le");
        }
    }
}

const listt = new SavingAcc("ACC123", 1000, 0.05);
listt.deposit(500);
listt.withdraw(300);
listt.withdraw(1500);
listt.withdraw(1200);
listt.showHistory();
interface Product{
    name: string;
    price: number;
    getInfor(): string;
}

class A implements Product{
    name: string;
    price: number;
    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    }
    getInfor(): string {
        throw new Error("Method not implemented.");
    }
    getInfo(): string{
        return `thong tin ....`
    }
}
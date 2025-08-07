type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number;
};

const listProduct: Product[] = [
    {
        id: "P001",
        name: "Ao",
        price: 200000,
        category: { id: "C001", name: "Quan ao" },
        discount: 0.1
    },
    {
        id: "P002",
        name: "Giay vippro",
        price: 3000000,
        category: { id: "C002", name: "Giay dep" },
        discount: 0.2
    },
    {
        id: "P003",
        name: "Balo",
        price: 450000,
        category: { id: "C003", name: "Phu kien" },
    }
];

function getFinalPrice(product: Product): number {
    return product.discount ? product.price * (1 - product.discount) : product.price;
}

function printProductInfor(product: Product): void {
    console.log(`1. Ten: ${product.name}`);
    console.log(`2. Gia goc: ${product.price.toLocaleString()} VND`);
    if (product.discount) {
        console.log(`3. Gia sau giam: ${getFinalPrice(product).toLocaleString()} VND`);
    }
    console.log(`4. Danh mục: ${product.category.name}`);
}

listProduct.forEach(printProductInfor);
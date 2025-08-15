class Customer {
    constructor(name, email, shippingAddress) {
        this.id = Customer.CustomerId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `Name: ${this.name}, id: ${this.id}, email: ${this.email}, shippingAddress: ${this.shippingAddress}`;
    }
}
Customer.CustomerId = 1;
class Product {
    constructor(name, price, stock) {
        this.id = Product.productId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity) {
        if (quantity > this.stock) {
            console.log("Ko hop le");
        }
        else {
            this.stock -= quantity;
            console.log(`Da giam so luong ton kho, con ${this.stock}`);
        }
    }
    rerestocks(quantity) {
        this.stock += quantity;
        console.log(`Da tang so luong thanh ${this.stock}`);
    }
}
Product.productId = 1;
class ElectronicsProduct extends Product {
    constructor(name, price, stock, warrantyPeriod) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getProductInfo() {
        return `Id: ${this.id}, name: ${this.name}, price: ${this.price}, stock: ${this.stock}`;
    }
    getShippingCost(distance) {
        return 50000;
    }
    getCategory() {
        // return `Id: ${this.id}, name: ${this.name}, price: ${this.price}, stock: ${this.stock}, warrantyPeriod: ${this.warrantyPeriod}`
        return "Electronics";
    }
}
class ClothingProduct extends Product {
    constructor(name, price, stock, size, color) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getProductInfo() {
        return `Id: ${this.id}, name: ${this.name}, price: ${this.price}, stock: ${this.stock}`;
    }
    getShippingCost(distance) {
        return 25000;
    }
    getCategory() {
        // return `Id: ${this.id}, name: ${this.name}, price: ${this.price}, stock: ${this.stock}, size: ${this.size}, color: ${this.color}`
        return "Clothing";
    }
}
class Order {
    constructor(customer, products, totalAmount) {
        this.orderId = Order.upId++;
        this.customer = customer;
        this.products = products;
        this.totalAmount = totalAmount;
    }
    getDetails() {
        const productList = this.products
            .map(p => `${p.product.name} - so luong: ${p.quantity} - gia: ${p.product.price}`).join("\n");
        return `Id: ${this.orderId}, khach hang: ${this.customer.name}, email: ${this.customer.email},
         san pham: ${productList}, tong tien: ${this.totalAmount}`;
    }
}
Order.upId = 1;
class Store {
    constructor() {
        this.products = [];
        this.customers = [];
        this.orders = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    addCustomer(name, email, shippingAddress) {
        const newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
    }
    createOrder(customerId, productQuantities) {
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer) {
            console.log(`Khach hang khong ton tai`);
            return null;
        }
        const orderProducts = [];
        for (const item of productQuantities) {
            const product = this.products.find(p => p.id === item.productId);
            if (!product) {
                console.log(`San pham khong ton tai`);
                return null;
            }
            if (item.quantity <= 0) {
                console.log(`So luong ko hop le: ${item.quantity}`);
                return null;
            }
            if (item.quantity > product.stock) {
                console.log(`San pham ${product.name} chi con ${product.stock}`);
                return null;
            }
            product.sell(item.quantity);
            orderProducts.push({ product, quantity: item.quantity });
        }
        const totalAmount = orderProducts.reduce((sum, p) => sum + p.product.price * p.quantity, 0);
        const newOrder = new Order(customer, orderProducts, totalAmount);
        this.orders.push(newOrder);
        console.log(`Don hang ${newOrder.orderId} da tao thanh cong`);
        return newOrder;
    }
    cancelOrder(orderId) {
        const orderIndex = this.orders.findIndex(o => o.orderId === orderId);
        if (orderIndex === -1) {
            console.log(`Don hang khong ton tai`);
            return;
        }
        const order = this.orders[orderIndex];
        order.products.forEach(item => {
            item.product.stock += item.quantity;
            console.log(`San pham ${item.product.name} da duoc hoan tra`);
        });
        this.orders.splice(orderIndex, 1);
        console.log(`Don hang ${orderId} da huy thanh cong`);
    }
    listAvailableProducts() {
        const availableProducts = this.products.filter(p => p.stock > 0);
        if (availableProducts.length === 0) {
            console.log("Ko co san pham nao trong kho");
            return;
        }
        console.log("Danh sach san pham con hang la: ");
        availableProducts.forEach(p => {
            console.log(`Id: ${p.id}, ten: ${p.name}, gia: ${p.price}, ton kho: ${p.stock}`);
        });
    }
    listCustomerOrders(customerId) {
        const customer = this.customers.find(c => c.id === customerId);
        if (!customer) {
            console.log(`Khach hang ko ton tai`);
            return;
        }
        const customerOrders = this.orders.filter(o => o.customer.id === customerId);
        if (customerOrders.length === 0) {
            console.log(`Khach hang ${customer.name} chua co don nao`);
            return;
        }
        console.log(`Danh sach don hang cua ${customer.name} la:`);
        customerOrders.forEach(order => {
            console.log(order.getDetails());
        });
    }
    calculateTotalRevenue() {
        const totalRevenue = this.orders.reduce((sum, order) => sum + order.totalAmount, 0);
        console.log(`Tong doanh thu hien tai la: ${totalRevenue}`);
        return totalRevenue;
    }
    // Hmm
    countProductsByCategory() {
        const categoryMap = new Map();
        this.products.forEach(product => {
            const category = product.getCategory();
            categoryMap.set(category, (categoryMap.get(category) || 0) + 1);
        });
        console.log("So luong san pham theo danh muc la: ");
        categoryMap.forEach((count, category) => {
            console.log(`${category}: ${count}`);
        });
    }
    updateProductStock(productId, newStock) {
        const index = this.products.findIndex(p => p.id === productId);
        if (index === -1) {
            console.log(`San pham khong ton tai`);
            return;
        }
        if (newStock < 0) {
            console.log(`So luong khong hop le: ${newStock}`);
            return;
        }
        this.products[index].stock = newStock;
        console.log(`San pham ${this.products[index].name} Da duoc cap nhat thanh ${newStock}`);
    }
    getProductDetails(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) {
            console.log(`Không tìm thấy sản phẩm ID ${productId}`);
            return;
        }
        if (product instanceof ElectronicsProduct) {
            console.log(`Electronics - ${product.name}, Giá: ${product.price}, Tồn kho: ${product.stock}, Bảo hành: ${product.warrantyPeriod} tháng`);
        }
        else if (product instanceof ClothingProduct) {
            console.log(`Clothing - ${product.name}, Giá: ${product.price}, Tồn kho: ${product.stock}, Size: ${product.size}, Màu: ${product.color}`);
        }
    }
}
////////////////////////////////////////////////
const store = new Store();
store.addCustomer("Alice", "alice@gmail.com", "Hanoi");
store.addCustomer("Bob", "bob@gmail.com", "HCM");
store.addProduct(new ElectronicsProduct("Laptop Dell", 20000000, 10, 24));
store.addProduct(new ElectronicsProduct("Smartphone Samsung", 15000000, 15, 12));
store.addProduct(new ClothingProduct("T-Shirt", 200000, 50, "M", "Red"));
store.addProduct(new ClothingProduct("Jeans", 500000, 30, "L", "Blue"));
function mainMenu() {
    var _a;
    console.log(`===== MENU =====
1. Thêm khách hàng mới
2. Thêm sản phẩm mới
3. Tạo đơn hàng mới
4. Hủy đơn hàng
5. Hiển thị sản phẩm còn hàng
6. Danh sách đơn hàng của khách
7. Tính tổng doanh thu
8. Thống kê sản phẩm theo danh mục
9. Cập nhật tồn kho sản phẩm
10. Xem chi tiết khách hàng
11. Xem chi tiết sản phẩm
12. Thoát`);
    for (let choice = 1; choice <= 11; choice++) {
        console.log(`\n--- case ${choice} ---`);
        switch (choice) {
            case 1:
                console.log("Danh sách khách hàng:");
                store.customers.forEach(c => console.log(c.getDetails()));
                break;
            case 2:
                console.log("Danh sách sản phẩm:");
                store.products.forEach(p => console.log(p.getProductInfo()));
                break;
            case 3:
                store.createOrder(1, [
                    { productId: 1, quantity: 1 },
                    { productId: 3, quantity: 2 }
                ]);
                break;
            case 4:
                if (store.orders.length > 0)
                    store.cancelOrder(store.orders[0].orderId);
                else
                    console.log("Chưa có đơn hàng nào để hủy!");
                break;
            case 5:
                store.listAvailableProducts();
                break;
            case 6:
                store.listCustomerOrders(1);
                break;
            case 7:
                store.calculateTotalRevenue();
                break;
            case 8:
                store.countProductsByCategory();
                break;
            case 9:
                store.updateProductStock(1, store.products.find(p => p.id === 1).stock + 5);
                store.updateProductStock(3, store.products.find(p => p.id === 3).stock + 10);
                break;
            case 10:
                console.log("Tìm kiếm khách hàng: Alice");
                console.log((_a = store.customers.find(c => c.name === "Alice")) === null || _a === void 0 ? void 0 : _a.getDetails());
                break;
            case 11:
                console.log("Nhập ID sản phẩm muốn xem chi tiết:");
                const productId = 1;
                store.getProductDetails(productId);
                break;
        }
    }
    console.log("\n--- Thoat chuong trinh thanh cong ---");
}
mainMenu();

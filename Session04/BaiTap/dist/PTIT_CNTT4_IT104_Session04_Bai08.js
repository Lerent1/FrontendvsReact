const calculateOrderTotal = (order) => order.items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);
const printOrder = (order) => {
    console.log(`Don hang: #${order.orderId}`);
    console.log(`Khach hang: ${order.customerName}`);
    console.log("San pham:");
    order.items.forEach(({ product, quantity }) => console.log(`- ${product.name} x ${quantity} => ${(product.price * quantity).toLocaleString()} VND`));
    console.log(`Tong: ${calculateOrderTotal(order).toLocaleString()} VND`);
    if (order.note)
        console.log(`Ghi chu: ${order.note}`);
};
const shirt = { id: 'P001', name: 'Ao skibidi', price: 1000000 };
const order = {
    orderId: 'ORD001',
    customerName: 'Tuan Minh',
    items: [
        { product: shirt, quantity: 2 },
    ],
    note: 'Giao sau 1p'
};
printOrder(order);

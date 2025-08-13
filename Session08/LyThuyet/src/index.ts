// generic
// Giup viet ma linh hoat, tai su dung cao

function generic<T>(param: T): T {
    return param
}
generic("1");
generic(1);
generic(true);

// 1. Kieu mang
let numbers: number[] = [1, 2, 3, 4, 5];
let number1: Array<number> = [3, 4, 5, 6];
let studentT: Array<string> = ["Minh"];

// 2. Kieu Record (mo ta kieu du lieu cua key va value)
const userInfo: Record<string, string | number> = {
    name: "Minh",
    age: 19
}

// 3. Kieu Partial (kieu tuy chon)
interface Contact{
    email: string,
    phone: number
}
const partitaUsers: Partial<Contact> = {
    email: "minh@gmail.com",
}

// 4. Kieu Readonly (chi doc, hien thi khong duoc cap nhat, chinh sua)
interface Score{
    math: number,
    physic: number
}
const score1: Readonly<Score> = {
    math: 10,
    physic: 10
}

// 5. Kieu Pick
interface User{
    id: string,
    name: string,
    email: string,
    address: string
}
let user1: Pick<User, "name" | "id"> = {
    name: "Minh",
    id: "123"
}

// 6. Kieu Omit (loai bo mot so key khong can thiet)
let user2: Omit<User, "address"> = {
    id: "123",
    name: "Minh",
    email: "minh@gmail.com"
}
function getDataFromPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API tải lên giao diện thành công");
            resolve(); // báo hoàn thành
        }, 2000);
    });
}

function getDataFromPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API2 tải lên giao diện thành công");
            resolve();
        }, 2000);
    });
}

function getDataFromPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Lấy dữ liệu từ API3 tải lên giao diện thành công");
            resolve();
        }, 2000);
    });
}

function runAPITask() {
    getDataFromPI()
        .then(() => getDataFromPI2())
        .then(() => getDataFromPI3())
        .then(() => console.log("Tất cả API đã tải xong"))
        .catch((error) => {
            console.log("Có lỗi xảy ra: ", error);
        });
}

async function runAll() {
    try {
        await getDataFromPI();
        await getDataFromPI();
        await getDataFromPI();
    } catch (error) {
        console.log(error);
    }
}
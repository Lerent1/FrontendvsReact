function handleUnionType(value) {
    if (typeof value === "string") {
        console.log(`${value.length} ky tu`);
    }
    else if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log("So chan");
        }
        else {
            console.log("So le");
        }
    }
    else {
        console.log("Khong hop le");
    }
}
handleUnionType("demo123");
handleUnionType(10);

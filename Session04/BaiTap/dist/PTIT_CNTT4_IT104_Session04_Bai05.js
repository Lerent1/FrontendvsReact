function printStaffInfo(staff) {
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`);
}
const staff = {
    name: "Tuan Minh",
    age: 19,
    employeeId: "EMP167",
    department: "Dev",
};
printStaffInfo(staff);

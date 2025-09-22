interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: string;
    department: string;
}

type StaffMember = Person & Employee;

function printStaffInfo(staff: StaffMember): void {
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`);
}

const staff: StaffMember = {
    name: "Tuan Minh",
    age: 19,
    employeeId: "EMP167",
    department: "Dev",
};

printStaffInfo(staff);
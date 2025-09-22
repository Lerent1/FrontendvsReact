import React from "react";

class Account {
  fullname: string;
  ngaysinh: string;
  gender: string;
  address: string;
  constructor(fullname: string, ngaysinh: string, gender: string, address: string) {
    this.fullname = fullname;
    this.ngaysinh = ngaysinh;
    this.gender = gender;
    this.address = address;
  }
}

export default function ListAcc() {
  const accountList: Account[] = [
    new Account("Nguyen Van A", "22/02/2020", "Nam", "Ha DOng, Ha Noi"),
    new Account("Nguyen Van B", "22/02/2020", "Nam", "Ha DOng, Ha Noi"),
  ];

  return (
    <div>
      <div>
        <div style={{
          width: "80%",
          background: "white",
          padding: "20px",
        }}>
          <div></div>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>STT</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Ho va ten</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Ngay sinh</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Gioi tinh</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>Dia chi</th>
                <th style={{ border: "1px solid black", padding: "8px" }} colSpan={2}>Hanh dong</th>
              </tr>
            </thead>
            <tbody>
              {accountList.map((account, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{index + 1}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{account.fullname}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{account.ngaysinh}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{account.gender}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>{account.address}</td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    <button style={{ backgroundColor: "green", color: "white", borderRadius: "4px", padding: "5px 10px" }}>Sửa</button>
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    <button style={{ backgroundColor: "red", color: "white", borderRadius: "4px", padding: "5px 10px" }}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
import React from "react";

export default function FormatName() {
  const user = {
    firstName: "Nguyen Van",
    lastName: "Nam",
  };

  return (
    <div>
      <h1>Thong tin nguoi dung</h1>
      <p>Ho va ten: <b>{`${user.firstName} ${user.lastName}`}</b></p>
    </div>
  );
}
import React, { useState } from "react";

export default function ShowName() {
  const [name, setName] = useState<string>("Nguyen Tuan Minh");

  return (
    <div>
      <p>Ho va ten: {name}</p>
    </div>
  );
}

import React, { useState } from "react";
import Children from "./Children";

export default function Parent() {
  const [product] = useState({
    id: 1,
    name: "Buoi ba roi",
    price: "12.000",
    quantity: 6,
  });

  return (
    <div>
      <Children product={product} />
    </div>
  );
}
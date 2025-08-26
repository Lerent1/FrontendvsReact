import React, { useState } from "react";

export default function City() {
  const [city, setCity] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <p>Thanh pho: {city}</p>
      <select name="" id="" value={city} onChange={handleChange}>
        <option value="">-- Chon thanh pho --</option>
        <option value="Ha Noi">Ha Noi</option>
        <option value="Ha Nam">Ha Nam</option>
        <option value="Ninh Binh">Ninh Binh</option>
        <option value="Thanh Hoa">Thanh Hoa</option>
        <option value="Nghe An">Nghe An</option>
      </select><br /><br />
    </div>
  );
}
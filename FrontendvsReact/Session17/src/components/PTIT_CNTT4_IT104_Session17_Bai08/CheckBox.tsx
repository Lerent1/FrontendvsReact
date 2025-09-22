import React, { useState } from "react";

export default function Checkbox() {
  const [selected, setSelected] = useState<string[]>([]);
  const options = ["Di choi", "Code", "Boi loi", "Nhay day"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <p>So thich: [<span>{selected.join(", ")}</span>]</p>
      {options.map((option, index) => (
        <div key={index}>
          <input type="checkbox" value={option} checked={selected.includes(option)} onChange={handleChange}/>
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
}
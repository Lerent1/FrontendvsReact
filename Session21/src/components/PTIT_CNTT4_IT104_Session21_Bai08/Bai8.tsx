import React from 'react'

export default function Bai8() {
  const numbers = ["01", "02", "03"];
  const layouts = [
    "flex gap-[10px]",
    "flex gap-[10px] justify-end",
    "flex gap-[10px] justify-center",
    "flex justify-between",
    "flex gap-[10px] justify-around",
    "flex gap-[10px] justify-evenly",
  ];

  return (
    <div>
      {layouts.map((layout, number) => (
        <div key={number} className={`w-[600px] h-[50px] border rounded-[8px] border-gray-300 ${layout}`}>
          {numbers.map((index) => (
            <div key={index} className="h-full w-[50px] flex items-center justify-center text-white rounded-[6px] bg-blue-500">
              {index}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
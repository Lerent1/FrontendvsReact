import React, { useState } from "react";

export default function CounText() {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea name="" id="" value={text} onChange={handleChange}></textarea>
      <p>So ky tu: {text.length}</p>
    </div>
  );
}
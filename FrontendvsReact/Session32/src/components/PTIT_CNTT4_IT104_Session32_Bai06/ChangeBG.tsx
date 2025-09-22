import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ChangeBG() {
  const dispatch = useDispatch();
  const result = useSelector((data: any) => data.bai6.color);

  return (
    <div style={result ? { backgroundColor: "black", color: "white"} : { backgroundColor: "white", color: "black"}}>
      <label> {result ? "Toi" : "Sang"} </label><br />
      <button onClick={() => dispatch({ type: "changeColor" })}>
        Thay doi
      </button>
    </div>
  );
}
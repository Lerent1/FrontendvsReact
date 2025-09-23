import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { color } from '../store/slices/colorSlice';

export default function ChangeColor() {
    const result = useSelector((data: any) =>{
        return data.color;
    });
    const dispatch=useDispatch();
    
  return (
    <div style={result ? {backgroundColor: "white", width: "100px", height: "100px"} : {backgroundColor: "black", width: "100px", height: "100px"}}>
        <br />
      <button style={result ? {backgroundColor: "transparent", border: "1px solid black", color: 'black'} : {backgroundColor: "transparent", border: "1px solid white", color: "white"}} onClick={()=>dispatch(color.switchMode())}>
        {result ? "Light" : "Dark"}
    </button>
    </div>
  )
}
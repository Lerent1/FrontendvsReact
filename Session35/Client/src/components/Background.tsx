import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { background } from '../store/slices/backgroundSlice';

export default function Background() {
    const result = useSelector((data: any) =>{
        return data.background;
    });
    const dispatch=useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(background.switchMode())}>{result ? "List mode" : "Grid mode"}</button>
      <div style={result ? {display: "flex", textAlign: "center", flexDirection: "column", gap: "15px"} : {display: "flex", textAlign: "center", flexDirection: "row", gap: "15px"}}>
        <div style={{backgroundColor: "pink", width: "200px", height: "40px"}}>1</div>
        <div style={{backgroundColor: "pink", width: "200px", height: "40px"}}>2</div>
        <div style={{backgroundColor: "pink", width: "200px", height: "40px"}}>3</div>
        <div style={{backgroundColor: "pink", width: "200px", height: "40px"}}>4</div>
        <div style={{backgroundColor: "pink", width: "200px", height: "40px"}}>5</div>
      </div>
    </div>
  )
}
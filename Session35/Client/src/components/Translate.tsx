import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { translate } from '../store/slices/translateSlice';

export default function Translate() {
    const result = useSelector((data: any) =>{
        return data.translate;
    });
    const dispatch=useDispatch();
  return (
    <div>
      <select onChange={()=>dispatch(translate.switchMode())}>
        <option value="1">English</option>
        <option value="2">Vietnamese</option>
      </select>
      <h2>{result ? "Rikkei Academy" : "Hoc vien Rikkei"}</h2>
    </div>
  )
}
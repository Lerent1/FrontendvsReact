import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Couter() {
    const result = useSelector((data: any) =>{
        return data.bai3.counter;
    })
    const dispatch=useDispatch();

  return (
    <div>
      <h1>Counter: {result}</h1>
      <button onClick={()=>dispatch({type: "INCREASE"})}> Tang </button> &nbsp;
      <button onClick={()=>dispatch({type: "DECREASE"})}> Giam </button>
    </div>
  )
}
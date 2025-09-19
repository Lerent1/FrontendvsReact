import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function RandomNumber() {
    const dispatch = useDispatch();
    const result = useSelector((data: any)=>{
        return data.bai4.numbers
    })

  return (
    <div>
      <h1>[{result.join(", ")}]</h1>
      <button onClick={() => dispatch({type: "RANDOM"})}>Generate random number</button>
    </div>
  )
}
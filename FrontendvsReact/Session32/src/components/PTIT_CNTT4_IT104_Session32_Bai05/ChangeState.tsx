import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ChangeState() {
    const dispatch = useDispatch();
    const result = useSelector((data: any)=>{
        return data.bai5.change;
    })
  return (
    <div>
      <h1>{result? "RikkeiSoft" : "Rikkei Academy"}</h1>
      <button onClick={()=>dispatch({type: "CHANGE"})}>Change state</button>
    </div>
  )
}
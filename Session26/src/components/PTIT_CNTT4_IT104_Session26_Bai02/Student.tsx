import React from 'react'
import { useParams } from "react-router-dom"

export default function Student() {
    const param=useParams();
  return (
    <div>
      <p>Name={param.studentName}</p>
    </div>
  )
}
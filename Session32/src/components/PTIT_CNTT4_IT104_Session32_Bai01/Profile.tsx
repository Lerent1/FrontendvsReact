import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
    const result = useSelector((data: any) =>{
        return data.bai1.user;
    })
  return (
    <div>
        <h2>Thong tin ca nhan</h2>
        <p>Id: {result.id}</p>
        <p>Name: {result.name}</p>
        <p>Gender: {result.gender}</p>
        <p>Date: {result.date}</p>
        <p>Adress: {result.address}</p>
    </div>
  )
}
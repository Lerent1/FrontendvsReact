import React from 'react'
import { useSelector } from 'react-redux';

export default function ListUser() {
    const result = useSelector((data: any) =>{
        return data.bai2.user;
    })
  return (
    <div>
      <table border={1}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Ten</th>
                <th>Gioi tinh</th>
                <th>Ngay sinh</th>
                <th>Dia chi</th>
                <th>Hanh dong</th>
            </tr>
        </thead>
        <tbody>
            {result.map((item: any, index: number) =>{
                return <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.gender}</td>
                    <td>{item.date}</td>
                    <td>{item.address}</td>
                    <td>
                        <button>Sua</button> 
                        <button>Xoa</button>
                    </td>
                </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}
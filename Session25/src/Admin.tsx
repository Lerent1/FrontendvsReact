import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div>
      <h1>Trang quan ly</h1>
      <NavLink to="/admin/user">Quan ly nguoi dung</NavLink><br />
      <NavLink to="/admin">Quan ly san pham</NavLink><br />
      <NavLink to="">Quan ly hoa don</NavLink><br />
      <div className='header'>
        Phan dau
      </div>
      <Outlet></Outlet><br />
      <div className='footer'>
        Phan cuoi
      </div>
    </div>
  )
}

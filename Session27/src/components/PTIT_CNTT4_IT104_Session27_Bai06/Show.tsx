import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Show() {
  return (
    <div>
      <NavLink to = {"/show"}>Home</NavLink> &nbsp; | &nbsp; 
      <NavLink to = {"/show/detail"}>Detail</NavLink> &nbsp; |  &nbsp; 
      <NavLink to = {"/show/product"}>Product</NavLink>
      <Outlet></Outlet>
    </div>
  )
}
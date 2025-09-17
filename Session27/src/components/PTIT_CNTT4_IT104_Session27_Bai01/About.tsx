import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <nav>
            <Link to = "/">Home</Link> &nbsp;
            <Link to = "/about">About</Link> &nbsp;
            <Link to = "/contact">Contact</Link> &nbsp;
        </nav>
      <h2>Gioi thieu ban than</h2>
      <p>Toi ten la: Nguyen Tuan Minh</p>
      <p>So thichs: ....</p>
      <p>Muc tieu: Tro thanh mot lap trinh vien xuat sac va tao ra nhieu san pham gia tri</p>
    </div>
  )
}
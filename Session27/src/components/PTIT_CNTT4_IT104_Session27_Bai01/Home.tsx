import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <nav>
            <Link to = "/">Home</Link> &nbsp;
            <Link to = "/about">About</Link> &nbsp;
            <Link to = "/contact">Contact</Link> &nbsp;
        </nav>
      <h2>Chào mừng bạn đến với ứng dụng giới thiệu bản thân của tôi!</h2>
    </div>
  )
}

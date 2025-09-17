import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
        <nav>
            <Link to = "/">Home</Link> &nbsp;
            <Link to = "/about">About</Link> &nbsp;
            <Link to = "/contact">Contact</Link> &nbsp;
        </nav>
      <h2>Thong tin lien he</h2>
      <p><b>Email</b>: minh...@gmail.com</p>
      <p><b>So dien thoai</b>: 08 .... 96</p>
      <p><b>Linkdie</b>: <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fjbagy.me%2Fmeme-meo-cuoi-deu-haha-nhech-mep-chi-tay-nham-hiem%2F%3Fsrsltid%3DAfmBOoonnw8WY5WDJJMlHixmzJbaPeCg8t1_kvRtK33CWYZcrOWt5wBJ&psig=AOvVaw2W3sC2AlOyxjDNpduYlpcj&ust=1757658581598000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKC3xsyK0I8DFQAAAAAdAAAAABAL">
        link
      </a></p>
    </div>
  )
}
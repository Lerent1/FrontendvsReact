import React, { useEffect, useState } from 'react'

export default function PageTitle() {
    const [title, setTitle] = useState('');
    useEffect (() => {
        document.title = title;
    })

  return (
    <div>
      <h2>Chao mung ban den voi trang cua chung toi</h2>
      <input type="text" onChange={(e) => setTitle(e.target.value)}/>
      <p>ten trang se thay doi khi ban nhap ten vao truong ten</p>
    </div>
  )
}

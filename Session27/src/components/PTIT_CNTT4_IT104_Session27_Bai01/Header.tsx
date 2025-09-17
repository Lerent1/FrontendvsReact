import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default function Header() {
  const routers = createBrowserRouter([
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ])
  
    return (
      <>
        <RouterProvider router = {routers}></RouterProvider>
      </>
    )
}

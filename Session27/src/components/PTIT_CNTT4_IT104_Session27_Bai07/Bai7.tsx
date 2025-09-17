import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './NotFound'
import About2 from './About2'
import House from './House'

export default function Bai7() {
  const routers = createBrowserRouter([
    {
        path: "/house",
        element: <House></House>,
    },
    {
        path: "/about2",
        element: <About2></About2>,
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
    },
  ])
      
    return (
        <>
          <RouterProvider router = {routers}></RouterProvider>
        </>
    )
}
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home2 from './Home2'
import Product from './Product'
import Detail from './Detail'
import Show from './Show'

export default function Bai6() {
  const routers = createBrowserRouter([
    {
        path: "/show",
        element: <Show></Show>,
        children: [
          {
            index: true,
            element: <Home2></Home2>
          },
          {
            path: "product",
            element: <Product></Product>
          },
          {
            path: "detail",
            element: <Detail></Detail>
          }
        ]
    }
  ])
      
    return (
        <>
          <RouterProvider router = {routers}></RouterProvider>
        </>
    )
}

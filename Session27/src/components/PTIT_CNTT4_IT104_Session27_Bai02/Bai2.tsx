import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'

export default function Bai2() {
  const routers = createBrowserRouter([
      {
        path: "/productlist",
        element: <ProductList></ProductList>
      },
      {
        path: "/productlist/:id",
        element: <ProductDetail></ProductDetail>
      }
    ])
    
    return (
      <>
        <RouterProvider router = {routers}></RouterProvider>
      </>
    )
}
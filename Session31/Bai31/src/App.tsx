import { useState } from 'react'
import { Router, RouterProvider } from 'react-router-dom'
import { routers } from "./router/Router"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <RouterProvider router = {routers}></RouterProvider>
    </>
  )
}

export default App

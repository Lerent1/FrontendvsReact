import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/PTIT_CNTT4_IT104_Session25_Bai01/Contact'
import Notfound from './Notfound'
import Text from './components/PTIT_CNTT4_IT104_Session25_Bai02/Text'
import Login from './components/PTIT_CNTT4_IT104_Session25_Bai03/Login'
import Register from './components/PTIT_CNTT4_IT104_Session25_Bai04/Register'
import NotFound from './components/PTIT_CNTT4_IT104_Session25_Bai05/NotFound'
import Show from './components/PTIT_CNTT4_IT104_Session25_Bai06/Show'
import Home from './components/PTIT_CNTT4_IT104_Session25_Bai06/Home'
import Product from './components/PTIT_CNTT4_IT104_Session25_Bai06/Product'
import Detail from './components/PTIT_CNTT4_IT104_Session25_Bai06/Detail'
import CustomLink from './components/PTIT_CNTT4_IT104_Session25_Bai07/CustomLink'
import HomePage from './components/PTIT_CNTT4_IT104_Session25_Bai07/HomePage'
import ListUser from './components/PTIT_CNTT4_IT104_Session25_Bai08/ListUser'
import UserDetail from './components/PTIT_CNTT4_IT104_Session25_Bai08/UserDetail'
import ProtectedRoute from './ProtectedRoute'

function App() {
  const routers = createBrowserRouter([
    {
      path: "/admin",
      element: <ProtectedRoute></ProtectedRoute>
    },
    {
      // Bai 1
      path: "/contact",
      element: <Contact></Contact>
    },
    {
      // Bai 2
      path: "/text",
      element: <Text></Text>
    },
    {
      path: "",
      element: <Notfound></Notfound>
    },
    {
      // Bai 3
      path: "/login",
      element: <Login></Login>
    },
    {
      // Bai 4
      path: "/register",
      element: <Register></Register>
    },
    {
      // Bai 5 (bai 7)
      path: "*",
      element: <NotFound></NotFound>
    },
    {
      // bai 6
      path: "/show",
      element: <Show></Show>,
      children: [
        {
          path: "home",
          element: <Home></Home>
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
    },
    {
      // Bai 7
      path: "/customlink",
      element: <CustomLink></CustomLink>
    },
    {
      // Bai 7
      path: "/homepage",
      element: <HomePage></HomePage>
    },
    {
    path: "/list",
    element: <ListUser></ListUser>
  },
  {
    path: "/user/:id",
    element: <UserDetail></UserDetail>
  },
  ])

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetail from './components/PTIT_CNTT4_IT104_Session26_Bai01/ProductDetail'
import Bai3 from './components/PTIT_CNTT4_IT104_Session26_Bai03/Bai3'
import Bai4 from './components/PTIT_CNTT4_IT104_Session26_Bai04/Bai4'
import PrivateRouter from './components/PTIT_CNTT4_IT104_Session26_Bai05/PrivateRouter'
import Login from './components/PTIT_CNTT4_IT104_Session26_Bai05/Login'
import Account from './components/PTIT_CNTT4_IT104_Session26_Bai05/Account'
import Student from './components/PTIT_CNTT4_IT104_Session26_Bai02/Student'
import Teams from './PTIT_CNTT4_IT104_Session26_Bai07/Teams'
import TeamIndex from './PTIT_CNTT4_IT104_Session26_Bai07/TeamIndex'
import Team from './PTIT_CNTT4_IT104_Session26_Bai07/Team'
import Login2 from './components/PTIT_CNTT4_IT104_Session26_Bai06/Login2'
import List from './components/PTIT_CNTT4_IT104_Session26_Bai10/List'
import Detail from './components/PTIT_CNTT4_IT104_Session26_Bai10/Detail'
// import './App.css'

function App() {
  const routers = createBrowserRouter([
    {
      // Bai 1
      path: "/product/:id",
      element: <ProductDetail></ProductDetail>
    },
    {
      // Bai 2
      path: "/student/:studentName",
      element: <Student></Student>
    },
    {
      // Bai 3
      path: "/bai3",
      element: <Bai3></Bai3>
    },
    {
      // Bai 4
      path: "/bai4",
      element: <Bai4></Bai4>
    },
    {
      // Bai 5 ( bai 6 )
      path: "/account",
      element: <PrivateRouter element={<Account></Account>}></PrivateRouter>
    },
    {
      // Bai 5
      path: "/login",
      element: <Login></Login>
    },
    {
      // Bai 7
      path: "/teams",
      element: <Team></Team>,
      children: [
        {
          index: true,
          element: <TeamIndex></TeamIndex>
        },
        {
          path: ":teamid",
          element: <Team></Team>
        }
      ]
    },
    {
      // Bai 6
      path: "/login2",
      element: <Login2></Login2>
    },
    {
      path: "/list",
      element: <List></List>
    },
    {
      path: "/list/:index",
      element: <Detail></Detail>
    }
  ])

  return (
    <>
    <RouterProvider router = {routers}></RouterProvider>      
    </>
  )
}

export default App

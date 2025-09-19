import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Profile from './components/PTIT_CNTT4_IT104_Session32_Bai01/Profile'
import ListUser from './components/PTIT_CNTT4_IT104_Session32_Bai02/ListUser'
import Couter from './components/PTIT_CNTT4_IT104_Session32_Bai03/Counter'
import RandomNumber from './components/PTIT_CNTT4_IT104_Session32_Bai04/RandomNumber'
import ChangeState from './components/PTIT_CNTT4_IT104_Session32_Bai05/ChangeState'
import ChangeBG from './components/PTIT_CNTT4_IT104_Session32_Bai06/ChangeBG'
import Register from './components/PTIT_CNTT4_IT104_Session32_Bai07/Register'
import Login from './components/PTIT_CNTT4_IT104_Session32_Bai08/Login'

function App() {

  return (
    <>
      <Profile></Profile>
      <ListUser></ListUser>
      <Couter></Couter>
      <RandomNumber></RandomNumber>
      <ChangeState></ChangeState>
      <ChangeBG></ChangeBG>
      <Register></Register>
      <Login></Login>
    </>
  )
}

export default App

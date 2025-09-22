import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import SubjectList from './components/PTIT_CNTT4_IT104_Session16_Bai01/SubjectList'
import Login from './components/PTIT_CNTT4_IT104_Session16_Bai02/Login'
import ColorButton from './components/PTIT_CNTT4_IT104_Session16_Bai03/ColorButton'
import ClickCounter from './components/PTIT_CNTT4_IT104_Session16_Bai04/ClickCounter'
import UserForm from './components/PTIT_CNTT4_IT104_Session16_Bai05/UserForm'
import ThemeSwitcher from './components/PTIT_CNTT4_IT104_Session16_Bai06/ThemeSwitcher'
import Product from './components/PTIT_CNTT4_IT104_Session16_Bai08/Product'
import List from './components/PTIT_CNTT4_IT104_Session16_Bai07/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SubjectList></SubjectList>
      <Login></Login>
      <ColorButton></ColorButton>
      <ClickCounter></ClickCounter>
      <UserForm></UserForm>
      <ThemeSwitcher></ThemeSwitcher>
      <List></List>
      <Product></Product>
    </>
  )
}

export default App

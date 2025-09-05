import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './Todolist'
import Luyentap from './Luyentap'
import List from './components/PTIT_CNTT4_IT104_Session22_Bai09/List'
import Manage from './components/PTIT_CNTT4_IT104_Session22_Bai10/Manage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List></List>
      <Manage></Manage>
    </>
  )
}

export default App

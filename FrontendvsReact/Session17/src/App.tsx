import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShowName from './components/PTIT_CNTT4_IT104_Session17_Bai01/ShowName'
import ShowProduct from './components/PTIT_CNTT4_IT104_Session17_Bai02/ShowProduct'
import ChangeColor from './components/PTIT_CNTT4_IT104_Session17_Bai03/ChangeColor'
import Toggle from './components/PTIT_CNTT4_IT104_Session17_Bai04/Toggle'
import Form from './components/PTIT_CNTT4_IT104_Session17_Bai05/Form'
import CounText from './components/PTIT_CNTT4_IT104_Session17_Bai06/CounText'
import City from './components/PTIT_CNTT4_IT104_Session17_Bai07/City'
import Checkbox from './components/PTIT_CNTT4_IT104_Session17_Bai08/CheckBox'
import List from './components/PTIT_CNTT4_IT104_Session17_Bai09/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShowName></ShowName>
      <ShowProduct></ShowProduct>
      <ChangeColor></ChangeColor>
      <Toggle></Toggle>
      <Form></Form>
      <CounText></CounText>
      <City></City>
      <Checkbox></Checkbox>
      <List></List>
    </>
  )
}

export default App

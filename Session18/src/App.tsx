import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserReducer from './UserReducer'
import Todos from './Todos'
import Increase from './components/PTIT_CNTT4_IT104_Session18_Bai01/Increase'
import UserList from './components/PTIT_CNTT4_IT104_Session18_Bai02/UserList'
import LoginForm from './components/PTIT_CNTT4_IT104_Session18_Bai03/LoginForm'
import ColorPicker from './components/PTIT_CNTT4_IT104_Session18_Bai04/ColorPicker'
import Gender from './components/PTIT_CNTT4_IT104_Session18_Bai06/Gender'
import InputText from './components/PTIT_CNTT4_IT104_Session18_Bai05/InputText'
import List from './components/PTIT_CNTT4_IT104_Session18_Bai07/List'
import ListDelete from './components/PTIT_CNTT4_IT104_Session18_Bai08/ListDelete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Increase></Increase>
      <UserList></UserList>\
      <LoginForm></LoginForm>
      <ColorPicker></ColorPicker>
      <InputText></InputText>
      <Gender></Gender>
      <List></List>
      <ListDelete></ListDelete>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CheckSize from './components/PTIT_CNTT4_IT104_Session20_Bai01/CheckSize'
import UserProfile from './components/PTIT_CNTT4_IT104_Session20_Bai02/UserProfile'
import Welcome from './components/PTIT_CNTT4_IT104_Session20_Bai03/Welcome'
import PageTitle from './components/PTIT_CNTT4_IT104_Session20_Bai04/PageTitle'
import Timer from './components/PTIT_CNTT4_IT104_Session20_Bai05/Timer'
import Modal from './components/PTIT_CNTT4_IT104_Session20_Bai06/Modal'
import Counter from './components/PTIT_CNTT4_IT104_Session20_Bai07/Counter'
import UserForm from './components/PTIT_CNTT4_IT104_Session20_Bai08/UserForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CheckSize></CheckSize>
      <UserProfile></UserProfile>
      <Welcome></Welcome>
      <PageTitle></PageTitle>
      <Timer></Timer>
      <Modal></Modal>
      <Counter></Counter>
      <UserForm></UserForm>
    </>
  )
}

export default App

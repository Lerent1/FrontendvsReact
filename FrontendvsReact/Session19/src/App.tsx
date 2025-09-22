import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ShoppingCart from './components/PTIT_CNTT4_IT104_Session19_Bai01/ShoppingCart'
import RenderCounter from './components/PTIT_CNTT4_IT104_Session19_Bai03/RenderCounter'
import Register from './components/PTIT_CNTT4_IT104_Session19_Bai04/Register'
import RandomQuote from './components/PTIT_CNTT4_IT104_Session19_Bai05/RandomQuote'
import KeyTracker from './components/PTIT_CNTT4_IT104_Session19_Bai06/KeyTracker'
import ScrollToSection from './components/PTIT_CNTT4_IT104_Session19_Bai07/ScrollToSection'
import Login from './components/PTIT_CNTT4_IT104_Session19_Bai08/Login'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoppingCart></ShoppingCart>
      <RenderCounter></RenderCounter>
      <Register></Register>
      <RandomQuote></RandomQuote>
      <KeyTracker></KeyTracker>
      <ScrollToSection></ScrollToSection>
      <Login></Login>
    </>
  )
}

export default App

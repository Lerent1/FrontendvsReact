import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Hackathon06 from './components/Hackathon06'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Hackathon06></Hackathon06>
    </div>
  )
}

export default App

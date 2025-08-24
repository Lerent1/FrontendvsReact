import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ChangeColor from './components/PTIT_CNTT4_IT104_Session15_Bai02/ChangeColor.tsx'
import Date from './components/PTIT_CNTT4_IT104_Session15_Bai03/Date.tsx'
import Ex4 from './components/PTIT_CNTT4_IT104_Session15_Bai04/Ex4.tsx'
import ListPost2 from './components/PTIT_CNTT4_IT104_Session15_Bai06/ListPost2.tsx'
import Clock from './components/PTIT_CNTT4_IT104_Session15_Bai07/Clock.tsx'
import Counter from './components/PTIT_CNTT4_IT104_Session15_Bai08/Counter.tsx'
import Email from './components/PTIT_CNTT4_IT104_Session15_Bai01/Email.tsx'
import ReactJS from './components/PTIT_CNTT4_IT104_Session15_Bai09/ReactJS.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Email></Email>
    <ChangeColor></ChangeColor>
    <Date></Date>
    <Ex4></Ex4>
    <ListPost2></ListPost2>
    <Clock></Clock>
    <Counter></Counter>
    <ReactJS></ReactJS>
  </StrictMode>,
)
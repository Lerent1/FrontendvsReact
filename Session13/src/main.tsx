import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Exercises01 from './components/PTIT_CNTT4_IT104_Session12_Bai01/Exercises01.tsx'
import Exercises02 from './components/PTIT_CNTT4_IT104_Session12_Bai02/Exercise02.tsx'
import Exercises03 from './components/PTIT_CNTT4_IT104_Session12_Bai03/Exercise03.tsx'
import Parent_Comp from './components/PTIT_CNTT4_IT104_Session12_Bai04/Parent_Comp.tsx'
import Parent from './components/PTIT_CNTT4_IT104_Session12_Bai05/Parent.tsx'
import ListPost from './components/PTIT_CNTT4_IT104_Session12_Bai06/ListPost.tsx'
import Color from './components/PTIT_CNTT4_IT104_Session12_Bai07/Color.tsx'
import Todolist from './components/PTIT_CNTT4_IT104_Session12_Bai08/Todolist.tsx'
import UpdateState from './components/PTIT_CNTT4_IT104_Session12_Bai09/UpdateState.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Exercises01></Exercises01>
    <Exercises02></Exercises02>
    <Exercises03></Exercises03>
    <Parent_Comp></Parent_Comp>
    <Parent></Parent>
    <ListPost></ListPost>
    <Color></Color>
    <Todolist></Todolist>
    <UpdateState></UpdateState>
  </StrictMode>,
)

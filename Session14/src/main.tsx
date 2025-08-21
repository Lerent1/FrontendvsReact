import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Product from './components/PTIT_CNTT4_IT104_Session14_Bai05/Product.tsx'
import Gender from './components/PTIT_CNTT4_IT104_Session14_Bai06/Gender.tsx'
import Register from './components/PTIT_CNTT4_IT104_Session14_Bai07/Register.tsx'
import Exercise01 from './components/PTIT_CNTT4_IT104_Session14_Bai01/Exersice01.tsx'
import Notification from './components/PTIT_CNTT4_IT104_Session14_Bai02/Notification.tsx'
import ComponentReact from './components/PTIT_CNTT4_IT104_Session14_Bai03/ComponentReact.tsx'
import Slogan from './components/PTIT_CNTT4_IT104_Session14_Bai04/Slogan.tsx'
import Login from './components/PTIT_CNTT4_IT104_Session14_Bai08/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Exercise01></Exercise01>
    <Notification></Notification>
    <ComponentReact></ComponentReact>
    <Slogan></Slogan>
    <Product></Product>
    <Gender></Gender>
    <Register></Register>
    <Login></Login>
  </StrictMode>,
)

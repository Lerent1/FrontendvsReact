import { useEffect, useState } from "react"
import axios from "axios";
import List from "./PTIT_CNTT4_IT104_Session30/List";
interface User{
  id:number,
  name:string,
  email:string,
  age:number
}
export default function App() {
  
  return (
    <div>
      <List></List>
    </div>
  )
}
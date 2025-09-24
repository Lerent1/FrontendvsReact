import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { getAllUser } from './store/slice/userSlice';
import TaskManage from './components/TaskManage';

function App() {

  getAllUser();
  return (
    <>
      <TaskManage></TaskManage>
    </>
  )
}

export default App

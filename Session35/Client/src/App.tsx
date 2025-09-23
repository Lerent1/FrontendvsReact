import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './components/Counter'
import RandomList from './components/RandomList'
import ChangeColor from './components/ChangeColor'
import Background from './components/Background'
import Menu from './components/Menu'
import Translate from './components/Translate'
import Page from './components/Page'
import Account from './components/Account'

function App() {

  return (
    <>
      <Counter></Counter>
      <RandomList></RandomList>
      <ChangeColor></ChangeColor>
      <Background></Background>
      <Menu></Menu>
      <Translate></Translate>
      <Page></Page>
      <Account></Account>
    </>
  )
}

export default App

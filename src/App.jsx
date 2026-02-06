import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import News from './pages/News'
import Button from './components/Button'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Navbar className={'sticky top-0 z-20'}/>
      <Button className={'sticky top-14 z-10 bg-base-100 p-4 py-8'}/>
      <News/>
      <Footer/>
    </>
  )
}

export default App

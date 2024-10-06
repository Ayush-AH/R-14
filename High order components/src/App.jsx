import React from 'react'
import Wrapper from './Utils/Wrapper'
import Nav from './Components/Nav'
import Section from './Components/Section'
import Footer from './Components/Footer'

function App() {
  return (
    <Wrapper nav={<Nav/>} section={<Section/>} footer={<Footer/>} />
  )
}

export default App
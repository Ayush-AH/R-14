import React from 'react'
import Navbar from './Components/Navbar'
import Routing from './Utils/Routing'

function App() {
  return (
    <div className='w-full h-screen relative'>
    <Navbar />
    <Routing />
    </div>
  )
}

export default App
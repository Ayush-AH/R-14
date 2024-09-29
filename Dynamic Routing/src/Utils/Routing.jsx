import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import ProductsPanel from '../Components/ProductsPanel'
import RightPanel from '../Components/RightPanel'

function Routing() {
  return (
    <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<ProductsPanel/>} >
           <Route path='/product/:category' element={<RightPanel/>} />
        </Route>
    </Routes>
  )
}

export default Routing
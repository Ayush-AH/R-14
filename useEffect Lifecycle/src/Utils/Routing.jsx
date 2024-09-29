import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Product from '../Components/Product'


function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
    </Routes>
  )
}

export default Routing
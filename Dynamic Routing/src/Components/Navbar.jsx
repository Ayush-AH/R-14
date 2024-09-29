import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-[10vh] p-12 py-4 text-white flex gap-[30%] items-end'>
        <h1 className='text-2xl font-semibold'>Shopify</h1>
       <div className='flex gap-40'>
       <NavLink to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/product" >Product</NavLink>
       </div>
    </div>
  )
}

export default Navbar
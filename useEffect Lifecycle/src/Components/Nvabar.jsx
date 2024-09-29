import React from 'react'
import { NavLink } from 'react-router-dom'

function Nvabar() {
  return (
    <div className='w-full h-[10vh] flex justify-center items-center gap-10 text-xl font-semibold'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
    </div>
  )
}

export default Nvabar
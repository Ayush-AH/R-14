import React from 'react'
import { NavLink } from 'react-router-dom'

function LeftPanel() {
  return (
    <div className='w-[25%] h-full p-12 py-4 text-white border-r border-r-zinc-200/20'>
        <h1 className='text-lg'>Categories</h1>
        <NavLink to="/product/men's clothing" className='text-sm mt-4 block text-zinc-200 capitalize'>men's clothing</NavLink>
        <NavLink to="/product/women's clothing" className='text-sm mt-4 block text-zinc-200 capitalize'>women's clothing</NavLink>
        <NavLink to="/product/electronics" className='text-sm mt-4 block text-zinc-200 capitalize'>electronics</NavLink>
        <NavLink to="/product/jewelery" className='text-sm mt-4 block text-zinc-200 capitalize'>jewelery</NavLink>
    </div>
  )
}

export default LeftPanel
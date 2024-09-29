import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-[10vh] flex justify-center  gap-20 items-center'>
        <NavLink style={(e)=>{
            return {
                color: e.isActive? "black" : ""
            }
        }} className="text-xl font-semibold text-zinc-500" to="/">Home</NavLink>
        <NavLink style={(e)=>{
            return {
                color: e.isActive? "black" : ""
            }
        }} className="text-xl font-semibold text-zinc-500" to="/user">User</NavLink>
        <NavLink style={(e)=>{
            return {
                color: e.isActive? "black" : ""
            }
        }} className="text-xl font-semibold text-zinc-500" to="/about">About</NavLink>
    </div>
  )
}

export default Navbar
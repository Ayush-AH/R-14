import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full absolute top-0 left-0 p-8 flex justify-center gap-40'>
      <NavLink style={(e) => {
        return {
          color: e.isActive ? "white" : ""
        }
      }} to="/" className="text-xl text-white/50 font-bold" >Home</NavLink>
      
      <NavLink style={(e) => {
        return {
          color: e.isActive ? "white" : ""
        }
      }} to="/about" className="text-xl text-white/50 font-bold" >About</NavLink>

      <NavLink style={(e) => {
        return {
          color: e.isActive ? "white" : ""
        }
      }} to="/contact" className="text-xl text-white/50 font-bold" >Contact</NavLink>

      <NavLink to="/faq" className={(e) => {
        return [
          e.isActive ? 'text-white text-xl font-bold' : 'text-xl text-white/50 font-bold '
        ]
      }} >FAQ</NavLink>
    </div>
  )
}

export default Navbar
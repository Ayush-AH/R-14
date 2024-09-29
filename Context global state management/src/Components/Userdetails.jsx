import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Userdetails() {
    const {name} = useParams()
    const navigator = useNavigate()
    const handleClick = ()=>{
        navigator("/user")
    }
  return (
    <div className='w-1/3 mx-auto'>
        <h1 className='text-2xl'>Hii , <span className='font-semibold capitalize'>{name}</span> 👋</h1>
        <button onClick={handleClick} className='bg-blue-600 text-white text-sm font-semibold rounded p-1 px-3 mt-3'>Go Back</button>
    </div>
  )
}

export default Userdetails
import React from 'react'

function Card({user , removeUser , index}) {
  const {name , email , image} = user
  return (
    <div className='w-52 p-2 bg-white flex flex-col items-center rounded'>
      <div className='w-16 h-16 rounded-full overflow-hidden  bg-black'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <h1 className='text-lg'>{name}</h1>
      <h4 className='text-xs font-semibold opacity-70 mt-1'>{email}</h4>
      <p className='text-xs text-center font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto culpa at illum!</p>
      <button onClick={()=>{removeUser(index)}} className='px-4 mt-4 py-1 bg-red-600 text-white font-semibold text-xs rounded'>Remove It</button>
    </div>
  )
}

export default Card
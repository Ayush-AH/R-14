import React from 'react'

function Card({data}) {
  return (
    <div className='w-52 p-2 h-fit bg-blue-300'>
        <img className='w-full h-52 object-cover' src={data.image} alt="" />
        <h1>{data.title}</h1>
        <h1>{data.price}</h1>
    </div>
  )
}

export default Card
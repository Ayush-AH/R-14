import React from 'react'

function Product({data}) {
  return (
    <div className='w-52 h-fit p-2 bg-white/15 text-white/80'>
        <img className='w-full h-40 object-cover bg-slate-500' src={data.image} alt="" />
        <h1 className='mt-2 font-semibold'>{data.title}</h1>
        <h1 className='text-xs'>{data.price}</h1>
        <button className='text-xs font-semibold p-2 py-1 rounded bg-blue-600 mt-2'>Buy Now</button>
    </div>
  )
}

export default Product
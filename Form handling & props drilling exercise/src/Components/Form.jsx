import { data } from 'autoprefixer'
import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleForm}) {
  const {register  , handleSubmit , reset} = useForm()

  return (
    <div className='flex items-center' >
      <form className='flex gap-4' action="" onSubmit={handleSubmit(data => handleForm(data ,reset))}>
        <input {...register("name")} className='px-2 py-1 outline-none rounded text-black font-semibold' type="text" placeholder='name' />
        <input {...register("email")} className='px-2 py-1 outline-none rounded text-black font-semibold' type="text" placeholder='email' />
        <input {...register("image")} className='px-2 py-1 outline-none rounded text-black font-semibold' type="text" placeholder='image' />
        <input className='text-semibold bg-blue-600 px-4 py-1 rounded text-white text-sm' type="submit" />
      </form>
    </div>
  )
}

export default Form
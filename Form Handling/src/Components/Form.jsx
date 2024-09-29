import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

function Form() {
  // form handling using useRef
  const name = useRef(null) //querySelector jesa hi kam kr ta h
  const email = useRef(null)

  const handleSubmit1 = (e) => {
    e.preventDefault()
    console.log(name.current.value, email.current.value);
  }

  // form handling using controlled components
  const [data, setData] = useState({ name: "", email: "" })
  const handleSubmit2 = (e) => {
    e.preventDefault()
    console.log(data);
  }

  // form handling using React Hook Form
  const {register , handleSubmit , reset} = useForm()
  const handleForm = handleSubmit((data)=>{
    console.log(data);
    reset()
  })



  return (
    <div>
      <h1>Form handling using useRef</h1>
      <form action="" onSubmit={handleSubmit1}>
        <input className='border border-zinc-500 m-2 p-1' ref={name} type="name" placeholder='name' />
        <input className='border border-zinc-500 m-2 p-1' ref={email} type="eamil" placeholder='email' />
        <input className='p-1 px-2 bg-blue-600 text-white rounded ' type="submit" />
      </form>

      <h1>Form handling using Controlled Components(useState)</h1>
      <form action="" onSubmit={handleSubmit2}>
        <input onChange={(e) => setData({ ...data, name: e.target.value })} className='border border-zinc-500 m-2 p-1' type="name" placeholder='name' />
        <input onChange={(e) => setData({ ...data, email: e.target.value })} className='border border-zinc-500 m-2 p-1' type="eamil" placeholder='email' />
        <input className='p-1 px-2 bg-blue-600 text-white rounded ' type="submit" />
      </form>

      <h1>Form handling using React Hook Form</h1>
      <form action="" onSubmit={handleForm}>
        <input {...register("name")} className='border border-zinc-500 m-2 p-1' type="name" placeholder='name' />
        <input {...register("email")} className='border border-zinc-500 m-2 p-1' type="eamil" placeholder='email' />
        <input className='p-1 px-2 bg-blue-600 text-white rounded ' type="submit" />
      </form>
    </div>
  )
}

export default Form
import React, { useState } from 'react'
import Form from './Components/Form'
import Cards from './Components/Cards'

function App() {

  const [users , setUsers] = useState([])

  const handleForm = (data ,reset)=>{
    setUsers([...users , data])
    reset()
  }
  const removeUser = (idx)=>{
    setUsers(()=>users.filter((user , index)=> index !== idx))
  }

  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col items-center justify-center p-20'>
      <Cards users={users} removeUser={removeUser} />
      <Form handleForm={handleForm} />
    </div>
  )
}

export default App
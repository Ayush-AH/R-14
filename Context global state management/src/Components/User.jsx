import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../Utils/Context'

function User() {
  const {users , setUsers} = useContext(UserContext)
  console.log(users);
  return (
    <div className='w-[50%] mx-auto'>
      <h1 className='text-3xl font-semibold'>Users</h1>
      {users.map((user ,idx)=>(
      <Link key={idx} to={`/user/${user.name}`} className='block p-2 bg-blue-400 w-1/3 text-white mt-2'>{user.name}</Link>
      ))}
    </div>
  )
}

export default User
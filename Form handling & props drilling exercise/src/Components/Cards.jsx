import React from 'react'
import Card from './Card'


function Cards({users , removeUser}) {
  return (
    <div className='w-full h-[40vh] overflow-auto flex flex-wrap items-center justify-center gap-10'>
        {users.map((user , idx)=>(<Card key={idx} index={idx} user={user} removeUser={removeUser} />))}
    </div>
  )
}

export default Cards
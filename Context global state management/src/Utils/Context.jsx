import React, { createContext, useState } from 'react'

export const UserContext = createContext()

function Context(props) {
    const [users , setUsers] = useState([
        {name:"ayush",email:"ayush@ayush.com"},
        {name:"tanu",email:"tanu@tanu.com"},
        {name:"sanjh",email:"sanjh@sanjh.com"},
        {name:"john",email:"john@john.com"},
    ])

  return (
    <UserContext.Provider value={{users ,setUsers}} >{props.children}</UserContext.Provider>
  )
}

export default Context
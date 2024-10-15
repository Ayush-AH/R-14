import React, { createContext, useState } from 'react'

export const userContext = createContext()

const Context = ({children}) => {
  const [user, setuser] = useState("ayush")
  return (
   <userContext.Provider value={[user,setuser]}>{children}</userContext.Provider>
  )
}

export default Context
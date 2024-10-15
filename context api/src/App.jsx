import React, { useContext } from 'react'
import { userContext } from './components/Context'

const App = () => {
  const [user,setuser] = useContext(userContext)
  return (
    <div>Hey , {user}</div>
  )
}

export default App
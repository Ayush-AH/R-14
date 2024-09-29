import React, { useState } from 'react'

const App = () => {

  const [username, setusername] = useState("")
  const [gender, setgender] = useState("other")
  const [validate, setvalidate] = useState(true)
  const [city, setcity] = useState("gwailor")
  const [file, setfile] = useState("")
  const handlesubmit =(e)=>{
    e.preventDefault()
    const data = {
      username,
      gender,
      city,
      validate
    }
    console.log(file);
    
    console.log(data);
    
  }

  return (
    <form onSubmit={handlesubmit} encType='multipart/form-data'>
      <input type="text" value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username' />
      <br />
      <input type="file"  onChange={(e)=>setfile(e.target.files[0])} /> resume
      <br />
      <input type="radio" defaultValue="other" checked={gender === "other" ? true :false} onChange={(e)=>setgender(e.target.value)}/>other
      <br />
      <input type="radio" defaultValue="male" checked={gender === "male" ? true :false} onChange={(e)=>setgender(e.target.value)}/>male
      <br />
      <input type="radio" defaultValue="female" checked={gender === "female" ? true :false} onChange={(e)=>setgender(e.target.value)}/>female
      <br />
      <select  value={city} onChange={(e)=>setcity(e.target.value)}>
        <option value="bhopal">bhopal</option>
        <option value="indore">indore</option>
        <option value="gwailor">gwailor</option>
      </select>
      <br />
      <input type="checkbox" checked={validate} onChange={(e)=>setvalidate(e.target.checked)} /> validate?
      <br />
      <input type="submit" value="submit" />
    </form>
  )
}

export default App
import React from 'react'

function Section({section , setsection}) {
  return (
    <>
    <div>{section}</div>
    <button onClick={()=> setsection("changed section")}>Change section</button>
    </>
  )
}

export default Section
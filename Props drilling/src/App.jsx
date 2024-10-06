import React , {useState} from 'react'
import Navigation from './Components/Navigation'
import Section from './Components/Section'
import Heading from './Components/Heading'

function App() {
  const [parent, setparent] = useState("parent component")
  const [nav, setnav] = useState("navigation component")
  const [section, setsection] = useState("section component")
  const [heading, setheading] = useState("heading component")
  return (
    <div>
      {/* get data in props as an {} when using self closing tag */}
      <Navigation navigation={nav} />
      <Section setsection={setsection} section={section}/>
      {/* get data in props.children as an [] when using opening closing tag */}
      <Heading>
        {heading}
      </Heading>
    </div>
  )
}

export default App
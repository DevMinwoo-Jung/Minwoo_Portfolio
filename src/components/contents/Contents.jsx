import React, { useEffect, useRef } from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'

const Contents = () => {
  const aboutOffsetTop = useRef(null)
  const skillsOffsetTop = useRef(null)
  const projectOffsetTop = useRef(null)
  const contactOffsetTop = useRef(null)

  useEffect(() => {
    console.log(aboutOffsetTop)
  }, [])
  
  return (
    <>
      <About ref={aboutOffsetTop}/>
      <Skills ref={skillsOffsetTop}/>
      <Projects ref={projectOffsetTop}/>
      <Contact ref={contactOffsetTop}/>
    </>
  )
}

export default Contents
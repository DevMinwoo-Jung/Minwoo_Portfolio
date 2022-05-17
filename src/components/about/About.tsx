import { styled } from '@mui/system';
import React, { useRef } from 'react'

const About = () => {
  const AboutStyle = styled('div')({
      width: '100%',
      height: '500px',
      border: 'pink 10px solid'
  })
  const aboutOffsetTop = useRef(null)

  return (
    <AboutStyle ref={aboutOffsetTop}>여기는 about!</AboutStyle>
  )
}

export default About